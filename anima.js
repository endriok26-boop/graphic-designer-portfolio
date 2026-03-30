/* shared.js — Samuele Torino Portfolio */

// Cursor
const cur = document.getElementById('cursor');
const curR = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{ mx=e.clientX; my=e.clientY; cur.style.left=mx+'px'; cur.style.top=my+'px'; });
(function loop(){ rx+=(mx-rx)*.1; ry+=(my-ry)*.1; curR.style.left=rx+'px'; curR.style.top=ry+'px'; requestAnimationFrame(loop); })();
document.querySelectorAll('a,button,.filter-btn').forEach(el=>{
  el.addEventListener('mouseenter',()=>document.body.classList.add('cur-hover'));
  el.addEventListener('mouseleave',()=>document.body.classList.remove('cur-hover'));
});

// Navbar scroll
const nb = document.getElementById('navbar');
window.addEventListener('scroll',()=>nb.classList.toggle('scrolled',scrollY>50));

// Mobile drawer
function toggleDrawer(){ document.getElementById('nav-drawer').classList.toggle('open'); }

// Reveal
const ro = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis');}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

// Page transitions
function goTo(href){
  const ov=document.getElementById('pt');
  ov.classList.remove('out'); ov.classList.add('in');
  setTimeout(()=>window.location.href=href,480);
}
document.querySelectorAll('a[data-p]').forEach(a=>{
  a.addEventListener('click',e=>{e.preventDefault();goTo(a.dataset.p);});
});
window.addEventListener('load',()=>{
  const ov=document.getElementById('pt');
  setTimeout(()=>{ ov.classList.remove('in'); ov.classList.add('out'); },40);
});

// Active nav
(()=>{
  const p=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a,.nav-drawer a').forEach(a=>{
    if(a.getAttribute('href')===p) a.classList.add('active');
  });
})();