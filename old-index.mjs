import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);

const accKim = await stdlib.newTestAccount(startingBalance);
const accTina = await stdlib.newTestAccount(startingBalance);
const OUTCOME = ["Kim wins!", "It's a Draw!", "Tina Wins!"];

const fmt = (amt) => stdlib.formatCurrency(amt, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

const beforeKim = await getBalance(accKim);
const beforeTina = await getBalance(accTina);

const ctcKim = accKim.contract(backend);
const ctcTina = accTina.contract(backend, ctcKim.getInfo());

const player = (who) => ({
  ...stdlib.hasRandom,
  getGuess: () => {
    const guess = Math.floor(Math.random() * 10);
    console.log(`${who} guessed ${guess}`);
    return guess;
  },

  getHand: () => {
    const hand = Math.floor(Math.random() * 5);
    console.log(`${who} played hand ${hand}`);
    return hand;
  },

  seeOutcome: (outcome) => {
    console.log(`${who} saw outcome ${OUTCOME[outcome]}`);
  },
  informTimeout: () => {
    console.log(`${who} observed a timeout.`);
  },
});

await Promise.all([
  ctcAlice.p.Kim({
    // interact interface
    ...player("Kim"),
    wager: stdlib.parseCurrency(10),
    deadline: 10,
  }),
  ctcBob.p.Tina({
    // interact interface
    ...player("Tina"),
    acceptWager: (amt) => {
      console.log(`Tina accepts wager of ${fmt(amt)}`);
    },
  }),
]);

const afterKim = await getBalance(accKim);
const afterTina = await getBalance(accTina);

console.log(`Kim moved from ${beforeKim} to ${afterKim}.`);
console.log(`Tina moved from ${beforeTina} to ${afterTina}.`);
