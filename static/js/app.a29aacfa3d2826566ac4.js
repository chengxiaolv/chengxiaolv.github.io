webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var c=a("VU/8")({name:"App"},i,!1,function(t){a("ymcE")},null,null).exports,s=a("/ocq"),l="D:\\",r="",o={data:function(){return{isShow:!0}},methods:{change:function(t){this.isShow=1==t},clearText:function(){l=document.all("text_path").value,document.getElementById("text_name").value="",document.getElementById("text_sex").value="",document.getElementById("text_nation").value="",document.getElementById("text_birthday").value="",document.getElementById("text_address").value="",document.getElementById("text_idNum").value="",document.getElementById("text_dept").value="",document.getElementById("text_effDate").value="",document.getElementById("text_expDate").value="",document.getElementById("text_result").value="",document.getElementById("PhotoID").src=""},hxgc_stopReadIDCard:function(){window.clearInterval(r),startloop.disabled=!1,this.disabled=!0},hxgc_startReadIDCard:function(){var t=this;stoploop.disabled=!1,startloop.disabled=!0,r=window.setInterval(function(){t.hxgc_ReadIDCard()},1e3)},hxgc_ReadIDCard:function(){this.clearText();var t,e="";t=objActiveX.hxgc_ReadChipIDNumber(1001),document.getElementById("text_result").value+=""==t?"读二代证芯片ID失败，"+objActiveX.hxgc_GetLastErrorStr()+".":"读二代证芯片ID = "+t+".",0==objActiveX.hxgc_ReadIDCard(1001)?(document.getElementById("text_result").value+="\r\n读二代证信息成功.",document.getElementById("text_name").value=objActiveX.hxgc_GetName(),document.getElementById("text_sex").value=objActiveX.hxgc_GetSex(),document.getElementById("text_nation").value=objActiveX.hxgc_GetNation(),document.getElementById("text_birthday").value=objActiveX.hxgc_GetBirthDate(),document.getElementById("text_address").value=objActiveX.hxgc_GetAddress(),document.getElementById("text_idNum").value=objActiveX.hxgc_GetIDCode(),document.getElementById("text_dept").value=objActiveX.hxgc_GetIssuingAuthority(),document.getElementById("text_effDate").value=objActiveX.hxgc_GetBeginPeriodOfValidity(),document.getElementById("text_expDate").value=objActiveX.hxgc_GetEndPeriodOfValidity(),iResut=objActiveX.hxgc_SavePhAsBmp(l,"_PhotoA.bmp"),0==iResut?document.getElementById("text_result").value+="\r\n保存BMP照片成功，路径 = "+l+"_PhotoA.bmp.":document.getElementById("text_result").value+="\r\n错误：保存BMP照片失败，"+objActiveX.hxgc_GetLastErrorStr()+".",iResut=objActiveX.hxgc_SavePhAsJpg(l,"_PhotoB.jpg"),0==iResut?(document.getElementById("text_result").value+="\r\n保存JPG照片成功，路径 = "+l+"_PhotoB.jpg.",e=objActiveX.hxgc_MakeFileToBeas64(l,"_PhotoB.jpg"),document.getElementById("text_result").value+="\r\nJPG照片Base64编码："+e+".",document.all("PhotoID").src="data:image/jpeg;base64,"+e):document.getElementById("text_result").value+="\r\n错误：保存JPG照片失败，"+objActiveX.hxgc_GetLastErrorStr()+"."):document.getElementById("text_result").value+="\r\n读二代证信息失败，"+objActiveX.hxgc_GetLastErrorStr()+"."},hxgc_PiccMemActive:function(){var t=this;window.setInterval(function(){t.active()},1e3)},active:function(){this.hxgc_OpenDevice(),document.all.log.value="";var t=MyObject.hxgc_PiccMemActive(0);document.all.log.value=0==t?"成功，卡类型 = "+MyObject.hxgc_GetPiccMemType()+",卡UID = "+MyObject.hxgc_GetPiccMemUID():MyObject.hxgc_GetLastErrorStr()},hxgc_CloseDevice:function(){document.all.log.value="";var t=MyObject.hxgc_CloseDevice();document.all.log.value=0==t?"成功.":MyObject.hxgc_GetLastErrorStr()},hxgc_OpenDevice:function(){document.all.log.value="";var t=MyObject.hxgc_OpenDevice(1001,0);document.all.log.value=0==t?"成功.":MyObject.hxgc_GetLastErrorStr()}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{on:{click:function(e){return t.change(1)}}},[t._v("身份证")]),t._v(" "),a("button",{on:{click:function(e){return t.change(2)}}},[t._v("mc卡")]),t._v(" "),t.isShow?a("div",{staticClass:"one"},[a("object",{attrs:{id:"objActiveX",classid:"clsid:03545152-1F24-4555-B9BD-E4D91184CFE2",width:"0",height:"0"}}),t._v(" "),a("table",{attrs:{width:"750px",border:"0",cellspacing:"1",cellpadding:"2",align:"center",bgcolor:"#FFFFFF"}},[a("tr",[a("td",{attrs:{colspan:"3",align:"center"}},[a("input",{staticClass:"butt",attrs:{type:"button",name:"startloop",value:"开始循环"},on:{click:t.hxgc_startReadIDCard}}),t._v(" "),a("input",{staticClass:"butt",attrs:{type:"button",name:"stoploop",value:"停止循环",onClick:"hxgc_stopReadIDCard();",disabled:""}}),t._v(" "),a("input",{staticClass:"butt",attrs:{type:"button",name:"Clear",value:"清空信息",onClick:"clearText();"}})])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10)])]):t._e(),t._v(" "),t.isShow?t._e():a("div",{staticClass:"tow"},[a("object",{attrs:{id:"MyObject",TYPE:"application/hxgc-device.j10",width:"0",height:"0"}}),t._v(" "),a("div",{attrs:{align:"center"}},[a("table",{attrs:{cellpadding:"0",cellspacing:"0",width:"600px"}},[a("tr",[a("td",[a("input",{staticClass:"btn",attrs:{type:"button",value:"激活卡片"},on:{click:t.hxgc_PiccMemActive}})])])])]),t._v(" "),t._m(11)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"title"},[this._v("照片保存路径：")]),this._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{attrs:{type:"text",name:"text_path",id:"text_path",value:""}}),this._v('  注：路径结尾需添加"\\"\n            ')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"title"},[this._v("姓名：")]),this._v(" "),e("td",{attrs:{width:"430px"}},[e("input",{attrs:{type:"text",name:"text_name",id:"text_name",value:"",readonly:""}})]),this._v(" "),e("td",{attrs:{rowspan:"5",align:"center"}},[e("img",{staticStyle:{width:"96px",height:"118px"},attrs:{id:"PhotoID",name:"Photo"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"title"},[this._v("性别：")]),this._v(" "),e("td",[e("input",{attrs:{type:"text",name:"text_sex",id:"text_sex",value:"",readonly:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"title"},[this._v("民族：")]),this._v(" "),e("td",[e("input",{attrs:{type:"text",name:"text_nation",id:"text_nation",value:"",readonly:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"title"},[this._v("出生：")]),this._v(" "),e("td",[e("input",{attrs:{type:"text",name:"text_birthday",id:"text_birthday",value:"",readonly:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"title"},[this._v("地址：")]),this._v(" "),e("td",[e("input",{attrs:{type:"text",name:"text_address",id:"text_address",value:"",readonly:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"title"},[this._v("身份证号：")]),this._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{attrs:{type:"text",name:"text_idNum",id:"text_idNum",value:"",readonly:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"title"},[this._v("签发机关：")]),this._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{attrs:{type:"text",name:"text_dept",id:"text_dept",value:"",readonly:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"title"},[this._v("开始期限：")]),this._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{attrs:{type:"text",name:"text_effDate",id:"text_effDate",value:"",readonly:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"title"},[this._v("结束期限：")]),this._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{attrs:{type:"text",name:"text_expDate",id:"text_expDate",value:"",readonly:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"title"},[this._v("返回数据：")]),this._v(" "),e("td",{attrs:{colspan:"2"}},[e("textarea",{staticStyle:{color:"#FF0000"},attrs:{rows:"10",name:"text_result",id:"text_result",cols:"70",readonly:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("fieldset",[e("legend",[this._v("返回数据")]),this._v(" "),e("div",{staticStyle:{"text-align":"center",width:"780px"},attrs:{align:"center"}},[e("textarea",{attrs:{id:"log",NAME:""}}),this._v(" "),e("div",{staticStyle:{"text-align":"right",width:"770px"}},[e("input",{staticStyle:{width:"50px",height:"25px"},attrs:{type:"button",value:"清空",ONCLICK:"log.value=''"}})])])])])}]};var u=a("VU/8")(o,d,!1,function(t){a("vJWA")},"data-v-6d65f881",null).exports;n.a.use(s.a);var _=new s.a({routes:[{path:"/",name:"HelloWorld",component:u}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:_,components:{App:c},template:"<App/>"})},vJWA:function(t,e){},ymcE:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a29aacfa3d2826566ac4.js.map