
//変数

var str1 = 'Hello';
var str2 = 'World!!';

var orange = 100;
var apple = 120;

var max = 100;
var num = 1;
var count = 0;

//

alert(str1 + str2);

if(orange < apple){
    alert('みかんの値段がりんごより安い');
}
else if(orange == apple){
    alert('みかんとりんごが同じ値段');
}
else{
    alert('みかんの値段がりんごより高い');
}

while(num < max){
    num = num * 2;
    count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');