webpackJsonp([1],{"5Y0M":function(t,e){},Aybg:function(t,e){},MbID:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("/5sW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-right"},[e("div",{staticClass:"nav navbar-nav github-login"},[this._m(0),this._v(" "),e("router-link",{staticClass:"btn btn-default login-btn",attrs:{to:"/auth/register"}},[e("i",{staticClass:"fa fa-user-plus"}),this._v(" 注 册\n    ")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn btn-default login-btn",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-user"}),this._v(" 登 录\n    ")])}]};var n={name:"TheHeader",components:{TheEntry:s("VU/8")({name:"TheEntry"},i,!1,function(t){s("rK/M")},"data-v-b007a2c4",null).exports},data:function(){return{logo:{src:this.uploadsUrl+"sites/ByvFbNlQYVwhvTyBgLdqitchoacDNznN.jpg",title:"VuejsCaff"},navList:["社区","头条","问答","教程"],activeNavIndex:0,showCollapsedNav:!1}},beforeCreate:function(){this.uploadsUrl="https://vuejscaffcdn.phphub.org/uploads/"},methods:{changeNavIndex:function(t){this.activeNavIndex=t},toggleNav:function(){this.showCollapsedNav=!this.showCollapsedNav}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar navbar-default topnav"},[s("div",{staticClass:"container"},[s("div",{staticClass:"navbar-header"},[s("button",{staticClass:"navbar-toggle",attrs:{type:"button"},on:{click:t.toggleNav}},[s("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),s("span",{staticClass:"icon-bar"}),t._v(" "),s("span",{staticClass:"icon-bar"}),t._v(" "),s("span",{staticClass:"icon-bar"})]),t._v(" "),s("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[s("span",{staticClass:"title"},[t._v(t._s(t.logo.title))]),t._v(" "),s("img",{attrs:{src:t.logo.src,alt:t.logo.title}})])],1),t._v(" "),s("div",{class:["collapse","navbar-collapse",{in:t.showCollapsedNav}],attrs:{id:"top-navbar-collapse"}},[s("ul",{staticClass:"nav navbar-nav"},t._l(t.navList,function(e,a){return s("li",{class:{active:a===t.activeNavIndex}},[s("a",{attrs:{href:"#"},on:{click:function(e){t.changeNavIndex(a)}}},[t._v(t._s(e))])])})),t._v(" "),s("div",{staticClass:"navbar-right"},[s("TheEntry")],1)])])])},staticRenderFns:[]};function o(t,e){var s=function(){var t=document.querySelector(".title-popover");if(!t){var e=document.createRange().createContextualFragment('\n      <div class="popover title-popover top fade in" style="position:fixed;">\n        <div class="arrow"></div>\n        <div class="popover-content"></div>\n      </div>\n    ');document.body.appendChild(e),t=document.querySelector(".title-popover")}return t}(),a=s.style;if(void 0===e)a.display="none";else{var i=t.getBoundingClientRect(),n=window.getComputedStyle(t,null),r=parseInt(n.getPropertyValue("padding-right"))||0,o=parseInt(n.getPropertyValue("padding-top"))||0;a.visibility="hidden",a.display="block",s.querySelector(".popover-content").textContent=e,a.left=i.left-s.offsetWidth/2+(t.offsetWidth-r)/2+"px",a.top=i.top-s.offsetHeight+o+"px",a.display="block",a.visibility="visible"}}var l={name:"TheFooter",directives:{title:{bind:function(t,e,s){var a=["mouseenter","mouseleave","click"],i=function(s){"mouseenter"===s.type?o(t,e.value):o()};a.forEach(function(e){t.addEventListener(e,i,!1)}),t.destroy=function(){a.forEach(function(e){t.removeEventListener(e,i,!1)}),t.destroy=null}},unbind:function(t){t.destroy()}}},data:function(){return{description:"VuejsCaff 是一个 Vue.js 的知识社区",contacts:[{icon:"envelope",title:"反馈问题",link:"mailto:summer@yousails.com"},{icon:"weibo",title:"站长微博",link:"https://weibo.com/1837553744/profile?topnav=1&wvr=6"},{icon:"weixin",title:"加我微信",link:"https://vuejscaff.com/contact"}],contactStyle:{paddingRight:"8px"},designer:'\n      <span style="font-size:0.9em">Designed by\n        <span style="color: #e27575;font-size: 14px;">❤</span>\n        <a href="https://github.com/summerblue"target="_blank"style="color:inherit">Summer</a>\n      </span>\n    ',sponsor:{title:"赞助商",list:[{logo:"https://lccdn.phphub.org/uploads/banners/bQawWl3vT5dc2lYx5JZ7.png",title:"本站服务器由 UCloud 赞助",link:"http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=phphub&utm_medium=display&utm_content=yejiao&ytag=phphubyejiao"},{logo:"https://lccdn.phphub.org/uploads/banners/yGLIR0idW7zsInjsNmzr.png",title:"本站 CDN 服务由七牛赞助",link:"http://www.qiniu.com/?utm_source=phphub"},{logo:"https://lccdn.phphub.org/uploads/banners/XPtLlZmIN1cQbLuDFEON.png",title:"Composer 镜像赞助商",link:"https://www.upyun.com/"},{logo:"https://lccdn.phphub.org/uploads/banners/JpTCK6OKYBIrBIWdtob8.png",title:"订阅邮件赞助商：SendCloud",link:"http://www.sendcloud.net/"}]},statistics:{title:"统计信息",list:[{title:"社区会员",description:"22889"},{title:"话题数",description:"7397"},{title:"评论数",description:"39375"}]},other:{title:"其他信息",list:[{icon:"thumbs-up",title:"软件外包服务",link:"https://vuejscaff.com/contact"},{icon:"globe",title:"推荐网站",link:"https://vuejscaff.com/sites"}]}}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row footer-top"},[s("div",{staticClass:"col-sm-5 col-lg-5"},[s("p",{staticClass:"padding-top-xsm"},[t._v(t._s(t.description))]),t._v(" "),s("div",{staticClass:"text-md"},t._l(t.contacts,function(e){return s("a",{directives:[{name:"title",rawName:"v-title",value:e.title,expression:"item.title"}],style:t.contactStyle,attrs:{href:e.link,target:"_blank"}},[s("i",{class:"fa fa-"+e.icon})])})),t._v(" "),s("br"),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.designer)}})]),t._v(" "),s("div",{staticClass:"col-sm-6 col-lg-6 col-lg-offset-1"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4"},[s("h4",[t._v(t._s(t.sponsor.title))]),t._v(" "),s("ul",{staticClass:"list-unstyled"},t._l(t.sponsor.list,function(t){return s("li",[s("a",{attrs:{href:t.link,target:"_blank"}},[s("img",{directives:[{name:"title",rawName:"v-title",value:t.title,expression:"item.title"}],staticClass:"footer-sponsor-link",attrs:{src:t.logo,alt:t.title,width:"98"}})])])}))]),t._v(" "),s("div",{staticClass:"col-sm-4"},[s("h4",[t._v(t._s(t.statistics.title))]),t._v(" "),s("ul",{staticClass:"list-unstyled"},t._l(t.statistics.list,function(e){return s("li",[t._v(t._s(e.title)+": "+t._s(e.description))])}))]),t._v(" "),s("div",{staticClass:"col-sm-4"},[s("h4",[t._v(t._s(t.other.title))]),t._v(" "),s("ul",{staticClass:"list-unstyled"},t._l(t.other.list,function(e){return s("li",[s("a",{attrs:{href:e.link,title:e.title,target:"_blank"}},[s("i",{class:"fa fa-"+e.icon}),t._v(" "+t._s(e.title)+"\n                ")])])}))])])])])])])},staticRenderFns:[]};var u={name:"App",components:{TheHeader:s("VU/8")(n,r,!1,function(t){s("jRQx")},"data-v-aa64c0c8",null).exports,TheFooter:s("VU/8")(l,c,!1,function(t){s("5Y0M")},"data-v-62c08afd",null).exports}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"wrap"}},[e("TheHeader"),this._v(" "),e("div",{staticClass:"container main-container",attrs:{id:"main-container"}},[e("router-view")],1),this._v(" "),e("TheFooter")],1)},staticRenderFns:[]};var p=s("VU/8")(u,d,!1,function(t){s("XTF9")},null,null).exports,v=s("/ocq"),h=s("Gu7T"),m=s.n(h),f=s("mvHQ"),g=s.n(f),b=localStorage,_=function(t,e){b.setItem(t,g()(e))},w=function(t){try{return JSON.parse(b.getItem(t))}catch(t){return null}},y={name:"Register",data:function(){return{captchaTpl:"",username:"",password:"",cpassword:"",captcha:"",msg:"",msgType:"",msgShow:!1}},created:function(){this.getCaptcha()},methods:{getCaptcha:function(){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"QWERTYUIOPLKJHGFDSAZXCVBNM1234567890",s="",a=[];try{a=[].concat(m()(Array(t))).map(function(){return e[Math.floor(Math.random()*e.length)]})}catch(t){}return a.forEach(function(t){s+='<span class="flex1 hcenter">'+t+"</span>"}),a=a.join(""),{tpl:s,captcha:a}}(6),e=t.tpl,s=t.captcha;this.captchaTpl=e,this.localCaptcha=s},register:function(t){var e=this;this.$nextTick(function(){("submit"===t.target.type?t.target:t.target.parentElement).canSubmit&&e.submit()})},submit:function(){if(this.captcha.toUpperCase()!==this.localCaptcha)this.showMsg("验证码不正确"),this.getCaptcha();else{var t={name:this.username,password:this.password,avatar:"https://api.adorable.io/avatars/200/"+this.username+".png"},e=this.$store.state.user;e&&e.name===t.name?this.showMsg("用户名已存在"):this.login(t)}},login:function(t){this.$store.dispatch("login",t),this.showMsg("注册成功","success")},showMsg:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";this.msg=t,this.msgType=s,this.msgShow=!1,this.$nextTick(function(){e.msgShow=!0})}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 col-md-offset-4 floating-box"},[s("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(e){t.msgShow=e}}}),t._v(" "),s("div",{staticClass:"panel panel-default"},[t._m(0),t._v(" "),s("div",{staticClass:"panel-body",attrs:{"data-validator-form":""}},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"control-label"},[t._v("用户名")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.username,expression:"username",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator:input.required",value:{regex:/^[a-zA-Z]+\w*\s?\w*$/,error:"用户名要求以字母开头的单词字符"},expression:"{ regex: /^[a-zA-Z]+\\w*\\s?\\w*$/, error: '用户名要求以字母开头的单词字符' }",arg:"input",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写用户名"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"control-label"},[t._v("密码")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{regex:/^\w{6,16}$/,error:"密码要求 6 ~ 16 个单词字符"},expression:"{ regex: /^\\w{6,16}$/, error: '密码要求 6 ~ 16 个单词字符' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{id:"password",type:"password",placeholder:"请填写密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"control-label"},[t._v("确认密码")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.cpassword,expression:"cpassword",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{target:"#password"},expression:"{ target: '#password' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"password",placeholder:"请填写确认密码"},domProps:{value:t.cpassword},on:{input:function(e){e.target.composing||(t.cpassword=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"control-label"},[t._v("图片验证码")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.captcha,expression:"captcha",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"图片验证码"},expression:"{ title: '图片验证码' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写验证码"},domProps:{value:t.captcha},on:{input:function(e){e.target.composing||(t.captcha=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"thumbnail",attrs:{title:"点击图片重新获取验证码"},on:{click:t.getCaptcha}},[s("div",{staticClass:"captcha vcenter",domProps:{innerHTML:t._s(t.captchaTpl)}})]),t._v(" "),s("button",{staticClass:"btn btn-lg btn-success btn-block",attrs:{type:"submit"},on:{click:t.register}},[s("i",{staticClass:"fa fa-btn fa-sign-in"}),t._v(" 注册\n        ")])])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-heading"},[e("h3",{staticClass:"panel-title"},[this._v("请注册")])])}]};var x=s("VU/8")(y,C,!1,function(t){s("MbID")},"data-v-196c5eb7",null).exports;a.a.use(v.a);var k=[{path:"/auth/register",name:"Register",component:x}],N=new v.a({mode:"history",routes:k}),S=s("pFYg"),E=s.n(S);function T(t,e,s){s=s&&"object"===(void 0===s?"undefined":E()(s))?s:{};var a="string"==typeof t.value?t.value.trim():"",i=s,n=i.title,r=void 0===n?"该项":n,o=i.error,l="";if(e.required&&""===a)l=r+"不能为空";else if(s.target){var c=document.querySelector(s.target);(c?c.value:null)!==a&&(l="输入的"+r+"不匹配")}else if(s.regex)try{s.regex.test(a)||(l=r+"格式不正确")}catch(t){}l?$(t,void 0===o?l:o):$(t)}function $(t,e){var s=t.parentElement,a=function(t){var e=t.parentElement,s=e.querySelector(".help-block");if(!s){var a=document.createRange().createContextualFragment('<span class="help-block"></span>');e.appendChild(a),s=e.querySelector(".help-block")}return s}(t);void 0===e?(a.style.display="none",s.classList.remove("has-error")):(a.textContent=e,a.style.display="block",s.classList.add("has-error"))}var q={bind:function(t,e,s){var a=e.value,i=e.arg,n=e.modifiers,r=-1!==["change","blur","input"].indexOf(i)?i:"change",o=function(){$(t)},l=function(){T(t,n,a)};t.addEventListener("input",o,!1),t.addEventListener(r,l,!1),t.destroy=function(){t.removeEventListener("input",o,!1),t.removeEventListener(r,l,!1),t.destroy=null}},inserted:function(t,e,s){var a=e.value,i=e.modifiers,n=t.closest("[data-validator-form]"),r=n?n.querySelector("[type=submit]"):null;if(r){var o=function(){T(t,i,a),n.querySelectorAll(".has-error").length?r.canSubmit=!1:r.canSubmit=!0};r.addEventListener("click",o,!1),t.destroySubmitBtn=function(){r.removeEventListener("click",o,!1),t.destroySubmitBtn=null}}},unbind:function(t){t.destroy(),t.destroySubmitBtn&&t.destroySubmitBtn()}};a.a.directive("validator",q);var L={name:"Message",props:{show:{type:Boolean,default:!1},type:{type:String,default:"success"},msg:{type:String,default:""}},watch:{show:function(t){var e=this;t&&this.$nextTick(function(){e.$el.scrollIntoView(!0)})}},methods:{close:function(){this.$emit("update:show",!1)}}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],class:"alert alert-"+this.type+" alert-dismissible"},[e("button",{staticClass:"close",attrs:{type:"button"},on:{click:this.close}},[e("span",[this._v("×")])]),this._v("\n  "+this._s(this.msg)+"\n")])},staticRenderFns:[]};var U=s("VU/8")(L,M,!1,function(t){s("Aybg")},"data-v-4c98cde6",null).exports;a.a.component("Message",U);var I=s("NYxO");a.a.use(I.a);var R={user:w("user")},F={UPDATE_USER:function(t,e){t.user=e,_("user",e)}},j={login:function(t,e){var s=t.commit;e&&s("UPDATE_USER",e),N.push("/")}},V=new I.a.Store({state:R,mutations:F,actions:j});a.a.config.productionTip=!1,new a.a({el:"#app",router:N,store:V,render:function(t){return t(p)}})},XTF9:function(t,e){},jRQx:function(t,e){},"rK/M":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.00d82781c9a304d9ff5f.js.map