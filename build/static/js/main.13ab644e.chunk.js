(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(11),r=t.n(l),s=t(2),u=function(e){var n=e.heading,t=e.value,a=e.onChange;return o.a.createElement("div",null,n,o.a.createElement("input",{value:t,onChange:a}))},c=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,l=e.newNumber,r=e.handleNumberChange;return o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,"nimi:",o.a.createElement("input",{value:t,onChange:a})),o.a.createElement("br",null),o.a.createElement("div",null,"numero:",o.a.createElement("input",{value:l,onChange:r})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},i=function(e){var n=e.person,t=e.onClick;return o.a.createElement("tr",null,o.a.createElement("td",null,n.name),o.a.createElement("td",null,n.number),o.a.createElement("td",null,o.a.createElement("button",{onClick:t},"poista")))},m=function(e){var n=e.personsToShow,t=e.onClick;return n.map(function(e){return o.a.createElement(i,{key:e.id,person:e,onClick:t(e.id)})})},g=t(3),f=t.n(g),d="http://localhost:3001/api/persons",h=function(){return f.a.get(d)},v=function(e){return f.a.post(d,e)},E=function(e,n){return f.a.put("".concat(d,"/").concat(e),n)},p=function(e){return f.a.delete("".concat(d,"/").concat(e))},b=function(e){var n=e.message,t=e.messageClass;return""===n?null:o.a.createElement("div",{className:t},n)},C=function(){var e=Object(a.useState)([]),n=Object(s.a)(e,2),t=n[0],l=n[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),g=i[0],f=i[1],d=Object(a.useState)(""),C=Object(s.a)(d,2),w=C[0],j=C[1],k=Object(a.useState)(""),O=Object(s.a)(k,2),N=O[0],S=O[1],T=Object(a.useState)({message:"",messageClass:"nothing"}),y=Object(s.a)(T,2),P=y[0],L=y[1];Object(a.useEffect)(function(){console.log("effect"),h().then(function(e){console.log("promise fulfilled"),l(e.data)})},[]),console.log("render",t.length,"persons");var x=function(e,n){window.confirm('"'.concat(n.name,'"   on jo luettelossa, korvaatanko vanha numero uudella ?'))&&E(e,n).then(function(n){console.log(n,"in numberUpdate"),l(t.map(function(t){return t.id!==e?t:n.data})),L({message:'"'.concat(g,'" phone numero muutetaan'),messageClass:"changed"}),setTimeout(function(){L({message:"",messageClass:"nothing"})},1e3),f(""),j("")}).catch(function(n){var a=t.filter(function(n){return n.id!==e});l(a),L({message:'Henkil\xf6n "'.concat(g,'" oli jo poistettu'),messageClass:"error"}),setTimeout(function(){L({message:"",messageClass:"nothing"})},1e3),f(""),j("")})},J=""===N?t:t.filter(function(e){return e.name.toLowerCase().startsWith(N.toLowerCase())});return o.a.createElement("div",null,o.a.createElement("h2",null,"Puhelinluettelo"),o.a.createElement(b,{message:P.message,messageClass:P.messageClass}),o.a.createElement(u,{heading:" rajaa n\xe4ytett\xe4vi\xe4:",value:N,onChange:function(e){console.log(e.target.value),S(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("h3",null,"lis\xe4\xe4 uusi"),o.a.createElement(c,{addPerson:function(e){e.preventDefault();var n=t.map(function(e){return e.name}).indexOf(g),a={name:g,number:w};if(n<0)console.log(n),v(a).then(function(e){l(t.concat(e.data)),L({message:'Lisatiin "'.concat(g,'" '),messageClass:"added"}),setTimeout(function(){L({message:"",messageClass:"nothing"})},1e3),f(""),j("")});else{var o=t[n].id;console.log(o),x(o,a)}},newName:g,handleNameChange:function(e){console.log(e.target.value),f(e.target.value)},newNumber:w,handleNumberChange:function(e){console.log(e.target.value),j(e.target.value)}}),o.a.createElement("h2",null,"Numerot"),o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement(m,{personsToShow:J,onClick:function(e){return function(){var n=t.find(function(n){return n.id===e});window.confirm('Poistetaanko   "'.concat(n.name,'"  ?'))&&p(e).then(function(a){console.log(a);var o=t.filter(function(n){return n.id!==e});l(o),L({message:'"'.concat(n.name,'" on poistettu'),messageClass:"eliminated"}),setTimeout(function(){L({message:"",messageClass:"nothing"})},1e3)})}}}))))};t(37);r.a.render(o.a.createElement(C,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.13ab644e.chunk.js.map