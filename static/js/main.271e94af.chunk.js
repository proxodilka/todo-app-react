(window.webpackJsonptodo=window.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n(23)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),i=n(6),s=n(7),l=n(1),u=n(2),f=n(4),p=n(3),m=n(5),d=(n(15),n(16),function(){return r.a.createElement("div",{className:"headerRoot"},r.a.createElement("span",{className:"logoText"},"Todo list"))});n(17);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).filtersFn=[function(t){return t},function(t){return!t.done},function(t){return t.done}],n.state={filters:[{id:0,name:"All",active:!0},{id:1,name:"Active",active:!1},{id:2,name:"Done",active:!1}]},n.filterChange=function(t){(n.state.filters.find((function(t){return t.active}))||{id:-1}).id!=t&&n.setState((function(e){return{filters:e.filters.map((function(e){return e.id==t?b({},e,{active:!0}):b({},e,{active:!1})}))}}),(function(){return n.generateFilterFunction(t)}))},n.generateFilterFunction=function(t){n.props.onFilterChange(n.filtersFn[t])},n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"buttonsContainer"},this.state.filters.map((function(e,n,a){var o="btn";return e.active?o+=" btn-primary":o+=" btn-outline-secondary",n||(o+=" first"),n==a.length-1&&(o+=" last"),r.a.createElement("button",{key:e.id,className:o,onClick:function(){return t.filterChange(e.id)}},e.name)})))}}]),e}(r.a.Component),k=(n(18),function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).state={statusFilter:function(t){return t},searchFilter:function(t){return t}},n.statusFilterChange=function(t){n.setState({statusFilter:t},n.exportFilter)},n.searchFilterChange=function(t){var e=t.target.value.toLowerCase().trim();n.setState({searchFilter:function(t){return-1!=t.text.toLowerCase().indexOf(e)}},n.exportFilter)},n.exportFilter=function(){n.props.onFilterChange((function(t){return n.state.statusFilter(t)&&n.state.searchFilter(t)}))},n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"toolbarRoot"},r.a.createElement("input",{onChange:this.searchFilterChange,id:"searchField",className:"form-control",placeholder:"search...",type:"text",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false"}),r.a.createElement(O,{onFilterChange:this.statusFilterChange}))}}]),e}(r.a.Component)),v=(n(19),function(t){function e(){return Object(l.a)(this,e),Object(f.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.task,n=t.onDelete,a=t.onMarkDone,o=t.onMarkImportant,c=e.important,i=e.done,s="taskText nonActiveTaskUnit ".concat(c?"important":""," ").concat(i?"done":"");return console.log("reRender"),r.a.createElement("div",{className:"taskUnit"},r.a.createElement("input",{onChange:function(){return a(e.id)},type:"checkbox",id:e.id,checked:i}),r.a.createElement("label",{className:s,htmlFor:e.id},r.a.createElement("div",{className:"inputField",ref:"editable "+e.id},e.text)),r.a.createElement("button",{onClick:function(){return o(e.id)},className:"btn btn-outline-primary actSelector"},r.a.createElement("i",{className:"fa fa-exclamation"})),r.a.createElement("button",{onClick:function(){return n(e.id)},className:"btn btn-outline-danger actSelector"},r.a.createElement("i",{className:"fa fa-trash-o"})))}}]),e}(r.a.Component)),g=(n(20),function(t){var e=t.tasks,n=t.onDelete,a=t.onMarkImportant,o=t.onMarkDone;return r.a.createElement("div",{className:"tasksList"},e.map((function(t){return r.a.createElement(v,{key:t.id,task:t,onDelete:n,onMarkImportant:a,onMarkDone:o})})))}),j=(n(21),function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).state={taskValue:""},n.Add=function(t){t.preventDefault(),n.props.onAdd(n.state.taskValue),n.setState({taskValue:""})},n.updateValue=function(t){n.setState({taskValue:t.target.value})},n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.Add,className:"addFormRoot"},r.a.createElement("input",{className:"form-control",placeholder:"input task here...",onChange:this.updateValue,type:"text",value:this.state.taskValue,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false"}),r.a.createElement("button",{className:"ml-2 btn btn-primary"},"Add"))}}]),e}(r.a.Component));n(22);function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function F(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(n,!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var E=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).newTask=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now(),a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n;return{id:Math.floor(1e3*Math.random()+n),text:t,timeAdd:a,lastEdit:r,done:!1,important:e}},n.state={dataFilter:function(t){return t},Tasks:[n.newTask("buy some butter"),n.newTask("do math"),n.newTask("finish this app"),n.newTask("learn react")]},n.changeFilter=function(t){n.setState({dataFilter:t})},n.deleteItem=function(t){n.setState((function(e){var n=e.Tasks,a=n.findIndex((function(e){return e.id==t}));return{Tasks:[].concat(Object(s.a)(n.slice(0,a)),Object(s.a)(n.slice(a+1)))}}))},n.addItem=function(t){n.setState((function(e){var a=e.Tasks;return{Tasks:[n.newTask(t)].concat(Object(s.a)(a))}}))},n.updateField=function(t,e,n,a){return t.map((function(t){return t.id==a?F({},t,Object(i.a)({},e,n)):t}))},n.toggleField=function(t,e,n){return t.map((function(t){return t.id==n?F({},t,Object(i.a)({},e,!t[e])):t}))},n.markDone=function(t){n.setState((function(e){var a=e.Tasks;return{Tasks:n.toggleField(a,"done",t)}}))},n.markImportant=function(t){n.setState((function(e){var a=e.Tasks;return{Tasks:n.toggleField(a,"important",t)}}))},n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement("main",null,r.a.createElement(k,{onFilterChange:this.changeFilter}),r.a.createElement(g,{tasks:this.state.Tasks.filter(this.state.dataFilter),onDelete:this.deleteItem,onMarkImportant:this.markImportant,onMarkDone:this.markDone}),r.a.createElement(j,{onAdd:this.addItem})))}}]),e}(r.a.Component);c.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.271e94af.chunk.js.map