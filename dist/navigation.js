/* Hash routes preserve existing deep links, local progress and the browser Back button. */
const routeGroups = [
 {name:'ภาพรวมการเรียนรู้', ids:['home'], selectors:[]},
 {name:'บทเรียน GECC',ids:['learn','lesson'],selectors:[]},
 {name:'เกี่ยวกับโครงการและมาตรฐาน',ids:['about','criteria','strategies'], selectors:['.metrics']},
 {name:'เส้นทางการเรียนรู้',ids:['journey','readiness'],selectors:[]},
 {name:'เครือข่ายและคณะทำงาน',ids:['network','team'],selectors:[]},
 {name:'คลังความรู้',ids:['library','faq'],selectors:[]},
 {name:'กำหนดการประชุม',ids:['meeting'],selectors:[]}
];
function showRoute(shouldFocus=false){
 const raw=location.hash.slice(1)||'home';
 const id=/^lesson-[0-9]+$/.test(raw)?'lesson':(raw==='lesson'||raw.startsWith('lesson-')?'learn':raw);
 if(id==='main')return;
 const selected=routeGroups.find(g=>g.ids.includes(id))||routeGroups[0];
 for(const group of routeGroups){
  for(const selector of [...group.ids.map(x=>'#'+x),...group.selectors]){
   const el=document.querySelector(selector);if(el)el.hidden=group!==selected||(group.ids.includes('learn')&&selector!=='#'+id);
  }
 }
 document.querySelector('.closing').hidden=true;
 document.querySelector('.route-bar').hidden=selected===routeGroups[0];
 document.querySelector('#route-name').textContent=selected.name;
 document.querySelector('#workspace-page').textContent=selected.name;
 document.title=selected.name+' | GECC Sisaket Learning 2570';
 document.querySelectorAll('#navigation a').forEach(a=>{
  const active=a.hash.slice(1)===id||(id==='lesson'&&a.hash==='#learn')||(['criteria','strategies'].includes(id)&&a.hash==='#about')||(id==='team'&&a.hash==='#network')||(id==='faq'&&a.hash==='#library');
  a.classList.toggle('current',active);
  if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
 });
 if(shouldFocus){
  const target=document.getElementById(id)||document.getElementById('home');
  target.setAttribute('tabindex','-1');target.focus({preventScroll:true});
  requestAnimationFrame(()=>window.scrollTo({top:Math.max(0,target.offsetTop-140),behavior:'instant'}));
 }
}
showRoute();window.addEventListener('hashchange',()=>showRoute(true));
// Sliding indicator follows the 21st/coss tabs pattern, using native controls already in this project.
window.addEventListener('DOMContentLoaded',()=>{
 const tabs=document.querySelector('.network-tabs');
 const indicator=document.createElement('span');indicator.className='tab-indicator';indicator.setAttribute('aria-hidden','true');tabs.prepend(indicator);
 const place=()=>{const active=tabs.querySelector('[aria-selected="true"]');if(active){indicator.style.width=active.offsetWidth+'px';indicator.style.transform=`translateX(${active.offsetLeft}px)`;}};
 new MutationObserver(place).observe(tabs,{subtree:true,attributes:true,attributeFilter:['aria-selected']});
 new ResizeObserver(place).observe(tabs);window.addEventListener('hashchange',place);place();
});

