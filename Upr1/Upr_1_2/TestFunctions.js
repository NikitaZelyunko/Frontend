function	wrapValue(n)	{
    console.log("Я функция при n=",n);
    var	localVariable	=	n;
    return	function()	{
        console.log("Я вложенная функция при n=",n);
        return	localVariable++;
    };
}
var	wrap1	=	wrapValue(1);
var	wrap2	=	wrapValue(2);
console.log(wrap1());
console.log(wrap1());

console.log(wrap2());
console.log(wrap2());