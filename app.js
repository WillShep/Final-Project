$(document).ready(function(){

                                function newFact() {
                                  var myID = Math.floor(Math.random() * 1000);
                                  $.ajax({
                                    url: "http://mentalfloss.com/api/1.0/views/amazing_facts.json?id=" + myID,
                                    jsonp: false,
                                    data: { limit : 19 , display_id: 'xhr', cb: Math.random() }
                                  })
                                  .done(function(data) {
                                    $.each(data, function(key,val) {
                                      console.log(val);
                                      $('p').html(val['fact_body']);
                                    });
                                  })
                                  .fail(function(data) {
                                    alert('Fail');
                                  })
                                  .always(function(data) {
                                  });
                                }

                                $('button').on('click', function() {
                                  newFact();
                                });
 


    var secondsCounter = 0;

    var moveInterval = setInterval(function() {
        secondsCounter++;
    }, 1000);

    $('.tmn').on('mouseenter', function(e) {
        if (secondsCounter <= 8) {
            var maxX = $(window).innerWidth() - $(this).outerWidth();
            var maxY = $(window).innerHeight() - $(this).outerHeight();

            console.log(maxX, "MAX X");
            console.log(maxY, "MAX Y");

            $(this).css({
                'left': getRandomInt(0, maxX),
                'top': getRandomInt(0, maxY)
            });
        } else {
            clearInterval(moveInterval);
        }
    });

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

// The part above is what makes the buttons move around
var x = 150;
var y = 150;
var oldX = 150;
var oldY = 150;

var ctx;
var ctCanvas;
var WIDTH = 2000;
var HEIGHT = 1000;


var intervalID = 0;
var cursorX = 150;
var cursorY = 150;
var fadeRate = .05;
var showLog = true;


function init() {
    //ctx = $('#canvas')[0].getContext('2d');
    ctx = $('#canvas')[0].getContext('2d');
    HEIGHT =  window.innerHeight;
    WIDTH =  window.innerWidth;
    ctCanvas = document.getElementById("canvas");
        
    if ($.browser.msie && document.all){
        //alert("PC MODE");
        //setTimeout("initCanvasSize();",3000);
        pcMode = true;
        showLog = false;
        initCanvasSize();
    } else {
        initCanvasSize();
    }
    //ctx = document.getElementById('canvas').getContext('2d');
    //ctx.globalCompositeOperation = source-over;


    intervalId = setInterval(draw, 1);
    return intervalId;

}

function initCanvasSize(){
    // check for IEs innerHeight alternative
    if (!pcMode){
        HEIGHT =  window.innerHeight;
        WIDTH =  window.innerWidth;
    } else {
        WIDTH = document.body.clientWidth;
        HEIGHT = document.documentElement.clientHeight;
    }
    
    ctCanvas.width = WIDTH - 15;
    ctCanvas.height = HEIGHT;
    
    log(window.innerHeight);
}

function onMouseMove(evt) {
  cursorX = evt.pageX;
  cursorY = evt.pageY;
}

function line(x,y,r) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = lineColor;
    ctx.beginPath();
    ctx.moveTo(oldX,oldY);
    ctx.lineTo(x,y);
    ctx.stroke();
    
    oldX = x;
    oldY = y;
}

function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}


function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}

function fade() {
  ctx.fillStyle = "rgba(255, 255, 255, "+fadeRate+")"
  ctx.beginPath();
  ctx.rect(0,0,WIDTH,HEIGHT);
  ctx.closePath();
  ctx.fill();
}

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

$(document).mousemove(onMouseMove);

// Logging that i can turn off
function log(m){
    if (showLog){
    //  console.log(m);
    }
}
// This bottom part changed the background when you first load the page
                                                      // var random= Math.floor(Math.random() * 6);

                                                      // var color= new Array("yellow", "red", "blue", "orange", "violet", "green");
                                                      // document.body.style.backgroundColor=color[random];


   });

