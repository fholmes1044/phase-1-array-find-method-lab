

function superbowlWin (array){
    let foundWin = array.find(record => record.result === "W")
    if (foundWin){
        return foundWin.year
    }
    return undefined 
}