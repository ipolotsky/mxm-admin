(this["webpackJsonpmxm-admin"]=this["webpackJsonpmxm-admin"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports=n.p+"static/media/image.78baeaab.png"},function(t,e,n){t.exports=n(15)},,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(5),s=n.n(c),o=(n(12),n(6)),i=n.n(o),u=(n(13),n(1)),l=n.n(u),p=n(2),f=n(3),m=function(t){var e=t.question;return a.a.createElement("div",{className:"question-content"},a.a.createElement("p",null,"Id: ",e.id),a.a.createElement("p",null,"Question: ",e.text),e.state&&a.a.createElement("p",null,"State: ",e.state),e.choices&&a.a.createElement("p",null,"Choices: ",JSON.stringify(e.choices)),e.correct_answer&&a.a.createElement("p",null,"Correct answer: ",e.correct_answer),e.answers&&a.a.createElement("p",null,a.a.createElement("br",null),"Answers: ",JSON.stringify(e.answers)))};function h(){return d.apply(this,arguments)}function d(){return(d=Object(p.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://tinder.pirotech.space/storm/question/",{headers:{"X-User":"SPARKY","Content-Type":"application/json"}});case 3:if(200!==(e=t.sent).status){t.next=10;break}return t.next=7,e.json();case 7:return n=t.sent,console.log("Current question "+JSON.stringify(n.result)),t.abrupt("return",n.result);case 10:return t.t0=Error,t.t1="Failed ".concat(e,", "),t.next=14,e.json();case 14:throw t.t2=t.sent,t.t3=t.t1.concat.call(t.t1,t.t2),(0,t.t0)(t.t3);case 19:throw t.prev=19,t.t4=t.catch(0),console.log(JSON.stringify(t.t4)),t.t4;case 23:case"end":return t.stop()}}),t,null,[[0,19]])})))).apply(this,arguments)}function v(){return w.apply(this,arguments)}function w(){return(w=Object(p.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://tinder.pirotech.space/storm/question/control",{headers:{"X-User":"SPARKY","Content-Type":"application/json"}});case 3:if(200!==(e=t.sent).status){t.next=10;break}return t.next=7,e.json();case 7:return n=t.sent,console.log("Current question "+JSON.stringify(n.result)),t.abrupt("return",n.result);case 10:return t.t0=Error,t.t1="Failed ".concat(e,", "),t.next=14,e.json();case 14:throw t.t2=t.sent,t.t3=t.t1.concat.call(t.t1,t.t2),(0,t.t0)(t.t3);case 19:throw t.prev=19,t.t4=t.catch(0),console.log(JSON.stringify(t.t4)),t.t4;case 23:case"end":return t.stop()}}),t,null,[[0,19]])})))).apply(this,arguments)}function E(t,e){return b.apply(this,arguments)}function b(){return(b=Object(p.a)(l.a.mark((function t(e,n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://tinder.pirotech.space/storm/question/set_state",{headers:{"X-User":"SPARKY","Content-Type":"application/json"},method:"POST",body:JSON.stringify({state:n,question_id:e})});case 3:if(200===(r=t.sent).status){t.next=14;break}return t.t0=Error,t.t1="Failed to set state ".concat(JSON.stringify(r),", "),t.t2=JSON,t.next=10,r.json();case 10:throw t.t3=t.sent,t.t4=t.t2.stringify.call(t.t2,t.t3),t.t5=t.t1.concat.call(t.t1,t.t4),(0,t.t0)(t.t5);case 14:return console.log("State changed. Question: "+e+" State: "+n),t.abrupt("return",!0);case 18:throw t.prev=18,t.t6=t.catch(0),console.log(JSON.stringify(t.t6)),t.t6;case 22:case"end":return t.stop()}}),t,null,[[0,18]])})))).apply(this,arguments)}var x=function(){var t=Object(r.useState)({}),e=Object(f.a)(t,2),n=e[0],c=e[1],s=Object(r.useState)(!1),o=Object(f.a)(s,2),i=o[0],u=o[1];function d(){return(d=Object(p.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.t0=c,t.next=4,h();case 4:t.t1=t.sent,(0,t.t0)(t.t1),setTimeout((function(){return u(!1)}),500);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(){return(v=Object(p.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(n.id,e);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){var t=setInterval((function(){!function(){d.apply(this,arguments)}()}),1e3);return function(){return clearInterval(t)}}),[]),null===n?a.a.createElement("div",{className:"current-question"},i&&a.a.createElement("span",{className:"checked"},"checked"),a.a.createElement("h2",null,"No current question")):a.a.createElement("div",{className:"current-question"},i&&a.a.createElement("span",{className:"checked"},"checked"),a.a.createElement("h2",null,"Current question:"),a.a.createElement(m,{question:n}),a.a.createElement("button",{onClick:function(){return function(t){return v.apply(this,arguments)}("closed")},className:"start-in-list closed"},"Close question"))},y=function(){var t=Object(r.useState)([]),e=Object(f.a)(t,2),n=e[0],c=e[1];function s(){return(s=Object(p.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=c,t.next=3,v();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(){return(o=Object(p.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e,"open");case 2:if(!t.sent){t.next=10;break}return t.t0=c,t.next=6,v();case 6:t.t1=t.sent,(0,t.t0)(t.t1),t.next=11;break;case 10:alert("Failed to open "+e);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),a.a.createElement("div",null,n.map((function(t){return a.a.createElement("div",{key:t.id,className:"question-in-list"},a.a.createElement(m,{question:t}),"closed"===t.state&&a.a.createElement("button",{onClick:function(){return function(t){return o.apply(this,arguments)}(t.id)},className:"start-in-list"},"Show question"))})))};var g=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"MxM Storm panel"),a.a.createElement(x,null),a.a.createElement("h3",null,"Questions:"),a.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.859e8892.chunk.js.map