'use strict';
const learningUnits=[
 {title:'รู้จักเกณฑ์ GECC ปี 2570',intro:'เริ่มจากเข้าใจว่ามาตรฐานศูนย์ราชการสะดวกพิจารณาอะไร ก่อนวางแผนการพัฒนาหน่วยงาน',source:'criteria-2570.pdf',sourceName:'หลักเกณฑ์ GECC ปี 2570',sections:[
  {title:'มองเกณฑ์ให้ครบ 3 ด้าน',text:'หลักเกณฑ์ประกอบด้วยด้านกายภาพ 15 ข้อ ด้านคุณภาพ 200 คะแนน และด้านผลลัพธ์ 100 คะแนน ให้เปิดเอกสารต้นฉบับควบคู่กับการอ่านเพื่อดูเงื่อนไขแต่ละข้ออย่างครบถ้วน'},
  {title:'ทำความเข้าใจระดับการรับรอง',items:['ระดับพื้นฐาน: 240–259 คะแนน','ระดับก้าวหน้า: 260–279 คะแนน','ระดับเป็นเลิศ: 280–300 คะแนน','คะแนนรวมเพียงอย่างเดียวไม่ใช่ข้อยืนยันว่าผ่านการรับรอง ต้องพิจารณาเงื่อนไขและการตรวจประเมินตามประกาศทางการด้วย']},
  {title:'นำไปใช้กับหน่วยงาน',text:'รวบรวมผู้รับผิดชอบแต่ละด้าน อ่านเกณฑ์ร่วมกัน และทำรายการประเด็นที่ยังไม่เข้าใจ เพื่อนำไปหารือกับทีมพี่เลี้ยง แยกให้ชัดระหว่างสิ่งที่หน่วยงานดำเนินการอยู่แล้วกับสิ่งที่ต้องพัฒนาเพิ่ม'}]},
 {title:'เตรียมความพร้อมด้านกายภาพ',intro:'ใช้เกณฑ์ 15 ข้อเป็นรายการตรวจพื้นที่และการบริการ โดยตรวจจากสภาพการให้บริการจริง',source:'handbook-2570.pdf',sourceName:'คู่มือเกณฑ์ศูนย์ราชการสะดวก',sections:[
  {title:'เริ่มด้วยการเดินสำรวจ',text:'เปิดรายการเกณฑ์ด้านกายภาพจากคู่มือ แล้วสำรวจจุดให้บริการจริงกับผู้รับผิดชอบ บันทึกสิ่งที่พบตามแต่ละข้อ แทนการประเมินจากความคุ้นเคยเพียงอย่างเดียว'},
  {title:'จัดรายการสิ่งที่ต้องทำ',items:['บันทึกสถานะตามเกณฑ์แต่ละข้อและระบุจุดที่ต้องปรับปรุง','รวบรวมหลักฐานจากสภาพจริง เช่น ภาพพื้นที่หรือเอกสารที่เกี่ยวข้องตามที่เกณฑ์กำหนด','กำหนดผู้รับผิดชอบและวันที่จะตรวจทานอีกครั้ง','นำประเด็นที่ตีความไม่ชัดเจนไปปรึกษาพี่เลี้ยงก่อนสรุปผล']},
  {title:'ก่อนบันทึกว่าพร้อม',text:'ตรวจว่าหลักฐานยังตรงกับพื้นที่และวิธีให้บริการปัจจุบัน รายการในบทเรียนเป็นแนวทางจัดการงาน ให้ใช้รายละเอียดทั้ง 15 ข้อในคู่มือเป็นเกณฑ์ตัดสิน'}]},
 {title:'อธิบายคุณภาพบริการให้ชัดเจน',intro:'จัดคำตอบให้เห็นวิธีทำงาน ผู้รับผิดชอบ และผลที่เกิดขึ้น โดยเชื่อมกับหลักเกณฑ์ด้านคุณภาพ',source:'criteria-2570.pdf',sourceName:'หลักเกณฑ์ GECC ปี 2570',sections:[
  {title:'อ่านคำถามก่อนเตรียมคำตอบ',text:'ด้านคุณภาพมีทั้งรายการตรวจและคำบรรยายตามเกณฑ์ อ่านคำอธิบายและเงื่อนไขให้ครบก่อนเลือกข้อมูลที่จะใช้ตอบ ไม่ใช้คำตอบเดียวกันแทนทุกข้อ'},
  {title:'เรียบเรียงจากงานที่ทำจริง',items:['ระบุประเด็นหรือความต้องการของผู้รับบริการที่เกี่ยวข้อง','อธิบายวิธีดำเนินงานและผู้รับผิดชอบให้ตรวจสอบได้','เชื่อมคำอธิบายกับหลักฐานที่ตรงประเด็น','ทบทวนคำตอบกับพี่เลี้ยงและบันทึกข้อเสนอแนะสำหรับปรับปรุง']},
  {title:'หลีกเลี่ยงการกล่าวเกินหลักฐาน',text:'หากยังไม่มีข้อมูลสนับสนุน ให้ระบุสิ่งที่ต้องเก็บเพิ่ม ไม่เติมตัวเลขหรืออ้างผลลัพธ์ที่หน่วยงานยังไม่ได้ตรวจสอบ คำตอบที่ชัดและตรวจสอบได้ช่วยให้การทบทวนร่วมกับพี่เลี้ยงมีประสิทธิภาพ'}]},
 {title:'ใช้ผลสำรวจและผลลัพธ์อย่างถูกต้อง',intro:'เตรียมข้อมูลผู้รับบริการให้เห็นทั้งสิ่งที่ทำได้ดีและสิ่งที่ควรพัฒนา ตามแผนการดำเนินงานของโครงการ',source:'handbook-2570.pdf',sourceName:'คู่มือเกณฑ์ศูนย์ราชการสะดวก',sections:[
  {title:'แยกแบบสำรวจตามวัตถุประสงค์',text:'แผนโครงการระบุแบบสำรวจความพึงพอใจ ความต้องการ และความเชื่อมั่น ควรตรวจรูปแบบ กลุ่มผู้ตอบ และวิธีใช้กับทีมพี่เลี้ยงก่อนเริ่มเก็บข้อมูล'},
  {title:'เก็บข้อมูลให้ตรวจสอบย้อนกลับได้',items:['ระบุช่วงเวลาและวิธีเก็บข้อมูลในรายงาน','ตรวจความครบถ้วนของคำตอบก่อนสรุปผล','ใช้ข้อมูลที่รวบรวมได้จริงและระบุข้อจำกัดของข้อมูล','สรุปประเด็นที่จะนำไปพัฒนาการบริการ ไม่รายงานเพียงตัวเลข']},
  {title:'เชื่อมข้อมูลกับเกณฑ์ด้านผลลัพธ์',text:'ด้านผลลัพธ์มีคะแนนรวม 100 คะแนน รายละเอียดและวิธีพิจารณาต้องอ้างอิงคู่มือ GECC ปี 2570 การอ่านบทเรียนนี้ไม่ใช่การให้คะแนนผลการดำเนินงานของหน่วยงาน'}]},
 {title:'จัดเอกสารและหลักฐานให้พร้อมตรวจ',intro:'ทำให้ทีมงานและพี่เลี้ยงค้นเจอข้อมูลที่ใช้ตอบเกณฑ์ได้ง่าย ลดการส่งเอกสารซ้ำหรือผิดฉบับ',source:'readiness-2570.pdf',sourceName:'เงื่อนไขและแบบประเมินความพร้อม',sections:[
  {title:'ทำทะเบียนหลักฐาน',text:'จัดรายการที่เชื่อมเลขข้อเกณฑ์ คำตอบ และชื่อไฟล์หลักฐาน แนวทางนี้ช่วยจัดระเบียบงานภายใน ไม่ใช่แบบฟอร์มบังคับเพิ่มเติมจากหลักเกณฑ์'},
  {title:'ตรวจเอกสารก่อนส่งให้พี่เลี้ยง',items:['ใช้ชื่อไฟล์ที่สื่อถึงเกณฑ์หรือเรื่องที่เกี่ยวข้อง','ตรวจว่าไฟล์เปิดอ่านได้และข้อความหรือภาพอ่านชัดเจน','ตรวจวันที่และเลือกฉบับที่ใช้จริงในปัจจุบัน','ตรวจสิทธิ์การเปิดลิงก์ของผู้ตรวจและปกป้องข้อมูลส่วนบุคคลที่ไม่จำเป็น','บันทึกว่าเอกสารใดต้องแก้ไข ใครรับผิดชอบ และจะส่งทบทวนเมื่อใด']},
  {title:'ใช้ระบบประเมินอย่างเข้าใจข้อจำกัด',text:'GEN1 ที่เชื่อมในเว็บไซต์เป็นระบบสาธิต ข้อมูลและไฟล์เก็บอยู่ในเบราว์เซอร์ของเครื่องนั้น ยังไม่ส่งถึงทีมพี่เลี้ยงผ่านฐานข้อมูลกลาง การแนบไฟล์ในระบบสาธิตจึงไม่ใช่การยื่นสมัครทางการ'}]},
 {title:'ทบทวนก่อนส่งใบสมัคร',intro:'ตรวจความครบถ้วนร่วมกับทีมพี่เลี้ยง และยืนยันช่องทางกับประกาศทางการก่อนส่งข้อมูล',source:'timeline-updated.pdf',sourceName:'แผนดำเนินงาน SISAKET GECC',sections:[
  {title:'เชื่อมการเรียนรู้กับแผน 6 สัปดาห์',text:'แผนโครงการเริ่มจาก Kick Off พัฒนาและทบทวนร่วมกับ Mentor แลกเปลี่ยนความก้าวหน้า สรุปผลสำรวจ แล้วตรวจทานแบบฟอร์มก่อนส่งเอกสาร'},
  {title:'ตรวจรอบสุดท้าย',items:['ให้ผู้รับผิดชอบตรวจคำตอบและหลักฐานของตนเอง','ให้ทีมพี่เลี้ยงทบทวนและเห็นชอบแบบฟอร์มตามแผนโครงการ','ตรวจชื่อหน่วยงาน ข้อมูลติดต่อ และความครบถ้วนของเอกสาร','ตรวจช่องทางและกำหนดส่งตามประกาศรับสมัครล่าสุด','เก็บสำเนาเอกสารที่ส่งและหลักฐานยืนยันการส่ง']},
  {title:'กำหนดการที่อ้างอิงในเว็บไซต์',text:'เอกสารที่ได้รับระบุเปิดรับสมัคร 16 พฤศจิกายน–25 ธันวาคม 2569 สำหรับปี 2570 โปรดใช้ประกาศทางการเป็นหลัก การกดอ่านจบหรือบันทึกรายการในเว็บไซต์นี้ไม่ใช่การสมัครรับรอง'}]}
];
const learningKey='gecc-learning-2570-v1';let learned=[];let learningStorageError=false;
try{const saved=JSON.parse(localStorage.getItem(learningKey)||'[]');if(Array.isArray(saved))learned=[...new Set(saved.filter(x=>Number.isInteger(x)&&x>=0&&x<learningUnits.length))];}catch{learningStorageError=true;}
function refreshLearning(){
 document.getElementById('learning-done').textContent=learned.length;
 const meter=document.querySelector('.learning-meter');meter.setAttribute('aria-valuenow',learned.length);meter.querySelector('span').style.width=(learned.length/6*100)+'%';
 const next=learningUnits.findIndex((_,i)=>!learned.includes(i));
 document.getElementById('learning-state').textContent=next<0?'ทบทวนครบทั้ง 6 บทเรียนแล้ว':`บทถัดไป: ${learningUnits[next].title}`;
 const cont=document.getElementById('continue-learning');cont.href=next<0?'#learn':'#lesson-'+next;cont.innerHTML=(next<0?'เลือกทบทวนอีกครั้ง':learned.length?'เรียนรู้ต่อ':'เริ่มเรียนรู้')+icon('arrow');
 document.getElementById('learning-catalog').innerHTML=learningUnits.map((u,i)=>`<a class="lesson-card ${learned.includes(i)?'done':''}" href="#lesson-${i}"><span class="lesson-index">${String(i+1).padStart(2,'0')}</span><div><h3>${u.title}</h3><p>${u.intro}</p><small>${learned.includes(i)?'อ่านแล้ว · ทบทวนอีกครั้ง':'เปิดบทเรียน'} ${icon('arrow')}</small></div></a>`).join('');
 document.getElementById('learning-storage-status').textContent=learningStorageError?'เบราว์เซอร์ไม่อนุญาตให้บันทึกความคืบหน้า คุณยังอ่านบทเรียนได้ตามปกติ':'';
}
function renderLesson(){
 const match=location.hash.match(/^#lesson-(\d+)$/);if(!match)return;
 const i=Number(match[1]);const reader=document.getElementById('lesson-reader');
 if(!learningUnits[i]){reader.innerHTML='<h1>ไม่พบบทเรียนนี้</h1><a class="button button-gold" href="#learn">กลับไปเลือกบทเรียน</a>';return;}
 const u=learningUnits[i];
 reader.innerHTML=`<div class="lesson-shell"><article class="lesson-article"><a class="lesson-back" href="#learn">กลับไปบทเรียนทั้งหมด</a><h1>${u.title}</h1><p class="lesson-intro">${u.intro}</p>${u.sections.map(s=>`<h2>${s.title}</h2>${s.text?`<p>${s.text}</p>`:`<ul>${s.items.map(t=>`<li>${t}</li>`).join('')}</ul>`}`).join('')}<div class="lesson-pagination">${i?`<a href="#lesson-${i-1}">บทก่อนหน้า</a>`:'<a href="#learn">ดูทุกบทเรียน</a>'}${i<5?`<a href="#lesson-${i+1}">บทถัดไป ${icon('arrow')}</a>`:'<a href="#readiness">ทบทวนความพร้อม '+icon('arrow')+'</a>'}</div></article><aside class="lesson-tools"><h2>อ่านควบคู่กับต้นฉบับ</h2><p>ใช้รายละเอียดในเอกสารทางการเป็นหลักในการดำเนินงาน</p><a href="assets/${u.source}" target="_blank" rel="noopener">${u.sourceName} ${icon('arrow')}</a><a href="#library">ค้นเอกสารเพิ่มเติม ${icon('arrow')}</a><button type="button" id="mark-lesson" data-lesson="${i}" aria-pressed="${learned.includes(i)}">${learned.includes(i)?'อ่านแล้ว · ยกเลิกเครื่องหมาย':'บันทึกว่าอ่านแล้ว'}</button><small>${learningStorageError?'ไม่สามารถบันทึกข้ามการเปิดหน้าได้ในเบราว์เซอร์นี้':'บันทึกเฉพาะเบราว์เซอร์นี้ ไม่ใช่ผลสอบหรือผลรับรองมาตรฐาน'}</small></aside></div>`;
}
document.getElementById('lesson-reader').addEventListener('click',e=>{const b=e.target.closest('#mark-lesson');if(!b)return;const i=Number(b.dataset.lesson);learned=learned.includes(i)?learned.filter(x=>x!==i):[...learned,i];try{localStorage.setItem(learningKey,JSON.stringify(learned));learningStorageError=false;}catch{learningStorageError=true;}refreshLearning();b.setAttribute('aria-pressed',String(learned.includes(i)));b.textContent=learned.includes(i)?'อ่านแล้ว · ยกเลิกเครื่องหมาย':'บันทึกว่าอ่านแล้ว';if(learningStorageError)b.nextElementSibling.textContent='บันทึกได้เฉพาะระหว่างเปิดหน้านี้ เบราว์เซอร์ไม่อนุญาตให้เก็บความคืบหน้า';showToast(learned.includes(i)?'บันทึกการอ่านบทเรียนแล้ว':'ยกเลิกเครื่องหมายอ่านแล้ว');});
document.getElementById('quick-search').addEventListener('submit',e=>{e.preventDefault();const q=document.getElementById('quick-query').value.trim();document.getElementById('document-search').value=q;setFilter('all');location.hash='library';document.getElementById('document-search').focus({preventScroll:true});});
refreshLearning();renderLesson();window.addEventListener('hashchange',renderLesson);
