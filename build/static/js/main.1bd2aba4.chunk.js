(this.webpackJsonpfindmovies=this.webpackJsonpfindmovies||[]).push([[0],{30:function(e,t,a){e.exports=a(63)},35:function(e,t,a){},36:function(e,t,a){},55:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),o=a.n(l),c=(a(35),a(36),function(){return r.a.createElement("header",null,r.a.createElement("h1",null," Find Movies "))}),i=a(5),s=a(1),u=a(6),m=a.n(u),d=a(8),p=a(9),E=a(10),v=a(11),f=a(12),h=a(28),g=a.n(h).a.create({baseURL:"https://www.omdbapi.com/"}),b=(a(55),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={Movie:{Plot:"Logo ap\xf3s preencher o campo acima, aqui ter\xe1 a descri\xe7\xe3o do filme!",Poster:"https://image.freepik.com/fotos-gratis/fundo-abstrato-preto-escuro-com-lascas-de-madeira_24972-208.jpg",Title:"Preencha o campo acima!"}},e.loadMovies=function(){var t=Object(d.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=document.getElementById("nameMovie").value,t.prev=1,t.next=4,g.get("?t=".concat(a,"&apikey=5dfda1de"));case 4:"False"==(n=t.sent).data.Response?alert("Filme n\xe3o encontrado, tente outro t\xedtulo!"):(e.setState({Movie:n.data}),console.log(e.state)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),alert("Erro ao pesquisar ".concat(a,", tente novamente!"));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(E.a)(a,[{key:"render",value:function(){var e=this.state.Movie;return r.a.createElement("div",{className:"App-Main"},r.a.createElement("div",{className:"search-movie"},r.a.createElement("input",{id:"nameMovie",type:"text",placeholder:"Nome do Filme...",required:!0}),r.a.createElement("button",{onClick:this.loadMovies}," Pesquisar ")),r.a.createElement("div",{className:"results"},r.a.createElement("article",null,r.a.createElement("h2",null," ",e.Title," "),r.a.createElement("img",{src:e.Poster}),r.a.createElement("p",null," ",r.a.createElement("strong",null,"Descri\xe7\xe3o:")," ",e.Plot," "),r.a.createElement(i.b,{id:"detail",to:"/FindMovies/".concat(e.imdbID)}," Ver mais "))))}}]),a}(n.Component)),M=(a(61),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={Movie:{}},e.loadMovie=Object(d.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.match.params.id,t.next=3,g.get("/?i=".concat(a,"&apikey=5dfda1de"));case 3:n=t.sent,e.setState({Movie:n.data}),console.log(e.state.Movie);case 6:case"end":return t.stop()}}),t)}))),e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){this.loadMovie()}},{key:"render",value:function(){var e=this.state.Movie;return r.a.createElement("div",{className:"resulted"},r.a.createElement("article",null,r.a.createElement("h2",null," ",e.Title," "),r.a.createElement("img",{src:e.Poster}),r.a.createElement("p",null," ",r.a.createElement("strong",null,"Descri\xe7\xe3o:")," ",e.Plot," "),r.a.createElement("p",null," ",r.a.createElement("strong",null,"Atores:")," ",e.Actors," "),r.a.createElement("p",null," ",r.a.createElement("strong",null,"Dire\xe7\xe3o:")," ",e.Director," "),r.a.createElement("p",null," ",r.a.createElement("strong",null,"Pa\xeds de origem:")," ",e.Country," "),r.a.createElement("p",null," ",r.a.createElement("strong",null,"G\xeanero:")," ",e.Genre," "),r.a.createElement("p",null," ",r.a.createElement("strong",null,"Dura\xe7\xe3o do filme:")," ",e.Runtime," "),r.a.createElement("p",null," ",r.a.createElement("strong",null,"Ano de lan\xe7amento:")," ",e.Year," "),r.a.createElement("p",null," ",r.a.createElement("strong",null,"Nota IMDB:")," ",e.imdbRating," "),r.a.createElement(i.b,{id:"detail",to:"/FindMovies"}," Voltar a pagina anterior ")))}}]),a}(n.Component)),w=function(){return r.a.createElement(i.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/FindMovies",component:b}),r.a.createElement(s.a,{path:"/FindMovies/:id",component:M})))},k=(a(62),function(){return r.a.createElement("footer",null,r.a.createElement("h4",null," Acesse j\xe1: "),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/dariofelipe",target:"_blank"}," Linkedin ")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/Dario-Felipe",target:"_blank"}," GitHub "))))});var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c,null),r.a.createElement(w,null),r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.1bd2aba4.chunk.js.map