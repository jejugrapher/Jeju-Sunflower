<script>
/* ═════════ 데이터 (출처: 존별기획안 · 센터 초대장 원고 · 9/8·9/17 카톡 · 김지환 대표 부스 목록 9/18) */
var BOOTH_NOTE='9월 18일에 받은 목록이에요. 체험부스 16곳 · 음식 만들기 6곳으로 정리하는 중이라 이름과 내용이 바뀔 수 있어요. 그림은 체험 예시예요.';
var BOOTHS={
 exp:[[1,'평대초 학부모회','바다유리 반지 만들기'],[2,'세화초 생태환경동아리','린넨염색 보자기가방 만들기'],
      [3,'제주녹색구매지원센터','행운 뽑기 & 녹색소비 퀴즈!'],[4,'희망나래꿈터','플라스틱 병뚜껑 팔찌 만들기'],
      [5,'지속가능환경교육센터','바다유리 목걸이 만들기'],[6,'구좌읍교육발전협의회','바다거북 손수건 만들기'],
      [7,'제주별작업실','커피박 키링 만들기'],[8,'다시바다','해녀복 고래 키링 만들기'],
      [9,'꽃샘공방','폐품활용 수경식물 만들기'],[10,'리어플라스틱','업사이클 바인더링 & 노트 만들기'],
      [11,'함덕파란집','새활용나무 벽걸이화병 만들기'],[12,'삼춘네점빵','새활용단추 키링 만들기']],
 food:[[13,'아시아기후변화교육센터','자전거 타고 주스 만들기'],[14,'지속가능환경교육센터','자전거 타고 솜사탕 만들기'],
      [15,'소비자교육중앙회 구좌분회','분리수거하고 와플 만들기'],[16,'우리하도지역아동센터','물방울 실험 후 뻥튀기 얼굴 만들기'],
      [17,'해바라기지역아동센터','감자빵·주스 받고 에코키링 만들기'],[18,'김녕행복한지역아동센터','환경퀴즈 풀고 샌드위치 만들기'],
      [19,'종달지역아동센터','전통문양 도장 꿀떡 만들기']]
};
/* 놀이카 — 세상놀이연구소(@worldplaylab) 채널 영상 */
var NORICAR=[['TWw3v2GyXXI','노리카 축제 (재활용나눔 자원순환축제)'],
             ['ilt5VPqn010','노리카 (학교편)'],
             ['FrVxNrV0_uY','찾아가는 놀이터, 노리카 — 링가링가'],
             ['7ksJBorvNJQ','노리카가 만난 바른 아이들'],
             ['CQ67KyUd1DY','딱지접기 소개'],
             ['C6jJa1-t1lM','핀란드의 국민놀이, 몰키(molkky)']];
