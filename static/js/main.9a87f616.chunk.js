(this.webpackJsonponeshotdash=this.webpackJsonponeshotdash||[]).push([[0],{190:function(e,t,c){},191:function(e,t,c){},196:function(e,t,c){},198:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),i=c(73),n=c.n(i),l=(c(82),c(83),c.p,c(13)),r=c(3),o=c(4),d=c(31),j=c(0),b={labels:["1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm"],datasets:[{label:"Parked vehicles per hour",data:[12,19,3,5,2,3,12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},h={scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},m=function(e){return Object(j.jsx)(d.a,{data:b,options:h})},O=c.p+"static/media/ApplePay.533d1c03.svg",x=c.p+"static/media/GooglePay.208c512b.svg",u=c.p+"static/media/credit-logo.4a3fce59.svg",p=(c(190),{datasets:[{data:[12,19,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)"],borderWidth:1}]}),v=function(e){return Object(j.jsx)(d.b,{data:p,width:"200px",height:"auto",options:{maintainAspectRatio:!1}})},_=function(e){var t=Object(a.useState)(!1),c=Object(o.a)(t,2),s=c[0],i=c[1],n=Object(a.useState)(!1),l=Object(o.a)(n,2),r=l[0],d=l[1],b=Object(a.useState)(!1),h=Object(o.a)(b,2),p=h[0],_=h[1],g=Object(a.useState)(!1),f=Object(o.a)(g,2),N=f[0],y=f[1],w=Object(a.useState)(!1),S=Object(o.a)(w,2),k=S[0],C=S[1];return Object(a.useEffect)((function(){var t=e.type;"bar"===t?i(!0):"occupancy"===t?d(!0):"dailySpend"===t?_(!0):"payments"===t?y(!0):"liveVisitors"===t&&C(!0)}),[]),Object(j.jsxs)("div",{className:k?"card_long":"card",children:[s?Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"titles",children:[Object(j.jsx)("h2",{children:"Peak times"}),Object(j.jsx)("div",{children:Object(j.jsx)(m,{})})]})}):"",r?Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"titles",children:[Object(j.jsx)("h2",{children:"Occupancy"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("h4",{children:[e.vhTotal," Total Vehicles"]}),Object(j.jsxs)("h4",{children:[Math.floor(e.vhTotal/24)," Vehicles avg per hour"]})]})]})}):"",p?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"titles",children:Object(j.jsx)("h2",{children:"Daily Spend"})}),Object(j.jsx)("div",{children:Object(j.jsxs)("h1",{id:"enlarge_txt",children:["$",e.total]})})]}):"",N?Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"titles",children:[Object(j.jsx)("h2",{children:"Payments"}),Object(j.jsxs)("div",{className:"adjust_ align_center",children:[Object(j.jsxs)("div",{className:"logos_examp",children:[Object(j.jsxs)("div",{className:"adjust_",children:[Object(j.jsx)("img",{src:x,alt:""}),Object(j.jsx)("div",{className:"colorDot yellow"})]}),Object(j.jsxs)("div",{className:"adjust_",children:[Object(j.jsx)("img",{src:O,alt:""}),Object(j.jsx)("div",{className:"colorDot green"})]}),Object(j.jsxs)("div",{className:"adjust_",children:[Object(j.jsx)("img",{src:u,alt:""}),Object(j.jsx)("div",{className:"colorDot red"})]})]}),Object(j.jsx)("div",{children:Object(j.jsx)(v,{})})]})]})}):"",k?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"titles",children:Object(j.jsx)("h2",{children:"Live Visitors"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("form",{children:Object(j.jsx)("input",{type:"text",id:"header-search",name:"search"})}),Object(j.jsx)("div",{className:"listed_contents",children:Object(j.jsx)("div",{className:"live_visitors_scroll",children:e.data_.map((function(e,t){return Object(j.jsxs)("div",{id:"driver_info",children:[Object(j.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[Object(j.jsx)("div",{children:e.name}),Object(j.jsx)("div",{style:{color:"red"},children:e.et})]}),Object(j.jsx)("div",{children:e.lp})]})}))})})]})]}):""]})},g=(c(191),c.p+"static/media/logo.331548da.svg"),f=function(e){var t=new Date,c="".concat(t.getDate(),"/").concat(t.getMonth(),"/").concat(t.getFullYear()),a=localStorage.getItem("dashboard_lot"),s=localStorage.getItem("dashboard_lot_name");return Object(j.jsx)("div",{className:"header_container",children:Object(j.jsxs)("div",{id:"nav_container",children:[Object(j.jsxs)("div",{className:"header_wrapper",children:[Object(j.jsx)("div",{className:"header_info_container",children:Object(j.jsx)("img",{src:g,alt:"logo"})}),Object(j.jsxs)("div",{className:"header_info_container nav",children:[Object(j.jsx)(l.b,{className:"nav_link",to:"/dash/".concat(a),children:"Dashboard"}),Object(j.jsx)(l.b,{className:"nav_link",to:"/lot-management",children:"Lot Management"}),Object(j.jsx)(l.b,{className:"nav_link",to:"/notifications",children:"Notification Centre"}),Object(j.jsx)(l.b,{className:"nav_link",to:"/",children:"Profile"})]})]})," ",Object(j.jsxs)("div",{className:"header_wrapper bottom_info",children:[Object(j.jsx)("div",{className:"changeable_titles",children:Object(j.jsx)("h1",{id:"title",children:e.title})}),Object(j.jsx)("div",{className:"changeable_titles adjustment",children:Object(j.jsx)("h4",{id:"title",children:"".concat(s,": ").concat(a)})}),Object(j.jsx)("div",{className:"changeable_titles adjustment",children:Object(j.jsx)("h4",{id:"title",children:c})})]})]})})},N=(c(196),function(e){var t=Object(a.useState)({total:0,vh_total:0,data:[]}),c=Object(o.a)(t,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){fetch("https://osParking.pythonanywhere.com/today-visitors?lot=".concat(e.match.params.lot),{method:"GET",mode:"cors",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),i({total:e.total,vh_total:e.counted,data:e.data})}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{title:"Dashboard"}),Object(j.jsxs)("div",{className:"analytical_section",children:[Object(j.jsxs)("div",{className:"sort_cards",children:[Object(j.jsx)(_,{type:"bar"}),Object(j.jsx)(_,{type:"occupancy",vhTotal:s.vh_total}),Object(j.jsx)("div",{style:{width:"30%"}}),Object(j.jsx)(_,{type:"liveVisitors",data_:s.data})]}),Object(j.jsxs)("div",{className:"sort_cards",children:[Object(j.jsx)(_,{type:"dailySpend",total:s.total}),Object(j.jsx)(_,{type:"payments"}),Object(j.jsx)("div",{style:{width:"30%"}})]})]})]})}),y=c(77),w=(c(197),c.p+"static/media/plus.fa85beee.svg"),S=c.p+"static/media/minus.d2b72ea6.svg",k=function(e){var t=Object(a.useState)(new Date),c=Object(o.a)(t,2),s=c[0],i=c[1],n=Object(a.useState)({setDate:(new Date).toLocaleDateString()}),l=Object(o.a)(n,2),r=l[0],d=l[1],b=Object(a.useState)({data:[]}),h=Object(o.a)(b,2),m=h[0],O=h[1],x=Object(a.useState)(0),u=Object(o.a)(x,2),p=u[0],v=u[1],_=Object(a.useState)(0),g=Object(o.a)(_,2),N=g[0],k=g[1],C=localStorage.getItem("dashboard_lot");return Object(a.useEffect)((function(){fetch("https://osParking.pythonanywhere.com/get-schedules?lotnumber=".concat(C),{method:"GET",mode:"cors",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){O({data:e.data})})).catch((function(e){console.error("Error:",e)}))}),[]),console.log(r),Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{title:"Set Rates"}),Object(j.jsx)("div",{className:"analytical_section rateSection",children:Object(j.jsxs)("div",{className:"management_holder",children:[Object(j.jsxs)("div",{className:"calendar_management",children:[Object(j.jsx)(y.a,{onChange:function(e){i(e),d({setDate:e.toLocaleDateString()})},value:s}),Object(j.jsx)("h3",{style:{textAlign:"left",width:"80%",marginBottom:"0px"},children:"Registered Rates"}),Object(j.jsx)("div",{id:"rate_settings",children:m.data.map((function(e,t){return Object(j.jsxs)("div",{className:"rates_card",children:[Object(j.jsxs)("div",{className:"rate_card_header",children:[Object(j.jsx)("div",{children:e.title}),Object(j.jsxs)("div",{children:["Set For: ",e.date]})]}),Object(j.jsxs)("div",{className:"rates_content",children:[Object(j.jsxs)("div",{children:["Starts: ",e.start_time]}),Object(j.jsxs)("div",{children:["Expires: ",e.exp_time]}),Object(j.jsxs)("div",{children:["Rate per hr: $",e.rpr]}),Object(j.jsxs)("div",{children:["Maximum rate: $",e.max_rate]}),Object(j.jsxs)("div",{children:["Repeats: ",e.repeats]})]}),Object(j.jsx)("div",{className:"rate_delete",children:Object(j.jsx)("div",{className:"delete_icon",onClick:function(){var t;t=e.id,fetch("https://osParking.pythonanywhere.com/delete-schedules?id=".concat(t),{method:"DELETE",mode:"cors",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("Response:",e)})).catch((function(e){console.error("Error:",e)})),setTimeout((function(){window.location.reload()}),300)},children:"Delete"})})]})}))})]}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:e.target.title.value,date:r.setDate,start_time:"".concat(e.target.startHour.value,":").concat(e.target.startMin.value).concat(e.target.dn.value),exp_time:"".concat(e.target.endHour.value,":").concat(e.target.endMin.value).concat(e.target.dn.value),rate_per_hr:e.target.hourlyRate.value,max_rate:e.target.maxRate.value,repeats:e.target.repeat.value};fetch("https://osParking.pythonanywhere.com/schedules?lotnumber=1111",{method:"POST",mode:"cors",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)})),setTimeout((function(){window.location.reload()}),1e3)},className:"setting_management",children:[Object(j.jsxs)("div",{className:"search_wrapper",children:[Object(j.jsx)("h4",{className:"rate_titles",children:"Title"}),Object(j.jsx)("input",{className:"title_input",type:"text",name:"title",placeholder:"Weekend Date Rate"})]}),Object(j.jsxs)("div",{className:"time_slots",children:[Object(j.jsxs)("div",{className:"before_time",children:[Object(j.jsxs)("div",{className:"label_wrapper",children:[Object(j.jsx)("label",{htmlFor:"startHour",children:"Hour"}),Object(j.jsx)("input",{className:"time_slots_input",type:"number",name:"startHour",max:"12",min:"1",placeholder:"0"})]}),Object(j.jsxs)("div",{className:"label_wrapper",children:[Object(j.jsx)("label",{htmlFor:"startMin",children:"Mins"}),Object(j.jsx)("input",{className:"time_slots_input",type:"number",name:"startMin",max:"59",min:"0",placeholder:"0"})]})]}),Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center",width:"8%",height:"30px",alignItems:"center"},children:Object(j.jsx)("h5",{children:"to"})}),Object(j.jsxs)("div",{className:"after_time",children:[Object(j.jsxs)("div",{className:"label_wrapper",children:[Object(j.jsx)("label",{htmlFor:"endHour",children:"Hour"}),Object(j.jsx)("input",{className:"time_slots_input",type:"number",name:"endHour",max:"12",min:"1",placeholder:"0"})]}),Object(j.jsxs)("div",{className:"label_wrapper",children:[Object(j.jsx)("label",{htmlFor:"endMins",children:"Mins"}),Object(j.jsx)("input",{className:"time_slots_input",type:"number",name:"endMin",max:"59",min:"0",placeholder:"0"})]})]}),Object(j.jsxs)("select",{name:"dn",className:"day-night",children:[Object(j.jsx)("option",{children:"AM"}),Object(j.jsx)("option",{children:"PM"})]})]}),Object(j.jsxs)("div",{className:"rates",children:[Object(j.jsx)("h4",{className:"rate_titles",children:"Price Per Hour"}),Object(j.jsxs)("div",{className:"rate_container",children:[Object(j.jsx)("div",{className:"adjustment_btns",onClick:function(){0===p||v(p-1)},children:Object(j.jsx)("img",{className:"icon_increment",src:S,alt:"minus icon"})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{id:"rate_input",name:"hourlyRate",type:"number",value:p})}),Object(j.jsx)("div",{className:"adjustment_btns",onClick:function(){v(p+1)},children:Object(j.jsx)("img",{className:"icon_increment",src:w,alt:"Plus icon"})})]})]}),Object(j.jsxs)("div",{className:"rates",children:[Object(j.jsx)("h4",{className:"rate_titles",children:"Maximum Cost"}),Object(j.jsxs)("div",{className:"rate_container",children:[Object(j.jsx)("div",{className:"adjustment_btns",onClick:function(){0===N||k(N-1)},children:Object(j.jsx)("img",{className:"icon_increment",src:S,alt:"minus icon"})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{id:"rate_input",name:"maxRate",type:"number",value:N})}),Object(j.jsx)("div",{className:"adjustment_btns",onClick:function(){k(N+1)},children:Object(j.jsx)("img",{className:"icon_increment",src:w,alt:"Plus icon"})})]})]}),Object(j.jsxs)("div",{className:"rates",children:[Object(j.jsx)("h4",{className:"rate_titles",children:"Repeat"}),Object(j.jsxs)("div",{className:"rate_container",children:[Object(j.jsxs)("div",{className:"repeat_selection_container",children:[Object(j.jsx)("input",{className:"radio_btn",type:"radio",id:"daily",name:"repeat",defaultValue:"never"}),Object(j.jsx)("label",{htmlFor:"daily",children:"Never"})]}),Object(j.jsxs)("div",{className:"repeat_selection_container",children:[Object(j.jsx)("input",{className:"radio_btn",type:"radio",id:"daily",name:"repeat",defaultValue:"daily"}),Object(j.jsx)("label",{htmlFor:"daily",children:"Daily"})]}),Object(j.jsxs)("div",{className:"repeat_selection_container",children:[Object(j.jsx)("input",{className:"radio_btn",type:"radio",id:"daily",name:"repeat",defaultValue:"weekly"}),Object(j.jsx)("label",{htmlFor:"daily",children:"Weekly"})]}),Object(j.jsxs)("div",{className:"repeat_selection_container",children:[Object(j.jsx)("input",{className:"radio_btn",type:"radio",id:"daily",name:"repeat",defaultValue:"monthly"}),Object(j.jsx)("label",{htmlFor:"daily",children:"Monthly"})]}),Object(j.jsxs)("div",{className:"repeat_selection_container",children:[Object(j.jsx)("input",{className:"radio_btn",type:"radio",id:"daily",name:"repeat",defaultValue:"annually"}),Object(j.jsx)("label",{htmlFor:"daily",children:"Annual"})]})]})]}),Object(j.jsx)("input",{id:"submit_rates",type:"submit",value:"Save Rate Present"})]})]})})]})},C=c(6),T=function(e){var t=Object(a.useState)([]),c=Object(o.a)(t,2),s=c[0],i=c[1],n=Object(a.useState)("Your Message"),l=Object(o.a)(n,2),r=l[0],d=l[1];return Object(a.useEffect)((function(){}),[s]),Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{title:"Set Rates"}),Object(j.jsxs)("div",{className:"notifications_holder",children:[Object(j.jsxs)("div",{className:"notification_wrapper",children:[Object(j.jsx)("h3",{className:"not_wrapper_titles",children:"Your Notifications"}),Object(j.jsx)("div",{children:s.map((function(e){return Object(j.jsx)("li",{class:"not_title_",children:e},e)}))})]}),Object(j.jsxs)("div",{className:"notification_wrapper middle",children:[Object(j.jsx)("h3",{className:"not_wrapper_titles",children:"Edit Notification"}),Object(j.jsxs)("form",{id:"not_form",onSubmit:function(e){e.preventDefault(),i((function(t){return[].concat(Object(C.a)(t),[e.target.messageTitle.value])})),console.log(s)},children:[Object(j.jsx)("input",{id:"not_msg_title",type:"text",maxlength:"25",name:"messageTitle",placeholder:"Title"}),Object(j.jsx)("textarea",{id:"message",name:"message",onChange:function(e){d(e.target.message)},value:r}),Object(j.jsx)("input",{type:"file",id:"file",name:"file"}),Object(j.jsx)("input",{type:"submit",className:"mutual_not_btn",value:"Submit"})]})]}),Object(j.jsxs)("div",{className:"notification_wrapper",children:[Object(j.jsx)("h3",{className:"not_wrapper_titles",children:"Set Conditions"}),Object(j.jsx)("select",{name:"dn",className:"conditions_template",children:s.map((function(e){return Object(j.jsx)("option",{class:"not_title_",children:e},e)}))}),Object(j.jsxs)("form",{className:"conditions",children:[Object(j.jsx)("h4",{id:"trigger_title",children:"Triggers"}),Object(j.jsxs)("div",{className:"checkbox",children:[Object(j.jsx)("input",{type:"checkbox",name:"expiration",value:"expiration"}),Object(j.jsx)("label",{htmlFor:"expiration",children:"On expiration"})]}),Object(j.jsxs)("div",{className:"checkbox",children:[Object(j.jsx)("input",{type:"checkbox",name:"impound",value:"impound"}),Object(j.jsx)("label",{htmlFor:"expiration",children:"On Impound"})]}),Object(j.jsxs)("div",{className:"checkbox",children:[Object(j.jsx)("input",{type:"checkbox",name:"launch",value:"launch"}),Object(j.jsx)("label",{htmlFor:"expiration",children:"On launch"})]}),Object(j.jsxs)("div",{className:"checkbox",children:[Object(j.jsx)("input",{type:"checkbox",name:"payment",value:"Pay_confirmed"}),Object(j.jsx)("label",{htmlFor:"expiration",children:"On payment confirmed"})]}),Object(j.jsx)("div",{id:"submit_div",children:Object(j.jsx)("input",{type:"submit",className:"mutual_not_btn",value:"Submit"})})]})]})]})]})},D=function(e){var t=Object(a.useState)({data:[]}),c=Object(o.a)(t,2),s=c[0],i=c[1],n=Object(r.f)();return Object(a.useEffect)((function(){fetch("https://osParking.pythonanywhere.com/get-location",{method:"GET",mode:"cors",headers:{"Access-Control-Allow-Origin":"*",Content_Type:"application/json"}}).then((function(e){return e.json()})).then((function(e){i({data:e.data})}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{title:"Hello Dan!"}),Object(j.jsxs)("div",{id:"profile_wrapper",children:[Object(j.jsxs)("section",{children:[Object(j.jsxs)("div",{id:"overview_holder",children:[Object(j.jsx)("h1",{children:"Quick Overview"}),Object(j.jsx)("select",{id:"profile_select_lot",onChange:function(e){console.log(e.target.value)},children:s.data.map((function(e,t){return Object(j.jsx)("option",{value:e.id,children:e.id},t)}))})]}),Object(j.jsxs)("div",{className:"profile_card_holder",children:[Object(j.jsxs)("div",{className:"card col",children:["Total for Today",Object(j.jsx)("h1",{children:"$0"})]}),Object(j.jsxs)("div",{className:"card col",children:["Total for This Week",Object(j.jsx)("h1",{children:"$0"})]}),Object(j.jsxs)("div",{className:"card col",children:["Total for this month",Object(j.jsx)("h1",{children:"$0"})]})]})]}),Object(j.jsx)("section",{id:"profile_section_two",children:Object(j.jsxs)("div",{className:"selection_of_lots_dash",children:["Visit Lot Dashboard",Object(j.jsx)("input",{type:"text",id:"search_bar",name:"search",value:"Search..."}),Object(j.jsx)("div",{className:"lots_dash_scroll",children:s.data.map((function(e,t){return Object(j.jsxs)("div",{className:"card profile_dash_selection",onClick:function(){!function(e){localStorage.setItem("dashboard_lot",e.id),localStorage.setItem("dashboard_lot_name",e.name),n.push("/dash/".concat(e.id))}(e)},children:[Object(j.jsx)("div",{children:Object(j.jsx)("strong",{children:e.name})}),Object(j.jsxs)("div",{children:["Lot id: ",e.id]})]})}))})]})})]})]})};var P=function(){return Object(j.jsx)(l.a,{basename:"/oneshotdash",children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"/dash/:lot",exact:!0,component:N}),Object(j.jsx)(r.a,{path:"/lot-management",exact:!0,component:k}),Object(j.jsx)(r.a,{path:"/notifications",exact:!0,component:T}),Object(j.jsx)(r.a,{path:"/",exact:!0,component:D})]})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,199)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),i(e),n(e)}))};n.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root")),F()},82:function(e,t,c){},83:function(e,t,c){}},[[198,1,2]]]);
//# sourceMappingURL=main.9a87f616.chunk.js.map