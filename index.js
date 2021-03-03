// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
    if (blockNumber >= 42) { return blockNumber - 42
    }

    else {return 42 - blockNumber
}
}
function distanceFromHqInFeet(blockNumber){
return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(Start, Finish){

    if (Start >= Finish) {return (Start - Finish) * 264}
    else {return (Finish - Start) * 264}
}
function calculatesFarePrice(Start, Finish){
    if (distanceTravelledInFeet(Start, Finish) <= 400) return 0;
    if (distanceTravelledInFeet(Start,Finish)<=2000) return ((distanceTravelledInFeet(Start, Finish) - 400) * 0.02)
    if (distanceTravelledInFeet(Start, Finish)<=2499) return 25;
    if (distanceTravelledInFeet(Start, Finish)>=2500) return `cannot travel that far`
    
}
