// Automatically generated with Reach 0.1.12 (796d7fb3)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (796d7fb3)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Kim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Kim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Kim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v361 = stdlib.protect(ctc0, interact.deadline, 'for Kim\'s interact field deadline');
  const v362 = stdlib.protect(ctc0, interact.wager, 'for Kim\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v362, v361],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:74:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v362, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v366, v367], secs: v369, time: v368, didSend: v79, from: v365 } = txn1;
      
      sim_r.txns.push({
        amt: v366,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v378 = stdlib.safeAdd(v368, v367);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v366, v367], secs: v369, time: v368, didSend: v79, from: v365 } = txn1;
  ;
  const v378 = stdlib.safeAdd(v368, v367);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v378],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v365, v366, v367, v378],
      evt_cnt: 0,
      funcNum: 2,
      lct: v368,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v554, time: v553, didSend: v300, from: v552 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v365,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v554, time: v553, didSend: v300, from: v552 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:66:29:application',
      fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:26:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:81:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Kim'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v384, time: v383, didSend: v88, from: v382 } = txn2;
    const v386 = stdlib.add(v366, v366);
    ;
    let v387 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
    let v388 = v383;
    let v395 = v386;
    
    let txn3 = txn2;
    while (await (async () => {
      const v403 = stdlib.eq(v387, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      
      return v403;})()) {
      const v410 = stdlib.safeAdd(v388, v367);
      const v414 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:89:42:application',
        fs: ['at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:17:function exp)'],
        msg: 'getGuess',
        who: 'Kim'
        });
      const v415 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:90:40:application',
        fs: ['at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:17:function exp)'],
        msg: 'getHand',
        who: 'Kim'
        });
      const v416 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:91:60:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:17:function exp)'],
        msg: 'random',
        who: 'Kim'
        });
      const v417 = stdlib.digest([ctc0, ctc0], [v416, v415]);
      const v419 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:92:62:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:17:function exp)'],
        msg: 'random',
        who: 'Kim'
        });
      const v420 = stdlib.digest([ctc0, ctc0], [v419, v414]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v365, v366, v367, v382, v395, v410, v417, v420],
        evt_cnt: 2,
        funcNum: 4,
        lct: v388,
        onlyIf: true,
        out_tys: [ctc1, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:100:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v423, v424], secs: v426, time: v425, didSend: v120, from: v422 } = txn4;
          
          ;
          const v434 = stdlib.safeAdd(v425, v367);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v410],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v365, v366, v367, v382, v395, v410],
          evt_cnt: 0,
          funcNum: 5,
          lct: v388,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v514, time: v513, didSend: v247, from: v512 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v382,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v514, time: v513, didSend: v247, from: v512 } = txn5;
        ;
        const v515 = stdlib.addressEq(v365, v512);
        const v516 = stdlib.addressEq(v382, v512);
        const v517 = v515 ? true : v516;
        stdlib.assert(v517, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:102:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Kim'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:66:29:application',
          fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:26:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:102:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Kim'
          });
        
        return;
        
        }
      else {
        const {data: [v423, v424], secs: v426, time: v425, didSend: v120, from: v422 } = txn4;
        ;
        const v427 = stdlib.addressEq(v365, v422);
        stdlib.assert(v427, {
          at: './index.rsh:100:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Kim'
          });
        const v434 = stdlib.safeAdd(v425, v367);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v434],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v365, v366, v367, v382, v395, v423, v424, v434],
            evt_cnt: 0,
            funcNum: 7,
            lct: v425,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v496, time: v495, didSend: v213, from: v494 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v365,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v496, time: v495, didSend: v213, from: v494 } = txn6;
          ;
          const v497 = stdlib.addressEq(v365, v494);
          const v498 = stdlib.addressEq(v382, v494);
          const v499 = v497 ? true : v498;
          stdlib.assert(v499, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:113:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Kim'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:66:29:application',
            fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:26:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:113:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Kim'
            });
          
          return;
          
          }
        else {
          const {data: [v441, v442], secs: v444, time: v443, didSend: v132, from: v440 } = txn5;
          ;
          const v445 = stdlib.addressEq(v382, v440);
          stdlib.assert(v445, {
            at: './index.rsh:112:10:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Kim'
            });
          const v452 = stdlib.safeAdd(v443, v367);
          const txn6 = await (ctc.sendrecv({
            args: [v365, v366, v367, v382, v395, v423, v424, v441, v442, v452, v415, v416, v414, v419],
            evt_cnt: 4,
            funcNum: 8,
            lct: v443,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:123:9:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v457, v458, v459, v460], secs: v462, time: v461, didSend: v144, from: v456 } = txn6;
              
              ;
              const v468 = stdlib.eq(v459, v441);
              let v469;
              if (v468) {
                v469 = stdlib.checkedBigNumberify('./index.rsh:10:9:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v470 = stdlib.safeAdd(v457, v442);
                const v471 = stdlib.eq(v459, v470);
                const v474 = stdlib.eq(v441, v470);
                const v475 = v474 ? stdlib.checkedBigNumberify('./index.rsh:14:9:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:15:45:decimal', stdlib.UInt_max, '0');
                const v472 = v471 ? stdlib.checkedBigNumberify('./index.rsh:12:9:decimal', stdlib.UInt_max, '1') : v475;
                v469 = v472;
                }
              const cv387 = v469;
              const cv388 = v461;
              const cv395 = v395;
              
              await (async () => {
                const v387 = cv387;
                const v388 = cv388;
                const v395 = cv395;
                
                if (await (async () => {
                  const v403 = stdlib.eq(v387, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  
                  return v403;})()) {
                  const v410 = stdlib.safeAdd(v388, v367);
                  sim_r.isHalt = false;
                  }
                else {
                  const v530 = stdlib.eq(v387, stdlib.checkedBigNumberify('./index.rsh:134:40:decimal', stdlib.UInt_max, '1'));
                  const v531 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                  const v532 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
                  const v533 = v530 ? v531 : v532;
                  const v534 = v533[stdlib.checkedBigNumberify('./index.rsh:134:9:array', stdlib.UInt_max, '0')];
                  const v535 = v533[stdlib.checkedBigNumberify('./index.rsh:134:9:array', stdlib.UInt_max, '1')];
                  const v536 = stdlib.safeMul(v534, v366);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v365,
                    tok: undefined /* Nothing */
                    });
                  const v541 = stdlib.safeMul(v535, v366);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v382,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v452],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v365, v366, v367, v382, v395, v423, v424, v441, v442, v452],
              evt_cnt: 0,
              funcNum: 9,
              lct: v443,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v478, time: v477, didSend: v179, from: v476 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v382,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v478, time: v477, didSend: v179, from: v476 } = txn7;
            ;
            const v479 = stdlib.addressEq(v365, v476);
            const v480 = stdlib.addressEq(v382, v476);
            const v481 = v479 ? true : v480;
            stdlib.assert(v481, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:125:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Kim'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:66:29:application',
              fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:26:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:125:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Kim'
              });
            
            return;
            
            }
          else {
            const {data: [v457, v458, v459, v460], secs: v462, time: v461, didSend: v144, from: v456 } = txn6;
            ;
            const v463 = stdlib.addressEq(v365, v456);
            stdlib.assert(v463, {
              at: './index.rsh:123:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Kim'
              });
            const v464 = stdlib.digest([ctc0, ctc0], [v458, v457]);
            const v465 = stdlib.digestEq(v423, v464);
            stdlib.assert(v465, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:127:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Kim'
              });
            const v466 = stdlib.digest([ctc0, ctc0], [v460, v459]);
            const v467 = stdlib.digestEq(v424, v466);
            stdlib.assert(v467, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:128:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Kim'
              });
            const v468 = stdlib.eq(v459, v441);
            let v469;
            if (v468) {
              v469 = stdlib.checkedBigNumberify('./index.rsh:10:9:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v470 = stdlib.safeAdd(v457, v442);
              const v471 = stdlib.eq(v459, v470);
              const v474 = stdlib.eq(v441, v470);
              const v475 = v474 ? stdlib.checkedBigNumberify('./index.rsh:14:9:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:15:45:decimal', stdlib.UInt_max, '0');
              const v472 = v471 ? stdlib.checkedBigNumberify('./index.rsh:12:9:decimal', stdlib.UInt_max, '1') : v475;
              v469 = v472;
              }
            const cv387 = v469;
            const cv388 = v461;
            const cv395 = v395;
            
            v387 = cv387;
            v388 = cv388;
            v395 = cv395;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v530 = stdlib.eq(v387, stdlib.checkedBigNumberify('./index.rsh:134:40:decimal', stdlib.UInt_max, '1'));
    const v531 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v532 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v533 = v530 ? v531 : v532;
    const v534 = v533[stdlib.checkedBigNumberify('./index.rsh:134:9:array', stdlib.UInt_max, '0')];
    const v535 = v533[stdlib.checkedBigNumberify('./index.rsh:134:9:array', stdlib.UInt_max, '1')];
    const v536 = stdlib.safeMul(v534, v366);
    ;
    const v541 = stdlib.safeMul(v535, v366);
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v387), {
      at: './index.rsh:141:24:application',
      fs: ['at ./index.rsh:140:7:application call to [unknown function] (defined at: ./index.rsh:140:24:function exp)'],
      msg: 'seeOutcome',
      who: 'Kim'
      });
    
    return;
    }
  
  
  
  };
