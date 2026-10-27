'use strict';
// Verified project content, from the user's updated timeline and meeting agenda.
const mentorTeams=[
 {count:4,title:'ฝ่ายปกครองและบริการที่ดิน',detail:'งานฝ่ายปกครองอำเภอเมือง และผู้บริหารที่ดินจังหวัด',icon:'building'},
 {count:4,title:'การปกครองและวิชาการที่ดิน',detail:'งานฝ่ายปกครอง และวิชาการที่ดินระดับเชี่ยวชาญ',icon:'people'},
 {count:4,title:'เทคนิค วิศวกรรม และ GIS',detail:'งานเทคนิค วิศวกรรม ระบบสารสนเทศ และภูมิสารสนเทศ',icon:'digital'},
 {count:3,title:'บัญชี การเงิน และสารสนเทศ',detail:'งานบัญชี การเงิน สารสนเทศ และสนับสนุนระบบงาน',icon:'check'},
 {count:4,title:'บริการประชาชนและสาธารณสุข',detail:'งานบริการประชาชน สาธารณสุข ขนส่ง และนักวิชาการ',icon:'training'},
 {count:4,title:'อำนวยความเป็นธรรมและกฎหมาย',detail:'งานศูนย์ดำรงธรรมจังหวัด งานกฎหมาย และเจ้าพนักงานอาวุโส',icon:'network'}
];
document.getElementById('mentor-grid').innerHTML=mentorTeams.map((t,i)=>`<article class="mentor-card"><div class="mentor-card-top"><span class="team-chip">TEAM ${String(i+1).padStart(2,'0')}</span><span>${t.count} คน</span></div><div class="mentor-icon">${icon(t.icon)}</div><h3>${t.title}</h3><p>${t.detail}</p><a href="assets/mentor-teams.webp" target="_blank" rel="noopener" aria-label="ดูรายชื่อพี่เลี้ยงทีม ${i+1} ในภาพต้นฉบับ">อ่านรายชื่อจากต้นฉบับ <span>↗</span></a></article>`).join('');
const agencyGroups=[
 {name:'งานปกครองอำเภอ (โซนที่ 1)',units:['ที่ทำการปกครองอำเภอกันทรลักษ์','ที่ทำการปกครองอำเภอขุนหาญ','ที่ทำการปกครองอำเภอพยุห์','ที่ทำการปกครองอำเภอโนนคูณ','ที่ทำการปกครองอำเภอห้วยทับทัน']},
 {name:'งานปกครองอำเภอและอำนวยความเป็นธรรม',units:['ที่ทำการปกครองอำเภออุทุมพรพิสัย','ที่ทำการปกครองอำเภอราษีไศล','ที่ทำการปกครองอำเภอเมืองจันทร์','ที่ทำการปกครองอำเภอบึงบูรพ์','ศูนย์ดำรงธรรมจังหวัดศรีสะเกษ']},
 {name:'งานบริการที่ดิน โครงสร้างพื้นฐาน และผังเมือง',units:['สำนักงานที่ดินจังหวัดศรีสะเกษ สาขากันทรารมย์','สำนักงานที่ดินจังหวัดศรีสะเกษ สาขากันทรลักษ์','สำนักงานที่ดินจังหวัดศรีสะเกษ สาขาอุทุมพรพิสัย','สำนักงานโยธาธิการและผังเมืองจังหวัดศรีสะเกษ']},
 {name:'งานกระบวนการยุติธรรม แรงงาน และสวัสดิการสังคม',units:['เรือนจำจังหวัดศรีสะเกษ','สำนักงานคุมประพฤติจังหวัดศรีสะเกษ','สำนักงานจัดหางานจังหวัดศรีสะเกษ','สำนักงานสวัสดิการและคุ้มครองแรงงานจังหวัดศรีสะเกษ','สำนักงานพัฒนาสังคมและความมั่นคงของมนุษย์จังหวัดศรีสะเกษ']},
 {name:'งานสาธารณสุขและป้องกันภัย',units:['โรงพยาบาลราษีไศล','โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านทับทิมสยาม 07','โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านม่วงแยก','สำนักงานป้องกันและบรรเทาสาธารณภัยจังหวัดศรีสะเกษ']},
 {name:'งานบริหารจัดการ คลัง สถิติ ชุมชน วัฒนธรรม และศาสนา',units:['สำนักงานคลังจังหวัดศรีสะเกษ','สำนักงานสถิติจังหวัดศรีสะเกษ','สำนักงานพัฒนาชุมชนจังหวัดศรีสะเกษ','สำนักงานวัฒนธรรมจังหวัดศรีสะเกษ','สำนักงานพระพุทธศาสนาจังหวัดศรีสะเกษ']}
];
function renderAgencies(){const q=document.getElementById('agency-search').value.trim().toLocaleLowerCase('th');let total=0;const html=agencyGroups.map((g,i)=>{const matches=g.name.toLocaleLowerCase('th').includes(q)?g.units:g.units.filter(u=>u.toLocaleLowerCase('th').includes(q));total+=matches.length;return matches.length?`<article class="agency-card"><div class="agency-card-heading"><span class="team-chip">กลุ่ม ${i+1}</span><span>${matches.length} หน่วยงาน</span></div><h3>${g.name}</h3><ol>${matches.map(u=>`<li>${u}</li>`).join('')}</ol></article>`:'';}).join('');document.getElementById('agency-grid').innerHTML=html||'<p class="empty-results">ไม่พบหน่วยงาน ลองค้นหาด้วยชื่ออำเภอหรือชื่อสำนักงาน</p>';document.getElementById('agency-result').textContent=`แสดง ${total} จาก 28 หน่วยงาน ใน ${agencyGroups.length} กลุ่ม`;}
renderAgencies();document.getElementById('agency-search').addEventListener('input',renderAgencies);
const networkTabs=Array.from(document.querySelectorAll('[data-network]'));
function chooseNetwork(type,focus=false){networkTabs.forEach(t=>{const selected=t.dataset.network===type;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;document.getElementById(`${t.dataset.network}-panel`).hidden=!selected;if(selected&&focus)t.focus();});}
networkTabs.forEach((t,i)=>{t.addEventListener('click',()=>chooseNetwork(t.dataset.network));t.addEventListener('keydown',e=>{let target;if(e.key==='ArrowRight'||e.key==='ArrowLeft')target=1-i;else if(e.key==='Home')target=0;else if(e.key==='End')target=1;else return;e.preventDefault();chooseNetwork(networkTabs[target].dataset.network,true);});});
const agenda=[
 ['08.00–09.00','ลงทะเบียนและถ่ายภาพรายบุคคล','เพื่อจัดทำ Portfolio และข้อมูลโครงการ'],
 ['09.00–09.20','เปิดประชุม มอบนโยบายและเป้าหมาย','นายธาตรี สิริรุ่งวณิช รองผู้ว่าราชการจังหวัดศรีสะเกษ'],
 ['09.20–10.30','แนวทางโครงการและทบทวนเกณฑ์ GECC 2570','ภญ.มัลลิกา สุพล เลขานุการคณะทำงาน'],
 ['10.30–11.00','เก็บและวิเคราะห์ข้อมูลแบบสำรวจ 3 ประเภท','ทีมอาจารย์จากมหาวิทยาลัยราชภัฏศรีสะเกษ'],
 ['11.00–11.45','Workshop วิเคราะห์ความพร้อมและหลักฐาน','ภญ.มัลลิกา สุพล เลขานุการคณะทำงาน'],
 ['11.45–12.00','ตกลงเครื่องมือ ติดตามงาน และปิดประชุม','ภญ.กนกวิภา ประกอบศรี ผู้ช่วยเลขานุการคณะทำงาน']
];
document.getElementById('agenda-list').innerHTML=agenda.map((a,i)=>`<article class="agenda-item"><span class="agenda-step">${String(i+1).padStart(2,'0')}</span><div><span class="agenda-time">${a[0]} น.</span><h3>${a[1]}</h3><p>${a[2]}</p></div></article>`).join('');
const newDocuments=[
 {title:'คู่มือเกณฑ์ศูนย์ราชการสะดวก ปี 2570',description:'คู่มือฉบับเต็ม 100 หน้า · เอกสารแนบสำหรับศึกษารายละเอียด',type:'PDF',category:'criteria',url:'assets/handbook-2570.pdf'},
 {title:'หลักเกณฑ์ GECC 2570 · ฉบับแนบล่าสุด',description:'17 หน้า · กายภาพ คุณภาพ ผลลัพธ์ และระดับการรับรอง',type:'PDF',category:'criteria',url:'assets/criteria-2570.pdf'},
 {title:'หลักเกณฑ์ GECC 2570 · Word ฉบับแนบ',description:'ไฟล์ DOCX สำหรับเปิดอ่านและใช้ประกอบการจัดเตรียมข้อมูล',type:'DOCX',category:'criteria',url:'assets/criteria-2570.docx'},
 {title:'Condition and Ensure 2570 · ฉบับแนบ',description:'แบบประเมินความพร้อม 2 หน้า พร้อมเงื่อนไขและช่วงรับสมัคร',type:'PDF',category:'tools',url:'assets/readiness-2570.pdf'},
 {title:'TIMELINE SISAKET GECC (update)',description:'แผนโครงการ 16 หน้า · กลยุทธ์ ไทม์ไลน์ กลุ่มหน่วยงาน และพี่เลี้ยง',type:'PDF',category:'project',url:'assets/timeline-updated.pdf'},
 {title:'ประชุมทีมพี่เลี้ยง ครั้งที่ 1',description:'29 ตุลาคม 2569 · กำหนดการประชุมและกิจกรรม Workshop',type:'PDF',category:'project',url:'assets/mentor-meeting-1.pdf'},
 {title:'PPT ชี้แจงเกณฑ์ 2570 · ฉบับแนบ',description:'สื่อชี้แจง 45 หน้า · เตรียมความพร้อมก่อนสมัคร',type:'PDF',category:'criteria',url:'assets/criteria-briefing-2570.pdf'},
 {title:'เอกสารชี้แจง GECC 2027 · 19 ต.ค. 69 (NEW)',description:'ฉบับปรับปรุงในโฟลเดอร์ Google Drive ที่ได้รับ',type:'PDF',category:'criteria',url:drive('1JYFqmhnOGhFbi7FbUuF43fxIV_d2CkW-')},
 {title:'โฟลเดอร์ประชุมชี้แจงเกณฑ์ GECC 2570',description:'หนังสือเชิญ เอกสารประกอบการประชุม และประเด็นคำถาม',type:'DRIVE',category:'project',url:'https://drive.google.com/drive/folders/1Nr7qUbf8-eYuJxBTyXzzLR13j8QVQv6g'}
];
documents.unshift(...newDocuments);renderDocuments();
// Icons inserted after the original script's initial icon pass.
document.querySelectorAll('[data-icon]:empty').forEach(el=>el.innerHTML=icon(el.dataset.icon));
// Use a finite completion response, never a fabricated score or certificate.
let completedBefore=checklist.querySelectorAll('input:checked').length===checks.length;
document.querySelector('.progress-summary').classList.toggle('is-complete',completedBefore);
document.getElementById('reset-progress').addEventListener('click',()=>{completedBefore=false;document.querySelector('.progress-summary').classList.remove('is-complete');});
checklist.addEventListener('change',()=>{const complete=checklist.querySelectorAll('input:checked').length===checks.length;if(complete&&!completedBefore){document.querySelector('.progress-summary').classList.add('is-complete');showToast('ทบทวนครบ 6 รายการแล้ว พร้อมนำข้อมูลให้พี่เลี้ยงตรวจ');}else if(!complete)document.querySelector('.progress-summary').classList.remove('is-complete');completedBefore=complete;});
// Pause purely decorative animation while the hero is outside the viewport.