// if(window.location!==window.top.location){top.location.href='http://playtictactoe.org/';}
// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-56095-18','auto');ga('send','pageview');window.onerror=function(message,file,line){if(message){ga('send','event','Error',message,file&&line?('['+ file+':'+ line+']'):'',true);}
// return false;};(function(){var ui={board:document.querySelector('.board'),squares:document.querySelectorAll('.square'),restart:document.querySelector('.restart'),mute:document.querySelector('.mute'),scores:{scores:document.querySelector('.scores'),swap:document.querySelector('.swap'),player1:document.querySelector('.player1 .score'),player2:document.querySelector('.player2 .score'),ties:document.querySelector('.ties .score'),turn1:document.querySelector('.player1'),turn2:document.querySelector('.player2'),turnTies:document.querySelector('.ties')}},computerScores={player1:0,player2:0,ties:0},twoPlayerScores={player1:0,player2:0,ties:0},player1='x',player2='o',audio={},context,totalSquares=9,hasLocalStorage,muted,playing,turn=true,firstTurn=true,twoPlayer=false,delay=300,playerChance=0.75,board,win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function loadAudio(name){var xhr=new XMLHttpRequest();xhr.open('GET','/assets/audio/'+ name+'.wav',true);xhr.responseType='arraybuffer';xhr.onload=function(){context.decodeAudioData(xhr.response,function(buffer){audio[name]=buffer;},function(){});};xhr.send();}
// function playAudio(name){if(muted||!audio[name]){return;}
// var source=context.createBufferSource();source.buffer=audio[name];source.connect(context.destination);if(source.start){source.start(0);}else{source.noteOn(0);}}
// function updateMuteIcon(){var muteSoundWaves=ui.mute.querySelectorAll('path');for(var i=muteSoundWaves.length;i--;){muteSoundWaves[i].style.display=muted?'none':'';}}
// function toggleMute(){muted=!muted;if(hasLocalStorage){try{localStorage.setItem('muted',muted.toString());}catch(e){}}
// updateMuteIcon();ga('send','event','Mute',muted?'muted':'unmuted');}
// function toggleTwoPlayer(){twoPlayer=!twoPlayer;var t=ui.scores.scores.classList;if(twoPlayer){t.remove('p1');t.add('p2');firstTurn=true;}else{t.remove('p2');t.add('p1');firstTurn=false;}
// ga('send','event','Mode',twoPlayer?'players':'computer');ui.scores.player1.innerHTML=(twoPlayer?twoPlayerScores.player1:computerScores.player1);ui.scores.player2.innerHTML=(twoPlayer?twoPlayerScores.player2:computerScores.player2);ui.scores.ties.innerHTML=(twoPlayer?twoPlayerScores.ties:computerScores.ties);playing=false;start();}
// function updateBoard(player,index){ui.squares[index].querySelector('div').classList.add(player);}
// function updateTurn(){var t1=ui.scores.turn1.classList,t2=ui.scores.turn2.classList,ties=ui.scores.turnTies.classList;if(twoPlayer&&ui.restart.style.display==='none'){if(turn){t2.remove('turn');t1.add('turn');}else{t1.remove('turn');t2.add('turn');}
// ties.add('turn');}else{t1.remove('turn');t2.remove('turn');ties.remove('turn');}}
// function selectSquare(index){if(board[index]!==0||isGameOver()||(!twoPlayer&&turn)){return;}
// if(twoPlayer){turn=!turn;board[index]=turn?-1:1;updateBoard(turn?player1:player2,index);playAudio('note-'+(turn?'low':'high'));isGameOver();}else{board[index]=-1;updateBoard(player1,index);turn=true;playAudio('note-low');setTimeout(computerPlay,delay);}
// updateTurn();}
// function initSquare(index){ui.squares[index].onmousedown=function(event){event.preventDefault();selectSquare(index);};ui.squares[index].ontouchstart=function(event){event.preventDefault();updateBoard(player1,index);};ui.squares[index].ontouchend=function(event){event.preventDefault();if(audio['note-low']){for(var i=totalSquares;i--;){var sq=ui.squares[i];sq.ontouchstart=sq.onmousedown;sq.ontouchend=undefined;}}
// selectSquare(index);};}
// function start(){if(playing){return;}
// playing=true;ui.restart.style.display='none';board=[0,0,0,0,0,0,0,0,0];for(var i=totalSquares;i--;){ui.squares[i].querySelector('div').className='';}
// ui.scores.ties.classList.remove('appear');ui.scores.player1.classList.remove('appear');ui.scores.player2.classList.remove('appear');ui.board.classList.remove('blink');turn=firstTurn=!firstTurn;updateTurn();if(firstTurn&&!twoPlayer){setTimeout(computerPlay,delay);}}
// function init(){try{hasLocalStorage='localStorage'in window&&window['localStorage']!==null;}catch(e){hasLocalStorage=false;}
// window.AudioContext=window.AudioContext||window.webkitAudioContext;if(window.AudioContext){context=new AudioContext();loadAudio('note-high');loadAudio('note-low');loadAudio('game-over');loadAudio('game-over-tie');if(hasLocalStorage){try{muted=localStorage.getItem('muted')==='true';}catch(e){muted=false;}}
// updateMuteIcon();ui.mute.ontouchstart=ui.mute.onclick=function(event){event.preventDefault();toggleMute();};}else{ui.mute.style.display='none';}
// for(var i=totalSquares;i--;){initSquare(i);}
// ui.restart.ontouchstart=ui.scores.scores.ontouchstart=function(event){event.preventDefault();};ui.scores.scores.ontouchend=ui.scores.scores.onclick=function(event){event.preventDefault();toggleTwoPlayer();};ui.restart.ontouchend=ui.restart.onclick=function(event){event.preventDefault();start();};}
// function endGame(winner,sq){ui.restart.style.display='block';setTimeout(function(){var action='Game',label=(twoPlayer?'players ':'computer ');setTimeout(function(){playing=false;},delay);if(sq){for(var i=3;i--;){ui.squares[sq[i]].querySelector('div').classList.add('blink');}}
// switch(winner){case player1:ui.scores.player1.innerHTML=(twoPlayer?++twoPlayerScores.player1:++computerScores.player1);ui.scores.player1.classList.add('appear');playAudio('game-over');ga('send','event',action,label+(twoPlayer?player1:'lose'));break;case player2:ui.scores.player2.innerHTML=(twoPlayer?++twoPlayerScores.player2:++computerScores.player2);ui.scores.player2.classList.add('appear');playAudio('game-over');ga('send','event',action,label+(twoPlayer?player2:'win'));break;default:ui.scores.ties.innerHTML=(twoPlayer?++twoPlayerScores.ties:++computerScores.ties);ui.scores.ties.classList.add('appear');ui.board.classList.add('blink');playAudio('game-over-tie');ga('send','event',action,label+'tie');break;}},(turn&&!twoPlayer)?100:delay+ 100);}
// function isGameOver(){for(var i=win.length;i--;){var sq=win[i],line=board[sq[0]]+ board[sq[1]]+ board[sq[2]];if(line===3||line===-3){endGame(line===3?player2:player1,sq);return true;}}
// var count=0;for(i=totalSquares;i--;){if(board[i]!==0){count++;}}
// if(count===9){endGame();return true;}
// return false;}
// function computerPlay(){if(isGameOver()){return;}
// var i,j,k,max,chosen,firstSquare,count=0;turn=false;updateTurn();playAudio('note-high');for(i=totalSquares;i--;){if(board[i]!==0){count++;if(count===1){firstSquare=i;}}}
// if(count<2&&Math.random()>0.2){do{chosen=Math.floor(Math.random()*totalSquares);}while(chosen===firstSquare);}else{for(i=totalSquares;i--;){for(j=totalSquares;j--;){if(board[j]!==0){continue;}
// board[j]=1;if(isGameOver()){updateBoard(player2,j);return;}
// board[j]=0;}
// if(board[i]!==0){continue;}
// board[i]=1;var min=null,temp=board.concat();for(j=totalSquares;j--;){if(temp[j]!==0){continue;}
// temp[j]=-1;for(k=win.length;k--;){if(temp[win[k][0]]+ temp[win[k][1]]+ temp[win[k][2]]===-3&&Math.random()>playerChance){board[i]=0;board[j]=1;updateBoard(player2,j);isGameOver();return;}}
// var max2=0,min2=0,tempMax=temp.concat(),tempMin=temp.concat();for(k=totalSquares;k--;){if(tempMax[k]===0){tempMax[k]=1;}
// if(tempMin[k]===0){tempMin[k]=-1;}}
// for(k=win.length;k--;){if(tempMax[win[k][0]]+ tempMax[win[k][1]]+ tempMax[win[k][2]]===3){max2++;}
// if(tempMin[win[k][0]]+ tempMin[win[k][1]]+ tempMin[win[k][2]]===-3){min2++;}}
// var d=max2- min2;min=min==null?d:(min>d?d:min);temp[j]=0;}
// if(max==null||max<min){max=min;chosen=i;}
// board[i]=0;}}
// board[chosen]=1;updateBoard(player2,chosen);isGameOver();}
// init();start();}());
      var turn = "X";
   //Set up click events on each space of the tictactoe board
   $(document).on("click", ".game-space", function() {
       //Make sure spot is empty before continuing
       if ($(this).html() === "") {
           //Change inner HTML of element we just clicked on
           $(this).html(turn);

           //Change turn based on state of "turn" variable
           if (turn === "X") {
               turn = "O";
           } else {
               turn = "X";
           }
       }



   });

