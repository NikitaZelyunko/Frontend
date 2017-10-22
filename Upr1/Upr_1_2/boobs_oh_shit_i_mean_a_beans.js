function countChar(str,char) {
    cntChar=0;
    for(var i=0;i<str.length;i++)
        if(str.charAt(i)==char)
            cntChar++;
    return cntChar;

}
str="bafafBBBAZ"
char="B";
console.log(
        "String : ",str," has a ",
        countChar(str,char),
        " symbol ",char
    );