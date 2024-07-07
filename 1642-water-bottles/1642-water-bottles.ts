function numWaterBottles(numBottles: number, numExchange: number): number {
    var res = numBottles
    var rem = numBottles;
    var exchange = 0;
    while(rem >= numExchange) {
        exchange = Math.floor(numBottles / numExchange)
        res += exchange
        rem =  (numBottles % numExchange) + exchange 
        numBottles = rem
    } 
    return res
};