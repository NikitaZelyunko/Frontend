//Первый вариант меньше итераций, больше кода и памяти
var template1="", template2="";

for(var i=0;i<4;i++)
{
    template1+="# ";
    template2+=" #";
}
template1+="\n";
template2+="\n";

chess_board="";

for(var i=0;i<8;i++)
{
  if(i%2==0)
      chess_board+=template1;
  else
      chess_board+=template2;
}
console.log("First:");
console.log(chess_board);

//Второй вариан больше итераций, меньше кода
chess_board="";
for(var i=0; i<8;i++)
{
    if(i%2==0)
        for (var j = 0; j < 4; j++)
            chess_board +="# ";
    else
        for (var j = 0; j < 4; j++)
            chess_board +=" #";

    chess_board+="\n";
}
console.log("\n\n\nSecond:");
console.log(chess_board);

//Третий способ для произвольного размера доски
chess_board="";

var a="#", b=" ";
var first="", second="";
var n=5, m=4;
if(n==Math.round(n) && m==Math.round(m)) {
    for (var i = 0; i < n; i++) {
        if (i % 2 == 0) {
            first = a;
            second = b;
        }
        else {
            first = b;
            second = a;
        }

        for (var j = 0; j < m; j++) {
            if (j % 2 == 0)
                chess_board += first;
            else
                chess_board += second;
        }

        chess_board += "\n";
    }

    console.log("\n\n\nThird:");
    console.log(chess_board);
}
else
    console.log("Размерности не целые");
