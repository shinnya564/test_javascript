
//変数

var str1 = 'Hello';
var str2 = 'World!!';

var orange = 100;
var apple = 120;

var max = 100;
var num_while = 1;
var count = 0;

var i;
var num_for = 0;

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

while(num_while < max){
    num_while = num_while * 2;
    count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


for(i = 1; i < 11; i++){
    num_for = num_for + i;
}

alert('1から10まで足し算した結果は' + num_for + 'です');

max = orange + apple
count = orange - apple

alert('足算：' + max + ',引き算:' + count);
alert('掛け算：' + orange * apple + ',割り算:' + orange / apple);
