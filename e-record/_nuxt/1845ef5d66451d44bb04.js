(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1145:function(t,e,o){var content=o(1150);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("59352f9c",content,!0,{sourceMap:!1})},1146:function(t,e,o){var content=o(1152);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("031c9afc",content,!0,{sourceMap:!1})},1147:function(t,e,o){"use strict";o(6);var n={props:{widgetInfo:Object},data:function(){return{}},methods:{handleSizeChange:function(t){this.pageSize=t,this.$emit("sonHandleCurrentChange",{pageSize:this.pageSize})},handleCurrentChange:function(t){this.$emit("sonHandleCurrentChange",{pageNo:t})}},mounted:function(){this.$emit("sonHandleCurrentChange",{pageSize:10,pageNo:1})}},l=(o(1149),o(31)),component=Object(l.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-pagination",{attrs:{"current-page":this.widgetInfo.pageNo,"page-sizes":[10,20,30,40],"page-size":this.widgetInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:this.widgetInfo.total},on:{"size-change":this.handleSizeChange,"current-change":this.handleCurrentChange}})],1)},[],!1,null,"352c168e",null);e.a=component.exports},1148:function(t,e,o){"use strict";var n=o(6),l={data:function(){return{CmenuName:{}}},mounted:function(){this.CmenuName=n.a.getGlobalVal("CmenuName"),console.log("this.CmenuName:",this.CmenuName)}},r=(o(1151),o(31)),component=Object(r.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",{staticClass:"l-head"},[e("span",[this._v(this._s(this.CmenuName.parName)+" >")]),this._v(" "),e("span",[this._v(this._s(this.CmenuName.name))])])])},[],!1,null,"3d4e79c6",null);e.a=component.exports},1149:function(t,e,o){"use strict";var n=o(1145);o.n(n).a},1150:function(t,e,o){(t.exports=o(16)(!1)).push([t.i,".notab[data-v-352c168e]{height:calc(100vh - 216px);width:100%;background:#fff;border:1px solid #e2e4e8}.notab>div[data-v-352c168e]:first-child{width:100%;height:calc(100vh - 266px)}.staticNotab[data-v-352c168e]{height:calc(100vh - 136px);width:100%;background:#fff;border:1px solid #e2e4e8}.reportNoTab>div[data-v-352c168e]:first-child{width:100%;height:calc(100vh - 296px);overflow-y:auto}.userNotab[data-v-352c168e]{height:calc(100vh - 180px);width:100%;background:#fff}.userNotab>div[data-v-352c168e]:first-child{width:100%;height:calc(100vh - 188px);overflow-y:auto}.myTab[data-v-352c168e]{height:calc(100vh - 258px);background:#fff;width:100%;border:1px solid #e2e4e8}.myTab>div[data-v-352c168e]:first-child{width:100%;height:calc(100vh - 308px)}@media screen and (max-width:1680px){.notab[data-v-352c168e]{height:calc(100vh - 208px);background:#fff}.notab>div[data-v-352c168e]:first-child{height:calc(100vh - 258px)}.myTab[data-v-352c168e]{height:calc(100vh - 250px);background:#fff}.myTab>div[data-v-352c168e]:first-child{height:calc(100vh - 300px)}.staticNotab[data-v-352c168e]{height:calc(100vh - 132px)}}@media screen and (max-width:1440px){.notab[data-v-352c168e]{height:calc(100vh - 173px);background:#fff}.notab>div[data-v-352c168e]:first-child{height:calc(100vh - 223px)}.myTab[data-v-352c168e]{height:calc(100vh - 215px);background:#fff}.myTab>div[data-v-352c168e]:first-child{height:calc(100vh - 265px)}.staticNotab[data-v-352c168e]{height:calc(100vh - 107px)}}@media screen and (max-width:1366px){.reportNoTab>div[data-v-352c168e]:first-child{width:100%;height:calc(100vh - 286px);overflow-y:auto}}",""])},1151:function(t,e,o){"use strict";var n=o(1146);o.n(n).a},1152:function(t,e,o){(t.exports=o(16)(!1)).push([t.i,".l-head[data-v-3d4e79c6]{font-weight:400;font-family:Microsoft YaHei;padding:0 0 10px;margin-left:.6rem;text-align:left}.l-head span[data-v-3d4e79c6]{font-size:1.8rem;color:#717171;line-height:3.9rem}@media screen and (max-width:1440px){.l-head span[data-v-3d4e79c6]{line-height:1.7rem}}",""])},1176:function(t,e,o){var content=o(1223);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("5b3abc23",content,!0,{sourceMap:!1})},1193:function(t,e,o){"use strict";o(222);var n=o(40),l=o(6),r={props:{row:Object,showDetail:{default:!1}},data:function(){return{accidentNo:!0,url:"",data:[],dataFinishInfo:[],pictureDetails:!1,qustionList:!1,showD:this.showDetail,problemList:[],base_url:""}},mounted:function(){},methods:{enlarge:function(b){console.log(b),this.url=b,this.pictureDetails=!0},getData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=this,t.next=3,l.a.post(l.a.forent_url.moblie_url+"/inspection/task/details/"+e.id).then(function(t){console.log("res===========",t),o.data=t.data.taskBaseInfo,o.dataFinishInfo=t.data.taskFinishInfo.buildList||[],o.problemList=t.data.taskFinishInfo.problemList||[],o.dataFinishInfo.forEach(function(element){element.dataFloorList=[],element.floorList.forEach(function(t){null!==t.status&&element.dataFloorList.push(t)})}),o.problemList.forEach(function(element){0==element.attachPathList.length?element.dataproblemList=[]:(element.dataproblemList=[],element.attachPathList.forEach(function(t){o.base_url=l.a.forent_url.pic_url+"/"+t,console.log("that.base_url",o.base_url),element.dataproblemList.push(o.base_url)}),console.log("element.dataproblemList",element.dataproblemList))})});case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),handleClose:function(t){this.$emit("isShow",!1)}},watch:{row:function(t,e){this.qustionList=!1,this.getData(t)},showDetail:function(t,e){}}},c=(o(1222),o(31)),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-dialog",{staticStyle:{margin:"0 auto","text-align":"left"},attrs:{title:"防火检查任务详情","before-close":t.handleClose,"close-on-click-modal":!1,visible:t.showDetail,width:"916px"},on:{"update:visible":function(e){t.showDetail=e}}},[o("el-scrollbar",[o("div",{staticClass:"gg-base-info",staticStyle:{height:"500px"}},[o("div",{staticClass:"gg-base-unit"},[o("h3",{staticClass:"gg-base-h3 black"},[t._v("基本信息")]),t._v(" "),o("table",{staticClass:"gg-table gg-tableFix",staticStyle:{"margin-left":"9px"},attrs:{cellspacing:"0",cellpadding:"0"}},[o("tbody",[o("tr",[o("th",{staticClass:"color_gray"},[t._v("任务编号 :")]),t._v(" "),o("td",{staticClass:"w_400"},[t._v(t._s(t.data.taskNo))]),t._v(" "),o("th",{staticClass:"color_gray",staticStyle:{width:"172px"}},[t._v("当前任务完成度(%):")]),t._v(" "),o("td",{staticClass:"w_400"},[t._v(t._s(t.data.complatePercent))])]),t._v(" "),o("tr",[o("th",{staticClass:"color_gray"},[t._v("任务名称 :")]),t._v(" "),o("td",{staticClass:"w_400"},[t._v(t._s(t.data.taskName))]),t._v(" "),o("th",{staticClass:"color_gray"},[t._v("任务类型 :")]),t._v(" "),o("td",{staticClass:"w_400"},[t._v(t._s(t.data.inspectionType))])]),t._v(" "),o("tr",[o("th",{staticClass:"color_gray"},[t._v("巡查日期 :")]),t._v(" "),o("td",{staticClass:"w_400"},[t._v(t._s(t.data.checkTime))]),t._v(" "),o("th",{staticClass:"color_gray"},[t._v("开始巡查时间 :")]),t._v(" "),o("td",{staticClass:"w_400"},[t._v(t._s(t.data.startTime))])]),t._v(" "),o("tr",[o("th",{staticClass:"color_gray"},[t._v("巡查结束时间 :")]),t._v(" "),o("td",{staticClass:"w_400"},[t._v(t._s(t.data.endTime))]),t._v(" "),o("th",{staticClass:"color_gray"},[t._v("巡查人 :")]),t._v(" "),o("td",{staticClass:"w_400"},[t._v(t._s(t.data.recieveUsers))])])])])]),t._v(" "),o("div",{staticClass:"gg-base-unit"},[o("h3",{staticClass:"gg-base-h3 black"},[o("span",{class:{"gg-active":!t.qustionList},on:{click:function(e){t.qustionList=!1}}},[t._v("完成情况")]),t._v(" "),o("span",{staticClass:"question",class:{"gg-active":t.qustionList},on:{click:function(e){t.qustionList=!0}}},[t._v("问题列表")])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.qustionList,expression:"!qustionList"}],staticClass:"gg-worklog-model",staticStyle:{display:"block",padding:"20px","z-index":"100"},attrs:{id:"comp_div"}},[t.dataFinishInfo.length>0?o("div",t._l(t.dataFinishInfo,function(e){return o("div",{key:e.buildName},[o("p",{staticClass:"gg-floor-info black"},[t._v(t._s(e.buildName))]),t._v(" "),o("table",{directives:[{name:"show",rawName:"v-show",value:e.dataFloorList.length>0,expression:"item.dataFloorList.length > 0"}],staticClass:"gg-table1 gg-tableFix",staticStyle:{"border-bottom":"1px solid #e9e9e8"},attrs:{cellspacing:"0",cellpadding:"0"}},[o("tbody",t._l(e.dataFloorList,function(e,n){return o("div",{key:n,staticClass:"black"},[o("tr",{class:[n%2==0?"border_d":"border_s"]},[o("td",{staticStyle:{width:"30px"}}),t._v(" "),o("td",{staticStyle:{width:"130px"}},[t._v("\n                        "+t._s(e.floorName)+"\n                        "),o("i",{directives:[{name:"show",rawName:"v-show",value:1===e.blueActiveNum,expression:"item.blueActiveNum === 1"}],staticClass:"cloud-bluetooth-info"}),t._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:1===e.blueNotAcitveNum,expression:"item.blueNotAcitveNum === 1"}],staticClass:"cloud-bluetooth-default"})]),t._v(" "),o("td",{staticStyle:{width:"160px"}},["0"===e.status?o("span",[t._v("未选择")]):"1"===e.status?o("span",[t._v("已选择")]):"2"===e.status?o("span",[t._v("检查中")]):"3"===e.status?o("span",[t._v("已完成")]):t._e()]),t._v(" "),o("td",{directives:[{name:"show",rawName:"v-show",value:"3"===e.status,expression:"item.status === '3'"}],staticStyle:{width:"300px"}},[o("span",[t._v("完成时间:"+t._s(e.completeTime))])]),t._v(" "),o("td",{directives:[{name:"show",rawName:"v-show",value:"3"===e.status,expression:"item.status === '3'"}],staticStyle:{width:"190px"}},[o("span",[t._v("发现问题"+t._s(e.problemNum)+"个")])]),t._v(" "),o("td",{staticStyle:{width:"250px"}},[o("span",[t._v("巡检人:"+t._s(e.recieveUserName))])])])])}),0)])])}),0):o("p",{staticClass:"gg-floor-info",staticStyle:{display:"block","padding-left":"10px","z-index":"100",color:"#000"}},[t._v("暂无信息")])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.qustionList,expression:"qustionList"}],staticClass:"gg-worklog-model",staticStyle:{display:"block"},attrs:{id:"comp_div"}},[t.problemList.length>0?o("table",{staticClass:"gg-table2 gg-tableFix",staticStyle:{"border-bottom":"1px solid #e9e9e8"},attrs:{cellspacing:"0",cellpadding:"0"}},[o("tbody",t._l(t.problemList,function(e,n){return o("div",{key:n,staticClass:"black borders",staticStyle:{width:"1020px",padding:"20px"}},[o("h2",[t._v(t._s(e.itemName))]),t._v(" "),o("p",[t._v("设备类型： "+t._s(e.deviceName))]),t._v(" "),o("p",[t._v("位置信息： "+t._s(e.deviceLocal))]),t._v(" "),o("p",[t._v("故障描述： "+t._s(e.issueDesc))]),t._v(" "),o("div",[0===e.dataproblemList.length?o("p"):o("p",t._l(e.dataproblemList,function(e,n){return o("img",{key:n,staticClass:"img",attrs:{src:e,alt:""},on:{click:function(o){return t.enlarge(e)}}})}),0)])])}),0)]):o("p",{staticClass:"gg-floor-info",staticStyle:{display:"block","padding-left":"30px",margin:"20px 0","z-index":"100",color:"#000"}},[t._v("暂无信息")])])])])])],1),t._v(" "),o("el-dialog",{staticStyle:{width:"77%",margin:"0 auto"},attrs:{title:"图片详情",visible:t.pictureDetails,"close-on-click-modal":!1},on:{"update:visible":function(e){t.pictureDetails=e}}},[o("el-scrollbar",[o("div",{staticStyle:{"max-height":"500px","max-width":"500px"}},[o("img",{staticStyle:{cursor:"pointer",width:"100%",height:"100%"},attrs:{src:t.url,alt:""}})])])],1)],1)},[],!1,null,null,null);e.a=component.exports},1222:function(t,e,o){"use strict";var n=o(1176);o.n(n).a},1223:function(t,e,o){(t.exports=o(16)(!1)).push([t.i,".gg-base-info{margin:20px 25px}.gg-base-unit{width:100%;margin-bottom:20px;border:1px solid #e2e4e8}.gg-base-h3{height:40px;line-height:40px;padding-left:20px;border-left:4px solid #6a90ec;background-color:#eef3fe}.gg-base-h3 span{cursor:pointer}.gg-table{margin:10px}.gg-table1{margin-bottom:10px}.gg-table2{margin:20px}.gg-active{display:inline-block;color:#4677e8;height:38px;border-bottom:2px solid #4677e8}.question{margin-left:13px}.dividing_line{padding:5px;border-bottom:1px solid #e2e4e8!important}.frame{margin:10px 0;border:1px solid #e2e4e8;padding:5px 15px}.color_gray{color:#777;width:130px}.black,.w_400{color:#000}.w_400{width:400px}.none{margin-left:10px;height:50px;line-height:50px;color:#000}.img{cursor:pointer;width:100px;height:100px}.border_d,.borders{border:1px solid #e9e9e8;border-bottom:none;line-height:35px}.border_d{background-color:#f8f9fa}.border_s{background-color:#fff;border:1px solid #e9e9e8;border-bottom:none;line-height:35px}",""])},1366:function(t,e,o){var content=o(1726);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("55ca4d9a",content,!0,{sourceMap:!1})},1367:function(t,e,o){var content=o(1728);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("6cbf255f",content,!0,{sourceMap:!1})},1725:function(t,e,o){"use strict";var n=o(1366);o.n(n).a},1726:function(t,e,o){(t.exports=o(16)(!1)).push([t.i,'@charset "UTF-8";.dutyRoom_main[data-v-ce5d8404]{background:#fff}.dutyRoom_main .row-bg[data-v-ce5d8404]{padding:15px 0 10px}.notab[data-v-ce5d8404]{height:calc(100vh - 216px);width:100%;background:#fff;border:1px solid #e2e4e8}.notab>div[data-v-ce5d8404]:first-child{width:100%;height:calc(100vh - 266px)}.staticNotab[data-v-ce5d8404]{height:calc(100vh - 136px);width:100%;background:#fff;border:1px solid #e2e4e8}.reportNoTab>div[data-v-ce5d8404]:first-child{width:100%;height:calc(100vh - 296px);overflow-y:auto}.userNotab[data-v-ce5d8404]{height:calc(100vh - 180px);width:100%;background:#fff}.userNotab>div[data-v-ce5d8404]:first-child{width:100%;height:calc(100vh - 188px);overflow-y:auto}.myTab[data-v-ce5d8404]{height:calc(100vh - 258px);background:#fff;width:100%;border:1px solid #e2e4e8}.myTab>div[data-v-ce5d8404]:first-child{width:100%;height:calc(100vh - 308px)}@media screen and (max-width:1680px){.notab[data-v-ce5d8404]{height:calc(100vh - 208px);background:#fff}.notab>div[data-v-ce5d8404]:first-child{height:calc(100vh - 258px)}.myTab[data-v-ce5d8404]{height:calc(100vh - 250px);background:#fff}.myTab>div[data-v-ce5d8404]:first-child{height:calc(100vh - 300px)}.staticNotab[data-v-ce5d8404]{height:calc(100vh - 132px)}}@media screen and (max-width:1440px){.notab[data-v-ce5d8404]{height:calc(100vh - 173px);background:#fff}.notab>div[data-v-ce5d8404]:first-child{height:calc(100vh - 223px)}.myTab[data-v-ce5d8404]{height:calc(100vh - 215px);background:#fff}.myTab>div[data-v-ce5d8404]:first-child{height:calc(100vh - 265px)}.staticNotab[data-v-ce5d8404]{height:calc(100vh - 107px)}}@media screen and (max-width:1366px){.reportNoTab>div[data-v-ce5d8404]:first-child{width:100%;height:calc(100vh - 286px);overflow-y:auto}}.notab[data-v-ce5d8404]{border-top:none}.gg-base-info[data-v-ce5d8404]{margin:20px 25px}.gg-base-unit[data-v-ce5d8404]{width:100%;margin-bottom:20px;border:1px solid #e2e4e8;z-index:100；}.gg-base-h3[data-v-ce5d8404]{height:40px;line-height:40px;padding-left:20px;border-left:4px solid #6a90ec;background-color:#eef3fe}.gg-base-h3 span[data-v-ce5d8404]{cursor:pointer}.gg-table[data-v-ce5d8404]{margin-top:15px}.gg-active[data-v-ce5d8404]{display:inline-block;color:#4677e8;height:38px;border-bottom:2px solid #4677e8}.question[data-v-ce5d8404]{margin-left:13px}.gg-table[data-v-3ce9861e][data-v-ce5d8404]{margin-top:0}',""])},1727:function(t,e,o){"use strict";var n=o(1367);o.n(n).a},1728:function(t,e,o){(t.exports=o(16)(!1)).push([t.i,".el-tooltip__popper.is-dark{max-width:300px}#tab .el-table__row{cursor:pointer}",""])},1818:function(t,e,o){"use strict";o.r(e);o(222);var n=o(40),l=(o(77),o(6)),r=o(1148),c=(o(51),o(1147)),d=o(1193),h={components:{Title:r.a,Pagination:c.a,FirePreventionInsDetail:d.a},data:function(){return{data:{},pic_url:"api.forent_api.pic_url",dataFinishInfo:[],problemList:[],dataFloorList:[],widgetInfo:{total:null,pageSize:6,pageNo:1},qustionList:!1,tableData:[],isLoading:!1,formInline:{bgtype:"",taskNo:"",status:"",isEnable:"",routingInspectionTypeId:"",searchType:"",CompletionDegree:"",StandardRate:""},searchValue:"",statusOptions:[{statusName:"全部",status:""},{statusName:"未执行",status:"0"},{statusName:"检查中",status:"1"},{statusName:"已结束",status:"2"}],completeOptions:[{value:"",label:"全部"},{value:"2",label:"100%"},{value:"3",label:"60%-99%"},{value:"4",label:"60%以下"}],standardPercentOptions:[{value:"",label:"全部"},{value:"2",label:"100%"},{value:"3",label:"60%-99%"},{value:"4",label:"60%以下"}],dateTime:"",pickerOptions:{onClick:function(t){var e=new Date,o=new Date;o.setTime(o.getTime()-6048e5),t.$emit("pick",[o,e])}},newlyAddedVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"120px",showDetail:!1,rowObj:{}}},methods:{taskNoFormatter:function(t,e){if(t.rowIndex=e+1,(t.laLoop||t.laPoint)&&(t.getPoint=t.laLoop+"-"+t.laPoint),"0"==t.inspectionCycle)t.planStartTime.split(" ")[0]==t.planEndTime.split(" ")[0]?t.taskNo=t.planStartTime.split(" ")[0]+"    "+t.planStartTime.split(" ")[1]+"～"+t.planEndTime.split(" ")[1]:t.taskNo=t.planStartTime+"～"+t.planEndTime;else if("1"==t.inspectionCycle)t.planStartTime.split(" ")[0]==t.planEndTime.split(" ")[0]?t.taskNo=t.planStartTime.split(" ")[0]:t.taskNo=t.planStartTime.split(" ")[0]+"～"+t.planEndTime.split(" ")[0];else if("2"==t.inspectionCycle)t.planStartTime.split(" ")[0]==t.planEndTime.split(" ")[0]?t.taskNo=t.planStartTime.split(" ")[0]:t.taskNo=t.planStartTime.split(" ")[0]+"～"+t.planEndTime.split(" ")[0];else if("3"==t.inspectionCycle)if(t.planStartTime.split(" ")[0]==t.planEndTime.split(" ")[0])t.taskNo=t.planStartTime.split(" ")[0];else{var o=t.planStartTime.split(" ")[0].split("-"),n=t.planEndTime.split(" ")[0].split("-");o[1]==n[1]?t.taskNo=o[0]+"-"+o[1]+"月":t.taskNo=o[0]+"    "+o[1]+"月～"+n[1]+"月"}else if("4"==t.inspectionCycle)if(t.planStartTime.split(" ")[0]==t.planEndTime.split(" ")[0])t.taskNo=t.planStartTime.split(" ")[0];else{o=t.planStartTime.split(" ")[0].split("-"),n=t.planEndTime.split(" ")[0].split("-");var l="",r="";"01"==o[1]||"02"==o[1]||"03"==o[1]?l="1季度":"04"==o[1]||"05"==o[1]||"06"==o[1]?l="2季度":"07"==o[1]||"08"==o[1]||"09"==o[1]?l="3季度":"10"!=o[1]&&"11"!=o[1]&&"12"!=o[1]||(l="4季度"),"01"==n[1]||"02"==n[1]||"03"==n[1]?r="1季度":"04"==n[1]||"05"==n[1]||"06"==n[1]?r="2季度":"07"==n[1]||"08"==n[1]||"09"==n[1]?r="3季度":"10"!=n[1]&&"11"!=n[1]&&"12"!=n[1]||(r="4季度"),t.taskNo=l==r?o[0]+"      "+l:o[0]+"      "+l+"～"+r}else"5"==t.inspectionCycle&&(t.planStartTime.split(" ")[0]==t.planEndTime.split(" ")[0]?t.taskNo=t.planStartTime.split(" ")[0]:t.taskNo=t.planStartTime.split(" ")[0]+"-"+t.planEndTime.split(" ")[0]);return t.taskNo},openDetails:function(t){"I"!==event.target.nodeName&&(this.rowObj={},this.rowObj=t,this.showDetail=!0)},isShow:function(){this.showDetail=!1},loadData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,l.a.post(l.a.forent_url.base_url+"/inspection/task/list.mvc",{pageSize:this.widgetInfo.pageSize,pageNo:this.widgetInfo.pageNo,planStartTime:""==this.dateTime||null==this.dateTime?"":this.dateTime[0]+" 00:00:00",planEndTime:""==this.dateTime||null==this.dateTime?"":this.dateTime[1]+" 23:59:59",inspectionType:"B",status:this.formInline.status,completePercent:this.formInline.CompletionDegree,standardPercent:this.formInline.StandardRate,datepicker:this.dateTime?new Date(this.dateTime[0]+" 00:00:00")+","+new Date(this.dateTime[1]+" 00:00:00"):"",taskNo:this.searchValue,orgId:l.a.getGlobalVal("userObj").orgCode},5e3).then(function(t){"success"===t.code&&(e.isLoading=!1,e.tableData=t.data.rows,e.widgetInfo.total=null==t.data.total?0:t.data.total,e.widgetInfo.pageSize=t.data.pageSize,e.widgetInfo.pageNo=t.data.pageNo)}).catch(function(t){e.isLoading=!1,e.$message({type:"warning",message:"加载超时,请重新加载!"})});case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),selectDateTime:function(t){this.dateTime=t,this.widgetInfo.pageNo=1,this.loadData()},sonHandleCurrentChange:function(t){this.widgetInfo.pageSize=t.pageSize?parseInt(t.pageSize):this.widgetInfo.pageSize,this.widgetInfo.pageNo=t.pageNo?parseInt(t.pageNo):this.widgetInfo.pageNo,this.loadData()},downLoad:function(t){var e=t.row.inspectionType;window.location.href=l.a.forent_url.base_url+"/safety/report/createFireInspectReport.mvc?taskId="+t.row.id+"&inspectionType="+e},handleSearch:function(){this.widgetInfo.pageNo=1,this.loadData()},selectStatus:function(t){this.formInline.status=t,this.widgetInfo.pageNo=1,this.loadData()},selectTypeName:function(t){this.formInline.CompletionDegree=t,this.widgetInfo.pageNo=1,this.loadData()},selectIsEnable:function(t){this.formInline.StandardRate=t,this.widgetInfo.pageNo=1,this.loadData()},InputPlan:function(t){this.searchValue=t,this.widgetInfo.pageNo=1,this.loadData()}},computed:{selected:function(){return this.$store.state.level}}},v=(o(1725),o(1727),o(31)),component=Object(v.a)(h,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"l-head"},[o("Title")],1),t._v(" "),o("div",{staticClass:"dutyRoom_main"},[o("div",[o("el-form",{staticClass:"demo-form-inline filterAll",attrs:{inline:!0,model:t.formInline}},[o("el-row",[o("el-col",{staticClass:"text-4",attrs:{span:4}},[o("label",[t._v("巡查状态：")]),t._v(" "),o("el-select",{attrs:{clearable:"",placeholder:"全部"},on:{change:t.selectStatus},model:{value:t.formInline.status,callback:function(e){t.$set(t.formInline,"status","string"==typeof e?e.trim():e)},expression:"formInline.status"}},t._l(t.statusOptions,function(t){return o("el-option",{key:t.status,attrs:{label:t.statusName,value:t.status}})}),1)],1),t._v(" "),o("el-col",{attrs:{span:16}},[o("el-row",{attrs:{type:"flex",justify:"center"}},[o("el-col",{staticClass:"text-4",attrs:{span:6}},[o("label",[t._v("完成度：")]),t._v(" "),o("el-select",{attrs:{clearable:"",placeholder:"全部"},on:{change:t.selectTypeName},model:{value:t.formInline.CompletionDegree,callback:function(e){t.$set(t.formInline,"CompletionDegree","string"==typeof e?e.trim():e)},expression:"formInline.CompletionDegree"}},t._l(t.completeOptions,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),o("el-col",{staticClass:"text-4",attrs:{span:6}},[o("label",[t._v("规范率：")]),t._v(" "),o("el-select",{attrs:{clearable:"",placeholder:"全部"},on:{change:t.selectIsEnable},model:{value:t.formInline.StandardRate,callback:function(e){t.$set(t.formInline,"StandardRate","string"==typeof e?e.trim():e)},expression:"formInline.StandardRate"}},t._l(t.standardPercentOptions,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),o("el-col",{staticClass:"text-4",attrs:{span:10,offset:1}},[o("label",[t._v("巡查时间：")]),t._v(" "),o("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd","range-separator":"",type:"daterange","picker-options":t.pickerOptions,"start-placeholder":"请选择日期"},on:{change:t.selectDateTime},model:{value:t.dateTime,callback:function(e){t.dateTime="string"==typeof e?e.trim():e},expression:"dateTime"}})],1)],1)],1),t._v(" "),o("el-col",{attrs:{span:4}},[o("el-input",{attrs:{placeholder:"请输入任务编号",clearable:""},on:{change:t.InputPlan},model:{value:t.searchValue,callback:function(e){t.searchValue="string"==typeof e?e.trim():e},expression:"searchValue"}},[o("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.handleSearch},slot:"append"})],1)],1)],1)],1)],1),t._v(" "),o("div",{staticClass:"notab",attrs:{id:"tab"}},[o("el-scrollbar",[o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],attrs:{data:t.tableData,stripe:""},on:{"row-click":t.openDetails}},[o("el-table-column",{attrs:{align:"left","min-width":"20%","show-overflow-tooltip":!0,formatter:t.taskNoFormatter,prop:"taskNo",label:"巡查任务"}}),t._v(" "),o("el-table-column",{attrs:{align:"left","min-width":"16%","show-overflow-tooltip":!0,prop:"inspectionCycle",label:"巡查计划"},scopedSlots:t._u([{key:"default",fn:function(e){return["D"===e.row.inspectionType?o("span",[t._v(t._s(e.row.roomPlanName))]):o("span",[t._v(t._s(e.row.planName))])]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"left","min-width":"10%","show-overflow-tooltip":!0,prop:"inspectionCycle",label:"周期/1次"},scopedSlots:t._u([{key:"default",fn:function(e){return["0"===e.row.inspectionCycle?o("span",[t._v(t._s(e.row.inspectionCycleValue)+"小时")]):"1"===e.row.inspectionCycle?o("span",[t._v(t._s(e.row.inspectionCycleValue)+"日")]):"2"===e.row.inspectionCycle?o("span",[t._v(t._s(e.row.inspectionCycleValue)+"周")]):"3"===e.row.inspectionCycle?o("span",[t._v(t._s(e.row.inspectionCycleValue)+"月")]):"4"===e.row.inspectionCycle?o("span",[t._v(t._s(e.row.inspectionCycleValue)+"季度")]):"5"===e.row.inspectionCycle?o("span",[t._v(t._s(e.row.inspectionCycleValue)+"年")]):t._e()]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"left","min-width":"10%","show-overflow-tooltip":!0,prop:"status",label:"巡查状态"},scopedSlots:t._u([{key:"default",fn:function(e){return["0"===e.row.status?o("span",[t._v("未执行")]):"1"===e.row.status?o("span",[t._v("检查中")]):o("span",[t._v("已结束")])]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"left","min-width":"20%","show-overflow-tooltip":!0,prop:"taskEndTime",label:"完成时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[""===e.row.taskEndTime?o("span",[t._v("--")]):o("span",[t._v(t._s(e.row.taskEndTime))])]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center","min-width":"8%","show-overflow-tooltip":!0,prop:"completePercent",label:"完成度"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("div",{staticClass:"gs-el-button-group--gapSmall"},[o("div",[t._v(t._s(null==e.row.completePercent?"":e.row.completePercent+"%"))])])]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center","min-width":"8%","show-overflow-tooltip":!0,prop:"standardPercent",label:"规范率\t"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("div",{staticClass:"gs-el-button-group--gapSmall"},[o("div",[t._v(t._s(null==e.row.standardPercent?"":e.row.standardPercent+"%"))])])]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center","min-width":"10%",prop:"report",label:"巡查报告"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-tooltip",{attrs:{content:"巡查报告",placement:"bottom"}},[o("el-button",{staticStyle:{"font-size":"16px"},attrs:{type:"text",icon:"icon-l-new l-icons ggicon-documents"},on:{click:function(o){return t.downLoad(e)}}})],1)]}}])})],1)],1),t._v(" "),o("Pagination",{attrs:{widgetInfo:t.widgetInfo},on:{sonHandleCurrentChange:t.sonHandleCurrentChange}})],1)]),t._v(" "),o("FirePreventionInsDetail",{attrs:{row:t.rowObj,showDetail:t.showDetail},on:{isShow:function(e){return t.isShow()}}})],1)},[],!1,null,"ce5d8404",null);e.default=component.exports}}]);