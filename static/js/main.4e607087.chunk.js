(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=(n(14),n(1)),s=n(2),l=n(4),h=n(3),u=n(5),m=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tc bg-light-green dib bw2 shadow-5 ma3 br3 grow"},r.a.createElement("img",{alt:"roboPhoto",src:"https://robohash.org/".concat(this.props.input.id,"?200*200")}),r.a.createElement("div",null,r.a.createElement("h2",null,this.props.input.name),r.a.createElement("p",null,this.props.input.email)))}}]),t}(a.Component),p=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement(m,{key:e.id,input:e})}))},d=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:this.props.searchChange}))}}]),t}(a.Component),b=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"500px",border:"5px solid black"}},e.children)},f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"oops something went wrong"):this.props.children}}]),t}(a.Component),g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1",id:"header"},"RoboFriends"),r.a.createElement(d,{searchField:n,searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(f,null,r.a.createElement(p,{id:"cardList",robots:a})))):r.a.createElement("h1",null,"Loading...")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16);c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.4e607087.chunk.js.map