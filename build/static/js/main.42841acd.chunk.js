(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{1:function(e,t,c){e.exports={main:"Calculator_main__mEdpR",actions:"Calculator_actions__3pZK1",heading:"Calculator_heading__1voKY",actions_btn:"Calculator_actions_btn__3lYKh",actions_input:"Calculator_actions_input__QGivH",input_box:"Calculator_input_box__1JwgE",input_text:"Calculator_input_text__1T3lY",insight_box:"Calculator_insight_box__fg2lv",data_box:"Calculator_data_box__yy2tI",sub_heading:"Calculator_sub_heading__2Rcu3"}},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(5),a=c.n(n),s=(c(14),c(3)),i=c(2),j=c(1),l=c.n(j),r=c(0),b=function(){var e=Object(i.useState)(1),t=Object(s.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)(500),j=Object(s.a)(a,2),b=j[0],d=j[1],u=Object(i.useState)(1e3),o=Object(s.a)(u,2),x=o[0],h=o[1],_=Object(i.useState)(.01),O=Object(s.a)(_,2),p=O[0],m=O[1];return Object(i.useEffect)((function(){d(500*c),h(1e3*c)}),[c]),Object(i.useEffect)((function(){n(b/500)}),[b]),Object(r.jsxs)("div",{className:l.a.main,children:[Object(r.jsxs)("div",{className:l.a.actions,children:[Object(r.jsx)("h1",{className:l.a.heading,children:"Number of NFT's"}),Object(r.jsxs)("div",{className:l.a.actions_btn,children:[Object(r.jsx)("button",{onClick:function(){c<10&&n((function(e){return e+1}))},children:"+"}),Object(r.jsx)("p",{className:l.a.actions_input,children:c}),Object(r.jsx)("button",{onClick:function(){c>1&&n(c-1)},children:"-"})]})]}),Object(r.jsxs)("div",{className:l.a.input_box,children:[Object(r.jsx)("input",{type:"range",min:"0",max:"5000",step:"500",value:b,onChange:function(e){d(e.target.value)}}),Object(r.jsxs)("div",{className:l.a.input_text,children:[Object(r.jsxs)("span",{children:["$",b]})," ",Object(r.jsx)("span",{children:"Investment Amount"})," ",Object(r.jsx)("span",{children:"$5000"})," "]}),Object(r.jsx)("input",{type:"range",min:"0",max:"10000",step:"1000",value:x,onChange:function(e){h(e.target.value)}}),Object(r.jsxs)("div",{className:l.a.input_text,children:[Object(r.jsxs)("span",{children:[x,"Th/s"]})," ",Object(r.jsx)("span",{children:"Mining Power"})," ",Object(r.jsx)("span",{children:"10000 Th/s"})," "]}),Object(r.jsx)("input",{type:"range",min:"0",max:"100",value:p,onChange:function(e){m(e.target.value)}}),Object(r.jsxs)("div",{className:l.a.input_text,children:[Object(r.jsxs)("span",{children:["$",p]})," ",Object(r.jsx)("span",{children:"Kadena Price"})," ",Object(r.jsx)("span",{children:"$100"})," "]})]}),Object(r.jsxs)("div",{className:l.a.insight_box,children:[Object(r.jsx)("p",{className:l.a.sub_heading,children:"Earning"}),Object(r.jsxs)("div",{className:l.a.data_box,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:l.a.sub_heading,children:"Daily"}),Object(r.jsx)("p",{children:"0.5 KDA"}),Object(r.jsxs)("p",{children:["$",(.5*p*c).toFixed(2)]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:l.a.sub_heading,children:"Monthly"}),Object(r.jsx)("p",{children:"15 KDA"}),Object(r.jsxs)("p",{children:["$",(15*p*c).toFixed(2)]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:l.a.sub_heading,children:"1 Year"}),Object(r.jsx)("p",{children:"180 KDA"}),Object(r.jsxs)("p",{children:["$",(180*p*c).toFixed(2)]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:l.a.sub_heading,children:"3 Years"}),Object(r.jsx)("p",{children:"500 KDA"}),Object(r.jsxs)("p",{children:["$",(500*p*c).toFixed(2)]})]})]})]})]})};var d=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(b,{})})};a.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(d,{}))}},[[16,1,2]]]);
//# sourceMappingURL=main.42841acd.chunk.js.map