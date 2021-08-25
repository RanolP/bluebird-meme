import{j as e,h as t,n as r,l as o,s as n,y as i,v as s,C as l,d as a,c,S as p,G as u}from"./vendor.c084f5c3.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const g={description:"엠/앰은 비속어입니다.",process:(e,t)=>({messages:[{origin:e,text:"어머니, 존경을 담아 부릅니다.",where:{from:t,to:t+e.length},word:{into:"어머니",type:"replace"}}],output:"어머니"}),regexp:/([엠앰])/gm},d={description:"엠/앰은 비속어입니다.",process:(e,t,[r,o,n])=>({messages:[{origin:o,text:"어머니, 존경을 담아 부릅니다.",where:{from:t,to:t+e.length},word:{into:"어머니",type:"replace"}}],output:`${r}어머니${n}`}),regexp:/(^|[^a-zA-Z])([Mm])([^a-zA-Z]|$)/gm},m="요즘 젊은 것들은 버르장머리 없게 선배님들을 ㅇㅇ씨라고 불러?",h="선배님께 씨를 붙여 불러, 버르장머리 없이?",f={description:m,process:(e,t)=>({messages:[{origin:e,text:h,where:{from:t,to:t+e.length},word:{into:"선배님",type:"replace"}}],output:"선배님"}),regexp:/([시씨])/gm},w={description:m,process:(e,t,[r,o,n])=>({messages:[{origin:o,text:h,where:{from:t,to:t+e.length},word:{into:"선배님",type:"replace"}}],output:`${r}선배님${n}`}),regexp:/(^|[^a-zA-Z])([Cc])([^a-zA-Z]|$)/gm},x={description:"도리는 일본어에서 유래한 말이므로 닭도리탕 대신 닭볶음탕을 써야 합니다.",process:(t,r)=>({messages:[{origin:t,text:e(`${t}는 일본어니 볶음 쓰세요`),where:{from:r,to:r+t.length},word:{into:"볶음",type:"replace"}}],output:"볶음"}),regexp:/([도토]리)/gm};var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Apa:{description:"아파치 서버가 뭐니 버릇 없게",process:(e,t)=>({messages:[{origin:e,text:"아파가 뭐니 편찮다고 해야지",where:{from:t,to:t+e.length},word:{into:"편찮",type:"replace"}}],output:"편찮"}),regexp:/(아파)/gm},Beer:{description:"비어는 맥주로 대체하십시오.",process:(e,t)=>{const r=e.endsWith("었")?"맥줐":"맥주";return{messages:[{origin:e,text:"맥주를 비어 대신 쓰세요",where:{from:t,to:t+e.length},word:{into:r,type:"replace"}}],output:r}},regexp:/(비[어었])/gm},Bokeum:{description:"복음은 일본어의 잔재입니다. 도리로 대체하는 건 어떨까요?",process:(e,t)=>({messages:[{origin:e,text:"복음은 일본어의 잔재입니다",where:{from:t,to:t+e.length},word:{into:"도리",type:"replace"}}],output:"도리"}),regexp:/복음/gm},Em:g,Emglish:d,Eb:{description:"엡/앱은 비속어입니다.",process:(e,t)=>({messages:[{origin:e,text:"아버지, 존경을 담아 부릅니다",where:{from:t,to:t+e.length},word:{into:"아버지",type:"replace"}}],output:"아버지"}),regexp:/([엡앱])/gm},Seungri:{description:"승리쓰지마세요.",process:(e,t)=>({messages:[{origin:e,text:"승리쓰지마세요",where:{from:t,to:t+e.length},word:{into:"빅토리",type:"replace"}}],output:"빅토리"}),regexp:/(승리)/gm},Ssi:f,EngliSsi:w,Ssibal:{description:"씨발쓰지마세요. 여혐 단어입니다.",process:(e,t)=>({messages:[{origin:e,text:`${e}쓰지마세요`,where:{from:t,to:t+e.length},word:{type:"delete"}}],output:""}),regexp:/([시씨Cc]발|[십씹](?:[팔할])?)/gm},Tori:x,Evian:{description:"에비 앙? 상스러워요",process:(e,t)=>({messages:[{origin:e,text:"아버님께서 신음을 하신대도 그렇지..",where:{from:t,to:t+e.length},word:{into:"아버지신음",type:"replace"}}],output:"아버지신음"}),regexp:/(에비앙)/gm},HangukNamja:{description:"🤏",process:(e,t)=>({messages:[{origin:e,text:"유니코드에 후원까지 한다.",where:{from:t,to:t+e.length},word:{into:"🤏",type:"replace"}}],output:"🤏"}),regexp:/(한국남자)/gm}});const b=t(15,.15,.15),v=t(230,.15,.95),$=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`,k=r.span`
  font-size: 1.5rem;
  text-align: center;

  ins {
    cursor: pointer;
  }
