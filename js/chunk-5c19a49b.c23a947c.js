(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c19a49b"],{ab71:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"basicConfig"},[i("div",{staticClass:"fee-container"},[i("div",{staticClass:"fee-header",attrs:{height:"100px"}},[i("el-row",{staticStyle:{margin:"10px 0",padding:"10px"}},[i("el-select",{attrs:{placeholder:"请选择基础配置"},on:{change:e.changeBasicChoice},model:{value:e.aconfigurationVal,callback:function(t){e.aconfigurationVal=t},expression:"aconfigurationVal"}},e._l(e.aconfiguration,function(e){return i("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})}),1)],1),i("el-row",[i("el-col",{attrs:{span:16}},[i("transition",{attrs:{name:"el-fade-in"}},[1==e.saconfigurationValue?i("el-menu",{attrs:{"default-active":e.saconfigurationDefaultValue,mode:"horizontal"},on:{select:e.switchFeeType}},[i("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:"-1"!=e.$authority.indexOf("basicConfigFeeType"),expression:"$authority.indexOf('basicConfigFeeType') != '-1'"}],attrs:{index:"1"}},[e._v("费用类型")]),i("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:"-1"!=e.$authority.indexOf("basicConfigAccountFee"),expression:"$authority.indexOf('basicConfigAccountFee') != '-1'"}],attrs:{index:"2"}},[e._v("记账费用类型")]),i("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:"-1"!=e.$authority.indexOf("basicConfigOtherAccount"),expression:"$authority.indexOf('basicConfigOtherAccount') != '-1'"}],attrs:{index:"3"}},[e._v("其它消费类型")])],1):e._e()],1)],1),i("transition",{attrs:{name:"el-fade-in"}},[i("el-col",{attrs:{span:8,offset:3==e.aconfigurationVal?16:0}},[2==e.feeType&&1==e.aconfigurationVal&&"-1"!=e.$authority.indexOf("basicConfigFeeInsert")?i("el-button",{staticStyle:{float:"right","margin-right":"20px"},attrs:{type:"primary"},on:{click:function(t){return e.editFeeBill("insert")}}},[e._v("新增记账费用")]):e._e(),3==e.feeType&&1==e.aconfigurationVal&&"-1"!=e.$authority.indexOf("basicConfigInsertAccount")?i("el-button",{staticStyle:{float:"right","margin-right":"20px"},attrs:{type:"primary"},on:{click:function(t){return e.editOtherFee("insert")}}},[e._v("添加")]):e._e(),3==e.aconfigurationVal&&"-1"!=e.$authority.indexOf("basicConfigInsertAccount")?i("el-button",{staticStyle:{float:"right","margin-right":"20px","margin-bottom":"20px"},attrs:{type:"primary"},on:{click:function(t){return e.editRoomPriceType("insert")}}},[e._v("添加")]):e._e()],1)],1)],1)],1)]),i("transition",{attrs:{name:"el-fade-in"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.feeType&&1==e.aconfigurationVal&&"-1"!=e.$authority.indexOf("basicConfigFeeSetting"),expression:"(feeType==1)&&(aconfigurationVal==1)&&$authority.indexOf('basicConfigFeeSetting') != '-1'"}]},[i("el-main",{staticClass:"fee-main-normal"},[i("el-table",{key:"tab1",attrs:{data:e.feeNormalTypes,border:""}},[i("el-table-column",{attrs:{label:"序号",align:"center",type:"index",width:"400"}}),i("el-table-column",{attrs:{label:"名称",align:"center",prop:"feeTypeName",width:"400"}}),i("el-table-column",{attrs:{label:"描述",align:"center",prop:"feeInfo"}})],1),e._e()],1)],1)]),i("transition",{attrs:{name:"el-fade-in"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:2==e.feeType&&1==e.aconfigurationVal&&"-1"!=e.$authority.indexOf("basicConfigFeeSetting"),expression:"(feeType==2)&&(aconfigurationVal==1)&&$authority.indexOf('basicConfigFeeSetting') != '-1'"}]},[i("el-main",{staticClass:"fee-main-bill"},[i("el-table",{key:"tab2",attrs:{data:e.feeBillTypes,border:""}},[i("el-table-column",{attrs:{label:"序号",align:"center",type:"index",width:"300"}}),i("el-table-column",{attrs:{label:"名称",align:"center",prop:"feeName",width:"300"}}),i("el-table-column",{attrs:{label:"排序值",align:"center",prop:"sort",width:"300"}}),i("el-table-column",{attrs:{label:"收支类型",align:"center",prop:"incomeName"}}),i("el-table-column",{attrs:{label:"描述",align:"center",prop:"feeInfo"}}),i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{directives:[{name:"show",rawName:"v-show",value:"-1"!=e.$authority.indexOf("basicConfigFeeEdit"),expression:"$authority.indexOf('basicConfigFeeEdit') != '-1'"}],attrs:{type:"text"},on:{click:function(i){return e.editFeeBill(t.row)}}},[e._v("编辑")]),i("el-button",{directives:[{name:"show",rawName:"v-show",value:"-1"!=e.$authority.indexOf("basicConfigFeeDelete"),expression:"$authority.indexOf('basicConfigFeeDelete') != '-1'"}],attrs:{type:"text"},on:{click:function(i){return e.deleteFeeBill(t.row)}}},[e._v("删除")])]}}])})],1),e._e()],1)],1)]),i("transition",{attrs:{name:"el-fade-in"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:3==e.feeType&&1==e.aconfigurationVal&&"-1"!=e.$authority.indexOf("basicConfigFeeSetting"),expression:"(feeType==3)&&(aconfigurationVal==1)&&$authority.indexOf('basicConfigFeeSetting') != '-1'"}]},[i("el-main",{staticClass:"fee-main-bill"},[i("el-table",{key:"tab3",attrs:{data:e.feeOtherList,border:""}},[i("el-table-column",{attrs:{label:"序号",align:"center",type:"index",width:"300"}}),i("el-table-column",{attrs:{label:"名称",align:"center",prop:"feeName",width:"300"}}),i("el-table-column",{attrs:{label:"排序值",align:"center",prop:"sort",width:"300"}}),i("el-table-column",{attrs:{label:"描述",align:"center",prop:"feeInfo"}}),i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{directives:[{name:"show",rawName:"v-show",value:"-1"!=e.$authority.indexOf("basicConfigEditAccount"),expression:"$authority.indexOf('basicConfigEditAccount') != '-1'"}],attrs:{type:"text"},on:{click:function(i){return e.editOtherFee(t.row)}}},[e._v("编辑")]),i("el-button",{directives:[{name:"show",rawName:"v-show",value:"-1"!=e.$authority.indexOf("basicConfigDeleteAccount"),expression:"$authority.indexOf('basicConfigDeleteAccount') != '-1'"}],attrs:{type:"text"},on:{click:function(i){return e.deleteOtherFee(t.row)}}},[e._v("删除")])]}}])})],1)],1)],1)]),i("transition",{attrs:{name:"el-fade-in"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:2==e.saconfigurationValue&&"-1"!=e.$authority.indexOf("basicConfigFlightSettings"),expression:"saconfigurationValue==2&&$authority.indexOf('basicConfigFlightSettings') != '-1'"}]},[i("el-main",{staticClass:"fee-main-normal"},[i("el-col",{directives:[{name:"show",rawName:"v-show",value:"-1"!=e.$authority.indexOf("basicConfigFlightProjectList"),expression:"$authority.indexOf('basicConfigFlightProjectList') != '-1'"}],staticStyle:{"margin-bottom":"20px","margin-top":"10px","padding-left":"10px"},attrs:{span:20}},[i("el-col",{staticStyle:{height:"40px","line-height":"40px"},attrs:{span:1}},[e._v("\n                  项目\n              ")]),i("el-col",{attrs:{span:6}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},on:{change:e.changeProjectVal},model:{value:e.projectId,callback:function(t){e.projectId=t},expression:"projectId"}},e._l(e.projectList,function(e){return i("el-option",{key:e.dailyRentalId,attrs:{label:e.name,value:e.dailyRentalId}})}),1)],1)],1),i("el-col",{attrs:{span:4}},[2==e.saconfigurationValue&&"-1"!=e.$authority.indexOf("basicConfigInsertFlightSettings")?i("el-button",{staticStyle:{float:"right",margin:"10px"},attrs:{type:"primary"},on:{click:function(t){return e.editShift("insert")}}},[e._v("添加班次")]):e._e()],1),i("el-table",{key:"tab21",attrs:{data:e.shiftTypes,border:""}},[i("el-table-column",{attrs:{label:"班次名称",align:"center",prop:"className"}}),i("el-table-column",{attrs:{label:"开始时间",align:"center",prop:"beginTime"}}),i("el-table-column",{attrs:{label:"结束时间",align:"center",prop:"endTime"}}),i("el-table-column",{attrs:{label:"操作",align:"center",prop:""},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{directives:[{name:"show",rawName:"v-show",value:"-1"!=e.$authority.indexOf("basicConfigEditFlightSettings"),expression:"$authority.indexOf('basicConfigEditFlightSettings') != '-1'"}],attrs:{type:"text"},on:{click:function(i){return e.editShift(t.row)}}},[e._v("编辑")]),i("el-button",{directives:[{name:"show",rawName:"v-show",value:"-1"!=e.$authority.indexOf("basicConfigDeleteFlightSettings"),expression:"$authority.indexOf('basicConfigDeleteFlightSettings') != '-1'"}],attrs:{type:"text"},on:{click:function(i){return e.deleteShift(t.row)}}},[e._v("删除")])]}}])})],1)],1)],1)]),i("transition",{attrs:{name:"el-fade-in"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:3==e.aconfigurationVal&&"-1"!=e.$authority.indexOf("basicConfigFeeSetting"),expression:"aconfigurationVal==3&&$authority.indexOf('basicConfigFeeSetting') != '-1'"}]},[i("el-main",{staticClass:"fee-main-bill"},[i("el-table",{key:"tab3",attrs:{data:e.roomPriceTypeList,border:""}},[i("el-table-column",{attrs:{label:"序号",align:"center",type:"index",width:"300"}}),i("el-table-column",{attrs:{label:"名称",align:"center",prop:"chanelName",width:"300"}}),i("el-table-column",{attrs:{label:"排序值",align:"center",prop:"sort",width:"300"}}),i("el-table-column",{attrs:{label:"描述",align:"center",prop:"introduction"}}),i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{directives:[{name:"show",rawName:"v-show",value:"-1"!=e.$authority.indexOf("basicConfigEditAccount"),expression:"$authority.indexOf('basicConfigEditAccount') != '-1'"}],attrs:{type:"text"},on:{click:function(i){return e.editRoomPriceType(t.row)}}},[e._v("编辑")]),i("el-button",{directives:[{name:"show",rawName:"v-show",value:"-1"!=e.$authority.indexOf("basicConfigDeleteAccount"),expression:"$authority.indexOf('basicConfigDeleteAccount') != '-1'"}],attrs:{type:"text"},on:{click:function(i){return e.deleteRoomPriceType(t.row)}}},[e._v("删除")])]}}])})],1)],1)],1)]),i("el-dialog",{attrs:{title:e.feeBillInfo.title,visible:e.dialogFeeBillEditVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.dialogFeeBillEditVisible=t}}},[i("el-form",{ref:"feeBillEditForm",attrs:{model:e.feeBillInfo}},[i("el-form-item",{attrs:{label:"*名称"}},[i("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.feeBillInfo.name,callback:function(t){e.$set(e.feeBillInfo,"name",t)},expression:"feeBillInfo.name"}})],1),i("el-form-item",{attrs:{label:"*排序"}},[i("el-input",{model:{value:e.feeBillInfo.sort,callback:function(t){e.$set(e.feeBillInfo,"sort",t)},expression:"feeBillInfo.sort"}})],1),i("el-form-item",{attrs:{label:"*收支类型"}},[i("el-radio-group",{model:{value:e.feeBillInfo.type,callback:function(t){e.$set(e.feeBillInfo,"type",t)},expression:"feeBillInfo.type"}},[i("el-radio",{attrs:{label:1}},[e._v("收入")]),i("el-radio",{attrs:{label:2}},[e._v("支出")])],1)],1),i("el-form-item",{attrs:{label:"描述"}},[i("el-input",{attrs:{placeholder:"请输入描述",type:"textarea",size:"medium"},model:{value:e.feeBillInfo.describe,callback:function(t){e.$set(e.feeBillInfo,"describe",t)},expression:"feeBillInfo.describe"}})],1),i("el-form-item",[i("el-button",{staticStyle:{width:"200px"},attrs:{type:"primary"},on:{click:e.confirmEditFee}},[e._v("确定")]),i("el-button",{staticStyle:{width:"200px"},attrs:{type:"primary"},on:{click:function(t){e.dialogFeeBillEditVisible=!1}}},[e._v("取消")])],1)],1)],1),i("el-dialog",{attrs:{title:e.otherFeeInfo.title,visible:e.dialogOtherFeeEditVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.dialogOtherFeeEditVisible=t}}},[i("el-form",{ref:"feeBillEditForm",attrs:{model:e.otherFeeInfo}},[i("el-form-item",{attrs:{label:"*名称"}},[i("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.otherFeeInfo.name,callback:function(t){e.$set(e.otherFeeInfo,"name",t)},expression:"otherFeeInfo.name"}})],1),i("el-form-item",{attrs:{label:"*排序"}},[i("el-input",{model:{value:e.otherFeeInfo.sort,callback:function(t){e.$set(e.otherFeeInfo,"sort",t)},expression:"otherFeeInfo.sort"}})],1),e._e(),i("el-form-item",{attrs:{label:"描述"}},[i("el-input",{attrs:{placeholder:"请输入描述",type:"textarea",size:"medium"},model:{value:e.otherFeeInfo.describe,callback:function(t){e.$set(e.otherFeeInfo,"describe",t)},expression:"otherFeeInfo.describe"}})],1),i("el-form-item",[i("el-button",{staticStyle:{width:"200px"},attrs:{type:"primary"},on:{click:e.confirmEditOther}},[e._v("确定")]),i("el-button",{staticStyle:{width:"200px"},attrs:{type:"primary"},on:{click:function(t){e.dialogOtherFeeEditVisible=!1}}},[e._v("取消")])],1)],1)],1),i("el-dialog",{attrs:{title:e.shiftEditObject.title,visible:e.dialogShiftEditVisible,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"660px"},on:{"update:visible":function(t){e.dialogShiftEditVisible=t}}},[i("el-form",{attrs:{model:e.shiftEditObject}},[i("el-form-item",{attrs:{label:"班次名称"}},[i("el-input",{attrs:{placeholder:"请输入班次名称"},model:{value:e.shiftEditObject.name,callback:function(t){e.$set(e.shiftEditObject,"name",t)},expression:"shiftEditObject.name"}})],1),i("el-form-item",[i("el-col",{attrs:{span:12}},[i("el-col",{attrs:{span:6}},[e._v("开始时间")]),i("el-col",{attrs:{span:18}},[i("el-time-select",{staticStyle:{width:"100%"},attrs:{"picker-options":{start:"00:00",step:"00:01",end:"23:59"},placeholder:"开始时间"},model:{value:e.shiftEditObject.startTime,callback:function(t){e.$set(e.shiftEditObject,"startTime",t)},expression:"shiftEditObject.startTime"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:6}},[e._v("开始时间")]),i("el-col",{attrs:{span:18}},[i("el-time-select",{staticStyle:{width:"100%"},attrs:{"picker-options":{start:"00:00",step:"00:01",end:"23:59"},placeholder:"结束时间"},model:{value:e.shiftEditObject.endTime,callback:function(t){e.$set(e.shiftEditObject,"endTime",t)},expression:"shiftEditObject.endTime"}})],1)],1)],1),i("el-form-item",[i("el-button",{staticStyle:{float:"right",margin:"20px"},attrs:{type:"primary"},on:{click:e.confirmAddShift}},[e._v("保存")])],1)],1)],1),i("el-dialog",{attrs:{title:e.priceTypeInfo.title,visible:e.dialogPriceTypeVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.dialogPriceTypeVisible=t}}},[i("el-form",{ref:"feeBillEditForm",attrs:{model:e.priceTypeInfo}},[i("el-form-item",{attrs:{label:"*名称"}},[i("el-input",{attrs:{disabled:"edit"==e.priceTypeInfo.mode,placeholder:"请输入名称"},model:{value:e.priceTypeInfo.name,callback:function(t){e.$set(e.priceTypeInfo,"name",t)},expression:"priceTypeInfo.name"}})],1),i("el-form-item",{attrs:{label:"*排序"}},[i("el-input",{model:{value:e.priceTypeInfo.sort,callback:function(t){e.$set(e.priceTypeInfo,"sort",t)},expression:"priceTypeInfo.sort"}})],1),i("el-form-item",{attrs:{label:"描述"}},[i("el-input",{attrs:{placeholder:"请输入描述",type:"textarea",size:"medium"},model:{value:e.priceTypeInfo.describe,callback:function(t){e.$set(e.priceTypeInfo,"describe",t)},expression:"priceTypeInfo.describe"}})],1),i("el-form-item",[i("el-button",{staticStyle:{width:"200px"},attrs:{type:"primary"},on:{click:e.confirmRoomPrice}},[e._v("确定")]),i("el-button",{staticStyle:{width:"200px"},attrs:{type:"primary"},on:{click:function(t){e.dialogPriceTypeVisible=!1}}},[e._v("取消")])],1)],1)],1)],1)},s=[],o={name:"basicConfig",data(){return{isFeeVisible:!0,isShiftVisible:!1,feeType:1,feeNormalTypes:[],feeBillTypes:[],feeOtherList:[],shiftTypes:[],projectList:[],projectId:"",feeBillAddObject:{},feeBillInfo:{mode:"insert",title:"新增记账费用",feeId:"",name:"",sort:"",type:"",describe:""},otherFeeInfo:{mode:"insert",title:"新增其它消费",feeId:"",name:"",sort:"",type:"",describe:""},shiftAddObject:{},shiftEditObject:{title:"",mode:"insert",name:"",startTime:"",endTime:"",classId:""},priceTypeInfo:{mode:"insert",title:"新增费用规格",feeId:"",name:"",sort:"",type:"",describe:""},roomPriceTypeList:[],dialogFeeBillAddVisible:!1,dialogFeeBillEditVisible:!1,dialogShiftAddVisible:!1,dialogShiftEditVisible:!1,dialogOtherFeeEditVisible:!1,dialogPriceTypeVisible:!1,aconfiguration:[{name:"费用设置",value:"1"},{name:"班次设置",value:"2"},{name:"房价类型",value:"3"}],aconfigurationVal:"1",saconfigurationValue:"1",saconfigurationDefaultValue:"1"}},created(){this.init()},computed:{},mounted(){},methods:{getFeeTypeListFun(){try{let t=this;t.$http("/api/daily/setting/getFeeTypeList",{method:"get",params:oParams})}catch(e){console.log(e)}},init(){this.getFeeNormalTypes(),this.getFeeBillTypes(),this.getFeeOtherList(),this.getProjectList(),this.getRoomPriceTypeList()},getProjectList(){this.$http.get("/api/daily/setting/rental_list").then(e=>{var t=e.data;0==t.errorCode&&(this.projectList=t.data||[],this.projectList.length>0&&(this.projectId=this.projectList[0].dailyRentalId,this.getShiftTypes()))}).catch(function(e){console.log(e)})},getFeeNormalTypes(){this.$http.get("/api/daily/setting/getFeeTypeList").then(e=>{var t=e.data;0==t.errorCode&&(this.feeNormalTypes=t.data||[])}).catch(function(e){console.log(e)})},getFeeBillTypes(){this.$http.get("/api/daily/setting/getChargeFeeTypeList").then(e=>{var t=e.data;if(0==t.errorCode){for(var i=t.data||[],a=0;a<i.length;a++)i[a].incomeName=1==i[a].income?"收入":2==i[a].income?"支出":"-";this.feeBillTypes=i}}).catch(function(e){console.log(e)})},getFeeOtherList(){this.$http.get("/api/daily/setting/getConsumptionFeeTypeList").then(e=>{var t=e.data;if(0==t.errorCode){for(var i=t.data||[],a=0;a<i.length;a++)i[a].incomeName=1==i[a].income?"收入":2==i[a].income?"支出":"-";this.feeOtherList=i}}).catch(function(e){console.log(e)})},getShiftTypes(){this.$http.get("/api/daily/setting/getClassesList",{params:{rentalId:this.projectId}}).then(e=>{var t=e.data;0==t.errorCode&&(this.shiftTypes=t.data||[])}).catch(function(e){console.log(e)})},changeBasicChoice(){setTimeout(()=>{this.saconfigurationValue=this.aconfigurationVal},160)},changeProjectVal(){this.getShiftTypes()},switchFeeType(e,t){console.log(e,t),this.feeType=e},editFeeBill(e){"insert"==e?(this.feeBillInfo.mode="insert",this.feeBillInfo.title="新增记账费用",this.feeBillInfo.name="",this.feeBillInfo.sort="",this.feeBillInfo.type="",this.feeBillInfo.describe=""):(this.feeBillInfo.mode="edit",this.feeBillInfo.title="编辑记账费用",this.feeBillInfo.feeId=e.detailFeeTypeId,this.feeBillInfo.name=e.feeName,this.feeBillInfo.sort=e.sort,this.feeBillInfo.type=e.income,this.feeBillInfo.describe=e.feeInfo),this.dialogFeeBillEditVisible=!0},deleteFeeBill(e){this.$confirm("确认删除？").then(t=>{this.$http.post("/api/daily/setting/deleteChagerFeeType",{detailFeeTypeId:e.detailFeeTypeId}).then(e=>{var t=e.data;0==t.errorCode&&(this.$message({type:"success",message:"删除成功!"}),this.dialogFeeBillEditVisible=!1,this.getFeeBillTypes())}).catch(function(e){console.log(e)})}).catch(e=>{})},confirmEditFee(){if(""==this.feeBillInfo.name||void 0==this.feeBillInfo.name)return this.$message({type:"error",message:"名称不能为空!"});if(""==this.feeBillInfo.type||void 0==this.feeBillInfo.type)return this.$message({type:"error",message:"收支类型不能为空!"});if(""==this.feeBillInfo.sort||void 0==this.feeBillInfo.sort)return this.$message({type:"error",message:"排序值不能为空!"});var e="",t={feeName:this.feeBillInfo.name,income:this.feeBillInfo.type,sort:this.feeBillInfo.sort,feeInfo:this.feeBillInfo.describe};"insert"==this.feeBillInfo.mode?e="/api/daily/setting/addChargeFeeType":(e="/api/daily/setting/updateChagerFeeType",t.detailFeeTypeId=this.feeBillInfo.feeId),this.$http.post(e,t).then(e=>{var t=e.data;0==t.errorCode&&(this.$message({type:"success",message:`${"insert"==this.feeBillInfo.mode?"添加":"编辑"}成功!`}),this.dialogFeeBillEditVisible=!1,this.getFeeBillTypes())}).catch(function(e){console.log(e)})},editOtherFee(e){"insert"==e?(this.otherFeeInfo.mode="insert",this.otherFeeInfo.title="新增其它消费类型",this.otherFeeInfo.name="",this.otherFeeInfo.sort="",this.otherFeeInfo.type="",this.otherFeeInfo.describe=""):(this.otherFeeInfo.mode="edit",this.otherFeeInfo.title="编辑其它消费类型",this.otherFeeInfo.feeId=e.detailFeeTypeId,this.otherFeeInfo.name=e.feeName,this.otherFeeInfo.sort=e.sort,this.otherFeeInfo.type=e.income,this.otherFeeInfo.describe=e.feeInfo),this.dialogOtherFeeEditVisible=!0},deleteOtherFee(e){this.$confirm("确认删除？").then(t=>{this.$http.post("/api/daily/setting/deleteConsumptionFeeType",{detailFeeTypeId:e.detailFeeTypeId}).then(e=>{var t=e.data;0==t.errorCode&&(this.$message({type:"success",message:"删除成功!"}),this.dialogOtherFeeEditVisible=!1,this.getFeeOtherList())}).catch(function(e){console.log(e)})}).catch(e=>{})},confirmEditOther(){if(""==this.otherFeeInfo.name||void 0==this.otherFeeInfo.name)return this.$message({type:"error",message:"名称不能为空!"});if(""==this.otherFeeInfo.sort||void 0==this.otherFeeInfo.sort)return this.$message({type:"error",message:"排序值不能为空!"});var e="",t={feeName:this.otherFeeInfo.name,sort:this.otherFeeInfo.sort,feeInfo:this.otherFeeInfo.describe};"insert"==this.otherFeeInfo.mode?e="/api/daily/setting/addConsumptionFeeType":(t.detailFeeTypeId=this.otherFeeInfo.feeId,e="/api/daily/setting/updateConsumptionFeeType"),this.$http.post(e,t).then(e=>{var t=e.data;0==t.errorCode&&(this.$message({type:"success",message:`${"insert"==this.otherFeeInfo.mode?"添加":"编辑"}成功!`}),this.dialogOtherFeeEditVisible=!1,this.getFeeOtherList())}).catch(function(e){console.log(e)})},deleteShift(e){this.$confirm("确认删除？").then(t=>{this.$http.post("/api/daily/setting/deleteClass",{classId:e.classId}).then(e=>{var t=e.data;0==t.errorCode&&(this.$message({type:"success",message:"删除成功!"}),this.dialogShiftEditVisible=!1,this.getShiftTypes())}).catch(function(e){console.log(e)})}).catch(e=>{})},cancelEditFee(){this.dialogFeeBillEditVisible=!1},editShift(e){"insert"==e?(this.shiftEditObject.mode="insert",this.shiftEditObject.title="新增班次",this.shiftEditObject.name="",this.shiftEditObject.startTime="",this.shiftEditObject.endTime=""):(this.shiftEditObject.mode="edit",this.shiftEditObject.title="编辑班次",this.shiftEditObject.classId=e.classId,this.shiftEditObject.name=e.className,this.shiftEditObject.startTime=e.beginTime,this.shiftEditObject.endTime=e.endTime),this.dialogShiftEditVisible=!0},confirmAddShift(){if(""==this.shiftEditObject.name||void 0==this.shiftEditObject.name)return this.$message({type:"error",message:"班次名称不能为空!"});if(""==this.shiftEditObject.startTime||void 0==this.shiftEditObject.startTime)return this.$message({type:"error",message:"班次开始时间不能为空!"});if(""==this.shiftEditObject.endTime||void 0==this.shiftEditObject.endTime)return this.$message({type:"error",message:"班次结束时间不能为空!"});var e="",t={className:this.shiftEditObject.name,beginTime:this.shiftEditObject.startTime,endTime:this.shiftEditObject.endTime};"insert"==this.shiftEditObject.mode?(t.rentalId=this.projectId,e="/api/daily/setting/addClass"):(t.classId=this.shiftEditObject.classId,e="/api/daily/setting/updateClass"),this.$http.post(e,t).then(e=>{var t=e.data;0==t.errorCode&&(this.$message({type:"success",message:`${"insert"==this.shiftEditObject.mode?"添加":"编辑"}成功!`}),this.dialogShiftEditVisible=!1,this.getShiftTypes())}).catch(function(e){console.log(e)})},confirmEditShift(){},getRoomPriceTypeList(){this.$http.get("/api/daily/sales_chanel/list").then(e=>{var t=e.data;0==t.errorCode&&(this.roomPriceTypeList=t.data||[])}).catch(function(e){console.log(e)})},editRoomPriceType(e){"insert"==e?(this.priceTypeInfo.mode="insert",this.priceTypeInfo.title="新增费用规格",this.priceTypeInfo.name="",this.priceTypeInfo.sort="",this.priceTypeInfo.type="",this.priceTypeInfo.describe=""):(this.priceTypeInfo.mode="edit",this.priceTypeInfo.title="编辑费用规格",this.priceTypeInfo.feeId=e.dailySalesChanelId,this.priceTypeInfo.name=e.chanelName,this.priceTypeInfo.sort=e.sort,this.priceTypeInfo.describe=e.introduction),this.dialogPriceTypeVisible=!0},confirmRoomPrice(){if(""==this.priceTypeInfo.name||void 0==this.priceTypeInfo.name)return this.$message({type:"error",message:"费用规格名称不能为空!"});if(""==this.priceTypeInfo.sort||void 0==this.priceTypeInfo.sort)return this.$message({type:"error",message:"排序不能为空!"});var e="",t={chanelName:this.priceTypeInfo.name,sort:this.priceTypeInfo.sort,introduction:this.priceTypeInfo.describe};"insert"==this.priceTypeInfo.mode?e="/api/daily/sales_chanel/add":(t.dailySalesChanelId=this.priceTypeInfo.feeId,e="/api/daily/sales_chanel/update"),this.$http.post(e,t).then(e=>{var t=e.data;0==t.errorCode&&(this.$message({type:"success",message:`${"insert"==this.priceTypeInfo.mode?"添加":"编辑"}成功!`}),this.dialogPriceTypeVisible=!1,this.getRoomPriceTypeList())}).catch(function(e){console.log(e)})},deleteRoomPriceType(e){this.$confirm("确认删除？").then(t=>{this.$http.post("/api/daily/sales_chanel/delete",{dailySalesChanelId:e.dailySalesChanelId}).then(e=>{var t=e.data;0==t.errorCode&&(this.$message({type:"success",message:"删除成功!"}),this.dialogPriceTypeVisible=!1,this.getRoomPriceTypeList())}).catch(function(e){console.log(e)})}).catch(e=>{})},pageChangeFeeNormal(e){},pageChangeFeeBill(e){}}},n=o,l=(i("ba3d"),i("6691")),r=Object(l["a"])(n,a,s,!1,null,null,null);t["default"]=r.exports},ba3d:function(e,t,i){"use strict";var a=i("bb41"),s=i.n(a);s.a},bb41:function(e,t,i){}}]);