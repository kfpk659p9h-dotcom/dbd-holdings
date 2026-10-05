const button=document.getElementById('menu');
const nav=document.getElementById('navigation');
function closeMenu(){nav.classList.remove('open');button.setAttribute('aria-expanded','false');}
button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();button.focus();}});
document.getElementById('year').textContent=new Date().getFullYear();