/* 존: x,y = 크레파스 지도 위 이름표 가운데(%), w = 이름표 폭(%) */
var ZONES={
 gate:{no:1,name:'입구',icon:'🌸',c:'#8DBA2B',x:40.0,y:47.0,w:7.8,when:'오후 1시부터',
  text:'전시존과 놀이존 사이, 꽃 아치를 지나 축제장으로 들어와요.',
  list:['구좌 친구들이 크레파스로 그린 현수막이 놀이존 쪽에서 보여요','박물관 쪽이 아니라 화장실·장터 쪽에서 올라오면 바로예요']},
 exhibit:{no:2,name:'전시존',icon:'🖼',c:'#26A6DB',x:30.0,y:46.5,w:9.8,when:'오후 2시 ~ 6시',
  text:'박물관에서 놀이존으로 가는 길을 따라 작품이 전시돼요. 어린이 도슨트가 직접 설명해 줘요!',
  list:['삼각 큐브 전시대 — 들락날락 드나들 수 있는 작은 놀이터이기도 해요','업사이클링 작품 · 환경 사생대회 그림']},
 exp:{no:3,name:'체험부스존',icon:'✂️',c:'#F5891F',x:62.7,y:33.7,w:13.8,when:'오후 2시 ~ 6시',
  text:'항일기념공원 둘레를 따라 부스 16곳이 동그랗게 모여 있어요. 돌바닥 길로 어디서든 들어갈 수 있어요.',booths:'exp'},
 play:{no:4,name:'놀이존',icon:'🪵',c:'#E53935',x:50.0,y:51.5,w:9.8,when:'오후 2시 ~ 6시',
  text:'항일기념공원 가운데 잔디밭에서 신나게 놀아요! 놀이는 옹달쌤과 함께하는 놀이카(세상놀이연구소)가 함께해요.',
  list:['버려진 나무로 톱질·망치질 목공 체험','종이상자로 탑 쌓기 · 집 짓기','세계 놀이 — 몰키, 링가링가, 딱지접기'],vids:1},
 market:{no:5,name:'에코 순환 마트',icon:'🧺',c:'#43B047',x:65.8,y:58.9,w:15.8,when:'오후 2시 ~ 3시',
  text:'작은 원형광장에서 아껴 쓰고 나눠 쓰는 어린이 장터가 열려요.',list:['어린이 벼룩시장 — 나눔과 판매','지역 특산품 소개']},
 momo:{no:6,name:'모모장',icon:'🌾',c:'#268C50',x:69.2,y:67.3,w:9.8,when:'오후 2시 30분부터',
  text:'구좌읍 모모장이 장터를 열어요. 업사이클링·친환경 제품을 주로 가지고 나와요.',list:['주차장 쪽 라인에 매대가 서요']},
 art:{no:7,name:'미술체험존',icon:'🎨',c:'#20A39E',x:55.0,y:22.8,w:13.8,when:'오후 2시 ~ 6시',
  text:'모두가 함께 그리는 참여형 미술 활동이에요.',list:['긴 천에 다 같이 그림 그리기','큰 붓으로 대형 초상화 그리기','병뚜껑 곱슬머리 만들기']},
 photo:{no:8,name:'포토존',icon:'📸',c:'#A349C4',x:46.0,y:66.3,w:9.8,when:'오후 2시 ~ 6시',
  text:'해녀복을 입고 찍는 구좌 인생네컷과 환경 포토존이 있어요.',list:['구좌 인생네컷 — 해녀복과 소품을 빌려 입고 네컷 사진','식물 · 동물 · 해양생물 포토존']},
 stage:{no:9,name:'공연무대존',icon:'🎤',c:'#6E7887',x:34.2,y:17.3,w:13.8,when:'오후 1시 ~ 6시',
  text:'야외공연장이 메인무대예요. 오프닝과 골든벨, 영화가 모두 이곳에서 열려요.',
  list:['오후 1시 ~ 2시 · 오프닝(시상식 · 축하공연)','오후 4시 ~ 5시 · 도전! 환경 골든벨','오후 5시 ~ 6시 · 에코 시네마 · 감독과의 만남']},
 rest:{no:10,name:'휴식존',icon:'⛺',c:'#E6BE14',x:32.7,y:63.9,w:9.8,when:'언제든지',
  text:'전시존 뒤 소나무 그늘에서 돗자리를 깔고 쉬어 가요.',list:['폐현수막으로 만든 만국기','폐린넨 가랜드와 작은 작품 전시']},
 food:{no:11,name:'음식체험존',icon:'🥪',c:'#494AC4',x:42.5,y:27.7,w:13.8,when:'오후 2시 ~ 6시',
  text:'놀이존에서 무대로 가는 길목이에요. 직접 만들어서 먹는 체험이고 모두 무료예요.',booths:'food'},
 hq:{no:12,name:'본부석',icon:'🚩',c:'#965C3C',x:42.7,y:56.9,w:9.8,when:'오후 1시 ~ 6시',
  text:'입구 옆이에요. 궁금한 게 있거나 도움이 필요하면 오세요.',
  list:['행사 운영과 안전 관리 · 의료진과 안전요원','잃어버린 물건 · 안내','축제를 준비한 과정 전시']},
 sign:{no:13,name:'방명록',icon:'✍️',c:'#F080AA',x:29.3,y:56.4,w:9.8,when:'오후 2시 ~ 6시',
  text:'얼굴 모양 판에 내 얼굴을 그리고 축제 감상을 남겨요.',list:['다 같이 그린 얼굴이 모여 큰 작품이 돼요']},
 coffee:{no:14,name:'커피트럭',icon:'☕',c:'#78503C',x:32.7,y:72.3,w:11.8,when:'오후 2시 ~ 6시',
  text:'청년 발달장애인 바리스타가 운영하는 커피트럭이 와요.',list:['차가 들어오는 입구 쪽에 자리해요']}
};
/* 프로그램 카드 상세 */
var PROG={
 opening:{t:'오프닝 — 다 같이 시작!',c:'#E27BA7',when:'오후 1시 ~ 2시',where:['stage'],
  what:'행사의 문을 여는 시간이에요. 개회 인사와 내빈 소개를 하고, 환경 사생대회 시상식과 축하 공연이 이어져요.',
  list:['개회 인사 · 내빈 소개 · 축하 말씀','환경 사생대회 시상식','축하공연 — 구좌읍 어린이 합창단, 구좌 청소년 오케스트라(성악 협연)'],
  tip:'체험부스는 오프닝이 끝난 오후 2시부터 문을 열어요.'},
 booths:{t:'환경 체험부스',c:'#3E8E41',when:'오후 2시 ~ 6시',where:['exp','food'],
  what:'지구를 살리는 만들기와 체험 부스예요. 보고 듣기만 하는 게 아니라 직접 만들고 실천해 보는 체험이고, 어른도 아이도 누구나 참여할 수 있어요.',booths:['exp','food']},
 play:{t:'초록별 놀이마당',c:'#6B4A2B',when:'오후 2시 ~ 6시',where:['play'],
  what:'항일기념공원 가운데 잔디밭에서 몸으로 신나게 노는 놀이마당이에요. 놀이는 「옹달쌤과 함께하는 놀이카」(세상놀이연구소)가 함께해요.',
  list:['버려진 나무로 톱질·망치질 — 어린이 목공 체험','종이상자로 탑 쌓기 · 집 짓기','몰키 · 링가링가 · 딱지접기 같은 세계 놀이'],
  who:'종달지역아동센터, 바다쓰기, 세상놀이연구소(놀이카)와 자원봉사 선생님들이 함께해요',vids:1},
 upcycle:{t:'업사이클링 작품 전시',c:'#EE8424',when:'오후 2시 ~ 6시',where:['exhibit'],
  what:'버려진 물건이 멋진 작품으로 다시 태어났어요. 작품을 만든 친구들이 어린이 도슨트가 되어 직접 설명해 줘요.',
  list:['페트병 플라워아트','해양쓰레기 동물모형','헌 그림책 입체 동화작품','미니하우스 마을액자','제주 입체조형 말'],
  who:'해바라기지역아동센터 친구들이 준비했어요'},
 contest:{t:'환경 사생대회 그림 전시',c:'#2F5DA8',when:'오후 2시 ~ 6시',where:['exhibit'],
  what:'구좌 친구들이 환경 사생대회에 낸 그림, 푸른 지구 이야기를 전시해요.',
  list:['초등학생 친구들이 8절지에 그린 환경 그림','시상식은 오프닝(오후 1시~2시)에서 해요']},
 market:{t:'에코 순환 마트',c:'#3E8E41',when:'오후 2시 ~ 3시',where:['market','momo'],
  what:'아껴 쓰고 나눠 쓰는 어린이 장터예요. 오후 2시 30분부터는 구좌읍 모모장도 함께 열려요.',
  list:['어린이 벼룩시장 — 나눔과 판매','모모장 — 업사이클링·친환경 제품 위주'],
  tip:'에코백을 가져오면 산 물건과 만든 작품을 담아 갈 수 있어요.'},
 food:{t:'음식 만들기 체험',c:'#2F5DA8',when:'오후 2시 ~ 6시',where:['food','coffee'],
  what:'자전거를 굴려 주스를 만들고, 분리수거하고 와플도 만들어요. 사 먹는 게 아니라 직접 만들어서 먹는 체험이고 모두 무료예요.',
  list:['청년 발달장애인 바리스타가 운영하는 커피트럭도 와요'],booths:['food']},
 draw:{t:'다 같이 그려요',c:'#EE8424',when:'오후 2시 ~ 6시',where:['art','sign'],
  what:'모두가 함께 그리는 참여형 미술 활동이에요.',
  list:['긴 천에 다 같이 그림 그리기','큰 붓으로 대형 초상화 그리기','병뚜껑으로 곱슬머리 만들기','방명록 — 얼굴 모양 판에 내 얼굴 그리기']},
 photo:{t:'포토존 · 구좌 인생네컷',c:'#E27BA7',when:'오후 2시 ~ 6시',where:['photo'],
  what:'해녀복과 소품을 빌려 입고 네컷 사진을 찍어요. 환경을 주제로 한 포토존도 있어요.',
  list:['구좌 인생네컷 — 해녀복 입고 찍는 네컷 사진','식물 · 동물 · 해양생물 포토존']},
 treasure:{t:'초록별 보물찾기',c:'#E27BA7',when:'오후 2시 ~ 6시',where:[],
  what:'행사장 곳곳에 숨어 있는 보물을 찾아보세요. 보물을 찾은 친구에게는 선물을 드려요!',tip:'선물은 지금 준비하고 있어요.'},
 goldenbell:{t:'도전! 환경 골든벨',c:'#EE8424',when:'오후 4시 ~ 5시',where:['stage'],
  what:'환경 상식 퀴즈에 도전하는 골든벨이에요. 미리 신청한 친구들이 메인무대에서 함께 도전하고, 우수자에게는 시상이 있어요.',
  tip:'신청 방법과 정확한 시간은 곧 알려 드릴게요.'},
 cinema:{t:'에코 시네마',c:'#2F5DA8',when:'오후 5시 ~ 6시',where:['stage'],
  what:'해가 질 때 메인무대 LED 화면으로 환경 영화 「조수웅덩이 : 바다의 시작」을 함께 봐요. 영화를 만든 임형묵 감독님도 만날 수 있어요.',
  tip:'개인 돗자리를 챙기면 잔디밭에 앉아 편하게 볼 수 있어요.'}
};

