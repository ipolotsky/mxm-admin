(this["webpackJsonpmxm-admin"]=this["webpackJsonpmxm-admin"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/image.78baeaab.png"},function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),s=n.n(c),o=(n(12),n(6)),u=n.n(o),i=(n(13),n(1)),l=n.n(i),p=n(2),m=n(3),f=function(e){var t=e.question;return r.a.createElement("div",{className:"question-content"},r.a.createElement("p",null,"Id: ",t.id),r.a.createElement("p",null,"Question: ",t.text),t.state&&r.a.createElement("p",null,"State: ",t.state),t.choices&&r.a.createElement("p",null,"Choices: ",JSON.stringify(t.choices)),t.correct_answer&&r.a.createElement("p",null,"Correct answer: ",t.correct_answer),t.answers&&r.a.createElement("p",null,r.a.createElement("br",null),"Answers: ",JSON.stringify(t.answers)))};function d(){return h.apply(this,arguments)}function h(){return(h=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return{status:"ok",result:null},t={status:"ok",result:{id:1,text:"What is correct answer?",image:null,choices:["correct","incorrect"]}},e.abrupt("return",t.result);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return b.apply(this,arguments)}function b(){return(b=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return{status:"ok",result:[]},t={status:"ok",result:[{id:1,state:"open",text:"What is correct answer?",image:null,choices:["correct","incorrect"],correct_answer:"correct",answers:[]},{id:2,state:"closed",text:"Another question",image:null,choices:["aaaaaa","bbbbbb","ccccccc","dddddddd"],correct_answer:"aaaaaa",answers:[]},{id:3,state:"closed",text:"Third onw",image:null,choices:["qwer","qwerty","asdf","asdfgh"],correct_answer:"qwerty",answers:[]}]},e.abrupt("return",t.result);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("State changed. Question: "+t+" State: "+n),e.abrupt("return",!0);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(){var e=Object(a.useState)({}),t=Object(m.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),o=Object(m.a)(s,2),u=o[0],i=o[1];function h(){return(h=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.t0=c,e.next=4,d();case 4:e.t1=e.sent,(0,e.t0)(e.t1),setTimeout((function(){return i(!1)}),500);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return b.apply(this,arguments)}function b(){return(b=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(n.id,t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){var e=setInterval((function(){!function(){h.apply(this,arguments)}()}),1e3);return function(){return clearInterval(e)}}),[]),null===n?r.a.createElement("div",{className:"current-question"},u&&r.a.createElement("span",{className:"checked"},"checked"),r.a.createElement("h2",null,"No current question")):r.a.createElement("div",{className:"current-question"},u&&r.a.createElement("span",{className:"checked"},"checked"),r.a.createElement("h2",null,"Current question:"),r.a.createElement(f,{question:n}),r.a.createElement("button",{onClick:function(){return w("openToAnswer")},className:"start-in-list"},"Request answers"),r.a.createElement("button",{onClick:function(){return w("closed")},className:"start-in-list closed"},"Close question"))},x=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1];function s(){return(s=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,w();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t,"open");case 2:if(!e.sent){e.next=10;break}return e.t0=c,e.next=6,w();case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 10:alert("Failed to open "+t);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),r.a.createElement("div",null,n.map((function(e){return r.a.createElement("div",{key:e.id,className:"question-in-list"},r.a.createElement(f,{question:e}),"closed"===e.state&&r.a.createElement("button",{onClick:function(){return function(e){return o.apply(this,arguments)}(e.id)},className:"start-in-list"},"Show question"))})))};var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:u.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"MxM Storm panel"),r.a.createElement(k,null),r.a.createElement("h3",null,"Questions:"),r.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.4d2f10f6.chunk.js.map