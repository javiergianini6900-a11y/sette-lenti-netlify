/* Leaderboard + class messages, shared by index.html and esame.html.
   LB.end(box,{kind,ok,n,ctx,lang}) saves a finished session and shows the class messages under it. */
(function(){
const T={
it:{saveName:"Salva nome",saved:"Salvato in classifica: +{ok} punti. Totale {pts}, sei {pos}° su {tot}.",taken:"Questo nome è già usato da un'altra persona. Scegline un altro.",err:"Classifica non raggiungibile, punteggio non salvato.",fast:"Sessione troppo veloce, non contata in classifica.",see:"Vedi la classifica",
  needName:"Scrivi un nome per entrare in classifica e scrivere alla classe.",name:"Il tuo nome",nameBtn:"Salva punteggio",msgsT:"Messaggi della classe",ph:"Scrivi alla classe: un dubbio, un trucco, un incoraggiamento…",send:"Invia",none:"Ancora nessun messaggio. Scrivi il primo.",msgFast:"Aspetta qualche secondo prima di scrivere ancora.",msgErr:"Messaggio non inviato, riprova.",more:"Mostra altri",
  k:{hard:"Hard mode",cap:"Cap. {x}",mix:"Shuffle",sim:"Prova d'esame {x}",quiz:"Quiz"}},
en:{saveName:"Save name",saved:"Saved to the leaderboard: +{ok} points. Total {pts}, you are #{pos} of {tot}.",taken:"Someone else already uses this name. Pick another one.",err:"Leaderboard unreachable, score not saved.",fast:"Session too fast, not counted on the leaderboard.",see:"See the leaderboard",
  needName:"Write a name to join the leaderboard and post to the class.",name:"Your name",nameBtn:"Save score",msgsT:"Messages from the class",ph:"Write to the class: a doubt, a trick, some encouragement…",send:"Send",none:"No messages yet. Write the first one.",msgFast:"Wait a few seconds before posting again.",msgErr:"Message not sent, try again.",more:"Show more",
  k:{hard:"Hard mode",cap:"Ch. {x}",mix:"Shuffle",sim:"Mock exam {x}",quiz:"Quiz"}},
de:{saveName:"Namen speichern",saved:"In der Rangliste gespeichert: +{ok} Punkte. Gesamt {pts}, du bist Platz {pos} von {tot}.",taken:"Diesen Namen verwendet schon jemand anderes. Wähl einen anderen.",err:"Rangliste nicht erreichbar, Punkte nicht gespeichert.",fast:"Sitzung zu schnell, zählt nicht für die Rangliste.",see:"Zur Rangliste",
  needName:"Gib einen Namen ein, um in die Rangliste zu kommen und der Klasse zu schreiben.",name:"Dein Name",nameBtn:"Punkte speichern",msgsT:"Nachrichten der Klasse",ph:"Schreib der Klasse: eine Frage, ein Trick, etwas Mut…",send:"Senden",none:"Noch keine Nachrichten. Schreib die erste.",msgFast:"Warte ein paar Sekunden, bevor du wieder schreibst.",msgErr:"Nachricht nicht gesendet, versuch es nochmal.",more:"Mehr zeigen",
  k:{hard:"Hard Mode",cap:"Kap. {x}",mix:"Shuffle",sim:"Probeprüfung {x}",quiz:"Quiz"}},
es:{saveName:"Guardar nombre",saved:"Guardado en la clasificación: +{ok} puntos. Total {pts}, eres el n.º {pos} de {tot}.",taken:"Otra persona ya usa este nombre. Elige otro.",err:"Clasificación no disponible, puntuación no guardada.",fast:"Sesión demasiado rápida, no cuenta para la clasificación.",see:"Ver la clasificación",
  needName:"Escribe un nombre para entrar en la clasificación y escribir a la clase.",name:"Tu nombre",nameBtn:"Guardar puntuación",msgsT:"Mensajes de la clase",ph:"Escribe a la clase: una duda, un truco, un ánimo…",send:"Enviar",none:"Todavía no hay mensajes. Escribe el primero.",msgFast:"Espera unos segundos antes de volver a escribir.",msgErr:"Mensaje no enviado, inténtalo de nuevo.",more:"Mostrar más",
  k:{hard:"Hard mode",cap:"Cap. {x}",mix:"Shuffle",sim:"Examen de prueba {x}",quiz:"Quiz"}},
hr:{saveName:"Spremi ime",saved:"Spremljeno na ljestvicu: +{ok} bodova. Ukupno {pts}, ti si {pos}. od {tot}.",taken:"Netko drugi već koristi ovo ime. Odaberi drugo.",err:"Ljestvica nije dostupna, rezultat nije spremljen.",fast:"Sesija prebrza, ne računa se na ljestvici.",see:"Pogledaj ljestvicu",
  needName:"Upiši ime da uđeš na ljestvicu i pišeš razredu.",name:"Tvoje ime",nameBtn:"Spremi rezultat",msgsT:"Poruke razreda",ph:"Napiši razredu: nedoumicu, trik, ohrabrenje…",send:"Pošalji",none:"Još nema poruka. Napiši prvu.",msgFast:"Pričekaj nekoliko sekundi prije nove poruke.",msgErr:"Poruka nije poslana, pokušaj ponovno.",more:"Prikaži više",
  k:{hard:"Hard mode",cap:"Pogl. {x}",mix:"Shuffle",sim:"Probni ispit {x}",quiz:"Kviz"}}};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fill=(t,o)=>t.replace(/\{(\w+)\}/g,(_,k)=>o[k]);
const get=(k,d)=>{try{const v=localStorage.getItem("sl-exam-"+k);return v==null?d:JSON.parse(v);}catch(e){return d;}};
const set=(k,v)=>{try{localStorage.setItem("sl-exam-"+k,JSON.stringify(v));}catch(e){}};
// name defaults to the profile used on the main site
function nick(){const n=get("nick",null);if(n!=null)return n;try{const pr=JSON.parse(localStorage.getItem("osp1-profiles")||"{}"),a=JSON.parse(localStorage.getItem("osp1-active")||"null");return (a&&pr[a]&&pr[a].name)||"";}catch(e){return "";}}
function tok(){let t=get("tok",null);if(!t){t=[...crypto.getRandomValues(new Uint8Array(16))].map(b=>b.toString(16).padStart(2,"0")).join("");set("tok",t);}return t;}
const post=(url,body)=>fetch(url,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(body)}).then(async r=>({status:r.status,d:await r.json().catch(()=>({}))}));
const ctxLabel=(t,c)=>{if(!c)return "";const [k,x]=String(c).split(":");return t.k[k]?fill(t.k[k],{x}):"";};
function ago(at,lang){const s=(at-Date.now())/1000,rf=new Intl.RelativeTimeFormat(lang,{numeric:"auto"});
  for(const [u,n] of [["day",86400],["hour",3600],["minute",60]])if(Math.abs(s)>=n)return rf.format(Math.round(s/n),u);return rf.format(0,"minute");}

let css=false;
function addCss(){if(css)return;css=true;const st=document.createElement("style");st.textContent=`
.lbp{border:1.5px solid var(--ink);background:var(--paper);padding:16px;margin:18px 0;display:grid;gap:12px}
.lbp-score{font-family:var(--mono);font-size:13px;margin:0}
.lbp-score:empty{display:none}
.lbp.wall{border:0;padding:0;margin:0;background:none}
.lbp-score a{color:inherit}
.lbp h3{margin:4px 0 0;font-family:var(--display);font-size:20px}
.lbp-row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.lbp input{font-family:var(--mono);font-size:14px;padding:8px;border:1.5px solid var(--rule);background:var(--ground);color:var(--ink);flex:1 1 180px;min-width:0}
.lbp textarea{min-height:64px;font-size:15px}
.lbp button{font-family:var(--mono);font-size:13px;border:1.5px solid var(--ink);background:var(--ink);color:var(--paper);padding:8px 14px;cursor:pointer}
.lbp button.ghost{background:transparent;color:var(--ink)}
.lbp-msgs{list-style:none;margin:0;padding:0;display:grid}
.lbp-msgs li{padding:10px 0;border-top:1px solid var(--rule)}
.lbp-msgs .who{font-family:var(--mono);font-size:12px;color:var(--ink-2)}
.lbp-msgs .who b{color:var(--ink)}
.lbp-msgs p{margin:4px 0 0;overflow-wrap:anywhere}
.lbp-note{font-family:var(--mono);font-size:12px;color:var(--ink-2);margin:0}`;document.head.appendChild(st);}

function end(box,o){
  addCss();const lang=T[o.lang]?o.lang:"it",t=T[lang];
  let pending=o.n>=3?o:null;
  const el=document.createElement("div");el.className="lbp"+(o.wall?" wall":"");box.appendChild(el);
  el.innerHTML=`<p class="lbp-score" data-s></p><div class="lbp-row" data-name hidden><input maxlength="24" placeholder="${esc(t.name)}"><button type="button">${esc(pending?t.nameBtn:t.saveName)}</button></div>
    ${o.wall?"":`<h3>${esc(t.msgsT)}</h3>`}<div class="lbp-row"><textarea maxlength="280" placeholder="${esc(t.ph)}"></textarea><button type="button" data-send>${esc(t.send)}</button></div><p class="lbp-note" data-mn></p>
    <ol class="lbp-msgs"></ol>`;
  const sEl=el.querySelector("[data-s]"),nameRow=el.querySelector("[data-name]"),mn=el.querySelector("[data-mn]");
    const askName=()=>{sEl.textContent=t.needName;nameRow.hidden=false;nameRow.querySelector("input").value=nick();};
  async function save(){const name=nick();if(!name)return askName();if(!pending)return;
    try{const r=await post("/api/score",{name,ok:pending.ok,n:pending.n,kind:pending.kind,token:tok()});
      if(r.status===409){set("nick","");return askName(),sEl.textContent=t.taken;}
      if(r.status===429){pending=null;return sEl.textContent=t.fast;}
      if(r.status!==200)throw 0;
      const all=await (await fetch("/api/leaderboard")).json(),pos=all.findIndex(x=>x.name===name)+1;
      sEl.innerHTML=esc(fill(t.saved,{ok:pending.ok,pts:r.d.pts,pos,tot:all.length}))+` <a href="./#classifica">${esc(t.see)} →</a>`;pending=null;nameRow.hidden=true;
    }catch(e){sEl.textContent=t.err;}}
  nameRow.querySelector("button").onclick=()=>{const v=nameRow.querySelector("input").value.trim();if(!v)return;set("nick",v);if(pending)save();else{nameRow.hidden=true;sEl.textContent="";}};
  let msgs=[],showAll=false;const list=el.querySelector(".lbp-msgs");
  const paint=()=>{const rows=showAll?msgs:msgs.slice(0,6);
    list.innerHTML=!msgs.length?`<li class="lbp-note">${esc(t.none)}</li>`:rows.map(m=>{const c=ctxLabel(t,m.ctx);return `<li><span class="who"><b>${esc(m.name)}</b> · ${esc(ago(m.at,lang))}${c?" · "+esc(c):""}</span><p>${esc(m.text)}</p></li>`;}).join("")+
      (msgs.length>6&&!showAll?`<li><button type="button" class="ghost" data-more>${esc(t.more)}</button></li>`:"");
    const mb=list.querySelector("[data-more]");if(mb)mb.onclick=()=>{showAll=true;paint();};};
  fetch("/api/messages").then(r=>r.ok?r.json():[]).then(d=>{msgs=Array.isArray(d)?d:[];paint();}).catch(()=>paint());
  el.querySelector("[data-send]").onclick=async()=>{const ta=el.querySelector("textarea"),text=ta.value.trim();if(!text)return;
    const name=nick();if(!name){askName();return;}mn.textContent="";
    try{const r=await post("/api/messages",{name,text,token:tok(),ctx:o.ctx||""});
      if(r.status===409){set("nick","");askName();sEl.textContent=t.taken;return;}
      if(r.status===429){mn.textContent=t.msgFast;return;}
      if(r.status!==200)throw 0;
      ta.value="";msgs.unshift(r.d.msg);paint();
    }catch(e){mn.textContent=t.msgErr;}};
  if(pending)save();return el;}
window.LB={end,nick,tok,setNick:v=>set("nick",v),T};
})();
