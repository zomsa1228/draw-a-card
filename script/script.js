    var deal_array = [];
    var deck_array = [];

    var card_Action_array = [];
    var card_Card_array = [];
    var card_Money_array = [];
    var card_Buy_array = [];
    var card_Trash_array = [];
    var card_Price_array =[];
    var card_array =[];

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
    var dial_se = "";
    var deck_se

    var result1 ="";
    var result2 ="";

// card_array = [card_Action_array,card_Card_array,card_Money_array,card_Buy_array,card_Trash_array,card_Price_array];
// console.log(card_Action_array);
// console.log(card_array);


    function create_deck(){
        deck_se = new Audio("./sound/se/カードをきる.mp3");
        deck_se.play();
        alert( "山札を生成しました" );
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

            eval("var card_Action" + card_num +"= 0;");
            
            //card1="card1";
            eval('card_Action'+ card_num +'="card_Action'+card_num+'";');

            eval("card_Action_array["+deck_create_loop+"]=card_Action"+card_num+";");
        
            eval("var card_Card" + card_num +"= 0;");
            eval("card_Card_array["+deck_create_loop+"]=card_Card"+card_num+";");
        
            eval("var card_Money" + card_num +"= 0;");
            eval("card_Money_array["+deck_create_loop+"]=card_Money"+card_num+";");
        
            eval("var card_Buy" + card_num +"= 0;");
            eval("card_Buy_array["+deck_create_loop+"]=card_Buy"+card_num+";");
        
            eval("var card_Trash" + card_num +"= 0;");
            eval("card_Trash_array["+deck_create_loop+"]=card_Trash"+card_num+";");
        
            eval("var card_Price" + card_num +"= 0;");
            eval("card_Price_array["+deck_create_loop+"]=card_Price"+card_num+";");

                card_num++
                deck_create_loop++
        }

        card_array = [card_Action_array,card_Card_array,card_Money_array,card_Buy_array,card_Trash_array,card_Price_array];
        console.log(card_array);

        console.log(deck_array);
        // document.getElementById("hand").innerHTML = "<h1>山札を生成しました</h1>" 
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
        alert("カードがありません")
        }else{

        //html初期化処理
        document.getElementById("hand").innerHTML = "";

    for(let i = 1; i <= hand_deal; i++){
        //hand1 生成したデータ
        //hand2 HTMLから取得したデータ

        //生成したデータ      
        hand1 = `
        <div class="col-3">
            <div class="card">
                <h5 class="card-header">`+deck_array[deal_num]+`</h5>

                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Action: </li>
                    <li class="list-group-item">Card: </li>
                    <li class="list-group-item">Money: </li>
                    <li class="list-group-item">Buy: </li>
                    <li class="list-group-item">Trash: </li>
                    <li class="list-group-item">Price: </li>
                </ul>
            </div>
      </div>`

        //hand2、すでにあるHTMLのデータを代入
        hand2 = document.getElementById("hand").innerHTML;
        
        //すでにあるデータに「すでにあるデータ+生成したデータ」を代入
        hand2 = hand2 + hand1;
        
        //hand2のデータをHTMLに書き出し
        document.getElementById("hand").innerHTML = hand2;
        
        //deck_arrayの先頭のデータを削除
        deck_array.shift();
        
        dial_se = new Audio("./sound/se/カードを扇状に開く.mp3");
        dial_se.play(); 

        }
        
        console.log(deck_array);
        console.log(hand2)
    }
}

function random(array, num) {
    var a = array;
    var l = a.length
    var n = num < l ? num : l;
    while (n-- > 0) {
      var i = Math.random() * l | 0;
      r[n] = t[i] || a[i];
      --l;
      t[i] = t[l] || a[l];
    }
    
    console.log(r);
    console.log(r[0]);
    
    // for(let i = 1; i <= 5; i++ ){
    //     console.log(rnum);
    //     console.log(r[rnum]);
    //     document.getElementById("card"+rnum).innerHTML = '<img src="./images/card'+ r[rnum] +'.png">';
    //     rnum++
    // }
    return r;
  }
  

  function csvs(){
    // CSVファイルを文字列として取得
    let srt = new XMLHttpRequest();

    srt.open("GET", 'データ.csv', false);

    try {
        srt.send(null);
    } catch (err) {
        console.log(err)
    }

    // 配列を用意
    let csletr = [];

    // 改行ごとに配列化
    let lines = srt.responseText.split(/\r\n|\n/);

    // 表示
    console.log(lines)

    // 1行ごとに処理
    var loops =0;
    for (let i = 0; i < lines.length; ++i) {
        let cells = lines[i].split(",");
        if (cells.length != 1) {
            csletr.push(cells);
            loops++
        }
    }

    // 表示
    console.log(loops);
    console.log(csletr);
    for(let i = 1; i <= lines.length; i++){
        result1 = 
        `<div class="col-3">
            <div class="card">
                <h5 class="card-header">`+csletr[card_num][0]+`</h5>

                <div class="card-body">
                    <p id="cordtext" class="card-text">`+csletr[card_num][7]+`</p>
                </div>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Action:`+csletr[card_num][1]+` </li>
                    <li class="list-group-item">Card:`+csletr[card_num][2]+` </li>
                    <li class="list-group-item">Money:`+csletr[card_num][3]+` </li>
                    <li class="list-group-item">Buy:`+csletr[card_num][4]+` </li>
                    <li class="list-group-item">Trash:`+csletr[card_num][5]+` </li>
                    <li class="list-group-item">Price:`+csletr[card_num][6]+` </li>
                </ul>
            </div>
        </div>`

        //hand2、すでにあるHTMLのデータを代入
        result2 = document.getElementById("hand").innerHTML;
        
        //すでにあるデータに「すでにあるデータ+生成したデータ」を代入
        result2 = result2 + result1;
        
        //hand2のデータをHTMLに書き出し
        document.getElementById("hand").innerHTML = result2;

        card_num++
    }
  }