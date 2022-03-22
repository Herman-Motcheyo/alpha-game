function reloadPage() {
    location.reload();
}

function wordSearch() {

    var wordSearch = document.getElementById("searchBox").value
    document.getElementById('searchResult').style.visibility = 'visible';

    var word = document.getElementById('word');
    var definition = document.getElementById('definition');
    var example = document.getElementById('example');
    var spell = document.getElementById('spell');
    var audio = document.getElementById('audio');

    let request = new XMLHttpRequest()
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";
    url += wordSearch;
    request.open("GET", url);
    request.send();
    request.onload = () => {
        if (request.status === 200) {
            var object = JSON.parse(request.response)
          //  alert(object[0].phonetics[0].audio)   
           // alert(word.innerHTML = object[0].word)
           word.innerHTML = object[0].word
           definition.innerHTML= object[0].meanings[1].definitions[0].definition
           example.innerHTML = object[0].meanings[1].definitions[0].example
             syno = object[0].meanings[1].definitions[0].definition.synonyms ;
             var son = '<audio id="audio-player" controls="controls" ' ;
               son = son +  'src="'+ object[0].phonetics[0].audio + '"type="audio/mpeg"> '
               audio.innerHTML = son;
               const ul = document.createElement('ul');
               ul.setAttribute('id','synonyms')

               for (let k = 0; k < object[0].meanings[0].definitions[0].synonyms.length; k++) {
                var li = document.createElement('li');  
                li.innerHTML = object[0].meanings[0].definitions[0].synonyms[k];
                li.setAttribute('style', 'display: block;');    // remove the bullets.

                console.log(object[0].meanings[0].definitions[0].synonyms[k]) 
                ul.appendChild(li);                            
               }
               spell.appendChild(ul);              
               
    
        } else {

            word.innerHTML = "error";// if link is broken, output will be page not found
        }


    }


}