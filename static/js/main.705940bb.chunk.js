(this.webpackJsonpmemory=this.webpackJsonpmemory||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/0.5e56f6df.jpg"},function(e,t,n){e.exports=n.p+"static/media/1.66e813ce.jpg"},function(e,t,n){e.exports=n.p+"static/media/2.9a29c431.jpg"},function(e,t,n){e.exports=n.p+"static/media/3.9f6cdb8a.jpg"},function(e,t,n){e.exports=n.p+"static/media/4.d9127c30.jpg"},function(e,t,n){e.exports=n.p+"static/media/5.11cd3c78.jpg"},function(e,t,n){e.exports=n.p+"static/media/6.0a5217a1.jpg"},function(e,t,n){e.exports=n.p+"static/media/7.1e553912.jpg"},function(e,t,n){e.exports=n.p+"static/media/8.1f4efb8a.jpg"},function(e,t,n){e.exports=n(33)},,,,,,,,,function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),l=n.n(c),i=n(11),o=n.n(i),s=n(4),m=n(3),u=n(1),d=n(2),p=d.b.header(a||(a=Object(u.a)(["\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background: #000;\n    color: #fff;\n    flex-wrap: wrap;\n    padding: 1rem;\n    text-align: center;\n"]))),b=d.b.h1(r||(r=Object(u.a)(["\n\n"])));var f,g,x,j,h=function(e){return l.a.createElement(p,null,l.a.createElement(b,null,"Can you click on all 9 cards without repetition?!"))},O=d.b.div(f||(f=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  color: black;\n"]))),E=d.b.section(g||(g=Object(u.a)(["\n    max-width: 600px;\n    width: 90vw;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 2rem;\n"]))),v=d.b.article(x||(x=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 200px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n  cursor: ",";\n\n  &:hover {\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;\n    transform: translateY(-15px);\n    transition: all 0.4ms ease;\n  }\n"])),(function(e){return e.hideCursor?"not-allowed":"pointer"})),w=d.b.img(j||(j=Object(u.a)(["\n  max-width: 100%;\n  object-fit: cover;\n  margin: 0;\n"])));var S=function(e){var t=e.src,n=e.title,a=e.updateScore,r=e.randomizeImages,c=e.disabledCards;return l.a.createElement(l.a.Fragment,null,!1===c?l.a.createElement(v,{onClick:function(e){var t=e.currentTarget.title;r(),a(t)},title:n},l.a.createElement(w,{src:t,alt:n})):l.a.createElement(v,{title:n,hideCursor:!0},l.a.createElement(w,{src:t,alt:n})))},y=n(15),k=n.n(y),C=n(16),z=n.n(C),G=n(17),I=n.n(G),M=n(18),J=n.n(M),N=n(19),B=n.n(N),R=n(20),Y=n.n(R),_=n(21),F=n.n(_),T=n(22),U=n.n(T),q=n(23),A=n.n(q);var D,H,K,L,P=function(e){var t=e.updateScore,n=e.disabledCards,a=Object(c.useState)([{title:"image 0",src:k.a},{title:"image 1",src:z.a},{title:"image 2",src:I.a},{title:"image 3",src:J.a},{title:"image 4",src:B.a},{title:"image 5",src:Y.a},{title:"image 6",src:F.a},{title:"image 7",src:U.a},{title:"image 8",src:A.a}]),r=Object(m.a)(a,2),i=r[0],o=r[1],u=Object(c.useState)([]),d=Object(m.a)(u,2);function p(){for(var e=Object(s.a)(i),t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[n],e[n]=a}o(e)}return d[0],d[1],l.a.createElement(O,null,l.a.createElement(E,null,i.map((function(e){return l.a.createElement(S,{src:e.src,title:e.title,key:e.title,updateScore:t,randomizeImages:p,disabledCards:n,role:"button"})}))))},Q=Object(d.a)(D||(D=Object(u.a)(["\n    *, *::after, *::before {\n        box-sizing: border-box;\n        padding: 0;\n        margin: 0;\n    }\n"]))),V=d.b.div(H||(H=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    width: 100%;\n"]))),W=d.b.footer(K||(K=Object(u.a)(["\n    background: #000;\n    color: #fff;\n    text-align: center;\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n"]))),X=d.b.a(L||(L=Object(u.a)(["\n    &:visited {\n        color: blue;\n    }\n"])));var Z,$,ee,te=function(){return l.a.createElement(W,null,l.a.createElement("small",null,"Made by:"," ",l.a.createElement("a",{href:"www.natashajohnson.dev",target:"_blank"},"Natasha Johnson")," "),l.a.createElement("small",null,"Images courtesy of:"," ",l.a.createElement(X,{href:"https://randomuser.me/photos",target:"_blank"},"Random User Generator")," "))},ne=d.b.div(Z||(Z=Object(u.a)(["\n  display: flex;\n  gap: 2rem;\n  justify-content: center;\n  padding: 1rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n  align-items: center;\n  text-align: center;\n"]))),ae=d.b.span($||($=Object(u.a)(["\n    color: blue;\n    font-size: 1.5rem;\n    width: 100%;\n    display: block;\n"]))),re=d.b.button(ee||(ee=Object(u.a)(["\n  border: 1px solid transparent;\n  padding: 0.5rem 0.75rem;\n  font-size: 1rem;\n  background: blue;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;\n    transform: translateY(-5px);\n  }\n"])));var ce=function(e){var t=e.currentScore,n=e.bestScore,a=e.startNewGame;return l.a.createElement(ne,null,l.a.createElement("p",null,"Current Score: ",l.a.createElement(ae,null,t)),l.a.createElement("p",null,"Best Score: ",l.a.createElement(ae,null,n)),l.a.createElement(re,{onClick:function(){a()}},"Reset Game"))};var le=function(){var e=Object(c.useState)(0),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(0),i=Object(m.a)(r,2),o=i[0],u=i[1],d=Object(c.useState)([0]),p=Object(m.a)(d,2),b=p[0],f=p[1],g=Object(c.useState)([]),x=Object(m.a)(g,2),j=x[0],O=x[1],E=Object(c.useState)(!1),v=Object(m.a)(E,2),w=v[0],S=v[1];return l.a.createElement(V,null,l.a.createElement(Q,null),l.a.createElement(h,{currentScore:n,bestScore:o}),l.a.createElement(ce,{currentScore:n,bestScore:o,startNewGame:function(){console.log(w),a(0),u(0),S(!1)}}),l.a.createElement(P,{updateScore:function(e){O([].concat(Object(s.a)(j),[e])),function(e){j.filter((function(t){return t===e})).length>0?f([].concat(Object(s.a)(b),[n])):a(n+1)}(e),!0===(9===n)&&(S(!0),u(n),a(0))},disabledCards:w}),l.a.createElement(te,null))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(le,null)),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.705940bb.chunk.js.map