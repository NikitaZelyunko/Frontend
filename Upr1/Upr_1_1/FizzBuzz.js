var result="";

for(var i=1;i<=100;i++)
{
    if(i % 3 == 0)
        result = "Fizz";

    if (i % 5 == 0)
        result += "Buzz";

    if(result == "")
        result=String(i);

    console.log(result);
    result="";
}
