

var badWord = [];
var goodWord = [];
var data = [];
var data2 = [];
var score = 0;
var time = 0;
function learnNewWord() {
    time = document.getElementById("number").value;
    play_letter = document.getElementById("place");
    data2 = wordSearch()
    var zone = document.getElementById("data1");
    zone.style.visibility = "hidden"
    var play = ' <div class="playletter"> <p>Enter word starting by letter </p> <input type="text" name="word" id="word" style="background-color: black;"></div>'
    play = play + '<input type="button" onclick="play()" value="Play" style="color: black;"> ';
    play_letter.innerHTML = play;
}



function checkForValue(json, value) {
    for (key in json) {
        if (typeof (json[key]) === "object") {
            return checkForValue(json[key], value);
        } else if (json[key] === value) {
            return true;
        }
    }
    return false;
}

function wordSearch() {
    var letter = document.getElementById("alpha").value;
  //  alert(letter)

    let request = new XMLHttpRequest()
    let url = "http://localhost:9090/mot/";
    url += letter;
    request.open("GET", url);
    request.send();
    request.onload = () => {
        if (request.status === 200) {
          var  data3 = JSON.parse(request.response)
            data2 = data3
        } else {
            alert("erreur de communication avec la back")
        }

    }

}

setInterval(play, time*1000);

function play() {
    var x = new Boolean("false");
    word = document.getElementById("word").value;
    data2.forEach(e => {
        if (e === word) {
            score++;
            v = true;
            goodWord.push(word);
         console.log(word +"good")
        }
        if (v === "false") {
            badWord.push(word)
            console.log(word +"bad")

        }
    });

}