(this["webpackJsonpmxm-admin"]=this["webpackJsonpmxm-admin"]||[]).push([[0],{104:function(e,t,a){e.exports=a(220)},109:function(e,t,a){},111:function(e,t,a){},220:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(93),s=a.n(c),o=(a(109),a(8)),l=a.n(o),i=a(11),u=a(6),m=a(94),d=a.n(m),p=(a(111),a(102));var f=function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),c=a[0],s=a[1],o=Object(n.useCallback)((function(e){console.log(e)}),[]);Object(n.useEffect)((function(){var t=[].concat(e.choices).map((function(e){return{answer:e,amount:0}}));e.answers.forEach((function(e){t.find((function(t,a){if(t.answer===e.answer)return t.amount++,!0}))})),t.find((function(e){var t,a;e.answer=(t=e.answer,a=15,t.length>a?t.slice(0,a-1)+"\u2026":t)})),s(t)}),[]);var l={title:{visible:!0,text:""},forceFit:!0,padding:"auto",data:c,xField:"answer",yField:"amount",meta:{answer:{alias:"Right answer: "+e.right},amount:{alias:"Count"}}};return r.a.createElement(p.a,Object.assign({},l,{onMount:o}))},h=function(e){var t=e.question;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.id,". ",t.text),r.a.createElement("p",{className:"card-text"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Field"),r.a.createElement("th",{scope:"col"},"Data"))),r.a.createElement("tbody",null,t.state&&r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"State"),r.a.createElement("td",null,t.state)),t.choices&&r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Choices"),r.a.createElement("td",null,t.choices.map((function(e,t){return r.a.createElement("div",{key:t},e)})))),t.correct_answer&&r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Correct_answer"),r.a.createElement("td",null,t.correct_answer))))),t.answers&&r.a.createElement("div",null,r.a.createElement("h5",{className:"card-title"},"Answers"),r.a.createElement("p",{className:"card-text"},r.a.createElement("table",{className:"table table-striped table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"User"),r.a.createElement("th",{scope:"col"},"Answer"))),r.a.createElement("tbody",null,[].concat(t.answers).sort((function(e,t){return e.created_at>t.created_at?-1:1})).map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row"},e.user),r.a.createElement("td",null,e.answer))})))),r.a.createElement("div",null,"Total answers: ",Array.isArray(t.answers)?t.answers.length:0),Array.isArray(t.choices)&&t.choices.length&&r.a.createElement("div",null,r.a.createElement(f,{right:t.correct_answer,choices:t.choices,answers:t.answers}))))))};function E(){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://tinder.pirotech.space/storm/question/",{headers:{"X-User":"SPARKY","Content-Type":"application/json"}});case 3:if(200!==(t=e.sent).status){e.next=9;break}return e.next=7,t.json();case 7:return a=e.sent,e.abrupt("return",a.result);case 9:return e.t0=Error,e.t1="Failed ".concat(t,", "),e.next=13,t.json();case 13:throw e.t2=e.sent,e.t3=e.t1.concat.call(e.t1,e.t2),(0,e.t0)(e.t3);case 18:throw e.prev=18,e.t4=e.catch(0),console.log(JSON.stringify(e.t4)),e.t4;case 22:case"end":return e.stop()}}),e,null,[[0,18]])})))).apply(this,arguments)}function v(){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://tinder.pirotech.space/storm/question/control",{headers:{"X-User":"SPARKY","Content-Type":"application/json"}});case 3:if(200!==(t=e.sent).status){e.next=10;break}return e.next=7,t.json();case 7:return a=e.sent,console.log("Current question "+JSON.stringify(a.result)),e.abrupt("return",a.result);case 10:return e.t0=Error,e.t1="Failed ".concat(t,", "),e.next=14,t.json();case 14:throw e.t2=e.sent,e.t3=e.t1.concat.call(e.t1,e.t2),(0,e.t0)(e.t3);case 19:throw e.prev=19,e.t4=e.catch(0),console.log(JSON.stringify(e.t4)),e.t4;case 23:case"end":return e.stop()}}),e,null,[[0,19]])})))).apply(this,arguments)}function g(e,t){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://tinder.pirotech.space/storm/question/set_state",{headers:{"X-User":"SPARKY","Content-Type":"application/json"},method:"POST",body:JSON.stringify({state:a,question_id:t})});case 3:if(200===(n=e.sent).status){e.next=14;break}return e.t0=Error,e.t1="Failed to set state ".concat(JSON.stringify(n),", "),e.t2=JSON,e.next=10,n.json();case 10:throw e.t3=e.sent,e.t4=e.t2.stringify.call(e.t2,e.t3),e.t5=e.t1.concat.call(e.t1,e.t4),(0,e.t0)(e.t5);case 14:return console.log("State changed. Question: "+t+" State: "+a),e.abrupt("return",!0);case 18:throw e.prev=18,e.t6=e.catch(0),console.log(JSON.stringify(e.t6)),e.t6;case 22:case"end":return e.stop()}}),e,null,[[0,18]])})))).apply(this,arguments)}var N=function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)(!1),m=Object(u.a)(o,2),d=m[0],p=m[1];function f(){return(f=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.t0=s,e.next=4,E();case 4:e.t1=e.sent,(0,e.t0)(e.t1),setTimeout((function(){return p(!1)}),500);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(i.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(c.id,a);case 2:e.updateQuestions();case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=setInterval((function(){!function(){f.apply(this,arguments)}()}),1e3);return function(){return clearInterval(e)}}),[]),null===c?r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-11"},r.a.createElement("div",{className:"jumbotron"},d&&r.a.createElement("span",{className:"checked"},"synced"),r.a.createElement("h2",null,"No current question")))):r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-11"},r.a.createElement("div",{className:"jumbotron"},d&&r.a.createElement("span",{className:"checked"},"synced"),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-5"},"Current question"),r.a.createElement("p",null,r.a.createElement(h,{question:c})),r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){return function(e){return b.apply(this,arguments)}("closed")},className:"btn btn-danger btn-lg",href:"#",role:"button"},"Close question"))))))},x=function(e){function t(e,t){return a.apply(this,arguments)}function a(){return(a=Object(i.a)(l.a.mark((function t(a,n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(a,n);case 2:if(!t.sent){t.next=6;break}e.updateQuestions(),t.next=7;break;case 6:alert("Failed to open "+a);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-11 col-md-7",id:"accordion"},[].concat(e.questions).sort((function(e,t){return e.state<t.state||e.state===t.state&&e.id>t.id?1:-1})).map((function(e){return r.a.createElement("div",{key:e.id,className:"card"},r.a.createElement("div",{className:"card-header",id:"headingOne"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement("h5",{className:"mb-0"},r.a.createElement("button",{className:"btn btn-link","data-toggle":"collapse","data-target":"#question"+e.id,"aria-expanded":"true","aria-controls":"question"+e.id},e.id,". ",(a=e.text,n=30,a.length>n?a.slice(0,n-1)+"\u2026":a)))),r.a.createElement("div",{className:"col-4"},"ready"===e.state&&r.a.createElement("button",{onClick:function(){return t(e.id,"open")},type:"button",className:"btn btn-success"},"Start question"),"closed"===e.state&&r.a.createElement("div",null,r.a.createElement("a",{href:"javascript:void(0)",className:"badge badge-danger no-pointer"},"Closed"),r.a.createElement("a",{href:"javascript:void(0)",onClick:function(){return t(e.id,"ready")},className:"badge badge-warning"},"set ready again")),"open"===e.state&&r.a.createElement("a",{href:"javascript:void(0)",className:"badge badge-info no-pointer"},"Open")))),r.a.createElement("div",{id:"question"+e.id,className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},r.a.createElement("div",{className:"card-body"},r.a.createElement(h,{question:e}),r.a.createElement("div",{className:"text-right"},r.a.createElement("a",{href:"#current"},"scroll up")))));var a,n}))))};var j=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];function s(){return o.apply(this,arguments)}function o(){return(o=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,v();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){s()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"MxM Storm panel")),r.a.createElement("a",{name:"current"}),r.a.createElement(N,{updateQuestions:s}),r.a.createElement(x,{updateQuestions:s,questions:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a.p+"static/media/image.78baeaab.png"}},[[104,1,2]]]);
//# sourceMappingURL=main.1d084b82.chunk.js.map