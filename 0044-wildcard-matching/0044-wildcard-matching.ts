function helper(s:string,p:string,i:number,j:number,dp:any):boolean{
    if(dp[i][j]!=null) return dp[i][j]
    if(i==s.length){
        while(j<p.length){
            if(p.charAt(j)!='*'){
                 dp[i][j]=false
                 return false
                 }
            j++
        }
        dp[i][j]=true
        return true
    } 
    else if(j==p.length){
        dp[i][j]=false
        return false}
    else if(s.charAt(i)==p.charAt(j)||p.charAt(j)=='?') dp[i][j]=helper(s,p,i+1,j+1,dp)
    else if(p.charAt(j)=='*') dp[i][j]= helper(s,p,i+1,j+1,dp)||helper(s,p,i+1,j,dp)||helper(s,p,i,j+1,dp)
    else if(p.charAt(j)!=s.charAt(i)) dp[i][j]=false
    return dp[i][j]
}

function isMatch(s: string, p: string): boolean {
    let dp=new Array(s.length+1)
    for(let j=0;j<s.length+1;j++){
        dp[j]=(new Array(p.length+1))
    }
    return helper(s,p,0,0,dp)
    return true
};