export async function Tina(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Tina expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Tina expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v366, v367], secs: v369, time: v368, didSend: v79, from: v365 } = txn1;
  ;
  const v378 = stdlib.safeAdd(v368, v367);
  stdlib.protect(ctc1, await interact.acceptWager(v366), {
    at: './index.rsh:78:25:application',
    fs: ['at ./index.rsh:77:12:application call to [unknown function] (defined at: ./index.rsh:77:16:function exp)'],
    msg: 'acceptWager',
    who: 'Tina'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v365, v366, v367, v378],
    evt_cnt: 0,
    funcNum: 1,
    lct: v368,
    onlyIf: true,
    out_tys: [],
    pay: [v366, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v384, time: v383, didSend: v88, from: v382 } = txn2;
      
      const v386 = stdlib.add(v366, v366);
      sim_r.txns.push({
        amt: v366,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v387 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
      const v388 = v383;
      const v395 = v386;
      
      if (await (async () => {
        const v403 = stdlib.eq(v387, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        
        return v403;})()) {
        const v410 = stdlib.safeAdd(v388, v367);
        sim_r.isHalt = false;
        }
      else {
        const v530 = stdlib.eq(v387, stdlib.checkedBigNumberify('./index.rsh:134:40:decimal', stdlib.UInt_max, '1'));
        const v531 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v532 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v533 = v530 ? v531 : v532;
        const v534 = v533[stdlib.checkedBigNumberify('./index.rsh:134:9:array', stdlib.UInt_max, '0')];
        const v535 = v533[stdlib.checkedBigNumberify('./index.rsh:134:9:array', stdlib.UInt_max, '1')];
        const v536 = stdlib.safeMul(v534, v366);
        sim_r.txns.push({
          kind: 'from',
          to: v365,
          tok: undefined /* Nothing */
          });
        const v541 = stdlib.safeMul(v535, v366);
        sim_r.txns.push({
          kind: 'from',
          to: v382,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v378],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v365, v366, v367, v378],
      evt_cnt: 0,
      funcNum: 2,
      lct: v368,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v554, time: v553, didSend: v300, from: v552 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v365,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v554, time: v553, didSend: v300, from: v552 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:66:29:application',
      fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:26:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:81:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Tina'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v384, time: v383, didSend: v88, from: v382 } = txn2;
    const v386 = stdlib.add(v366, v366);
    ;
    let v387 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
    let v388 = v383;
    let v395 = v386;
    
    let txn3 = txn2;
    while (await (async () => {
      const v403 = stdlib.eq(v387, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      
      return v403;})()) {
      const v410 = stdlib.safeAdd(v388, v367);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v410],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v365, v366, v367, v382, v395, v410],
          evt_cnt: 0,
          funcNum: 5,
          lct: v388,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v514, time: v513, didSend: v247, from: v512 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v382,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v514, time: v513, didSend: v247, from: v512 } = txn5;
        ;
        const v515 = stdlib.addressEq(v365, v512);
        const v516 = stdlib.addressEq(v382, v512);
        const v517 = v515 ? true : v516;
        stdlib.assert(v517, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:102:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Tina'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:66:29:application',
          fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:26:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:102:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Tina'
          });
        
        return;
        
        }
      else {
        const {data: [v423, v424], secs: v426, time: v425, didSend: v120, from: v422 } = txn4;
        ;
        const v427 = stdlib.addressEq(v365, v422);
        stdlib.assert(v427, {
          at: './index.rsh:100:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Tina'
          });
        const v434 = stdlib.safeAdd(v425, v367);
        const v438 = stdlib.protect(ctc0, await interact.getGuess(), {
          at: './index.rsh:109:53:application',
          fs: ['at ./index.rsh:108:14:application call to [unknown function] (defined at: ./index.rsh:108:18:function exp)'],
          msg: 'getGuess',
          who: 'Tina'
          });
        const v439 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:110:51:application',
          fs: ['at ./index.rsh:108:14:application call to [unknown function] (defined at: ./index.rsh:108:18:function exp)'],
          msg: 'getHand',
          who: 'Tina'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v365, v366, v367, v382, v395, v423, v424, v434, v438, v439],
          evt_cnt: 2,
          funcNum: 6,
          lct: v425,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:112:10:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v441, v442], secs: v444, time: v443, didSend: v132, from: v440 } = txn5;
            
            ;
            const v452 = stdlib.safeAdd(v443, v367);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v434],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v365, v366, v367, v382, v395, v423, v424, v434],
            evt_cnt: 0,
            funcNum: 7,
            lct: v425,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v496, time: v495, didSend: v213, from: v494 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v365,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v496, time: v495, didSend: v213, from: v494 } = txn6;
          ;
          const v497 = stdlib.addressEq(v365, v494);
          const v498 = stdlib.addressEq(v382, v494);
          const v499 = v497 ? true : v498;
          stdlib.assert(v499, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:113:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Tina'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:66:29:application',
            fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:26:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:113:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Tina'
            });
          
          return;
          
          }
        else {
          const {data: [v441, v442], secs: v444, time: v443, didSend: v132, from: v440 } = txn5;
          ;
          const v445 = stdlib.addressEq(v382, v440);
          stdlib.assert(v445, {
            at: './index.rsh:112:10:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Tina'
            });
          const v452 = stdlib.safeAdd(v443, v367);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v452],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v365, v366, v367, v382, v395, v423, v424, v441, v442, v452],
              evt_cnt: 0,
              funcNum: 9,
              lct: v443,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v478, time: v477, didSend: v179, from: v476 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v382,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v478, time: v477, didSend: v179, from: v476 } = txn7;
            ;
            const v479 = stdlib.addressEq(v365, v476);
            const v480 = stdlib.addressEq(v382, v476);
            const v481 = v479 ? true : v480;
            stdlib.assert(v481, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:125:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Tina'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:66:29:application',
              fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:26:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:125:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Tina'
              });
            
            return;
            
            }
          else {
            const {data: [v457, v458, v459, v460], secs: v462, time: v461, didSend: v144, from: v456 } = txn6;
            ;
            const v463 = stdlib.addressEq(v365, v456);
            stdlib.assert(v463, {
              at: './index.rsh:123:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Tina'
              });
            const v464 = stdlib.digest([ctc0, ctc0], [v458, v457]);
            const v465 = stdlib.digestEq(v423, v464);
            stdlib.assert(v465, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:127:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Tina'
              });
            const v466 = stdlib.digest([ctc0, ctc0], [v460, v459]);
            const v467 = stdlib.digestEq(v424, v466);
            stdlib.assert(v467, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:128:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Tina'
              });
            const v468 = stdlib.eq(v459, v441);
            let v469;
            if (v468) {
              v469 = stdlib.checkedBigNumberify('./index.rsh:10:9:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v470 = stdlib.safeAdd(v457, v442);
              const v471 = stdlib.eq(v459, v470);
              const v474 = stdlib.eq(v441, v470);
              const v475 = v474 ? stdlib.checkedBigNumberify('./index.rsh:14:9:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:15:45:decimal', stdlib.UInt_max, '0');
              const v472 = v471 ? stdlib.checkedBigNumberify('./index.rsh:12:9:decimal', stdlib.UInt_max, '1') : v475;
              v469 = v472;
              }
            const cv387 = v469;
            const cv388 = v461;
            const cv395 = v395;
            
            v387 = cv387;
            v388 = cv388;
            v395 = cv395;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v530 = stdlib.eq(v387, stdlib.checkedBigNumberify('./index.rsh:134:40:decimal', stdlib.UInt_max, '1'));
    const v531 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v532 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v533 = v530 ? v531 : v532;
    const v534 = v533[stdlib.checkedBigNumberify('./index.rsh:134:9:array', stdlib.UInt_max, '0')];
    const v535 = v533[stdlib.checkedBigNumberify('./index.rsh:134:9:array', stdlib.UInt_max, '1')];
    const v536 = stdlib.safeMul(v534, v366);
    ;
    const v541 = stdlib.safeMul(v535, v366);
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v387), {
      at: './index.rsh:141:24:application',
      fs: ['at ./index.rsh:140:7:application call to [unknown function] (defined at: ./index.rsh:140:24:function exp)'],
      msg: 'seeOutcome',
      who: 'Tina'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAOAAEIUAUJIAcomAECqAFYMCYDAQABAQAiNQAxGEEFNypkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAolJIQcMQAF9SSQMQAEkSSEFDEAAViEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABKIFZo6wMgY0AyELWw9ENANXACAxABI0/zEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgRPSCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf8hCVs1/kk1BUlKIls1/SRbNfyBEFs1+4EYWzX6gAR/ojtSNP0WUDT8FlA0+xZQNPoWULAyBjQDIQtbDEQ0/zEAEkQ0A1dYIDT8FjT9FlABEkQ0A1d4IDT6FjT7FlABEkQ0+zT+EkEABiI1+UIAHTT9NAOBoAFbCDX4IiEKNP40+BJNIzT7NPgSTTX5NP80AyEGWzQDIQhbNANXMCA0+TIGNAMlW0IC7EghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOIbs6mwMgY0AyEJWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgM1SYEGDEAArkghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/IQZbNf4hCFs1/VcwIDX8JVs1+1dYIDX6V3ggNflJNQVJIls1+CRbNfeABEohy/w0+BZQNPcWULAyBjQDIQlbDEQ0/DEAEkQyBjT9CDX2NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQNPcWUDT2FlAoSwFXAH9nKUsBV38xZ0ghBTUBMgY1AkICnEghBDQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABMyZklywMgY0AyEMWw9ENANXACAxABI0/zEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgIwSSEKDEAA4EmBBAxAAJhIIQQ0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQZbNf4hCFs1/VcwIDX8JVs1+0k1BUlXACA1+lcgIDX5gARgXaQrNPpQNPlQsDIGNAMhDFsMRDT/MQASRDIGNP0INfg0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlAoSwFXAH9nKUsBV38hZ0ghBzUBMgY1AkIBpiEKEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ1bD0SxIrIBNAMhBluyCCOyEDQDVwAgsgezQgFJSSMMQABISCM0ARJENARJIhJMNAISEUQoZEk1AyEGWzX/gASai5F0sDIGNAMhDVsMRDT/iAGBNANXACA0/zQDIQhbMQAiMgY0/0kIQgBfSIGgjQaIAWEiNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwNP+IATEyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCALg1/zX+Nf01/DX7Nfo1+TT9IhJBAC80/jT7CDX4NPk0+hZQNPsWUDT8UDT/FlA0+BZQKEsBVwBgZ0ghBDUBMgY1AkIAdIAQAAAAAAAAAAAAAAAAAAAAAoAQAAAAAAAAAAIAAAAAAAAAADT9IxJNNfixIrIBNPgiWzT6C7III7IQNPmyB7OxIrIBNPgkWzT6C7III7IQNPyyB7NCAAAxGSEEEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v366",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v367",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v366",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v367",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v423",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v441",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v442",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v457",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v458",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v459",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v460",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v423",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v441",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v442",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v457",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v458",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v459",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v460",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001eb338038062001eb38339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611b36806200037d6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063ab53f2c614610128578063bf2c5b241461014b578063cc923b291461015e578063de73699814610171578063ebdbfdcc1461018457005b80631e93b0f1146100a357806321642639146100c75780632c10a159146100da5780637eea518c146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d5366004611621565b610197565b6100a16100e8366004611644565b6103fc565b6100a16100fb366004611644565b61058b565b34801561010c57600080fd5b506001546100b4565b6100a1610123366004611644565b610709565b34801561013457600080fd5b5061013d6108a4565b6040516100be929190611656565b6100a1610159366004611644565b610941565b6100a161016c3660046116b3565b610ad8565b6100a161017f366004611644565b610dbe565b6100a1610192366004611621565b610f19565b6101a7600760005414601c61118a565b6101c1813515806101ba57506001548235145b601d61118a565b6000808055600280546101d3906116c5565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906116c5565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b5050505050806020019051810190610264919061174e565b905061027c6040518060200160405280600081525090565b61028d8260e001514310601e61118a565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102be9291906117fa565b60405180910390a16102d23415601a61118a565b60608201516102ed906001600160a01b03163314601b61118a565b6102fb4383604001516111b0565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015285820135610100840152835161012084015260096000554360015590516103d19183910161182b565b604051602081830303815290604052600290805190602001906103f5929190611467565b5050505050565b61040c600160005414600961118a565b6104268135158061041f57506001548235145b600a61118a565b600080805560028054610438906116c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610464906116c5565b80156104b15780601f10610486576101008083540402835291602001916104b1565b820191906000526020600020905b81548152906001019060200180831161049457829003601f168201915b50505050508060200190518101906104c991906118b2565b90506104dc81606001514310600b61118a565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161050d92919061192b565b60405180910390a161052681602001513414600861118a565b61052e6114eb565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160009052514392019190915251800160208201516040015261058681611203565b505050565b61059b600160005414600d61118a565b6105b5813515806105ae57506001548235145b600e61118a565b6000808055600280546105c7906116c5565b80601f01602080910402602001604051908101604052809291908181526020018280546105f3906116c5565b80156106405780601f1061061557610100808354040283529160200191610640565b820191906000526020600020905b81548152906001019060200180831161062357829003601f168201915b505050505080602001905181019061065891906118b2565b905061066c8160600151431015600f61118a565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161069d92919061192b565b60405180910390a16106b13415600c61118a565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b506000808055600181905561070590600290611544565b5050565b610719600560005414601761118a565b6107338135158061072c57506001548235145b601861118a565b600080805560028054610745906116c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610771906116c5565b80156107be5780601f10610793576101008083540402835291602001916107be565b820191906000526020600020905b8154815290600101906020018083116107a157829003601f168201915b50505050508060200190518101906107d69190611968565b90506107ea8160a00151431015601961118a565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161081b92919061192b565b60405180910390a161082f3415601561118a565b8051610863906001600160a01b031633146108595760608201516001600160a01b0316331461085c565b60015b601661118a565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156106ee573d6000803e3d6000fd5b6000606060005460028080546108b9906116c5565b80601f01602080910402602001604051908101604052809291908181526020018280546108e5906116c5565b80156109325780601f1061090757610100808354040283529160200191610932565b820191906000526020600020905b81548152906001019060200180831161091557829003601f168201915b50505050509050915091509091565b610951600760005414602161118a565b61096b8135158061096457506001548235145b602261118a565b60008080556002805461097d906116c5565b80601f01602080910402602001604051908101604052809291908181526020018280546109a9906116c5565b80156109f65780601f106109cb576101008083540402835291602001916109f6565b820191906000526020600020905b8154815290600101906020018083116109d957829003601f168201915b5050505050806020019051810190610a0e919061174e565b9050610a228160e00151431015602361118a565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a5392919061192b565b60405180910390a1610a673415601f61118a565b8051610a9b906001600160a01b03163314610a915760608201516001600160a01b03163314610a94565b60015b602061118a565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b610ae8600960005414602861118a565b610b0281351580610afb57506001548235145b602961118a565b600080805560028054610b14906116c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610b40906116c5565b8015610b8d5780601f10610b6257610100808354040283529160200191610b8d565b820191906000526020600020905b815481529060010190602001808311610b7057829003601f168201915b5050505050806020019051810190610ba591906119fc565b9050610bc4604051806040016040528060008152602001600081525090565b610bd68261012001514310602a61118a565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c493415602461118a565b8151610c61906001600160a01b03163314602561118a565b60408051610cae91610c889190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114602661118a565b604080516080850135602080830191909152606080870135838501528351808403850181529201909252805191012060c0830151610cee9114602761118a565b60e082015160608401351415610d075760008152610d51565b610d1d83602001600001358361010001516111b0565b60208201819052606084013514610d4b5780602001518260e0015114610d44576000610d4e565b6002610d4e565b60015b81525b610d596114eb565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925283518184018051919091528051439201919091526080850151905190910152610db881611203565b50505050565b610dce600960005414602d61118a565b610de881351580610de157506001548235145b602e61118a565b600080805560028054610dfa906116c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610e26906116c5565b8015610e735780601f10610e4857610100808354040283529160200191610e73565b820191906000526020600020905b815481529060010190602001808311610e5657829003601f168201915b5050505050806020019051810190610e8b91906119fc565b9050610ea0816101200151431015602f61118a565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610ed192919061192b565b60405180910390a1610ee53415602b61118a565b8051610863906001600160a01b03163314610f0f5760608201516001600160a01b03163314610f12565b60015b602c61118a565b610f29600560005414601261118a565b610f4381351580610f3c57506001548235145b601361118a565b600080805560028054610f55906116c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610f81906116c5565b8015610fce5780601f10610fa357610100808354040283529160200191610fce565b820191906000526020600020905b815481529060010190602001808311610fb157829003601f168201915b5050505050806020019051810190610fe69190611968565b9050610ffe6040518060200160405280600081525090565b61100f8260a001514310601461118a565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a33846040516110409291906117fa565b60405180910390a16110543415601061118a565b815161106c906001600160a01b03163314601161118a565b61107a4383604001516111b0565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e084015260076000554360015590516103d19183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816107055760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826111bd8382611aa7565b91508110156111fd5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016111a7565b92915050565b61120b611581565b60208201515161131c5761122f8260200151602001518360000151604001516111b0565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610db8929190611467565b602080820180516002908190529051600090830181905260408401805191909152518201528201515160011461135657806040015161135c565b80602001515b606082018190528251805191516020909101516001600160a01b03909216916108fc9161138891611408565b6040518115909202916000818181858888f193505050501580156113b0573d6000803e3d6000fd5b508160000151606001516001600160a01b03166108fc6113e0836060015160200151856000015160200151611408565b6040518115909202916000818181858888f193505050501580156106ee573d6000803e3d6000fd5b600081158061142c5750828261141e8183611abf565b925061142a9083611ade565b145b6111fd5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016111a7565b828054611473906116c5565b90600052602060002090601f01602090048101928261149557600085556114db565b82601f106114ae57805160ff19168380011785556114db565b828001600101855582156114db579182015b828111156114db5782518255916020019190600101906114c0565b506114e79291506115f4565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161153f60405180606001604052806000815260200160008152602001600081525090565b905290565b508054611550906116c5565b6000825580601f10611560575050565b601f01602090049060005260206000209081019061157e91906115f4565b50565b6040518060800160405280600081526020016115b0604051806040016040528060008152602001600081525090565b81526020016115d2604051806040016040528060008152602001600081525090565b815260200161153f604051806040016040528060008152602001600081525090565b5b808211156114e757600081556001016115f5565b60006060828403121561161b57600080fd5b50919050565b60006060828403121561163357600080fd5b61163d8383611609565b9392505050565b60006040828403121561161b57600080fd5b82815260006020604081840152835180604085015260005b8181101561168a5785810183015185820160600152820161166e565b8181111561169c576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561161b57600080fd5b600181811c908216806116d957607f821691505b6020821081141561161b57634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561172c57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461174957600080fd5b919050565b600061010080838503121561176257600080fd5b6040519081019067ffffffffffffffff8211818310171561179357634e487b7160e01b600052604160045260246000fd5b816040526117a084611732565b815260208401516020820152604084015160408201526117c260608501611732565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526080810161163d60208301848035825260208082013590830152604090810135910152565b81516001600160a01b0316815261014081016020830151602083015260408301516040830152606083015161186b60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b6000608082840312156118c457600080fd5b6040516080810181811067ffffffffffffffff821117156118f557634e487b7160e01b600052604160045260246000fd5b60405261190183611732565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461195957600080fd5b80604085015250509392505050565b600060c0828403121561197a57600080fd5b60405160c0810181811067ffffffffffffffff821117156119ab57634e487b7160e01b600052604160045260246000fd5b6040526119b783611732565b815260208301516020820152604083015160408201526119d960608401611732565b60608201526080830151608082015260a083015160a08201528091505092915050565b60006101408284031215611a0f57600080fd5b611a176116fa565b611a2083611732565b81526020830151602082015260408301516040820152611a4260608401611732565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611aba57611aba611a91565b500190565b6000816000190483118215151615611ad957611ad9611a91565b500290565b600082611afb57634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220126f44263ab505ef6185e4b6fef86f885decf845e22256a88fc5008ed45e373564736f6c634300080c0033`,
  BytecodeLen: 7859,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:75:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:81:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:138:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:87:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:102:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:104:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:113:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:115:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:125:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Kim": Kim,
  "Tina": Tina
  };
export const _APIs = {
  };
