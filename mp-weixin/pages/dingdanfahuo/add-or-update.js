(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dingdanfahuo/add-or-update"],{"0475":function(n,e,i){"use strict";var t={"w-picker":function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"142b"))}},a=function(){var n=this,e=n.$createElement;n._self._c},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return t}))},"0adc":function(n,e,i){"use strict";(function(n){i("1529"),i("921b");t(i("66fd"));var e=t(i("de82"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])},"1ed5":function(n,e,i){"use strict";var t=i("c85e"),a=i.n(t);a.a},c7e6:function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=a(i("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,e,i,t,a,r,u){try{var o=n[r](u),s=o.value}catch(c){return void i(c)}o.done?e(s):Promise.resolve(s).then(t,a)}function u(n){return function(){var e=this,i=arguments;return new Promise((function(t,a){var u=n.apply(e,i);function o(n){r(u,t,a,o,s,"next",n)}function s(n){r(u,t,a,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("142b"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{ruleForm:{dingdanbianhao:"",shangpinmingcheng:"",tupian:"",shuliang:"",fahuoriqi:"",yonghuming:"",yonghuxingming:"",shoujihaoma:"",dizhi:"",maijiazhanghao:"",maijiaxingming:"",userid:""},user:{},ro:{dingdanbianhao:!1,shangpinmingcheng:!1,tupian:!1,shuliang:!1,fahuoriqi:!1,yonghuming:!1,yonghuxingming:!1,shoujihaoma:!1,dizhi:!1,maijiazhanghao:!1,maijiaxingming:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var e=u(t.default.mark((function e(i){var a,r,u,o;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.getStorageSync("nowTable"),e.next=3,this.$api.session(a);case 3:if(r=e.sent,this.user=r.data,this.ruleForm.maijiazhanghao=this.user.maijiazhanghao,this.ruleForm.maijiaxingming=this.user.maijiaxingming,this.ruleForm.userid=n.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!i.id){e.next=15;break}return this.ruleForm.id=i.id,e.next=13,this.$api.info("dingdanfahuo",this.ruleForm.id);case 13:r=e.sent,this.ruleForm=r.data;case 15:if(!i.cross){e.next=70;break}u=n.getStorageSync("crossObj"),e.t0=t.default.keys(u);case 18:if((e.t1=e.t0()).done){e.next=70;break}if(o=e.t1.value,"dingdanbianhao"!=o){e.next=24;break}return this.ruleForm.dingdanbianhao=u[o],this.ro.dingdanbianhao=!0,e.abrupt("continue",18);case 24:if("shangpinmingcheng"!=o){e.next=28;break}return this.ruleForm.shangpinmingcheng=u[o],this.ro.shangpinmingcheng=!0,e.abrupt("continue",18);case 28:if("tupian"!=o){e.next=32;break}return this.ruleForm.tupian=u[o],this.ro.tupian=!0,e.abrupt("continue",18);case 32:if("shuliang"!=o){e.next=36;break}return this.ruleForm.shuliang=u[o],this.ro.shuliang=!0,e.abrupt("continue",18);case 36:if("fahuoriqi"!=o){e.next=40;break}return this.ruleForm.fahuoriqi=u[o],this.ro.fahuoriqi=!0,e.abrupt("continue",18);case 40:if("yonghuming"!=o){e.next=44;break}return this.ruleForm.yonghuming=u[o],this.ro.yonghuming=!0,e.abrupt("continue",18);case 44:if("yonghuxingming"!=o){e.next=48;break}return this.ruleForm.yonghuxingming=u[o],this.ro.yonghuxingming=!0,e.abrupt("continue",18);case 48:if("shoujihaoma"!=o){e.next=52;break}return this.ruleForm.shoujihaoma=u[o],this.ro.shoujihaoma=!0,e.abrupt("continue",18);case 52:if("dizhi"!=o){e.next=56;break}return this.ruleForm.dizhi=u[o],this.ro.dizhi=!0,e.abrupt("continue",18);case 56:if("maijiazhanghao"!=o){e.next=60;break}return this.ruleForm.maijiazhanghao=u[o],this.ro.maijiazhanghao=!0,e.abrupt("continue",18);case 60:if("maijiaxingming"!=o){e.next=64;break}return this.ruleForm.maijiaxingming=u[o],this.ro.maijiaxingming=!0,e.abrupt("continue",18);case 64:if("userid"!=o){e.next=68;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,e.abrupt("continue",18);case 68:e.next=18;break;case 70:this.styleChange();case 71:case"end":return e.stop()}}),e,this)})));function i(n){return e.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},fahuoriqiConfirm:function(n){console.log(n),this.ruleForm.fahuoriqi=n.result,this.$forceUpdate()},tupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.tupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.ruleForm.id){n.next=5;break}return n.next=3,this.$api.update("dingdanfahuo",this.ruleForm);case 3:n.next=7;break;case 5:return n.next=7,this.$api.add("dingdanfahuo",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(i,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,i("543d")["default"])},c85e:function(n,e,i){},de82:function(n,e,i){"use strict";i.r(e);var t=i("0475"),a=i("fe0d");for(var r in a)"default"!==r&&function(n){i.d(e,n,(function(){return a[n]}))}(r);i("1ed5");var u,o=i("f0c5"),s=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"3d013608",null,!1,t["a"],u);e["default"]=s.exports},fe0d:function(n,e,i){"use strict";i.r(e);var t=i("c7e6"),a=i.n(t);for(var r in t)"default"!==r&&function(n){i.d(e,n,(function(){return t[n]}))}(r);e["default"]=a.a}},[["0adc","common/runtime","common/vendor"]]]);