`,z=r.label`
  font-size: 1rem;
  margin-top: 2rem;
`,E=r.div`
  position: relative;
  width: calc(100% - 2rem);
  max-width: 768px;
`,S=r.textarea`
  font-size: 1.5rem;

  width: calc(100% - 1.2rem);
  min-height: 2ch;

  border: 1px solid ${b};
  border-radius: 0.25rem;

  padding: 0.3rem 0.6rem;
`,j=r(S)``,A=r(S)``,C=r.button`
  position: absolute;
  right: 0.4rem;
  top: 0.6rem;

  border: 1px solid black;
  background-color: hsl(0, 0%, 95%);
  padding: 0.2rem;

  transition: opacity ease 0.2s, background-color ease 0.2s;

  opacity: 0;

  &:hover {
    background-color: hsl(0, 0%, 75%);
  }

  &:active {
    background-color: hsl(0, 0%, 85%);
  }

  #output:hover > & {
    opacity: 1;
  }
`,M=r.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: calc(100% - 2rem);
  max-width: 768px;
`,_=r.div`
  background-color: hsl(230, 35%, 90%);
  border-radius: 0.2rem;

  width: fit-content;
  height: fit-content;

  margin-top: 1.2rem;
  margin-right: 1.2rem;
  padding: 0.2rem 0.4rem;

  text-align: center;

  display: inline-block;

  &:last-child {
    margin-bottom: 1.2rem;
  }
`,L=({message:t})=>{const r="delete"===t.word.type?`${t.origin} 제거`:"replace"===t.word.type?e(`${t.origin}#{을} ${t.word.into}#{로} 변환`):"알 수 없는 작업";return s(_,null,t.text,s("br",null),r)},N=Object.values(y),O=["다시 십오 년","비어있는 에비앙 생수","엠블럼이 멋진 앱"];function Z(){const[e,t]=o(""),[r,a]=o(1),[c,p]=o({messages:[],output:""}),u=n(null),g=n(null);i((()=>{if(g.current){return new l(g.current).destroy}}),[g]),i((()=>{a([...e].filter((e=>"\n"===e)).length+1)}),[e]),i((()=>{p(function(e,t){let r=e;const o=[];for(const n of t)r=r.replace(n.regexp,((...e)=>{const t=e[0],r=e.slice(1,e.length-2),i=e[e.length-2],s=e[e.length-1],l=n.process(t,i,r,s);return o.push(...l.messages),l.output}));return o.sort(((e,t)=>e.where.from-t.where.from)),{messages:o,output:r}}(e,N))}),[e]);const[d]=o(O[Math.round(100*Math.random())%O.length]);return s($,null,s(k,null,"파랑새밈!!",s("br",null)," 심심하다면 아래에"," ",s("ins",{onClick:(e=>{u.current&&(u.current.value=e),t(e)}).bind(null,d)},d),"을 입력하거나 저 문장을 눌러보세요."),s(z,{htmlFor:"converter-input"},"입력"),s(E,null,s(j,{id:"converter-input",placeholder:"무슨 일이 일어나고 있나요?",onChange:({target:{value:e}})=>{t(e)},value:e,rows:r+1,wrap:"off"})),s(z,{htmlFor:"converter-output"},"결과"),s(E,{id:"output"},s(A,{id:"converter-output",value:c.output,rows:r,wrap:"off",readOnly:!0}),s(C,{ref:g,"data-clipboard-text":`${e} → ${c.output}\n#파랑새밈`},"Copy")),s(M,null,c.messages.map(((e,t)=>s(L,{key:t,message:e})))))}const B=r.div`
  width: calc(100% - 0.6rem * 2);
  background-color: ${b};
  color: ${v};

  font-size: 1.2rem;

  padding: 0.3rem 0.6rem;

  display: grid;
  grid-template-columns: 1fr auto;
`,P=r.a`
  color: hsl(210, 65%, 85%);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,F=()=>s(B,null,s("span",null,"파랑새밈 v1.6.1"),s("span",null,s(P,{href:"https://twitter.com/RanolP_777"},"Ranol☆P"),"가 만들었어요!"));function I(){return s(a,null,s(F,null),s(Z,null))}const R=c`
  body {
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: none;
  }

  textarea {
    font-family: inherit;
  }

  textarea {
    outline: none;
  }

  #root {
    max-width: 100vw;
    min-height: 100vh;
  }
`;p(s(a,null,s(u,{styles:[R]}),s(I,null)),document.getElementById("root"));
