$ = (a) => document.querySelector(a)

h=0
m=0
s=(new Date('December 19, 2021 10:00:00').getTime()-new Date().getTime())/1000;

cs=0

function check(t){
  return t>9 ? t.toString() : '0'+t.toString()
} 

function time(){
  document.querySelector('style').innerHTML = `
  .card:nth-child(1) svg circle:nth-child(2) {
    stroke-dashoffset: calc(440 - (440 * ${fix(h,'h')}) / 100);
    stroke: #00ff43
  }
  
  .card:nth-child(2) svg circle:nth-child(2) {
    stroke-dashoffset: calc(440 - (440 * ${fix(m,'m')}) / 100);
    stroke: #00a1ff;
  }
  
  .card:nth-child(3) svg circle:nth-child(2) {
    stroke-dashoffset: calc(440 - (440 * ${fix(cs,'s')}) / 100);
    stroke: #ff04f7;
  }`

  s--
  h = Math.floor(s/3600)
  m = Math.floor((s-(h*3600))/60)
  cs = Math.floor(s-(h*3600)-(m*60))
  $('#h').innerHTML=check(h)
  $('#m').innerHTML=check(m)
  $('#s').innerHTML=check(cs)
}


function fix(a,s){
  return s=='s' || s=='m' ? Math.floor(a*100/60) : Math.floor(a*100/24)
}

c=0

setInterval(()=>{
   if(new Date('December 18, 2021 10:00:00').getTime()==new Date().getTime()){
    s=(new Date('December 19, 2021 10:00:00').getTime()-new Date().getTime())/1000;
     setInterval(time,1000)
   }
   else{
    c++
    if(c==1){
      s=(new Date('December 18, 2021 10:00:00').getTime()-new Date().getTime())/1000
      setInterval(time,1000)
    }
   }
},1)

