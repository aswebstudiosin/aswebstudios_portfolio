const navToggle=document.querySelector('.nav-toggle');
const navLinks=document.querySelector('.nav-links');
navToggle?.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');navToggle?.setAttribute('aria-expanded','false');}));

const tabs=[...document.querySelectorAll('.pricing-tab')];
const panels=[...document.querySelectorAll('.pricing-panel')];
tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(t=>{t.classList.remove('active');t.setAttribute('aria-selected','false')});panels.forEach(p=>p.classList.remove('active'));tab.classList.add('active');tab.setAttribute('aria-selected','true');document.querySelector(`[data-panel="${tab.dataset.pricing}"]`)?.classList.add('active');}));

if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}

document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.closest('.faq-item');const open=item.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));}));

const form=document.getElementById('enquiry-form');
form?.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('enquiry-name').value.trim();const business=document.getElementById('enquiry-business').value.trim();const pkg=document.getElementById('enquiry-package').value;const message=document.getElementById('enquiry-message').value.trim();const text=`Hi Sanjeev, I am interested in a project with AS Web Studio.\n\nName: ${name}\nBusiness: ${business}\nService: ${pkg}\nRequirement: ${message||'I would like to discuss my requirement.'}`;window.open(`https://wa.me/919500479979?text=${encodeURIComponent(text)}`,'_blank','noopener');});