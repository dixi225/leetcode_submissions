function countSeniors(details: string[]): number {
    let n=details.length
    let count=0
    for(let i=0;i<n;i++){
        let age=Number(details[i].substring(11,13))
        if(age>60) count++
    }
    return count
};