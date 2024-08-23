function GCD(a:number,b:number):number{
return a != 0 ? GCD(b % a, a) : Math.abs(b);
}

function fractionAddition(exp: string): string {
    let num=0
    let denom=1
    let i=0
    let n=exp.length
    let isNeg=false
    while(i<n){
        let curnum=""
        let curdenom=""
        if(exp.charAt(i)=='+'){
            isNeg=false
            i++
        }else if(exp.charAt(i)=='-'){
            isNeg=true
            i++
        }else{
            while(i<n&&exp.charAt(i)!='/'){
                curnum+=exp.charAt(i)
                i++
            }
            i++
            while(i<n&&exp.charAt(i)>='0'&&exp.charAt(i)<='9'){
                curdenom+=exp.charAt(i)
                i++;
            }
            let curNum=Number(curnum)
            let curDenom=Number(curdenom)
            let gcd=GCD(curNum,curDenom)
            curNum/=gcd
            curDenom/=gcd
            if(isNeg) curNum=-1*curNum
            let prod=curDenom*denom
            num=num*curDenom+curNum*denom
            denom=prod
            
            console.log(curNum , denom)
        }
    }
    let gcd=GCD(num,denom)
    num/=gcd
    denom/=gcd
    return `${num}/${denom}`
};