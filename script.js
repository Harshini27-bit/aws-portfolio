// Custom Cursor
const cursor=document.querySelector('.cursor');
document.addEventListener('mousemove',e=>{
cursor.style.left=e.clientX+'px';
cursor.style.top=e.clientY+'px';
});


// Typewriter Effect
const text="Full Stack Developer | Web Development | IT";
let i=0;
const typeEl=document.getElementById('type');
(function type(){
if(i<text.length){typeEl.innerHTML+=text.charAt(i++);setTimeout(type,80)}
})();


// Particle Background
const canvas=document.getElementById('particles');
const ctx=canvas.getContext('2d');
let w,h;canvas.width=w=window.innerWidth;canvas.height=h=window.innerHeight;
const particles=Array.from({length:80},()=>({
x:Math.random()*w,y:Math.random()*h,
vx:(Math.random()-.5),vy:(Math.random()-.5)
}));
function animate(){
ctx.clearRect(0,0,w,h);
particles.forEach(p=>{
p.x+=p.vx;p.y+=p.vy;
if(p.x<0||p.x>w)p.vx*=-1;
if(p.y<0||p.y>h)p.vy*=-1;
ctx.fillStyle="#00e5ff";
ctx.fillRect(p.x,p.y,2,2);
});
requestAnimationFrame(animate);
}
animate();


// Scroll To Top
scrollTop.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});