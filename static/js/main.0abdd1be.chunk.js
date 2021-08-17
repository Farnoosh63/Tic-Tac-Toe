(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{17:function(e,r,a){e.exports={boardrow:"Game_boardrow__3cwUL",status:"Game_status__2qEPk",square:"Game_square__xVwVs","kbd-navigation":"Game_kbd-navigation__1ZeRN",game:"Game_game__1cR7f","game-info":"Game_game-info__2DBrC"}},18:function(e,r,a){e.exports={pairprogramming:"PairProgramming_pairprogramming__3EZp7",left:"PairProgramming_left__2QOO-",right:"PairProgramming_right__1z__v",center:"PairProgramming_center__2RUzj"}},34:function(e,r,a){e.exports={header:"MainNavigation_header__2xQn6",logo:"MainNavigation_logo__dTVAf",active:"MainNavigation_active__2agPv"}},44:function(e,r,a){e.exports={main:"Layout_main__auk_r"}},47:function(e,r,a){e.exports={borderNone:"Tools_borderNone__1Rpww",mt4:"Tools_mt4__3oCK-",secondary:"Tools_secondary__3YRBM",warning:"Tools_warning__3rbku"}},61:function(e,r,a){},62:function(e,r,a){"use strict";a.r(r);var t=a(1),i=a.n(t),n=a(14),s=a.n(n),c=a(15),o=a(7),l=a(48),j=a(31),d=a(32),h=a(39),b=a(38),m=a(17),u=a.n(m),x=a(0);function O(e){return Object(x.jsx)("button",{className:u.a.square,onClick:e.onClicky,children:e.valuee})}var g=function(e){Object(h.a)(a,e);var r=Object(b.a)(a);function a(e){var t;return Object(j.a)(this,a),(t=r.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},t}return Object(d.a)(a,[{key:"handleClicky",value:function(e){var r=this.state.squares.slice();console.log(r),f(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({squares:r,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var r=this;return Object(x.jsx)(O,{valuee:this.state.squares[e],onClicky:function(){return r.handleClicky(e)}})}},{key:"render",value:function(){var e,r=f(this.state.squares);return e=r?"Winner:"+r:"Next player:"+(this.state.xIsNext?"X":"O"),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:u.a.status,children:e}),Object(x.jsxs)("div",{className:u.a.boardrow,children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(x.jsxs)("div",{className:u.a.boardrow,children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(x.jsxs)("div",{className:u.a.boardrow,children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),a}(i.a.Component),p=function(e){Object(h.a)(a,e);var r=Object(b.a)(a);function a(){return Object(j.a)(this,a),r.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:u.a.game,children:[Object(x.jsx)("div",{className:"game-board",children:Object(x.jsx)(g,{})}),Object(x.jsxs)("div",{className:"game-info",children:[Object(x.jsx)("div",{}),Object(x.jsx)("ol",{})]})]})}}]),a}(i.a.Component);var v=function(){return Object(x.jsx)(p,{})};function f(e){for(var r=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<r.length;a++){var t=Object(l.a)(r[a],3),i=t[0],n=t[1],s=t[2];if(e[i]&&e[i]===e[n]&&e[i]===e[s])return e[i]}return null}var _=a(34),w=a.n(_);var y=function(){return Object(x.jsxs)("header",{className:w.a.header,children:[Object(x.jsx)("div",{className:w.a.logo,children:"Learning Circle"}),Object(x.jsx)("nav",{children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(c.b,{to:"/Tic-Tac-Toe",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)(c.b,{to:"/game",children:"Game"})}),Object(x.jsx)("li",{children:Object(x.jsx)(c.b,{to:"/pair-programming",children:"Pair Programming"})})]})})]})},N=a(44),P=a.n(N);var T=function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)(y,{}),Object(x.jsx)("main",{className:P.a.main,children:e.children})]})},S=a(18),k=a.n(S),C=a(37),q=a(64),I=a(65),A=a(66);var G=function(){return Object(x.jsxs)("div",{className:k.a.pairprogramming,children:[Object(x.jsx)("h3",{children:"What is Pair Programming?"}),Object(x.jsx)("p",{children:"Pair Programming is where two people wite code together using one computer at the same time. In the virtual world, we will virtually share a screen and the same code editor and both programmers can control the keyboard at the same and programming out loud."}),Object(x.jsx)(q.a,{children:Object(x.jsxs)(I.a,{className:"justify-content-md-center",children:[Object(x.jsx)(A.a,{md:4,children:Object(x.jsx)(C.a,{variant:"success",size:"lg",href:"/",children:"\u226a Back"})}),Object(x.jsx)(A.a,{md:4,children:Object(x.jsx)(C.a,{variant:"success",size:"lg",href:"/pair-programming/benefits",className:k.a.right,children:"Next \u226b"})})]})})]})},B=a(67);var E=function(){return Object(x.jsxs)("div",{className:"d-grid gap-2 mb-4",children:[Object(x.jsxs)(B.a,{variant:"success",children:[Object(x.jsx)(B.a.Heading,{children:"Remote Pair Programming with Farnoosh Johnson"}),Object(x.jsx)("p",{children:"As part of the Menlo training, one of my takeaways was learning how to remotely pair programming."}),Object(x.jsx)("hr",{}),Object(x.jsx)("p",{className:"mb-0",children:"This app is built on Reactjs, a Javascript Library."})]}),Object(x.jsx)(C.a,{variant:"warning",size:"lg",href:"/game",children:"Tic Tac Toe"}),Object(x.jsx)(C.a,{variant:"success",size:"lg",href:"/pair-programming",children:"What is Pair Programming?"})]})};a(60);var M=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:"Benefits of Pair Programming:"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"A collaborative way that involves a lot of communication and engagement."}),Object(x.jsx)("li",{children:"Increase code quality, and reducing the risk of errors and going down the rabbit hole."}),Object(x.jsx)("li",{children:"Transfer skills in the organization."})]}),Object(x.jsx)("h3",{children:"Where should we use Pair Programming?"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"Complex pull request reviews"}),Object(x.jsx)("li",{children:"Coaching"}),Object(x.jsx)("li",{children:"Occasional problem-solving session"}),Object(x.jsx)("li",{children:"As a recruitment Tool"})]}),Object(x.jsx)(q.a,{children:Object(x.jsxs)(I.a,{className:"justify-content-md-center",children:[Object(x.jsx)(A.a,{md:4,children:Object(x.jsx)(C.a,{variant:"success",size:"lg",href:"/pair-programming",children:"\u226a Back"})}),Object(x.jsx)(A.a,{md:4,children:Object(x.jsx)(C.a,{variant:"success",size:"lg",href:"/pair-programming/tools",className:k.a.right,children:"Next \u226b"})})]})})]})},R=a(69),z=a(68),V=a(49),D=a(47),J=a.n(D);var L=function(){return Object(x.jsxs)("div",{children:[Object(x.jsxs)(R.a,{className:J.a.borderNone,children:[Object(x.jsxs)(R.a.Body,{children:[Object(x.jsx)(R.a.Title,{children:"VS Code Live Share"}),Object(x.jsx)(R.a.Text,{children:"It's an extension in VS Code, meaning you need a Microsoft account or a GitHub account to use it."})]}),Object(x.jsx)(R.a.Body,{children:Object(x.jsxs)(z.a,{className:"list-group-flush",children:[Object(x.jsx)(V.a,{children:"There is one host and deafult of five participants but can increase the guest limit to 30"}),Object(x.jsx)(V.a,{children:"Participants can use VS Code, or web browser"}),Object(x.jsx)(V.a,{children:"Identifies a user by Microsoft or Github account.You also can join as an anonymous with limited feature."}),Object(x.jsx)(V.a,{children:"Participants can code in their local VScode or even a web broswer on their phone."}),Object(x.jsx)(V.a,{children:"The user joined with a web browser will have limited features with read-only access."}),Object(x.jsx)(V.a,{children:"Everybody can code on the same file at the same time"}),Object(x.jsx)(V.a,{children:"Read/Write access to Terminal/ Console for logged in users (Microsoft Account or Github Account)"}),Object(x.jsx)(V.a,{children:'Share a web page by installing "Browser Preview" Extension.'})]})}),Object(x.jsx)(R.a.Body,{className:"d-flex justify-content-center",children:Object(x.jsx)(R.a.Img,{style:{width:"18rem"},variant:"bottom",src:"https://raw.githubusercontent.com/MicrosoftDocs/live-share/master/docs/media/vsls-icon.svg"})})]}),Object(x.jsx)(B.a,{variant:"primary",children:Object(x.jsx)(R.a,{children:Object(x.jsxs)(R.a.Body,{children:[Object(x.jsx)(R.a.Title,{children:"Other platform for real-time collaboration"}),Object(x.jsx)(R.a.Text,{children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"CodeTogether (Support VS Code, IntelliJ, Eclipse)"}),Object(x.jsx)("li",{children:"Duckly (Support VS Code, IntelliJ IDEA, Android Stidio, Wenstorm, PyCharm, Phpstorm, GoLand, RubyMine, Rider, Clion, AppCode, DataGrip)"}),Object(x.jsx)("li",{children:"Floobits (Support Sublime Text, Atom, Neovim, Emacs, IntelliJ IDEA)"}),Object(x.jsx)("li",{children:"CoScreen (Any IDE)"})]})})]})})})]})};var W=function(){return Object(x.jsx)(T,{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/Tic-Tac-Toe",exact:!0,children:Object(x.jsx)(E,{})}),Object(x.jsx)(o.a,{path:"/game",children:Object(x.jsx)(v,{})}),Object(x.jsx)(o.a,{path:"/pair-programming",exact:!0,children:Object(x.jsx)(G,{})}),Object(x.jsx)(o.a,{path:"/pair-programming/benefits",children:Object(x.jsx)(M,{})}),Object(x.jsx)(o.a,{path:"/pair-programming/tools",children:Object(x.jsx)(L,{})})]})})};a(61);s.a.render(Object(x.jsx)(c.a,{children:Object(x.jsx)(W,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.0abdd1be.chunk.js.map