const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),dist=path.join(root,'dist');
const html=fs.readFileSync(path.join(dist,'index.html'),'utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(new Set(ids).size,ids.length,'Duplicate IDs');
for(const id of ['home','learn','lesson','about','criteria','strategies','journey','readiness','network','team','library','faq','meeting'])assert(ids.includes(id),'Missing route '+id);
let localReferences=0;
for(const [,url]of html.matchAll(/(?:src|href)="([^"]+)"/g)){
 if(/^(?:https?:|#|data:)/.test(url))continue;
 assert(fs.existsSync(path.join(dist,url.split('#')[0])),'Missing local asset '+url);localReferences++;
}
for(const f of ['app.js','updates.js','navigation.js','learning.js'])new vm.Script(fs.readFileSync(path.join(dist,f),'utf8'),{filename:f});
const gen=fs.readFileSync(path.join(dist,'assessment/index.html'),'utf8');
const scripts=[...gen.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]);scripts.forEach(s=>new vm.Script(s));
assert(gen.includes("const KEY = 'sisaket-gecc-2570-v5'"),'Assessment storage key changed');
assert(gen.includes("indexedDB.open('sisaket-gecc-files',1)"),'Attachment store changed');
assert(fs.readFileSync(path.join(dist,'app.js'),'utf8').includes('gecc-readiness-v1'),'Learning storage key changed');
const refs=[...fs.readFileSync(path.join(dist,'updates.js'),'utf8').matchAll(/(?:url|src):'([^']+)'/g)].map(m=>m[1]).filter(x=>x.startsWith('assets/'));
refs.forEach(f=>assert(fs.existsSync(path.join(dist,f)),'Missing document '+f));
console.log(JSON.stringify({status:'passed',routeCount:13,localReferences,scriptSyntax:'passed',storageKeys:'preserved',localDocuments:refs.length}));

