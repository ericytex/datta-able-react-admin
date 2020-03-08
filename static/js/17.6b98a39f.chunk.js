(this["webpackJsonpdatta-able-rv18.0.4"]=this["webpackJsonpdatta-able-rv18.0.4"]||[]).push([[17],{154:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(58),o=t(56),s=t(17),i=t(55);class c extends l.Component{render(){return n.a.createElement(s.a,null,n.a.createElement(r.a,null,n.a.createElement(o.a,null,n.a.createElement(i.a,{title:"Quick Installation",isOption:!0},n.a.createElement("p",null," - First of all it's required to install latest Node and npm - ",n.a.createElement("a",{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},"nodejs")),n.a.createElement("p",null," - Unzip ",n.a.createElement("code",null,"datta-able-react-lite.zip")," file, Inside that directory you will find the ",n.a.createElement("code",null,"datta-able-react-lite/")," folder"),n.a.createElement("p",null," - Open your terminal/cmd then navigate to project directory ",n.a.createElement("code",null,"datta-able-react-lite/")),n.a.createElement("p",null," - Install npm packages using command ",n.a.createElement("code",null,"'npm install'"),",  this will install required node.js third-party plugins into the ",n.a.createElement("code",null,"node_modules/")," folder."),n.a.createElement("p",null," - Compile/Run project using  command  ",n.a.createElement("code",null,"'npm start'"),", this will compile app in development mode."),n.a.createElement("p",null," - Open ",n.a.createElement("a",{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"},"http://localhost:3000")," to view it on browser."),n.a.createElement("p",null," - Now, You can use Datta Able React Admin Template for your application development. "),n.a.createElement("div",{className:"theme-bg2 text-white p-3"},n.a.createElement("p",null,"The project was built assuming it is hosted at the server root folder of domain/platform i.e http://demo.com."),n.a.createElement("p",null,"You can control this with the homepage field in your package.json."),n.a.createElement("p",null,'To deploy build for sub-folder i.e http://demo.com/project-folder-name/ than "homepage" : "http://demo.com/project-folder-name/".'),n.a.createElement("p",null,"You  also need to set basename in ../src/config.js file."),n.a.createElement("p",null,"like, basename: '/project-folder-name'")),n.a.createElement("p",null," - Build project using command ",n.a.createElement("code",null,"'npm run build'"),", It will create ",n.a.createElement("code",null,"build/")," folder inside datta-able-react-lite/ folder. "),n.a.createElement("p",null," - Your app is ready to be deployed. ")))))}}a.default=c},55:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(89),o=t(59),s=t(164),i=t(53),c=t.n(i),d=t(17),m=t(49);class p extends l.Component{constructor(...e){super(...e),this.state={isOption:this.props.isOption,fullCard:!1,collapseCard:!1,loadCard:!1,cardRemove:!1},this.cardReloadHandler=()=>{this.setState({loadCard:!0}),setInterval(()=>{this.setState({loadCard:!1})},3e3)},this.cardRemoveHandler=()=>{this.setState({cardRemove:!0})}}render(){let e,a,t,l,i="",c=[];return this.state.isOption&&(t=n.a.createElement("div",{className:"card-header-right"},n.a.createElement(r.a,{alignRight:!0,className:"btn-group card-option"},n.a.createElement(r.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},n.a.createElement("i",{className:"feather icon-more-horizontal"})),n.a.createElement(r.a.Menu,{as:"ul",className:"list-unstyled card-option"},n.a.createElement(r.a.Item,{as:"li",className:"dropdown-item",onClick:()=>{this.setState(e=>({fullCard:!e.fullCard}))}},n.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),n.a.createElement("a",{href:m.a.BLANK_LINK}," ",this.state.fullCard?"Restore":"Maximize"," ")),n.a.createElement(r.a.Item,{as:"li",className:"dropdown-item",onClick:()=>{this.setState(e=>({collapseCard:!e.collapseCard}))}},n.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),n.a.createElement("a",{href:m.a.BLANK_LINK}," ",this.state.collapseCard?"Expand":"Collapse"," ")),n.a.createElement(r.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},n.a.createElement("i",{className:"feather icon-refresh-cw"}),n.a.createElement("a",{href:m.a.BLANK_LINK}," Reload ")),n.a.createElement(r.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler},n.a.createElement("i",{className:"feather icon-trash"}),n.a.createElement("a",{href:m.a.BLANK_LINK}," Remove ")))))),l=n.a.createElement(o.a.Header,null,n.a.createElement(o.a.Title,{as:"h5"},this.props.title),t),this.state.fullCard&&(c=[...c,"full-card"],e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(c=[...c,"card-load"],a=n.a.createElement("div",{className:"card-loader"},n.a.createElement("i",{className:"pct-loader1 anim-rotate"}))),this.state.cardRemove&&(c=[...c,"d-none"]),this.props.cardClass&&(c=[...c,this.props.cardClass]),i=n.a.createElement(o.a,{className:c.join(" "),style:e},l,n.a.createElement(s.a,{in:!this.state.collapseCard},n.a.createElement("div",null,n.a.createElement(o.a.Body,null,this.props.children))),a),n.a.createElement(d.a,null,i)}}a.a=c()(p)}}]);
//# sourceMappingURL=17.6b98a39f.chunk.js.map