(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(2),r=a.n(l);a(11);var s=()=>{const[e,t]=Object(n.useState)(""),[a,l]=Object(n.useState)(""),[r,s]=Object(n.useState)(null),[o,i]=Object(n.useState)("00:00"),[m,u]=Object(n.useState)(null),[h,p]=Object(n.useState)({}),[d,f]=Object(n.useState)(null),[b,y]=Object(n.useState)([]),[E,g]=Object(n.useState)(null),[j,v]=Object(n.useState)("");Object(n.useEffect)(()=>{(async()=>{try{const t=await fetch("https://hkrisztian.cloudftp.hu/data.php",{headers:{Origin:"https://fnatic91.github.io/LifeTimer/"}});if(!t.ok)throw new Error("Network response was not ok");const a=await t.json();u(a.healthFactors),f(a.achievements),y(a.lifeExpectancy||[]),g(a.timeQuips)}catch(e){console.error("Error fetching data:",e)}})(),(async()=>{try{const t=await fetch("https://ipapi.co/json/");if(!t.ok)throw new Error("Failed to fetch country data");const a=await t.json();l(a.country_name)}catch(e){console.error("Error fetching country by IP:",e)}})()},[]);const k=Object(n.useCallback)((t,a)=>{const n=m[t][a],c=Object.keys(n);for(let l of c){const[t,a]=l.split("-").map(Number);if(e>=t&&e<=a)return n[l]}return 0},[e,m]),O=Object(n.useCallback)(()=>{if(!b||!m||!e)return;const t=b.find(e=>e.country===a);if(!t)return;let n=e;Object.entries(h).forEach(e=>{let[t,a]=e;n+=k(t,a)});const c="Male"===r?t.expectancy_male:"Female"===r?t.expectancy_female:t.expectancy;if(!c)return;const l=n/c*24,s=Math.floor(l),o=Math.floor(60*(l-s));i("".concat(s.toString().padStart(2,"0"),":").concat(o.toString().padStart(2,"0")))},[e,a,r,h,m,b,k]),N=Object(n.useCallback)(t=>{if(!t||!e)return"";const a="Male"===r?t.males:t.females,n=Math.floor(e/5)-4;if(n<0||n>=a.length)return"";const c=a[Math.floor(Math.random()*a.length)],l=c.achievements[Math.min(n,c.achievements.length-1)];return"".concat(c.name,": ").concat(l.achievement)},[e,r]);Object(n.useEffect)(()=>{m&&d&&b&&E&&e&&(O(),v(N(d)))},[e,a,r,h,O,N,m,d,b,E]);const w=parseInt(o.split(":")[0])<12,M=Object(n.useMemo)(()=>{if(!m)return{};const e={};return Object.entries(m).forEach(t=>{let[a,n]=t;const c=Object.keys(n);e[a]=c.map((e,t)=>({position:t/(c.length-1)*100}))}),e},[m]);return m&&d&&b&&E?c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title"},"LifeTimer\u2122"),c.a.createElement("p",{className:"subtitle"},"What time is it for you?"),c.a.createElement("select",{value:a,onChange:e=>l(e.target.value)},b.map(e=>c.a.createElement("option",{key:e.country,value:e.country},e.country))),c.a.createElement("div",null,c.a.createElement("button",{className:"Male"===r?"active":"",onClick:()=>s("Male"===r?null:"Male")},"Male"),c.a.createElement("button",{className:"Female"===r?"active":"",onClick:()=>s("Female"===r?null:"Female")},"Female")),c.a.createElement("div",null,c.a.createElement("label",null,"Your Age: "),c.a.createElement("input",{type:"number",value:e,onChange:e=>t(Number(e.target.value))})),c.a.createElement("div",{className:"clock"},c.a.createElement("div",{className:"clock-hand hour-hand",style:{transform:"rotate(".concat(parseInt(o.split(":")[0])%12*30,"deg)")}}),c.a.createElement("div",{className:"clock-hand minute-hand",style:{transform:"rotate(".concat(6*parseInt(o.split(":")[1]),"deg)")}})),c.a.createElement("h2",{className:"life-timer-display"},o,c.a.createElement("span",{className:"am-indicator"},w?"AM":"PM")),c.a.createElement("p",{className:"message"},E[parseInt(o.split(":")[0])]),Object.entries(m).map(e=>{let[t,a]=e;const n=M[t],l=Object.keys(a).findIndex(e=>e===h[t]);return c.a.createElement("div",{className:"health-factor-group",key:t},c.a.createElement("h3",{className:"health-factor-label"},t),c.a.createElement("p",{className:"health-factor-selected"},"Selected:"," ",h[t]?Object.keys(a).find(e=>e===h[t]):"None"),c.a.createElement("div",{style:{position:"relative",width:"100%",height:"40px"}},n.map((e,t)=>c.a.createElement("div",{key:t,className:"slider-mark",style:{left:"".concat(e.position,"%"),visibility:t===l?"hidden":0===t&&0===l?"hidden":"visible",top:14}})),c.a.createElement("input",{className:"health-factor-slider",type:"range",min:"0",max:Object.keys(a).length-1,value:l,onChange:e=>p({...h,[t]:Object.keys(a)[e.target.value]})})))}),c.a.createElement("p",{className:"message"},"With a few healthier choices, you could wind back your clock by up to 1 hour (3 years)."),j&&c.a.createElement("p",{className:"message"},j)):c.a.createElement("div",null,"Loading...")};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root"))},3:function(e,t,a){e.exports=a(12)}},[[3,1,2]]]);