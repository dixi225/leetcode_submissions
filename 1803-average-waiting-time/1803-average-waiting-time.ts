function averageWaitingTime(nums: number[][]): number {
    let curTime=0
    let waitTime=0
    let n=nums.length
    for(let i=0;i<n;i++){
        if(curTime<nums[i][0]){
          curTime=nums[i][0]+nums[i][1]
          waitTime+=nums[i][1]  
        } 
        else{
            waitTime+=curTime-nums[i][0]+nums[i][1]
            curTime+=nums[i][1]
        }
    }
    let ans=waitTime/n
    return ans
};