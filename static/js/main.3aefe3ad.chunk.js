(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(2),r=a.n(l);a(11);var s=()=>{const[e,t]=Object(n.useState)(""),[a,l]=Object(n.useState)(""),[r,s]=Object(n.useState)(null),[o,i]=Object(n.useState)("00:00"),[m,u]=Object(n.useState)(null),[h,d]=Object(n.useState)({}),[p,E]=Object(n.useState)({}),[f,b]=Object(n.useState)(null),[g,y]=Object(n.useState)([]),[v,N]=Object(n.useState)(null),[j,O]=Object(n.useState)(null),[k,S]=Object(n.useState)(["",""]),[w,M]=Object(n.useState)(!1),[F,x]=Object(n.useState)(!1),[C,A]=Object(n.useState)(!1),[I,L]=Object(n.useState)(0),[P,T]=Object(n.useState)(0),[_,z]=Object(n.useState)(!1),[J,W]=Object(n.useState)(!1),[Y,B]=Object(n.useState)(!1);Object(n.useEffect)(()=>{(async()=>{try{const t=await fetch("https://hkrisztian.cloudftp.hu/data.php",{headers:{Origin:"https://fnatic91.github.io/LifeTimer/"}});if(!t.ok)throw new Error("Network response was not ok");const a=await t.json();u(a.healthFactors||{}),b(a.achievements||{}),y(a.lifeExpectancy||[]),O(a.timeQuips||{});const n=a.lifeExpectancy.find(e=>"United States"===e.country);n&&N(n.expectancy);const c={};Object.keys(a.healthFactors).forEach(e=>{c[e]="Average"}),d(c),E(c)}catch(e){console.error("Error fetching data:",e)}})(),(async()=>{try{const t=await fetch("https://ipapi.co/json/");if(!t.ok)throw new Error("Failed to fetch country data");const a=await t.json();l(a.country_name)}catch(e){console.error("Error fetching country by IP:",e)}})()},[]);const G=Object(n.useCallback)((t,a)=>{if(!m||!m[t]||!m[t][a])return 0;const n=m[t][a],c=Object.keys(n);for(let l of c){const[t,a]=l.split("-").map(Number);if(e>=t&&e<=a)return n[l]}return 0},[e,m]),H=Object(n.useCallback)(()=>{if(!g.length||!m||!e||!v)return;const t=g.find(e=>e.country===a);if(!t)return;let n=Number(e);Object.entries(h).forEach(e=>{let[t,a]=e;n-=G(t,a)});const c="Male"===r?t.expectancy_male:"Female"===r?t.expectancy_female:t.expectancy;if(!c)return;const l=n/(c/v*c/24),s=Math.floor(l),o=Math.floor(60*(l-s));i("".concat(s.toString().padStart(2,"0"),":").concat(o.toString().padStart(2,"0")));const u=6*o;return L(s%12*30+.5*o),T(u),"".concat(s.toString().padStart(2,"0"),":").concat(o.toString().padStart(2,"0"))},[e,a,r,h,m,g,G,v]),Q=Object(n.useCallback)(t=>{if(!t||!e)return"";const a="Male"===r?t.males:t.females,n=Math.floor(e/5)-4;if(n<0||n>=a.length)return"";const c=a[Math.floor(Math.random()*a.length)],l=c.achievements[Math.min(n,c.achievements.length-1)];return"".concat(c.name,": ").concat(l.achievement)},[e,r]);Object(n.useEffect)(()=>{m&&f&&g&&j&&e&&(H(),S([Q(f),Q(f)]))},[e,a,r,h,H,Q,m,f,g,j]);Object(n.useEffect)(()=>{_&&(x(!0),W(!1),A(!1),B(!1),setTimeout(()=>{H(),x(!1),A(!0),W(!0),B(!0)},1e3))},[_,H]);const U=parseInt(o.split(":")[0])<12,q=Object(n.useMemo)(()=>{if(!m)return{};const e={};return Object.entries(m).forEach(t=>{let[a,n]=t;const c=Object.keys(n).length;e[a]=Array.from({length:c},(e,t)=>({position:t/(c-1)*100}))}),e},[m]);return m&&f&&g&&j?_?c.a.createElement("div",{className:"container dynamic-height reveal"},c.a.createElement("h1",{className:"title"},"LifeTimer\u2122"),c.a.createElement("p",{className:"subtitle"},"More Accurate Estimate"),c.a.createElement("div",{className:"clock ".concat(F?"spinning":"")},c.a.createElement("div",{className:"clock-hand hour-hand",style:{transform:"rotate(".concat(I,"deg)")}}),c.a.createElement("div",{className:"clock-hand minute-hand",style:{transform:"rotate(".concat(P,"deg)")}})),C&&c.a.createElement("h2",{className:"life-timer-display"},o,c.a.createElement("span",{className:"am-indicator"},U?"AM":"PM")),J&&c.a.createElement(c.a.Fragment,null,Y&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"left-inspiration"},k[0]),c.a.createElement("div",{className:"right-inspiration"},k[1])),Object.entries(m).map(e=>{let[t,a]=e;const n=Object.keys(a),l=n.findIndex(e=>e===h[t]);return c.a.createElement("div",{className:"health-factor-group",key:t},c.a.createElement("h3",{className:"health-factor-label"},t),c.a.createElement("p",{className:"health-factor-selected"},"Selected: ",h[t]||"None"),c.a.createElement("div",{style:{position:"relative",width:"100%",height:"40px"}},Array.from({length:n.length},(e,t)=>c.a.createElement("div",{key:t,className:"slider-mark",style:{left:"".concat(t/(n.length-1)*100,"%"),top:14}})),c.a.createElement("input",{className:"health-factor-slider",type:"range",min:"0",max:n.length-1,value:l,disabled:!0})))}),c.a.createElement("div",{className:"new-options"},c.a.createElement("h2",{className:"new-options-title"},"New Options to Improve Your Life Expectancy:"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.health.com",target:"_blank",rel:"noopener noreferrer"},"Health and Wellness Programs")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.fitness.com",target:"_blank",rel:"noopener noreferrer"},"Fitness Training Services")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.nutrition.com",target:"_blank",rel:"noopener noreferrer"},"Personalized Nutrition Plans")))))):c.a.createElement("div",{className:"container ".concat(C?"reveal":""," dynamic-height")},c.a.createElement("h1",{className:"title"},"LifeTimer\u2122"),c.a.createElement("p",{className:"subtitle"},"What time is it for you?"),Y&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"left-inspiration"},k[0]),c.a.createElement("div",{className:"right-inspiration"},k[1])),!w&&c.a.createElement(c.a.Fragment,null,c.a.createElement("select",{value:a,onChange:e=>l(e.target.value)},g.map(e=>c.a.createElement("option",{key:e.country,value:e.country},e.country))),c.a.createElement("div",null,c.a.createElement("button",{className:"Male"===r?"active":"",onClick:()=>s("Male"===r?null:"Male")},"Male"),c.a.createElement("button",{className:"Female"===r?"active":"",onClick:()=>s("Female"===r?null:"Female")},"Female")),c.a.createElement("div",null,c.a.createElement("label",null,"Your Age: "),c.a.createElement("input",{type:"number",value:e,onChange:e=>t(Number(e.target.value))}))),!w&&c.a.createElement("button",{onClick:()=>{x(!0),M(!0),B(!1),setTimeout(()=>{H(),x(!1),A(!0),B(!0)},1e3)}},"Go"),w&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"clock ".concat(F?"spinning":"")},c.a.createElement("div",{className:"clock-hand hour-hand",style:{transform:"rotate(".concat(I,"deg)")}}),c.a.createElement("div",{className:"clock-hand minute-hand",style:{transform:"rotate(".concat(P,"deg)")}})),C&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"life-timer-display"},o,c.a.createElement("span",{className:"am-indicator"},U?"AM":"PM")),c.a.createElement("p",{className:"message"},j[parseInt(o.split(":")[0])]||""),c.a.createElement("p",{className:"message"},"Let\u2019s make that more accurate."),Object.entries(m).map(e=>{let[t,a]=e;const n=q[t],l=Object.keys(a),r=l.findIndex(e=>e===p[t]);return c.a.createElement("div",{className:"health-factor-group",key:t},c.a.createElement("h3",{className:"health-factor-label"},t),c.a.createElement("p",{className:"health-factor-selected"},"Selected: ",p[t]||"None"),c.a.createElement("div",{style:{position:"relative",width:"100%",height:"40px"}},n.map((e,t)=>c.a.createElement("div",{key:t,className:"slider-mark",style:{left:"".concat(e.position,"%"),visibility:t===r?"hidden":"visible",top:14}})),c.a.createElement("input",{className:"health-factor-slider",type:"range",min:"0",max:l.length-1,value:r,onChange:e=>E({...p,[t]:l[e.target.value]})})))}),c.a.createElement("button",{onClick:()=>{d(p),z(!0)}},"Calculate Again")))):c.a.createElement("div",null,"Loading...")};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root"))},3:function(e,t,a){e.exports=a(12)}},[[3,1,2]]]);