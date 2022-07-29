    var deal_array = [];
    var deck_array =[];
    var card_num = 1;
    var deck_create_loop = 0;
    var deal_card_num ="";
    var rnum = 0;
    var t = [];
    var r = [];
    var decknumber = 1;
    var hand_deal = 0;
    var hand1 = 1;
    var hand2 = "";
    var deal_loop_num = 1;
    var deal_num = 0;


    function create_deck(){
        var decknumber = document.getElementById("decknum").value;
        console.log(document.getElementById("decknum").value);
        //手札生成処理
        deck_array =[];
        deck_create_loop = 0;
        card_num = 1;
        for(let i = 1; i <= decknumber; i++){

            //card_num、deck_create_loopが1の場合
            //var card1 = 0;
            eval("var card" + card_num +"= 0;");

            //card1="card1";
            eval('card'+ card_num +'="card'+card_num+'";');
            
            //deck_array[1]=card1;
            eval("deck_array["+deck_create_loop+"]=card"+card_num+";");
                card_num++
                deck_create_loop++
        }

        shuffleArray(deck_array);
        console.log(deck_array);
        document.getElementById("hand").innerHTML = "<h1>山札を生成しました</h1>" 
    }

        function shuffleArray(inputArray){
            inputArray.sort(()=> Math.random() - 0.5);
        };  
    

function deal(){

        //入力した値の取得
        hand_deal = document.getElementById("hand_card").value;
        
        //表示初期化
        deal_num = 0;

    if (typeof deck_array[0] == "undefined") {
        document.getElementById("hand").innerHTML = "<h1>カードがありません</h1>";
        }else{

        //html初期化処理
        document.getElementById("hand").innerHTML = "";

    for(let i = 1; i <= hand_deal; i++){
        //hand1 生成したデータ
        //hand2 HTMLから取得したデータ

        //生成したデータ
        hand1 = '\n<div class="col-xs-12 col-sm-6 col-md-3" id="deal_'+ deal_num +'"style="width: 20em;height: 30em;background-color: aqua;border:solid #000;margin: 0.5rem; position: relative;">\n  <p style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto; width: 80%; height: 3.2rem;text-align: center;font-size:2.5em;">\n        ' + deck_array[deal_num] + '\n  </p>\n</div>\n';
        
        //hand2、すでにあるHTMLのデータを代入
        hand2 = document.getElementById("hand").innerHTML;
        
        //すでにあるデータに「すでにあるデータ+生成したデータ」を代入
        hand2 = hand2 + hand1;
        
        //hand2のデータをHTMLに書き出し
        document.getElementById("hand").innerHTML = hand2;
        
        //deck_arrayの先頭のデータを削除
        deck_array.shift();
        }

        console.log(deck_array);
        console.log(hand2)
    }
}

   

// function deal() {
//     deal_array = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10];
//         for(let i = 1; i <= 10; i++){
//             deal_card_num++
//             document.getElementById("card"+deal_card_num).innerHTML ='<img src="./images/card'+ deal_card_num +'.png">';
//             deal_array[deal_card_num-1] = "card" + deal_card_num; 
//         }
//         document.getElementById("data").innerText = deal_array;
// }

function random(array, num) {
    var a = array;
    var l = a.length;
    var n = num < l ? num : l;
    while (n-- > 0) {
      var i = Math.random() * l | 0;
      r[n] = t[i] || a[i];
      --l;
      t[i] = t[l] || a[l];
    }
    
    console.log(r);
    console.log(r[0]);
    
    for(let i = 1; i <= 5; i++ ){
        console.log(rnum);
        console.log(r[rnum]);
        document.getElementById("card"+rnum).innerHTML = '<img src="./images/card'+ r[rnum] +'.png">';
        rnum++
    }
    return r;
  }
  