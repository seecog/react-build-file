(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,n){e.exports=n(293)},119:function(e,t,n){},121:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},122:function(e,t,n){},151:function(e,t,n){},291:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(111),o=n.n(l),c=(n(119),n(1)),u=n(2),i=n(4),s=n(3),m=n(5),h=(n(121),n(19)),p=n(14),E=(n(122),function(){var e={color:"green"};return r.a.createElement("div",null,r.a.createElement(h.b,{exact:!0,activeStyle:e,to:"/"},"Home ")," |",r.a.createElement(h.b,{activeStyle:e,to:"/about"},"About ")," |",r.a.createElement(h.b,{activeStyle:e,to:"/contact"},"Contact "),"  |",r.a.createElement(h.b,{activeStyle:e,to:"/talks"},"Talks "))}),f=function(){return r.a.createElement("h1",null,"About Page")},d=function(){return r.a.createElement("h1",null,"Contact Page")},b=function(){return r.a.createElement("h1",null,"Home Page")},v=n(11),C=n.n(v),j=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).state={talks:[]},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.a.get("https://jsonplaceholder.typicode.com/posts").then(function(t){console.log("The final response is ",t),e.setState({talks:t.data})}).catch(function(e){console.log("The error is ",e)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"List of talks"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Body"))),r.a.createElement("tbody",null,this.state.talks.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(h.b,{to:"/talks/"+e.id},e.title)),r.a.createElement("td",null,e.body))}))))}}]),t}(a.Component),O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).state={title:"",body:""},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.match.params.id;console.log("Id is ",t),C.a.get("https://jsonplaceholder.typicode.com/posts/"+t).then(function(t){console.log(">> ",t.data),e.setState({title:t.data.title,body:t.data.body})}).catch(function(e){console.log("The error is ",e)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,this.state.title),r.a.createElement("p",null,this.state.body))}}]),t}(a.Component),y=(n(151),a.Component,n(27)),g=n(32),k=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,"Population: ",e.pop),r.a.createElement("p",null,r.a.createElement("img",{src:e.pic,width:"100",height:"100"})),r.a.createElement("p",null,"Area: ",e.area),r.a.createElement("p",null,e.children))},S=(a.Component,function(e){return r.a.createElement("div",null,"First Name : ",r.a.createElement("input",{onChange:e.change,value:e.firstname}),"[",e.firstname,"]",r.a.createElement("br",null),"Email : ",r.a.createElement("input",{value:e.email}))}),T=(a.Component,a.Component,a.Component,a.Component,n(65)),w=(a.Component,a.Component,function(e){var t=null;return t=e.stt?r.a.createElement("button",{onClick:e.update},"Update Employee"):r.a.createElement("button",{onClick:e.add},"Add Employee"),r.a.createElement("div",null,r.a.createElement("p",null,"Name : ",r.a.createElement("input",{name:"name",onChange:e.change,value:e.name})),r.a.createElement("p",null,"Age : ",r.a.createElement("input",{name:"age",onChange:e.changeage,value:e.age})),r.a.createElement("p",null,"Salary : ",r.a.createElement("input",{name:"salary",onChange:e.changesal,value:e.salary})),r.a.createElement("p",null,t))}),x=(a.Component,function(){return r.a.createElement("div",null,"Company details are",r.a.createElement(A.Consumer,null,function(e){return e}))}),A=r.a.createContext(),_=(a.Component,n(73),{count:0}),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;return"INCR"==t.type?{count:e.count+1}:"ADD"==t.type?{count:e.count+t.value}:e},I={snapshot:[]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return"SNAPSHOT"==t.type?{snapshot:e.snapshot.concat({dt:"==> ".concat(new Date," (").concat(t.value,")")})}:e},N=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,"The count is ",this.props.storeCount,r.a.createElement("br",null),r.a.createElement("button",{onClick:this.props.onIncr},"++")," |",r.a.createElement("button",{onClick:this.props.onAdd},"ADD 5")," |",r.a.createElement("button",{onClick:function(){return e.props.takeSnapshot(e.props.storeCount)}},"Take Snapshot"),r.a.createElement("hr",null),r.a.createElement("ul",null,this.props.storeSnapshot.map(function(e){return r.a.createElement("li",null,e.dt)})))}}]),t}(a.Component),F=(Object(g.a)(function(e){return{storeCount:e.storeCountReducer.count,storeSnapshot:e.storeSnapshotReducer.snapshot}},function(e){return{onIncr:function(){e({type:"INCR"})},onAdd:function(){e({type:"ADD",value:5})},takeSnapshot:function(t){e({type:"SNAPSHOT",value:t})}}})(N),function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Inside child1"),r.a.createElement(P,null))}),P=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Inside final child2"),"Message from parent is",r.a.createElement(M.Consumer,null,function(e){return e}))},M=r.a.createContext(),H=(a.Component,n(7)),B=(a.Component,function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).call(this))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Total run is ",this.props.iruns),r.a.createElement("hr",null),r.a.createElement("button",{onClick:this.props.onIncrement},"Increment")," |",r.a.createElement("button",{onClick:this.props.onDecrement},"Decrement")," |",r.a.createElement("button",{onClick:this.props.onTwo},"Play 2")," |",r.a.createElement("button",{onClick:this.props.onFour},"Play 4")," |",r.a.createElement("button",{onClick:this.props.onSix},"Play 6")," |",r.a.createElement("button",{onClick:function(){return e.props.onCapture(e.props.iruns)}},"Capture"),r.a.createElement("hr",null),r.a.createElement("ul",null,r.a.createElement("ul",null,this.props.results.map(function(e){return r.a.createElement("li",null,e.time," : ",e.current)}))))}}]),t}(a.Component)),U=(Object(g.a)(function(e){return{iruns:e.mruns.runs,results:e.mresults.results}},function(e){return{onIncrement:function(){return e({type:"INCREMENT"})},onDecrement:function(){return e({type:"DECREMENT"})},onTwo:function(){return e({type:"AddTwo",val:2})},onFour:function(){return e({type:"AddFour",val:4})},onSix:function(){return e({type:"AddSix",val:6})},onCapture:function(t){return e({type:"CAPTURE",val:t})}}})(B),function(e){(function(t){function n(){var e;return Object(c.a)(this,n),(e=Object(i.a)(this,Object(s.a)(n).call(this))).iniTime=function(){var t=setInterval(function(){e.setState({ct:new Date+"",cRef:t})},1e3)},e.cancelTime=function(){clearInterval(e.state.cRef)},e.state={ct:new Date+"",cRef:{}},e}Object(m.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(e,{cancel:this.cancelTime,ct:this.state.ct,in:this.iniTime})}}])})(a.Component)}(function(e){return r.a.createElement("div",null,"The time is ",e.ct,r.a.createElement("hr",null),r.a.createElement("button",{onClick:e.in},"Start CountDown")," |",r.a.createElement("button",{onClick:e.cancel},"Stop CountDown"))}),n(6)),W=(function(e){(function(t){function n(){var e;return Object(c.a)(this,n),(e=Object(i.a)(this,Object(s.a)(n).call(this))).makeFour=function(){e.setState(function(e){return Object(U.a)({},e,{four_runs:e.four_runs+1,total_runs:e.total_runs+4})})},e.makeSix=function(){e.setState(function(e){return Object(U.a)({},e,{six_runs:e.six_runs+1,total_runs:e.total_runs+6})})},e.state={four_runs:0,six_runs:0,total_runs:0},e}Object(m.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(e,{six_runs:this.state.six_runs,four_runs:this.state.four_runs,total_runs:this.state.total_runs,four:this.makeFour,six:this.makeSix})}}])})(a.Component)}(function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"The Four ",this.props.four_runs),r.a.createElement("h2",null,"The Six ",this.props.six_runs),r.a.createElement("hr",null),r.a.createElement("h1",null,"Total runs is ",this.props.total_runs),r.a.createElement("button",{onClick:this.props.four},"Four"),r.a.createElement("button",{onClick:this.props.six},"Six"))}}]),t}(a.Component)),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).state={informations:[{name:"Mohan",age:20,sal:200},{name:"Rohan",age:25,sal:240},{name:"Sohan",age:23,sal:207}]},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,this.state.informations[0].name),r.a.createElement("td",null,this.state.informations[0].age),r.a.createElement("td",null,this.state.informations[0].sal)),r.a.createElement("tr",null,r.a.createElement("td",null,this.state.informations[1].name),r.a.createElement("td",null,this.state.informations[1].age),r.a.createElement("td",null,this.state.informations[1].sal)),r.a.createElement("td",null,this.state.informations[2].name),r.a.createElement("td",null,this.state.informations[2].age),r.a.createElement("td",null,this.state.informations[2].sal)))}}]),t}(a.Component)),J=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Age"),r.a.createElement("th",null,"Salary"))))}}]),t}(a.Component);a.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L={runs:0},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;return"INCREMENT"==t.type?Object(U.a)({},e,{runs:e.runs+1}):"DECREMENT"==t.type?Object(U.a)({},e,{runs:e.runs-1}):"AddTwo"==t.type?Object(U.a)({},e,{runs:e.runs+t.val}):"AddFour"==t.type?Object(U.a)({},e,{runs:e.runs+t.val}):"AddSix"==t.type?Object(U.a)({},e,{runs:e.runs+t.val}):e},q={results:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;return"CAPTURE"==t.type?Object(U.a)({},e,{results:e.results.concat({time:"".concat(new Date),current:t.val})}):e},G=(n(291),function(){var e=Object(a.useState)([]),t=Object(H.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)(function(){console.log("Inside the use Effect"),C.a.get("https://jsonplaceholder.typicode.com/posts").then(function(e){console.log("The response is ",e.data);var t=n.concat(e.data);console.log("The type of posts ",t),console.log("The new data is ",n),l(t)}).catch(function(e){console.log("The err is ",e)})},[]),r.a.createElement("div",null,r.a.createElement("ul",null,"The use effect session",n.map(function(e,t){return r.a.createElement("li",{key:t}," ",e.title)})))}),K=Object(y.b)({storeCountReducer:D,storeSnapshotReducer:R});Object(y.c)(K),Object(y.b)({mruns:$,mresults:z});o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[114,2,1]]]);
//# sourceMappingURL=main.511d8b7c.chunk.js.map