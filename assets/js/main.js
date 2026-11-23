(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var lis=[].slice.call(document.querySelectorAll('.st-li')),fl=$('st-fl'),fis=fl?[].slice.call(fl.children):[],mob=$('st-m');
if(lis.length){var tx=0,ty=0,cx=0,cy=0,raf=0;function loop(){cx+=(tx-cx)*.14;cy+=(ty-cy)*.14;fl.style.transform='translate('+(cx-130).toFixed(1)+'px,'+(cy-161).toFixed(1)+'px)';raf=requestAnimationFrame(loop);}
 function show(i){fis.forEach(function(f,j){f.classList.toggle('on',j===i);});lis.forEach(function(l,j){l.classList.toggle('on',j===i);});}
 lis.forEach(function(l,i){l.setAttribute('tabindex','0');l.addEventListener('mouseenter',function(){show(i);fl.classList.add('on');if(!raf&&!rm)loop();});l.addEventListener('mouseleave',function(){fl.classList.remove('on');});
  function tap(){show(i);if(mob)mob.innerHTML=fis[i].innerHTML;}l.addEventListener('click',tap);l.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();tap();}});});
 addEventListener('mousemove',function(e){tx=e.clientX;ty=e.clientY;if(rm){cx=tx;cy=ty;fl.style.transform='translate('+(cx-130)+'px,'+(cy-161)+'px)';}},{passive:true});if(mob)mob.innerHTML=fis[0].innerHTML;}
var sv=$('sd-svg');if(sv){var sb=[].slice.call(document.querySelectorAll('input[name=sb]')),ss=[].slice.call(document.querySelectorAll('input[name=ss]')),sc=[].slice.call(document.querySelectorAll('input[name=sc]'));function v(a){var x;a.forEach(function(e){if(e.checked)x=e.value;});return x;}
 var BG=['<path d="M80 200 Q80 330 180 340 Q280 330 280 200 Z" fill="@@"/><path d="M80 200 Q180 250 280 200 L280 215 Q180 270 80 215Z" fill="#000" opacity=".12"/>','<rect x="70" y="190" width="220" height="150" rx="14" fill="@@"/><rect x="70" y="190" width="220" height="40" rx="14" fill="#000" opacity=".12"/>','<path d="M90 200 Q60 340 180 345 Q300 340 270 200 Q180 230 90 200Z" fill="@@"/><path d="M110 210 Q180 236 250 210" stroke="#000" stroke-opacity=".15" stroke-width="3" fill="none"/>'];
 function strap(t){if(t==='0')return '<path d="M96 205 C 96 20, 264 20, 264 205" fill="none" stroke="@@" stroke-width="7" stroke-linecap="round"/>';if(t==='1'){var o='';for(var i=0;i<=26;i++){var a=Math.PI*(1-i/26),x=180+92*Math.cos(a),y=205-170*Math.sin(a);o+='<ellipse cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" rx="6" ry="4" fill="none" stroke="#B8934A" stroke-width="3" transform="rotate('+(-(a*180/Math.PI)+90).toFixed(0)+' '+x.toFixed(1)+' '+y.toFixed(1)+')"/>';}return o;}
  if(t==='2')return '<path d="M96 205 C 96 10, 264 10, 264 205" fill="none" stroke="@@" stroke-width="22"/><path d="M96 205 C 96 10, 264 10, 264 205" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="22" stroke-dasharray="4 6"/>';return '<path d="M130 200 C 130 120, 230 120, 230 200" fill="none" stroke="@@" stroke-width="14" stroke-linecap="round"/>';}
 var D={'0':'Fine leather: quietly elegant and light on the shoulder.','1':'Chain: evening polish, with a little shine and swing.','2':'Wide woven: casual, comfortable and made for carrying more.','3':'Top handle: structured and ladylike, carried in the hand.'};
 function draw(){var c=v(sc),b=+v(sb),t=v(ss),dk=c==='#D9B9AE'?'#9C7A70':c;sv.innerHTML=strap(t).replace(/@@/g,dk)+BG[b].replace(/@@/g,c)+'<rect x="165" y="'+(b===1?222:226)+'" width="30" height="20" rx="4" fill="#B8934A"/><circle cx="96" cy="205" r="7" fill="none" stroke="#B8934A" stroke-width="3"/><circle cx="264" cy="205" r="7" fill="none" stroke="#B8934A" stroke-width="3"/>';$('sd-o').textContent=D[t];}
 sb.concat(ss,sc).forEach(function(e){e.addEventListener('change',draw);});draw();}
var ca=$('col-a'),cb=$('col-b');if(ca&&!rm){var sec=ca.parentElement;function col(){if(innerWidth<=1000)return;var r=sec.getBoundingClientRect(),p=(innerHeight-r.top)/(innerHeight+r.height);p=Math.max(0,Math.min(1,p));ca.style.transform='translate3d(0,'+(-p*260).toFixed(1)+'px,0)';cb.style.transform='translate3d(0,'+(p*260-260).toFixed(1)+'px,0)';}addEventListener('scroll',col,{passive:true});col();}
})();
