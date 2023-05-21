//prob3.1
const isValidNumber=(x)=>{
    const xnumber=parseInt(x);
    if(isFinite(xnumber)&&!isNaN(x)){
        if(x!=xnumber) return false;
        return (xnumber>=1 && xnumber<=9);
    }
    else{
        return false;
    }
};

