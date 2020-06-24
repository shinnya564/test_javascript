
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

var alertString;

var promptStr = prompt('何か好きな文字を入力してください。');

var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

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


alertString = addString("WebCamp");

alert(alertString);

function addString(strA){
    var addStr = "Hello " + strA;
    return addStr;
}


 while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
      alert('グー・チョキ・パーのいずれかを入力して下さい');
      user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
    }
    var js_hand = getJShand();
    var judge = winLose(user_hand, js_hand);

    if (user_hand != null) {
        alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
    } else {
        alert("またチャレンジしてね")
    }

    function getJShand(){
        var js_hand_num = Math.floor( Math.random() * 3 );
        var hand;
        if(js_hand_num == 0){
            hand = "グー";
        }else if(js_hand_num == 1){
            hand = "チョキ";
        }else if(js_hand_num == 2){
            hand = "パー";
        }
        return hand;
    }

    function winLose(user, js){
        var winLoseStr;
        if(user == "グー"){
            if(js == "グー"){
                winLoseStr = "あいこ";
            }else if(js == "チョキ"){
                winLoseStr = "勝ち";
            }else if(js == "パー"){
                winLoseStr = "負け";
            }
        }else if(user == "チョキ"){
            if(js == "グー"){
                winLoseStr = "負け";
            }else if(js == "チョキ"){
                winLoseStr = "あいこ";
            }else if(js == "パー"){
                winLoseStr = "勝ち";
            }
        }else if(user == "パー"){
            if(js == "グー"){
                winLoseStr = "勝ち";
            }else if(js == "チョキ"){
                winLoseStr = "負け";
            }else if(js == "パー"){
                winLoseStr = "あいこ";
            }
        }
        return winLoseStr;
    }