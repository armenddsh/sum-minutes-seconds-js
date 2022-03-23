var totalH;
var totalM;

const times = [
  "(08:15)",
  "(08:45)",
  "(08:45)"
]

function sumTimes(times) {
  let totalM = 0;
  let totalS = 0;
  let totalH = 0;

  for(let time of times) {
      let t = time.substring(1, time.length - 1);
      let tSplited = t.split(":");
      console.log(tSplited);
      const minutes = parseInt(tSplited[0], 10);
      const seconds = parseInt(tSplited[1], 10);
    
      totalM += minutes;
      totalS += seconds;
      if (totalS >= 60) {
        totalS = totalS - 60;
        totalM += 1;
      }
      if (totalM >= 60) {
        totalM = totalM - 60;
        totalH += 1;    
      }
  }
  return `${totalH} hours ${totalM} minutes ${totalS} seconds`;
}

console.log(sumTimes(times));
