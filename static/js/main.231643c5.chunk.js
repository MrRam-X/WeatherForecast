(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(4),i=n.n(a),s=(n(9),n(2)),r=(n(10),n(0)),d="e6089c56092ec527242b47928742ff4f",o="https://api.openweathermap.org/data/2.5/";var j=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)({}),j=Object(s.a)(i,2),l=j[0],h=j[1],u=Object(c.useState)(null),m=Object(s.a)(u,2),p=m[0],b=m[1];return Object(r.jsxs)("div",{className:"card-container",children:[Object(r.jsx)("section",{className:"section-main",children:"undefined"!=typeof l.main?Object(r.jsxs)("div",{className:"temperature",children:[Object(r.jsxs)("div",{children:[Math.round(l.main.temp),"\xbaC"]}),Object(r.jsx)("div",{children:l.weather[0].main}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"".concat("http://openweathermap.org/img/w/").concat(l.weather[0].icon,".png"),alt:"weather icon"})})]}):""}),Object(r.jsxs)("div",{className:"search-main",children:[Object(r.jsx)("input",{type:"text",placeholder:"Search place...",onChange:function(e){a(e.target.value),console.log(n)}}),Object(r.jsx)("button",{onClick:function(){fetch("".concat(o,"weather?q=").concat(n,"&units=metric&appid=").concat(d)).then((function(e){return e.json()})).then((function(e){"404"===e.cod?b("Location Not Found"):(h(e),a(null),console.log(e))}))},children:"Search"})]}),Object(r.jsxs)("section",{className:"section-secondary",children:[Object(r.jsx)("div",{className:"weather-country",children:"undefined"!=typeof l.main?Object(r.jsxs)("div",{className:"temperature",children:[l.name,",",l.sys.country]}):Object(r.jsx)("div",{children:p})}),Object(r.jsxs)("div",{className:"other-stats",children:["undefined"!=typeof l.main?Object(r.jsxs)("div",{children:["Humidity : ",l.main.humidity,"%"]}):"","undefined"!=typeof l.main?Object(r.jsxs)("div",{children:["Min temperature : ",Math.round(l.main.temp_min),"\xbaC"]}):"","undefined"!=typeof l.main?Object(r.jsxs)("div",{children:["Max temperature : ",Math.round(l.main.temp_max),"\xbaC"]}):"","undefined"!=typeof l.main?Object(r.jsxs)("div",{children:["Longitude : ",l.coord.lon,"\xbaN"]}):"","undefined"!=typeof l.main?Object(r.jsxs)("div",{children:["Latitude : ",l.coord.lat,"\xbaS"]}):""]})]})]})};var l=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(j,{})})};i.a.render(Object(r.jsx)(l,{}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.231643c5.chunk.js.map