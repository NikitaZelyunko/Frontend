function isEven(number) {
    if(number<0)
        number*=-1;

    function isEvenForPolog(number) {

        if(number==0)
            return true;
        else if(number==1)
            return false;
        else
            return isEven(number-2);
    }

    return isEvenForPolog(number)
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));