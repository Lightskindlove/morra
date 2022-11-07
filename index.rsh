"reach 0.1";

const [isHand, ZERO, ONE, TWO, THREE, FOUR, FIVE] = makeEnum(6);
const [isGuess, G0, G1, G2, G3, G4, G5, G6, G7, G8, G9, G10] = makeEnum(11);
const [isOutcome, DRAW, KIM_WINS, TINA_WINS] = makeEnum(3);

const winner = (handKIM, handTINA, guessKIM, guessTINA) => {
  const result =
    guessKIM == guessTINA
      ? 0
      : guessKIM == handKIM + handTINA
      ? 1
      : guessTINA == handKIM + handTINA
      ? 2
      : /*guesses not equal & incorrect  */ 0;

  return result;
};

assert(winner(ZERO, ZERO, G0, G0) == DRAW);
assert(winner(ZERO, FIVE, G0, G0) == DRAW);
assert(winner(ZERO, FIVE, G5, G0) == KIM_WINS);
assert(winner(ZERO, FIVE, G0, G5) == TINA_WINS);

forall(UInt, (handKim) =>
  forall(UInt, (handTina) =>
    forall(UInt, (guessKim) =>
      forall(UInt, (guessTina) =>
        assert(isOutcome(winner(handKim, handTina, guessKim, guessTina)))
      )
    )
  )
);

forall(UInt, (handKim) =>
  forall(UInt, (handTina) =>
    forall(UInt, (guess) =>
      assert(winner(handKim, handTina, guess, guess) == DRAW)
    )
  )
);

const player = {
  ...hasRandom,
  getHand: Fun([], UInt),
  getGuess: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const Kim = Participant("Kim", {
    ...player,
    wager: UInt,
    deadline: UInt,
  });

  const Tina = Participant("Tina", {
    ...player,
    acceptWager: Fun([UInt], Null),
  });
  init();

  const informTimeout = () => {
    each([Kim, Tina], () => {
      interact.informTimeout();
    });
  };

  Kim.only(() => {
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
  });
  Kim.publish(wager, deadline).pay(wager);
  commit();

  Tina.only(() => {
    interact.acceptWager(wager);
  });
  Tina.pay(wager).timeout(relativeTime(deadline), () =>
    closeTo(Kim, informTimeout)
  );

  var outcome = DRAW;
  invariant(balance() == 2 * wager && isOutcome(outcome));
  while (outcome == DRAW) {
    commit();
    Kim.only(() => {
      const _guessKim = interact.getGuess();
      const _handKim = interact.getHand();
      const [_commitHandKim, _saltHandKim] = makeCommitment(interact, _handKim);
      const [_commitGuessKim, _saltGuessKim] = makeCommitment(
        interact,
        _guessKim
      );

      const commitHandKim = declassify(_commitHandKim);
      const commitGuessKim = declassify(_commitGuessKim);
    });
    Kim.publish(commitHandKim, commitGuessKim).timeout(
      relativeTime(deadline),
      () => closeTo(Tina, informTimeout)
    );
    commit();

    unknowable(Tina, Kim(_handKim, _saltHandKim, _guessKim, _saltGuessKim));

    Tina.only(() => {
      const guessTina = declassify(interact.getGuess());
      const handTina = declassify(interact.getHand());
    });
    Tina.publish(guessTina, handTina).timeout(relativeTime(deadline), () =>
      closeTo(Kim, informTimeout)
    );
    commit();

    Kim.only(() => {
      const saltHandKim = declassify(_saltHandKim);
      const handKim = declassify(_handKim);
      const guessKim = declassify(_guessKim);
      const saltGuessKim = declassify(_saltGuessKim);
    });
    Kim.publish(handKim, saltHandKim, guessKim, saltGuessKim).timeout(
      relativeTime(deadline),
      () => closeTo(Tina, informTimeout)
    );
    checkCommitment(commitHandKim, saltHandKim, handKim);
    checkCommitment(commitGuessKim, saltGuessKim, guessKim);

    outcome = winner(handKim, handTina, guessKim, guessTina);
    continue;
  }

  const [forKim, forTina] = outcome == 1 ? [2, 0] : [0, 2];

  transfer(forKim * wager).to(Kim);
  transfer(forTina * wager).to(Tina);
  commit();

  each([Kim, Tina], () => {
    interact.seeOutcome(outcome);
  });
});
