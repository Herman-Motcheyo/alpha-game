
// JS only for falling game
$(document).ready(function (){

    
    var word = ['car', 'bottle','chair','computer','window','orange','grass','rain','mobile','tiger','snack','crocodile','father','house','horse'];
    var mot = ['voiture', 'bouteille','chaise','ordinateur','fenêtre','orange','herbe','pluie','mobile','tigre','serpent','crocodile','père','maison','cheval'];
    
    // generate falling word
    var time = 5;
    var s = 0;
    var pourcentage = 100
    var animTime = 0;
        function falling(timeAnim){
                pourcentage -= 5
                // live
                var vie = $('.live');
                vie.html(pourcentage+'%') ;
                vie.css('width',pourcentage+'%')
                //end  vie
                var motCorect = Math.floor(Math.random()*(2+1));
                let nbre2 = Math.floor(Math.random()*(word.length-1)) ;
                let nbre3 = Math.floor(Math.random()*(word.length-1)) ;
                let nbreAleatoire = Math.floor(Math.random()*(word.length-1)) ;
                var defMot = mot[nbreAleatoire]
                //genere the word
                var falling = document.createElement('div');
                falling.setAttribute('class','fallingWord');
                falling.style.animation = 'falling '+timeAnim+'s linear forwards';
                
                falling.innerHTML = word[nbreAleatoire];
                document.querySelector('.fnd').appendChild(falling);
                //the word to select
                document.querySelectorAll('.fnd .word').forEach((e,key)=>{
                    if(motCorect== 0)
                    {
                        
                        if(key == 0)
                        {
                            e.innerHTML = mot[nbre3]
                            e.setAttribute('data-target',mot[nbre3])
                        }
                        if(key == 2)
                        {
                            e.innerHTML = mot[nbre2]
                            e.setAttribute('data-target',mot[nbre2])
                        }
                        if(key == 1)
                        {
                            e.innerHTML = defMot
                            e.setAttribute('data-target',defMot)
                        }
                    }
                    if(motCorect== 1)
                    {
                        
                        if(key == 0)
                        {
                            e.innerHTML = mot[nbre3]
                            e.setAttribute('data-target',mot[nbre3])
                        }
                        if(key == 1)
                        {
                            e.innerHTML = mot[nbre2]
                            e.setAttribute('data-target',mot[nbre2])
                        }
                        if(key == 2)
                        {
                            e.innerHTML = defMot
                            e.setAttribute('data-target',defMot)
                        }
                    }
                    if(motCorect== 2)
                    {
                        e.innerHTML = defMot
                        if(key == 2)
                        {
                            e.innerHTML = mot[nbre3] 
                            e.setAttribute('data-target',mot[nbre3])
                        }
                        if(key == 1)
                        {
                            e.innerHTML = mot[nbre2]
                            e.setAttribute('data-target',mot[nbre2])
                        }
                        if(key == 0)
                        {
                            e.innerHTML = defMot
                            e.setAttribute('data-target',defMot)
                        }
                    }
                    //score 
                    animTime = time-(s/20)
                    
                     e.addEventListener('click',()=>{
                        var targetVal = e.getAttribute('data-target');
                         if(targetVal == defMot )
                         {
                             s+=1;
                             var score = document.querySelector('.fnd .step .leftStep');
                             score.innerHTML = s;
                             falling.setAttribute('class','hidden')
                            e.setAttribute('data-target',' ')
                         }
                    })              
                })
            
        }
        

        $('.find').on('click',(e)=>{
            e.preventDefault();
            setInterval(()=>{
                falling(animTime);
            },time*1000-(15*s))
            return false
            })
        // find words game code 

})