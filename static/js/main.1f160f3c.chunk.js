(window["webpackJsonpfirebase-notas"]=window["webpackJsonpfirebase-notas"]||[]).push([[0],{30:function(e,t,n){e.exports=n(42)},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(14),r=n.n(c),l=n(12),i=n(11);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var d=[{noteId:(new Date).valueOf(),noteContent:"Do Exercise",location:"Gym",favorite:!0,editingMode:!1,done:!1}],u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"AddNote":return e.concat(a);case"RemoveNote":return e.filter(function(e){return e.noteId!==a});case"AddToFavorites":return e.map(function(e){return e.noteId===a?m({},e,{favorite:!e.favorite}):e});case"EditNote":return e.map(function(e){return e.noteId===a?m({},e,{editMode:!e.editMode}):e});case"ChangeText":return e.map(function(e){return e.noteId===a.id?m({},e,Object(i.a)({},a.e.target.name,a.e.target.value)):e});default:return e}},f=n(27),v=[],p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,n=t.type;t.payload;switch(n){case"AddToFavorites":return[].concat(Object(f.a)(e),[{id:2,title:"hola"}]);default:return e}},E=Object(l.b)({notes:u,favorites:p}),h=Object(l.c)(E),y=n(7),b=n(9),N=n(10),g=(n(39),function(e){return o.a.createElement("div",{className:"note  row  justify-content-center mb-3 mt-2 align-items-center"},e.note.editMode?o.a.createElement("div",{className:"col-12 col-md row justify-content-center align-items-center p-2"},o.a.createElement("div",{className:"col-12 text-center"},o.a.createElement("input",{className:"inputChange noteContentEdit",type:"text",name:"noteContent",value:e.note.noteContent,onChange:e.handlerChange})),o.a.createElement("div",{className:"col text-center my-2"},"en"),o.a.createElement("div",{className:"col-12 text-center"},o.a.createElement("input",{className:"inputChange locationEdit",type:"text",name:"location",value:e.note.location,onChange:e.handlerChange}))):o.a.createElement("div",{className:"col-12 col-md row justify-content-center align-items-center"},o.a.createElement("div",{className:"col-12 text-center"},o.a.createElement("span",{className:"noteText1 text-justify "},e.note.noteContent)),o.a.createElement("div",{className:"col text-center my-2"},"en"),o.a.createElement("div",{className:"col-12 text-center"},o.a.createElement("span",{className:"noteText2 text-center"},e.note.location))),o.a.createElement("div",{className:"col-12 col-md d-flex my-1 "},o.a.createElement("i",{className:e.note.favorite?"material-icons col text-center  favorite ":"material-icons col text-center  noFavorite ",onClick:e.changeFavorites},"favorite"),o.a.createElement("i",{className:"material-icons col text-center  remove",onClick:e.hanldeRemove},"delete"),e.note.editMode?o.a.createElement("i",{className:"material-icons col text-center   edit ",onClick:e.changeEditMode},"save"):o.a.createElement("i",{className:"material-icons col text-center  noEdit ",onClick:e.changeEditMode},"edit")))}),j=n(23),C=n(24),x=n(28),O=n(25),w=n(29),I=function(e){return{type:"AddNote",payload:e}},k=function(e){function t(){var e,n;Object(j.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(x.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(o)))).state={noteContent:"",location:""},n.handleSubmit=function(e){e.preventDefault();var t=n.state.noteContent,a=n.state.location,o={noteId:(new Date).valueOf(),noteContent:t,location:a,favorite:!1,editMode:!1,done:!1};n.state.location.length>0&&n.state.noteContent.length>0?n.props.dispatch(I(o)):0===n.state.noteContent.length?alert("Please enter your note content"):0===n.state.location.length&&alert("Please enter a location"),n.setState({noteContent:"",location:""})},n.HandleChange=function(e){e.preventDefault(),n.setState(Object(i.a)({},e.target.name,e.target.value))},n}return Object(w.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"form container "},o.a.createElement("div",{className:"d-flex justify-content-center  "},o.a.createElement("form",{className:"container ",onSubmit:this.handleSubmit},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-12 row justify-content-center"},o.a.createElement("div",{className:"col p-1 d-flex justify-content-center"},o.a.createElement("input",{className:"noteContent text-center",type:"text",name:"noteContent",placeholder:"write your note",value:this.state.noteContent,onChange:this.HandleChange})),o.a.createElement("div",{className:"col p-1 d-flex justify-content-center"},o.a.createElement("input",{className:"location text-center",type:"text",name:"location",placeholder:"location",value:this.state.location,onChange:this.HandleChange}))),o.a.createElement("div",{className:"col-8 text-center"},o.a.createElement("button",{type:"submit",className:"btn done p-2 my-2"},"Create"))))))}}]),t}(a.Component),P=Object(y.b)()(k),D=function(e){return{type:"RemoveNote",payload:e}},F=function(e){return{type:"AddToFavorites",payload:e}},M=function(e){return{type:"EditNote",payload:e}},T=function(e,t){return{type:"ChangeText",payload:{id:e,e:t}}},S=Object(y.b)(function(e){return{notes:e.notes}})(function(e){return o.a.createElement("div",{className:"notesContainer container-fluid"},o.a.createElement("h1",{className:"notesHeader "},"Take Note"),o.a.createElement(P,null),o.a.createElement(b.b,{to:"/favorites"},o.a.createElement("p",{className:"subtitle text-center"},"Go to Favorites ")),o.a.createElement("div",{className:"notesBody d-flex flex-column justify-content-center align-items-center "},e.notes.map(function(t){return o.a.createElement("div",{className:"w-75"},o.a.createElement(g,{key:t.noteId,note:t,hanldeRemove:function(){return n=t.noteId,void e.dispatch(D(n));var n},changeFavorites:function(){return n=t.noteId,void e.dispatch(F(n));var n},changeEditMode:function(){return n=t.noteId,void e.dispatch(M(n));var n},handlerChange:function(n){return function(t,n){e.dispatch(T(t,n))}(t.noteId,n)}}))})),o.a.createElement("div",{className:"notesFooter"}))}),A=Object(N.g)(Object(y.b)(function(e){return{notes:e.notes}})(function(e){var t=parseInt(e.match.params.itemId),n=e.notes.find(function(e){return e.noteId===t});return o.a.createElement("div",null,o.a.createElement("p",null,"hola","".concat(n.noteId)),o.a.createElement(b.b,{to:"/"},o.a.createElement("button",null,"Back")))})),H=Object(y.b)(function(e){return{notes:e.notes}})(function(e){return o.a.createElement("div",{className:"container favorites "},o.a.createElement("div",{className:"d-flex justify-content-center pt-5"},o.a.createElement("h2",{className:"title"},"Favorites")),o.a.createElement("div",{className:"d-flex justify-content-center mb-3 "},o.a.createElement(b.b,{to:"/"},o.a.createElement("button",{className:"home px-2"},"Home"))),o.a.createElement("div",{className:"row justify-content-center"},e.notes.map(function(t){return!0===t.favorite?o.a.createElement("div",{className:"col-12 note d-flex justify-content-between mb-4 align-items-center pt-1",key:t.noteId},o.a.createElement("h2",{className:"noteContent"},t.noteContent),o.a.createElement("button",{onClick:function(){return n=t.noteId,void e.dispatch(F(n));var n}},o.a.createElement("i",{class:"material-icons"},"delete"))):null})))}),R=(n(41),o.a.createElement(y.a,{store:h},o.a.createElement(b.a,null,o.a.createElement(N.d,null,o.a.createElement(N.b,{path:"/notes",component:S}),o.a.createElement(N.b,{path:"/details/:itemId",component:A}),o.a.createElement(N.b,{path:"/favorites",component:H}),o.a.createElement(N.a,{from:"/",to:"/notes"})))));r.a.render(R,document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.1f160f3c.chunk.js.map