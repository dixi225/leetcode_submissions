function numTeams(rating: number[]): number {
    let n=rating.length
    let ans=0;
    for(let i=0;i<n;i++){
        let target=rating[i]
        let lesserInLeft=0
        let greaterInLeft=0
        let lesserInRight=0 
        let greaterInRight=0 
        for(let j=0;j<i;j++){
            if(rating[j]<target) lesserInLeft++
            else if(rating[j]>target) greaterInLeft++
        }
        for(let j=i+1;j<n;j++){
            if(rating[j]<target) lesserInRight++
            else if(rating[j]>target) greaterInRight++
        }
        let asc=lesserInLeft*greaterInRight
        let desc=greaterInLeft*lesserInRight
        ans+=asc+desc
    } 
    return ans
};