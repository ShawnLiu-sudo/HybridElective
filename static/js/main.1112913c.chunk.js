(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(42)},19:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),o=a.n(i),s=(a(19),a(6)),c=a.n(s),l=a(9),u=a(1),p=a(2),d=a(4),h=a(3),m=a(5),f=a(7),y=(a(12),a(34),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"app-header"},r.a.createElement("h1",null,"Favorite Players"))}}]),t}(n.Component)),v=(a(36),a(38),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).editSave=function(t){e.state.active?e.setState({active:!1}):e.setState({active:!0})},e.savePlayer=Object(l.a)(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.editSave(),t.next=3,f.firestore().collection("favPlayers").doc(JSON.stringify(e.props.player.sortBy)).set({name:e.nameRef.current.value,position:e.positionRef.current.value},{merge:!0}).then(console.log("works")).catch(function(e){console.log("error",e)});case 3:e.props.getPlayers();case 4:case"end":return t.stop()}},t,this)})),e.waivePlayer=function(){e.props.deletePlayer(e.props.player.sortBy)},e.state={active:!1},e.nameRef=r.a.createRef(),e.positionRef=r.a.createRef(),e}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("li",{className:"item"},r.a.createElement("div",{className:"item-container"},r.a.createElement("h1",{className:this.state.active?"hide":null},this.props.player.name),r.a.createElement("p",{className:this.state.active?"hide":null},this.props.player.position),r.a.createElement("input",{className:this.state.active?"input-field":"hide",defaultValue:this.props.player.name,ref:this.nameRef}),r.a.createElement("input",{className:this.state.active?"input-field":"hide",defaultValue:this.props.player.position,ref:this.positionRef})),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{onClick:this.editSave,className:this.state.active?"hide":"button button-edit"},"Edit"),r.a.createElement("button",{onClick:this.waivePlayer,className:this.state.active?"hide":"button button-delete"},"Delete"),r.a.createElement("button",{onClick:this.savePlayer,className:this.state.active?"button button-save":"hide"},"Save")))}}]),t}(n.Component)),b=(a(40),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).savePlayer=function(t){if(t.preventDefault(),e.newName.current.value&&e.newPosition.current.value){var a={id:Date.now(),name:e.newName.current.value,position:e.newPosition.current.value};e.props.addPlayer(a),e.newName.current.value="",e.newPosition.current.value=""}else alert("Please fill out the form.")},e.newName=r.a.createRef(),e.newPosition=r.a.createRef(),e}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"split addForm"},r.a.createElement("h1",null,"Add New Player"),r.a.createElement("input",{className:"input-field",placeholder:"New Name",ref:this.newName}),r.a.createElement("input",{className:"input-field",placeholder:"New Position",ref:this.newPosition}),r.a.createElement("button",{onClick:this.savePlayer,className:"button button-save"},"Save"))}}]),t}(n.Component)),w=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).call(this))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"split list-container"},this.props.players.map(function(t){return r.a.createElement(v,{key:t.sortBy,player:t,deletePlayer:e.props.deletePlayer,getPlayers:e.props.getPlayers})}),r.a.createElement(b,{addPlayer:this.props.addPlayer}))}}]),t}(n.Component),P=function(e){function t(){var e;Object(u.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).getPlayers=Object(l.a)(c.a.mark(function t(){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=[],t.next=3,f.firestore().collection("favPlayers").orderBy("sortBy").get().then(function(e){e.forEach(function(e){console.log(e.data()),a.push(e.data())})});case 3:e.setState({players:a});case 4:case"end":return t.stop()}},t,this)})),e.deletePlayer=function(){var t=Object(l.a)(c.a.mark(function t(a){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.firestore().collection("favPlayers").doc(JSON.stringify(a)).delete().then(console.log("works")).catch(function(e){console.log("error",e)});case 2:e.getPlayers();case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.addPlayer=function(t){f.firestore().collection("favPlayers").doc(JSON.stringify(t.id)).set({name:t.name,position:t.position,sortBy:t.id}).then(console.log("works")).catch(function(e){console.log("error",e)}),e.getPlayers()};try{f.initializeApp({apiKey:"AIzaSyA_jn5N28330IwpQCBwZ8-w343Wvsd3Rjg",authDomain:"hybridelective-4c7a0.firebaseapp.com",databaseURL:"https://hybridelective-4c7a0.firebaseio.com",projectId:"hybridelective-4c7a0",storageBucket:"hybridelective-4c7a0.appspot.com",messagingSenderId:"723802225790"})}catch(a){console.log(a)}return f.firestore().settings({timestampsInSnapshots:!0}),e.state={players:[{id:1,name:"Guo Ailun",position:"Point Guard"},{id:2,name:"Yi Jianlian",position:"Power Foward"},{id:3,name:"Yao Ming",position:"Center"}]},e.getPlayers(),e}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(y,null),r.a.createElement(w,{players:this.state.players,addPlayer:this.addPlayer,deletePlayer:this.deletePlayer,getPlayers:this.getPlayers}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.1112913c.chunk.js.map