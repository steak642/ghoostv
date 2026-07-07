const player=document.getElementById('player');
let idx=0;
function upd(){nowPlaying.textContent=playlist[idx].title;nextPlaying.textContent=playlist[(idx+1)%playlist.length].title;}
function play(i){if(i>=playlist.length)i=0;idx=i;player.src=playlist[idx].file;upd();player.onloadeddata=()=>player.play().catch(()=>{});}
player.onended=()=>play(idx+1);
player.onerror=()=>play(idx+1);
setInterval(()=>clock.textContent=new Date().toLocaleTimeString('pt-BR'),1000);
document.getElementById('enterBtn').onclick=async()=>{
 document.getElementById('enterScreen').style.display='none';
 document.getElementById('playerContainer').classList.remove('hidden');
 player.muted=false;
 player.volume=1;
 play(0);
 if(document.documentElement.requestFullscreen){
   document.documentElement.requestFullscreen().catch(()=>{});
 }
};