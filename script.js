function sendBug(){
  if(!document.getElementById('target').value.trim() || document.getElementById('bug').value==="Select Bug..."){
    alert("Isi nomor & pilih bug dulu bro!"); return;
  }
  document.getElementById('main').style.display='none';
  document.getElementById('chaos').classList.add('active');

  const music = document.getElementById('hackerMusic');
  music.volume = 1.0; music.currentTime = 0; music.play();

  const vib = setInterval(()=>{ if(navigator.vibrate) navigator.vibrate([300,100,300,100,500]); },400);

  let torch = false;
  const flash = setInterval(async()=>{ 
    try{ const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}); 
         const t=s.getVideoTracks()[0]; 
         if(t.getCapabilities().torch){ t.applyConstraints({advanced:[{torch:!torch}]}); torch=!torch; } 
    }catch(e){} 
  },180);

  setTimeout(()=>{
    clearInterval(vib); clearInterval(flash); music.pause();
    document.getElementById('chaos').innerHTML = `<h1 style="color:#00ffff;font-size:46px">SORY CUMAN PRENK</h1><h2 style="color:#0f0">SEND KE TEMEN LU YANG SUKA GRATISAN 👊</h2>`;
  },10000);
}