// code your solution here
const record = [
    { year: "2015", result: "L"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]



function superbowlWin(record){
    let winYear = record.find(record => record.result === "W");
    if (winYear){
        return winYear.year
        
    }   else {return undefined}
}
console.log(superbowlWin(record))