(function(){
  var URL_='https://jejugrapher.github.io/Jeju-Sunflower/';
  var TITLE='구좌 아이들이 만든 초록별 환경놀이터';
  var TEXT='🌍 10월 10일(토) 오후 1시, 제주해녀박물관 야외광장에서 구좌 아이들이 직접 준비한 「초록별 환경놀이터」가 열려요! 체험부스 · 작품 전시 · 에코 시네마 · 골든벨 · 축하공연 — 같이 놀러 가요!';
  var zd=document.getElementById('zd'), zin=document.getElementById('zdin');
  var toast=document.getElementById('toast'), tt;
  function esc(t){return String(t).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function say(m){toast.textContent=m;toast.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('on')},2400)}
  function copy(t){
    if(navigator.clipboard&&window.isSecureContext){return navigator.clipboard.writeText(t).then(function(){return true},function(){return fb(t)})}
    return Promise.resolve(fb(t));
    function fb(x){var a=document.createElement('textarea');a.value=x;a.style.position='fixed';a.style.opacity='0';document.body.appendChild(a);a.select();
      var ok=false;try{ok=document.execCommand('copy')}catch(e){} a.remove();return ok}
  }
  function share(o,msg){
    if(navigator.share){ return navigator.share(o).catch(function(){}); }
    copy((o.text?o.text+'\n':'')+o.url).then(function(ok){ say(ok?(msg||'링크를 복사했어요! 붙여 넣어 알려 주세요'):'주소: '+o.url) });
  }
  function boothHTML(key,c){
    return '<div class="booths">'+BOOTHS[key].map(function(b){
      var n=('0'+b[0]).slice(-2);
      return '<div class="booth"><img src="img/booth/b'+n+'.webp" alt="'+esc(b[2])+' 예시 그림" loading="lazy"><div><b><span class="no" style="background:'+c+'">'+b[0]+'</span>'+esc(b[2])+'</b><span>'+esc(b[1])+'</span></div></div>';
    }).join('')+'</div>';
  }
  function vidsHTML(){
    return '<p style="margin:10px 0 2px;font-family:Gamja Flower;font-size:22px;color:#6B4A2B">🎥 놀이카는 이런 놀이를 해요</p>'
      + '<div class="booths">' + NORICAR.map(function(v){
        return '<a class="booth" style="text-decoration:none;color:inherit" href="https://www.youtube.com/watch?v='+v[0]+'" target="_blank" rel="noopener">'
          + '<img src="https://i.ytimg.com/vi/'+v[0]+'/mqdefault.jpg" alt="'+esc(v[1])+' 영상" loading="lazy">'
          + '<div><b>'+esc(v[1])+'</b><span>세상놀이연구소 · 유튜브에서 보기 ›</span></div></a>';
      }).join('') + '</div>'
      + '<p class="src">영상 · 세상놀이연구소(@worldplaylab). 놀이카가 행사장 놀이존을 함께 운영해요.</p>';
  }
  function openDlg(html,c){
    zin.innerHTML=html; zin.style.setProperty('--c',c);
    zin.querySelectorAll('[data-go]').forEach(function(b){ b.onclick=function(){ zd.close(); goZone(b.dataset.go); } });
    zin.querySelectorAll('[data-sh]').forEach(function(b){ b.onclick=function(){
      share({title:TITLE+' · '+b.dataset.t, text:b.dataset.t+' — '+TITLE+' (10월 10일 토 · 제주해녀박물관)', url:URL_+'#'+b.dataset.sh},'링크를 복사했어요!'); } });
    zin.querySelector('.close').onclick=function(){ zd.close(); };
    if(zd.showModal&&!zd.open) zd.showModal();
    zin.scrollTop=0;
  }
  function openZone(id){
    var z=ZONES[id]; if(!z) return;
    var h='<h3>'+z.icon+' '+esc(z.name)+'</h3><div class="meta"><span>🕐 '+esc(z.when)+'</span></div><p>'+esc(z.text)+'</p>';
    if(z.list) h+='<ul>'+z.list.map(function(t){return '<li>'+esc(t)+'</li>'}).join('')+'</ul>';
    if(z.vids) h+=vidsHTML();
    if(z.booths) h+=boothHTML(z.booths,z.c)+'<p class="src">'+BOOTH_NOTE+'</p>';
    h+='<div class="acts"><button type="button" data-sh="z-'+id+'" data-t="'+esc(z.name)+'" style="background:#E27BA7">📣 공유하기</button>'
     +'<button type="button" class="close" style="background:'+z.c+'">닫기</button></div>';
    openDlg(h,z.c);
  }
  function openProg(id){
    var p=PROG[id]; if(!p) return;
    var h='<h3>'+esc(p.t)+'</h3><div class="meta"><span>🕐 '+esc(p.when)+'</span>'
      +(p.where.length?'<span>📍 '+p.where.map(function(z){return esc(ZONES[z].name)}).join(' · ')+'</span>':'<span>📍 행사장 곳곳</span>')+'</div>'
      +'<p>'+esc(p.what)+'</p>';
    if(p.list) h+='<ul>'+p.list.map(function(t){return '<li>'+esc(t)+'</li>'}).join('')+'</ul>';
    if(p.who) h+='<p class="tip">🙋 '+esc(p.who)+'</p>';
    if(p.tip) h+='<p class="tip">💡 '+esc(p.tip)+'</p>';
    if(p.vids) h+=vidsHTML();
    if(p.booths){ p.booths.forEach(function(k){ h+='<p style="margin:10px 0 0;font-family:Gamja Flower;font-size:22px;color:'+ZONES[k].c+'">'+ZONES[k].icon+' '+ZONES[k].name+'</p>'+boothHTML(k,ZONES[k].c); }); h+='<p class="src">'+BOOTH_NOTE+'</p>'; }
    h+='<div class="acts">'+p.where.map(function(z){return '<button type="button" data-go="'+z+'" style="background:'+ZONES[z].c+'">🗺 '+esc(ZONES[z].name)+' 지도에서 보기</button>'}).join('')
     +'<button type="button" data-sh="p-'+id+'" data-t="'+esc(p.t)+'" style="background:#E27BA7">📣 공유하기</button>'
     +'<button type="button" class="close" style="background:'+p.c+'">닫기</button></div>';
    openDlg(h,p.c);
  }
  function goZone(id){
    var el=document.querySelector('.hot[data-z="'+id+'"]'); if(!el) return;
    var box=document.querySelector('.mapscroll');
    document.getElementById('map').scrollIntoView({behavior:'smooth',block:'start'});
    if(box&&box.scrollWidth>box.clientWidth){ box.scrollLeft=Math.max(0, el.offsetLeft - box.clientWidth/2); }
    el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');
    setTimeout(function(){ openZone(id); }, 900);
  }
  zd.addEventListener('click',function(e){ if(e.target===zd) zd.close(); });

  // 지도 핫스팟 + 존 버튼
  var pins=document.getElementById('pins'), zl=document.getElementById('zlist');
  Object.keys(ZONES).forEach(function(id){
    var z=ZONES[id];
    var b=document.createElement('button'); b.type='button'; b.className='hot'; b.dataset.z=id;
    b.style.left=z.x+'%'; b.style.top=z.y+'%'; b.style.width=z.w+'%'; b.style.height='5.2%';
    b.setAttribute('aria-label',z.no+'번 '+z.name+' 자세히 보기'); b.onclick=function(){ openZone(id); }; pins.appendChild(b);
    var c=document.createElement('button'); c.type='button'; c.className='zbtn'; c.style.setProperty('--c',z.c);
    c.innerHTML='<i>'+z.icon+'</i>'+z.no+'. '+esc(z.name); c.onclick=function(){ goZone(id); }; zl.appendChild(c);
  });
  // 프로그램 카드
  document.querySelectorAll('.prog[data-p]').forEach(function(card){
    card.addEventListener('click',function(){ openProg(card.dataset.p); });
    card.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); openProg(card.dataset.p); } });
  });
  // 공유 버튼들
  document.querySelectorAll('[data-share="page"]').forEach(function(b){ b.addEventListener('click',function(){ share({title:TITLE,text:TEXT,url:URL_}); }); });
  document.querySelectorAll('[data-share="video"]').forEach(function(b){ b.addEventListener('click',function(){ share({title:b.dataset.title,text:b.dataset.title+' 🎬',url:b.dataset.url},'영상 링크를 복사했어요!'); }); });
  var enc=encodeURIComponent;
  var fbA=document.querySelector('[data-sns="facebook"]'), xA=document.querySelector('[data-sns="x"]'), bA=document.querySelector('[data-sns="band"]');
  if(fbA) fbA.href='https://www.facebook.com/sharer/sharer.php?u='+enc(URL_);
  if(xA) xA.href='https://twitter.com/intent/tweet?text='+enc(TEXT)+'&url='+enc(URL_);
  if(bA) bA.href='https://band.us/plugin/share?body='+enc(TEXT+'\n'+URL_)+'&route='+enc(URL_);
  var kk=document.querySelector('[data-sns="kakao"]'); if(kk) kk.addEventListener('click',function(){ share({title:TITLE,text:TEXT,url:URL_},'링크를 복사했어요! 카카오톡 대화방에 붙여 넣어 주세요'); });
  var cp=document.querySelector('[data-sns="copy"]'); if(cp) cp.addEventListener('click',function(){ copy(URL_).then(function(ok){ say(ok?'링크를 복사했어요!':'주소: '+URL_) }); });
  function shareImage(src,name){
    if(!(navigator.canShare&&window.File)) return false;
    fetch(src).then(function(r){return r.blob()}).then(function(bl){
      var f=new File([bl],name,{type:'image/jpeg'});
      if(navigator.canShare({files:[f]})) navigator.share({files:[f],title:TITLE,text:TEXT+' '+URL_}).catch(function(){});
      else location.href=src;
    }).catch(function(){ location.href=src; });
    return true;
  }
  var ig=document.querySelector('[data-sns="insta"]');
  if(ig) ig.addEventListener('click',function(){
    if(!shareImage('img/share_story.jpg','초록별환경놀이터_스토리.jpg')){
      document.getElementById('instabox').scrollIntoView({behavior:'smooth',block:'center'}); say('그림을 받아서 인스타그램에 올려 주세요');
    }
  });
  document.querySelectorAll('#instabox [data-img]').forEach(function(a){
    a.addEventListener('click',function(e){
      if(navigator.canShare&&/Android|iPhone|iPad/i.test(navigator.userAgent)){ e.preventDefault(); shareImage(a.dataset.img,a.getAttribute('download')); }
    });
  });
  var cal=document.getElementById('calbtn');
  if(cal) cal.href='https://calendar.google.com/calendar/render?action=TEMPLATE'
    +'&text='+enc('초록별 환경놀이터 (구좌 아이들이 만든 환경 축제)')
    +'&dates=20261010T040000Z/20261010T100000Z'
    +'&location='+enc('제주해녀박물관 야외광장, 제주특별자치도 제주시 구좌읍 해녀박물관길 26')
    +'&details='+enc('체험부스 · 작품 전시 · 에코 시네마 · 골든벨 · 축하공연\n비가 오면 10월 17일(토)로 미뤄져요\n'+URL_);
  // 공유 링크로 들어왔을 때 해당 내용 바로 열기 (#p-cinema, #z-stage …)
  function fromHash(){
    var h=location.hash.slice(1);
    if(h.indexOf('p-')===0 && PROG[h.slice(2)]){ document.getElementById('what').scrollIntoView(); openProg(h.slice(2)); }
    else if(h.indexOf('z-')===0 && ZONES[h.slice(2)]){ goZone(h.slice(2)); }
  }
  window.addEventListener('load',fromHash);
})();
</script>
