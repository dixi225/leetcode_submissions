function canBeEqual(target: number[], arr: number[]): boolean {
    if(target.length !== arr.length) return false
    let map = new Array(1001).fill(0);
    for(let i=0; i<target.length; i++){
        map[target[i]]++;
        map[arr[i]]--;
    }
    return map.every(num => num === 0);
};