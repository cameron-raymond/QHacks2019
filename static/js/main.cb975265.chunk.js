(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){e.exports=n(32)},18:function(e,t,n){},21:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(8),o=n.n(c),r=(n(18),n(3)),i=n(4),s=n(7),u=n(5),m=n(6),d=(n(12),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"button",onClick:this.props.onClick},l.a.createElement("p",null,this.props.children))}}]),t}(l.a.Component)),p=n(2),f=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){this.props.onClick(),this.props.updateState(e)}},{key:"render",value:function(){var e=this;return l.a.createElement(p.b,{offset:0,speed:.1,style:{display:"flex",alignItems:"center",justifyContent:"flex-start",flexDirection:"column"}},l.a.createElement("p",{className:"title"},"Welcome to Distributed Delivery"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null,"I am..."),l.a.createElement("div",{className:"options"},l.a.createElement(d,{onClick:function(){return e.handleClick("shipping")}},"shipping"),l.a.createElement(d,{onClick:function(){return e.handleClick("driving")}},"driving")))}}]),t}(l.a.Component),g=(n(21),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={active:e.locked&&e.active||!1,value:e.value||"",label:e.label||"Label"},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"changeValue",value:function(e){var t=e.target.value;this.setState({value:t})}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&this.onSubmit(),13===e.which&&this.setState({value:this.props.predicted})}},{key:"onSubmit",value:function(){this.props.onSubmit(this.state.value)}},{key:"render",value:function(){var e=this,t=this.state,n=t.active,a=t.value,c=t.label,o=this.props.locked,r="field ".concat((o?n:n||a)&&"active"," ").concat(o&&!n&&"locked");return l.a.createElement("input",Object.assign({className:r,id:1,type:"text",value:a,placeholder:c,onChange:this.changeValue.bind(this),onKeyPress:this.handleKeyPress.bind(this),onSubmit:this.onSubmit,onFocus:function(){return!o&&e.setState({active:!0})},onBlur:function(){return!o&&e.setState({active:!1})}},this.props))}}]),t}(l.a.Component)),h=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).setSpace=function(e){n.props.onClick(),n.props.updateState(e)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(p.b,{offset:2,speed:-0,style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexDirection:"row"}},l.a.createElement("p",{className:"infoTitle"},"I need a",l.a.createElement(g,{id:1,label:"small, medium, large",predicted:"small",locked:!1,active:!1,onSubmit:this.setSpace}),"amount of space")))}}]),t}(l.a.Component),b=n(9),y=n.n(b),E=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState({address:e})},n.handleSelect=function(e){n.setState({address:e}),Object(b.geocodeByAddress)(e).then(function(e){return Object(b.getLatLng)(e[0])}).then(function(e){return n.props.onChange(e)}).catch(function(e){return console.error("Error",e)})},n.state={address:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(y.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect},function(e){var t=e.getInputProps,n=e.suggestions,a=e.getSuggestionItemProps,c=e.loading;return l.a.createElement("div",null,l.a.createElement(g,t({placeholder:"Search Places ..."})),l.a.createElement("div",{className:"autocomplete-dropdown-container"},c&&l.a.createElement("div",null,"Loading..."),n.map(function(e){var t=e.active?"suggestion-item--active":"suggestion-item",n=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return l.a.createElement("div",a(e,{className:t,style:n}),l.a.createElement("span",null,e.description))})))})}}]),t}(l.a.Component),v=(n(30),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).comingFrom=function(e){n.setState({comingFrom:e}),n.state.goingTo&&n.state.comingFrom&&(n.props.updateState([n.state.comingFrom,n.state.goingTo]),n.props.onClick())},n.goingTo=function(e){n.setState({goingTo:e}),n.state.goingTo&&n.state.comingFrom&&(n.props.updateState([n.state.comingFrom,n.state.goingTo]),n.props.onClick())},n.state={comingFrom:null,goingTo:null},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(p.b,{offset:1,speed:.1,style:{display:"flex",alignItems:"center",justifyContent:"flex-start",flexDirection:"column"}},l.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexDirection:"row"}},l.a.createElement("p",{className:"infoTitle"},"I'm coming from"),l.a.createElement(E,{onChange:this.comingFrom})),l.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexDirection:"row"}},l.a.createElement("p",{className:"infoTitle"},"I'm going to"),l.a.createElement(E,{onChange:this.goingTo})))}}]),t}(l.a.Component)),k=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"".concat(t?"url(":"","https://awv3node-homepage.surge.sh/build/assets/").concat(e,".svg").concat(t?")":"")},j=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).updateUser=function(e){n.setState({shipOrDrive:e})},n.updateLocations=function(e){n.setState({locations:e})},n.updateSpace=function(e){n.setState({space:e})},n.state={shipOrDrive:null,locations:null,space:null},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(p.a,{ref:function(t){return e.parallax=t},pages:4},l.a.createElement(p.b,{offset:0,speed:0,factor:3,style:{backgroundColor:"#373c4c",backgroundImage:k("stars",!0),backgroundSize:"cover"}}),l.a.createElement(p.b,{offset:1,speed:1,style:{backgroundColor:"#805E73"}}),l.a.createElement(p.b,{offset:2,speed:1,style:{backgroundColor:"#909090"}}),l.a.createElement(p.b,{offset:3,speed:1,style:{backgroundColor:"#87BCDE"}}),l.a.createElement(f,{onClick:function(){return e.parallax.scrollTo(1)},updateState:this.updateUser}),l.a.createElement(v,{onClick:function(){return e.parallax.scrollTo(2)},updateState:this.updateLocations}),l.a.createElement(h,{onClick:function(){return e.parallax.scrollTo(3)},updateState:this.updateSpace}),l.a.createElement(p.b,{offset:1.3,speed:-.3,style:{pointerEvents:"none"}},l.a.createElement("img",{alt:"",src:k("satellite4"),style:{width:"15%",marginLeft:"70%"}})),l.a.createElement(p.b,{offset:1,speed:.8,style:{opacity:.1,pointerEvents:"none"}},l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"20%",marginLeft:"55%"}}),l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"10%",marginLeft:"15%"}})),l.a.createElement(p.b,{offset:1.75,speed:.5,style:{opacity:.1,pointerEvents:"none"}},l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"20%",marginLeft:"70%"}}),l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"20%",marginLeft:"40%"}})),l.a.createElement(p.b,{offset:1,speed:.2,style:{opacity:.2,pointerEvents:"none"}},l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"10%",marginLeft:"10%"}}),l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"20%",marginLeft:"75%"}})),l.a.createElement(p.b,{offset:1.6,speed:-.1,style:{opacity:.4,pointerEvents:"none"}},l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"20%",marginLeft:"60%"}}),l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"25%",marginLeft:"30%"}}),l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"10%",marginLeft:"80%"}})),l.a.createElement(p.b,{offset:2.6,speed:.4,style:{opacity:.6,pointerEvents:"none"}},l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"20%",marginLeft:"5%"}}),l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"15%",marginLeft:"75%"}})),l.a.createElement(p.b,{offset:3,speed:.4,style:{opacity:.4,pointerEvents:"none"}},l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"20%",marginLeft:"60%"}}),l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"25%",marginLeft:"30%"}}),l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"10%",marginLeft:"80%"}})),l.a.createElement(p.b,{offset:3.8,speed:-.4,style:{display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"}},l.a.createElement("img",{alt:"",src:k("earth"),style:{width:"60%"}})))}}]),t}(l.a.Component);o.a.render(l.a.createElement(j,null),document.getElementById("root"));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.cb975265.chunk.js.map