
    $(document).ready(function (){
      function prelord()
      {
        var lord = document.createElement('div');
        var text = document.createElement('div');
        text.setAttribute('class','introduce');
        lord.setAttribute('class','lord');
        text.innerHTML = 'LOARDING...'
        lord.appendChild(text);
        document.querySelector('body').appendChild(lord);
      }
      var word = ['car', 'bottle','chair','computer','window','orange','grass','rain','mobile','tiger','snack','crocodile','father','house','horse'];
        var top = document.querySelector('.scroll-to-top');
        var hide = document.querySelector('.hideHeader');
        $('.linkPopop').on('click',(e)=>{
            e.preventDefault();
            $('html, body').animate({ scrollTop: $('.select_Game').offset().top}, 'slow');


            return false
        })

        // scroll to the game zone
        // learn word zone
       $('.learns').on('click',(e)=>{
            prelord()
           e.preventDefault();
                anim('.learn',1000);
                timer($('.timer .time'))
           return false
       })
       // guess word
       $('.img').on('click',(e)=>{
        e.preventDefault();
             anim('.images',100);
             timer($('.imgs .timer .time'))
             prelord()

        return false
        })
        // images and words
       $('.wordImg').on('click',(e)=>{

        e.preventDefault();
         anim('.imagesWords',100);
         timer($('.imWord .timer .time'))
         prelord()

    return false
    })
        // pronounce zone
        $('.pro').on('click',(e)=>{
            e.preventDefault();
                 anim('.pronounce',100);
                 timer($('.pros .timer .time'))
         prelord()

          var inputTxt = document.querySelector('.txtPro');
          $('.speak').on('click',()=>{
            speak(inputTxt)
          })
            return false
            })
      //function anim
            function anim(game,speed)
            {
                $('.asides').animate({left: '-40vw'},1000);
                $('.scroll-to-top').addClass('class','hidden');
                $('.pt-120').animate({width: '100%',marginLeft:'0'},1000).queue(function()
                {
                    $('html, body').animate({ scrollTop: $(game).offset().top}, speed);

                })
                top.setAttribute('class','hidden')
            }
          // find zone
          $('.find').on('click',(e)=>{
            e.preventDefault();
                 anim('.finder',100);
                 timer($('.fnd .timer .time'));
                 prelord()
            return false
            })
            // listen word
            $('.lists').on('click',(e)=>{
              e.preventDefault();
                anim('.listen',100);
                listen()
                prelord()
              return false
              })
               // true or false
            $('.trueFF').on('click',(e)=>{
              e.preventDefault();
                anim('.trueF',100);
                prelord()
              return false
              })
            // function timer
            function timer(afficheur)
            {
                var n =0
                setInterval(()=>{
                    n+=1;
                afficheur.html(n)

                },1000)
            }
            // this the speaking code source  do not modifie anyting if not sure
           
            // hide header
            hide.addEventListener('click',function(){
                document.querySelector('.asides').classList.toggle('hidden')
                $('.asides').animate({left: '0'},1000);

            })

// generate  word to listen
function listen()
{
var i = 0;
  setInterval(()=>
  {
    var listen = document.querySelector('.txtListen');
    listen.setAttribute('value',word[i]);
    document.querySelector('.listenedWord').innerHTML = word[i];
    var inputTxt = document.querySelector('.txtListen');
    speak(inputTxt)
    i+= 1;
  },5000);
}
// add playeur
var n = 1;

function createPlayeur(n)
{
  var label = document.createElement('label');
  var input = document.createElement('input');
  var name = input.setAttribute('name','playeur'+n+'');
  label.setAttribute('for',name);
  input.setAttribute('placeholder','Playeur'+n+' pseudo')
  document.querySelector('.allPlayeur').appendChild(input);
  document.querySelector('.allPlayeur').appendChild(label);
}
$('.icone_add').on('click',function(){
  if(n<=4)
  {
    createPlayeur(n)
    n +=1;
  }
  else
  {
    var total = document.createElement('p');
    total.setAttribute('class','totalParagraphe');
    total.innerHTML = 'You could not be most than 4 in this party';
    document.querySelector('.playeur').appendChild(total)
  }
})
var mode = 'Single mode';
document.querySelector('.playeurName').innerHTML = mode;
// create multi party
$('.createParty').on('click',function(){
  mode = 'Multy mode'
  document.querySelector('.playeurName').innerHTML = mode;
  //dashboard()
  var target = '#dashMultipleModal';
  if(mode  == 'Multy mode')
  {
    var dashed = document.querySelector('.dashed');
    dashed.setAttribute('data-target',target)
  }
})

// next et previews
var n = 0;
var step = document.querySelectorAll('.leftStep');
const next = function(e)
{
  n+=1;
  step.forEach(x=>{
    x.innerHTML = n
  });
  
}
const prev = function(e)
{
  n-=1;
  step.forEach(x=>{
    x.innerHTML = n
  });
  
}
document.querySelectorAll('.next').forEach(a=>{
  a.addEventListener('click',next);
  
})
document.querySelectorAll('.prev').forEach(a=>{
  a.addEventListener('click',prev);
  
})
// dasboard


// synthese vocale
var synth = window.speechSynthesis;

var voiceSelect = document.querySelector('select');

var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('.pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('.rate-value');
var option = document.createElement('option');

var voices = [];

function populateVoiceList() {
  
  voices = synth.getVoices().sort(function (a, b) {
      const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
      if ( aname < bname ) return -1;
      else if ( aname == bname ) return 0;
      else return +1;
  });
  var selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
  voiceSelect.innerHTML = '';
  for(i = 0; i < voices.length ; i++) {
var option = document.createElement('option');

    option.textContent = voices[i].lang ;
   
    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
  voiceSelect.selectedIndex = selectedIndex;
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
var count = 0;
function speak(inputTxt){
  
    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    if (inputTxt.value !== '') {
    var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    utterThis.onend = function (event) {
      count +=1;
    

        

    }
    
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    }
    utterThis.pitch = pitch.value;
    utterThis.rate = rate.value;
    synth.speak(utterThis);
  }
}

 

pitch.onchange = function() {
  pitchValue.textContent = pitch.value;
}

rate.onchange = function() {
  rateValue.textContent = rate.value;
}


              
              
              
   })
                
           
                   

        

