(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1155:function(e,t,r){var content=r(1165);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("867a63f0",content,!0,{sourceMap:!1})},1156:function(e,t,r){var content=r(1167);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("313fd11f",content,!0,{sourceMap:!1})},1163:function(e,t,r){"use strict";var o={name:"filter-tree",mounted:function(){},props:{data:"",defaultProps:{default:{children:"children",label:"label",isLeaf:"leaf"}},lazy:{default:!1,type:Boolean},nodeKeyName:{default:"id",type:String},refData:{default:"filter-tree",type:String},check:{default:!1,type:Boolean},setCheckedKeys:{default:!1,type:Boolean},checkedArray:{default:function(){return[]},type:Array},inputWidth:{default:20},inputOffset:{default:2},treeWidth:{default:20},treeOffset:{default:2},treeHeight:{default:""}},data:function(){return{filterText:"",flag:!0,hasLoad:!1}},methods:{filterNode:function(e,data,t){return!e||-1!==t.label.indexOf(e)},handleNodeClick:function(data,e,t){this.$emit("handleTreeNodeClick",{data:data,obj:e,node:t})},hanleContextmenu:function(e,t,r,o){},onCheckChange:function(e,data,t){var r=e[this.nodeKeyName].parentId,o=this.checkedArray.indexOf(r);o>0&&this.checkedArray.splice(o,1)},removeTree:function(e,data){},setCheckedkeys:function(e){if(e.length>0)for(var t=0;t<e.length;t++)e[t]}},computed:{treeStyleObj:function(){return this.treeHeight?{height:"".concat(this.treeHeight,"px")}:{height:"unset"}}},watch:{filterText:function(e){this.$refs[this.refData].filter(e)},checkedArray:function(e,t){for(var i=0;i<e.length;i++){var r=this.$refs["filter-tree"].getNode(e[i]);if(r){var o=r.data.parentId,n=this.checkedArray.indexOf(o);n>-1&&this.checkedArray.splice(n,1)}}this.$refs["filter-tree"].getCheckedKeys(e,!1)}}},n=(r(1164),r(1166),r(31)),component=Object(n.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticClass:"filter-tree"},[r("el-row",[r("el-col",{attrs:{span:e.inputWidth,offset:e.inputOffset}},[r("el-input",{staticStyle:{"text-align":"center"},attrs:{clearable:"",placeholder:"请输入过滤内容"},model:{value:e.filterText,callback:function(t){e.filterText="string"==typeof t?t.trim():t},expression:"filterText"}})],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:e.treeWidth,offset:e.treeOffset}},[r("el-scrollbar",{style:e.treeStyleObj},[r("el-tree",{ref:e.refData,attrs:{"empty-text":"",props:e.defaultProps,data:e.data,"default-checked-keys":e.checkedArray,"filter-node-method":e.filterNode,"node-key":e.nodeKeyName,"show-checkbox":e.check,accordion:"","highlight-current":e.flag},on:{"node-click":e.handleNodeClick,"node-contextmenu":e.hanleContextmenu,remove:e.removeTree}})],1)],1)],1)],1)},[],!1,null,"711af4d3",null);t.a=component.exports},1164:function(e,t,r){"use strict";var o=r(1155);r.n(o).a},1165:function(e,t,r){(e.exports=r(16)(!1)).push([e.i,".filter-tree span.title[data-v-711af4d3]{text-indent:2em;font-size:16px;color:#2892e2}",""])},1166:function(e,t,r){"use strict";var o=r(1156);r.n(o).a},1167:function(e,t,r){(e.exports=r(16)(!1)).push([e.i,"",""])},1255:function(e,t,r){var content=r(1525);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("2a7ee3ee",content,!0,{sourceMap:!1})},1524:function(e,t,r){"use strict";var o=r(1255);r.n(o).a},1525:function(e,t,r){(e.exports=r(16)(!1)).push([e.i,".notab[data-v-a390c636]{height:calc(100vh - 216px);width:100%;background:#fff;border:1px solid #e2e4e8}.notab>div[data-v-a390c636]:first-child{width:100%;height:calc(100vh - 266px)}.staticNotab[data-v-a390c636]{height:calc(100vh - 136px);width:100%;background:#fff;border:1px solid #e2e4e8}.reportNoTab>div[data-v-a390c636]:first-child{width:100%;height:calc(100vh - 296px);overflow-y:auto}.userNotab[data-v-a390c636]{height:calc(100vh - 180px);width:100%;background:#fff}.userNotab>div[data-v-a390c636]:first-child{width:100%;height:calc(100vh - 188px);overflow-y:auto}.myTab[data-v-a390c636]{height:calc(100vh - 258px);background:#fff;width:100%;border:1px solid #e2e4e8}.myTab>div[data-v-a390c636]:first-child{width:100%;height:calc(100vh - 308px)}@media screen and (max-width:1680px){.notab[data-v-a390c636]{height:calc(100vh - 208px);background:#fff}.notab>div[data-v-a390c636]:first-child{height:calc(100vh - 258px)}.myTab[data-v-a390c636]{height:calc(100vh - 250px);background:#fff}.myTab>div[data-v-a390c636]:first-child{height:calc(100vh - 300px)}.staticNotab[data-v-a390c636]{height:calc(100vh - 132px)}}@media screen and (max-width:1440px){.notab[data-v-a390c636]{height:calc(100vh - 173px);background:#fff}.notab>div[data-v-a390c636]:first-child{height:calc(100vh - 223px)}.myTab[data-v-a390c636]{height:calc(100vh - 215px);background:#fff}.myTab>div[data-v-a390c636]:first-child{height:calc(100vh - 265px)}.staticNotab[data-v-a390c636]{height:calc(100vh - 107px)}}@media screen and (max-width:1366px){.reportNoTab>div[data-v-a390c636]:first-child{width:100%;height:calc(100vh - 286px);overflow-y:auto}}[v-cloak][data-v-a390c636]{display:none}.el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content[data-v-a390c636]{background:rgba(32,160,255,.5)!important}.l-icons[data-v-a390c636]{font-size:2rem;cursor:pointer;color:#2892e2}.el-container[data-v-a390c636]{height:calc(100vh - 75px);overflow:hidden}.el-container .el-aside[data-v-a390c636]{background-color:#fff;color:#333;border:1px solid #bfcbd9;margin:10px 10px 0 0;height:calc(100% - 13px)}.el-container .el-aside .el-collapse .el-collapse-item span.title[data-v-a390c636]{text-indent:2em;font-size:16px;color:#2892e2}.el-container .el-main[data-v-a390c636]{position:relative;background-color:#fff;color:#333;border:1px solid #bfcbd9;margin:10px 0 0;padding:0;height:calc(100% - 13px)}.el-container .el-main .header[data-v-a390c636]{padding:5px;border-bottom:1px solid #bfcbd9}.el-container .el-main .header .title[data-v-a390c636]{margin:0;line-height:30px;padding:0 10px;font-size:16px;font-weight:700;color:#2892e2;text-align:left}.el-container .el-main .header .right[data-v-a390c636]{text-align:right}.el-container .el-main .header .left[data-v-a390c636]{text-align:left}.el-container .el-main .body .userNotab[data-v-a390c636]{border:none}.el-container .el-main .body .userNotab .el-pagination[data-v-a390c636]{height:100%}.el-container .el-main .body .authNotab[data-v-a390c636]{width:100%;overflow-y:auto}.el-container .el-main .body .authNotab .el-tabs--border-card[data-v-a390c636]{box-shadow:none;border:none}.el-container .el-main .body .authNotab div[data-v-a390c636]:first-child{margin:0;width:100%;height:calc(100vh - 249px);overflow-y:auto}.el-container .el-main .body .authNotab .el-pagination[data-v-a390c636]{position:absolute}.el-container .el-main .is-ableClick[data-v-a390c636]{cursor:pointer}.el-container .el-main .table-row[data-v-a390c636]{height:46px}.el-container .left[data-v-a390c636]{text-align:left}",""])},1829:function(e,t,r){"use strict";r.r(t);r(50),r(222);var o=r(40),n=(r(133),r(33),r(224),r(324),r(6)),l=(r(482),r(1189)),c=r(1188),d=r(1187),h=r(1186),f=r(1147),m=r(1163),v=(r(1153),r(1154),r(483)),y={components:{ModifyUser:l.a,ModifyRoleUser:c.a,AddUser:d.a,RefuseUser:h.a,Pagination:f.a,FilterTree:m.a},data:function(){return{ACCEPT_URL:"/user/acceptOrRefuse",tenantId:"",orgCode:"",cloShow:!0,userStatus:"0",setFlag:!0,searchUserName:"",flag:!0,firstLevel:!1,menuVisible:!1,markFloat:1,iconClass:"el-icon-delete",iconCont:"已激活",orgObj:"",keys:[],node:"",authListPageInfo:{pageNo:1,pageSize:10,total:1},authInfoPageInfo:{pageNo:1,pageSize:6,total:1},urlPageInfo:{pageNo:1,pageSize:6,total:1},islock:!0,systems:[],systemsLoadedMap:new Map,systemCode:"fire",systemObj:{},operateAuth:{edit:!0,logoff:!0,locked:!1,actived:!0,role:!0,reset:!0,restore:!1,accept:!1,refuse:!1},activeName:"auth",formObj:{addFormVisible:!1,editFormVisible:!1,roleFormVisible:!1,refuseFormVisible:!1},authTreeObj:[],authObj:{parentId:"",systemCode:"",belongSystemCode:"",privCode:"",privType:"",privOrder:"",privName:"",moduleName:"",privLogKey:"",init:function(){this.parentId="",this.systemCode=this.belongSystemCode="",this.privCode="",this.privType="",this.privOrder="",this.privName="",this.moduleName="",this.privLogKey=""}},currentAuthObj:{parentId:"",systemCode:"",belongSystemCode:"",privCode:"",privType:"",privOrder:"",privName:"",moduleName:"",privLogKey:""},addAuthBtnVisible:!0,modulesVisible:{systemTableVisble:!0,childSystemTableVisble:!1},activeTab:"first",editAuthDialogVisible:!1,addAuthDialogVisible:!1,addURLDialogVisible:!1,editURLDialogVisible:!1,userObj:{loginNameValidate:"",username:"",newPassword:"",validatePassword:"",name:"",sex:"",phone:"",mobile:"",email:""},addURLObj:{url:"",urlId:""},editURLObj:{url:"",urlId:""},addURLObjTree:[],editURLObjTree:[],defaultProps:{children:"children",label:"label"},authFormRules:{privCode:[{required:!0,message:"权限编码必填",trigger:"blur"}],privType:[{required:!0,message:"权限类型必填",trigger:"change"}],privName:[{required:!0,message:"权限名称必填",trigger:"blur"}],moduleName:[{required:!0,message:"所属组件名称必填",trigger:"blur"}]},editAuthFormRules:{privCode:[{required:!0,message:"权限编码必填",trigger:"blur"}],privType:[{required:!0,message:"权限类型必填",trigger:"change"}],privName:[{required:!0,message:"权限名称必填",trigger:"blur"}],moduleName:[{required:!0,message:"所属组件名称必填",trigger:"blur"}]},urlFormRules:{url:[{required:!0,message:"URL必填",trigger:"blur"}]},systemTableData:[],authTableData:[],controlUrlTableData:[],tempTreeData:[]}},mounted:function(){this.initTree()},methods:{initTree:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(){var t,r,i,o,code,data;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.a.post(n.a.forent_url.url+"/system/all.mvc");case 2:if(t=e.sent,r=t.data,"success"!==t.code){e.next=22;break}i=0;case 6:if(!(i<r.length)){e.next=21;break}if(0!=i){e.next=16;break}return e.next=10,this.getPrivTreeData({systemCode:r[i].systemCode});case 10:o=e.sent,code=o.code,data=o.data,"succses"==code&&(r[i].tree=v.a.formatJSONTreeData(data,"children","privId","parentId")),e.next=17;break;case 16:r[i].tree=[];case 17:this.systemsLoadedMap.set(r[i].systemCode,i);case 18:i++,e.next=6;break;case 21:this.systems=r;case 22:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),userPageListener:function(e,data){"ModifyUser"&&(this.formObj.editFormVisible=!1),"ModifyRoleUser"&&(this.formObj.roleFormVisible=!1),"AddUser"&&(this.formObj.addFormVisible=!1),"RefuseUser"&&(this.formObj.refuseFormVisible=!1)},addUpdate:function(e,t,r){if("{}"==JSON.stringify(this.orgObj))this.$message({type:"warning",message:"请先选择组织机构!"});else{var o={};o=r?{orgObj:t,rowObj:r||null}:{orgObj:t},this.$router.push({name:e,params:o})}},handleEdit:function(e,t,r,o){},handleDelete:function(e,t){var r=this;this.$confirm("确认注销该用户吗?","提示信息",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={tenantId:r.tenantId,userIds:t.userId};n.a.post(n.a.ajaxUrl+"/upmsUser/deleteUser",e).then(function(e){"success"==e.data.code?(r.getUserList(0),r.$message({type:"success",message:"注销成功!"})):r.$message({type:"success",message:"注销失败!"})})}).catch(function(){r.$message({type:"info",message:"已取消删除"})})},handleRestore:function(e,t,r,o){},handleUserClick:function(e,t,r){var o=this;if("addAuth"===e&&(this.addAuthDialogVisible=!0,n.a.post(n.a.forent_url.url+"/system/querySystemTreeNoSelf.mvc",{systemCode:this.systemCode}).then(function(e){"success"==e.code&&(o.authTreeObj=v.a.formatJSONTreeData(e.data,"children","systemId","parentId"))})),"editAuth"===e&&(this.editAuthDialogVisible=!0,this.authObj=v.a.deepCopy(r.row),this.authObj.$index=r.$index,!0),"deleteAuth"===e){this.$confirm("确定要删除该权限吗？","提示信息",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.a.post(n.a.forent_url.url+"/priv/valDelete.mvc",{privId:r.row.privId}).then(function(e){"success"==e.code&&n.a.post(n.a.forent_url.url+"/priv/deletePrivByPrivId.mvc",{privId:r.row.privId}).then(function(e){"success"==e.code&&(o.$message({type:"success",message:"删除成功"}),o.systemTableData.splice(r.$index,1))})})}).catch(function(a,b){o.$message({type:"info",message:"删除失败"})}),!0}"addURL"==e&&(this.addURLDialogVisible=!0,n.a.post(n.a.forent_url.url+"/system/querySystemTreeNoSelf.mvc",{systemCode:this.systemCode}).then(function(e){"success"==e.code&&(o.addURLObjTree=v.a.formatJSONTreeData(e.data,"children","systemId","parentId"))})),"editURL"==e&&(this.editURLDialogVisible=!0,this.editURLObj=v.a.deepCopy(r.row),this.editURLObj.$index=r.$index),"deleteURL"==e&&this.$confirm("确定要删除该URL吗？","提示信息",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(e){n.a.post(n.a.forent_url.url+"/priv/URL/deleteURLByUrlId.mvc",{urlId:r.row.urlId}).then(function(e){"success"===e.code&&(o.$message({message:"删除成功",type:"success"}),o.controlUrlTableData.splice(r.$index,1))}).catch(function(e){o.$message({message:"删除失败",type:"warning"})})})},handleNodeClick:function(data,e,t){this.tenantId=data.tenantId,this.orgCode=data.orgCode,this.orgObj=data,this.flag=!0,this.markFloat=e.id,this.keys=data.parentCode,1!=e.id?this.getUserList(this.userStatus):(this.orgCode="",this.getUserList(this.userStatus))},handleTabClick:function(e){var t=e.name;t&&(this.addAuthBtnVisible="auth"==t)},handleSystemTreeNodeClick:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(t){var data,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return data=t.data,t.obj,t.node,this.currentAuthObj=v.a.deepCopy(data),this.modulesVisible.systemTableVisble=!1,this.modulesVisible.childSystemTableVisble=!0,e.next=6,this.getAuthList({systemCode:this.systemCode,privId:this.currentAuthObj.privId,pageNo:1,pageSize:6});case 6:return"success"==(r=e.sent).code&&(this.authTableData=r.data.rows),e.next=10,this.getUrlList({systemCode:this.systemCode,privId:this.currentAuthObj.privId,pageNo:1,pageSize:6});case 10:"success"==(o=e.sent).code&&(this.controlUrlTableData=o.data.rows);case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),handleCollapseChange:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(t){var r,o,n,l,c,code,data;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.modulesVisible.systemTableVisble=!0,this.modulesVisible.childSystemTableVisble=!1,this.currentAuthObj="",!t){e.next=18;break}return this.systemObj=t,r=this.systemsLoadedMap.get(t),e.next=8,this.getPrivTreeData({systemCode:t});case 8:return o=e.sent,n=o.code,l=o.data,"success"==n&&(this.systems[r].tree=v.a.formatJSONTreeData(l,"children","privId","parentId")),e.next=14,this.getAuthList({systemCode:this.systemCode,privId:"",pageNo:this.authListPageInfo.pageNo,pageSize:this.authListPageInfo.pageSize});case 14:c=e.sent,code=c.code,data=c.data,"success"==code&&(this.systemTableData=data.rows);case 18:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),hanleContextmenu:function(e,t,r,o){this.menuVisible=!0,this.firstLevel=1!==r.level;var menu=document.querySelector("#menu");menu.style.left=e.clientX+20+"px",menu.style.top=e.clientY-60+"px",this.orgCode=t.orgCode,this.keys=t.parentCode,this.orgObj=t,this.node=r},authListCurrentChange:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(t){var r,code,data;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.authListPageInfo.pageSize=t.pageSize?parseInt(t.pageSize):this.authListPageInfo.pageSize,this.authListPageInfo.pageNo=t.pageNo?parseInt(t.pageNo):this.authListPageInfo.pageNo,e.next=4,this.getAuthList({systemCode:this.systemCode,privId:"",pageNo:this.authListPageInfo.pageNo,pageSize:this.authListPageInfo.pageSize});case 4:r=e.sent,code=r.code,data=r.data,"success"==code&&(this.systemTableData=data.rows);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),authInfoCurrentChange:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.authInfoPageInfo.pageSize=t.pageSize?parseInt(t.pageSize):this.authInfoPageInfo.pageSize,this.authInfoPageInfo.pageNo=t.pageNo?parseInt(t.pageNo):this.authInfoPageInfo.pageNo,e.next=4,this.getAuthList({systemCode:this.systemCode,privId:this.currentAuthObj.privId,pageNo:this.authInfoPageInfo.pageNo,pageSize:this.authInfoPageInfo.pageSize});case 4:"success"==(r=e.sent).code&&(this.authTableData=r.data.rows);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),urlCurrentChange:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.urlPageInfo.pageSize=t.pageSize?parseInt(t.pageSize):this.urlPageInfo.pageSize,this.urlPageInfo.pageNo=t.pageNo?parseInt(t.pageNo):this.urlPageInfo.pageNo,e.next=4,this.getUrlList({systemCode:this.systemCode,privId:this.currentAuthObj.privId,pageNo:this.urlPageInfo.pageNo,pageSize:this.urlPageInfo.pageSize});case 4:"success"==(r=e.sent).code&&(this.controlUrlTableData=r.data.rows);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),removeTree:function(e,data){},closeBox:function(){this.menuVisible=!1},changeIcon:function(e,t){this.islock=!this.islock,this.islock?(this.iconClass="el-icon-delete",this.iconCont="已激活",t.status=0):(this.iconClass="el-icon-edit",this.iconCont="已锁定",t.status=1),this.$message({type:"success",message:"操作成功!"})},classIconLock:function(e){return"已激活"==this.formatIsLock(e.row)?"cloud-unlocked icon-l-new l-icons":"已锁定"==this.formatIsLock(e.row)?"cloud-locked icon-l-new l-icons":void 0},formatIsLock:function(e){var t=e.isLock;return""==t||null==t||"false"==t?"已激活":"已锁定"},privTypeFormatter:function(e){return"1"==e.privType?"模块点":"功能点"},formatRole:function(e){return"1"},testT:function(){},addAuth:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.$refs.addAuthObj.validate(function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(r){var o,l,i,c,code;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=12;break}for(o=t.$refs.addAuth.$refs["filter-tree"].getCheckedNodes(),l=[],i=0;i<o.length;i++)l.push(o[i].systemId);return e.next=6,n.a.post(n.a.forent_url.url+"/priv/save.mvc",{parentId:t.currentAuthObj.privId||"-1",privId:t.authObj.privId,systemCode:t.systemCode,belongSystemCode:l.join(","),privCode:t.authObj.privCode,privType:t.authObj.privType,privOrder:t.authObj.privOrder,privName:t.authObj.privName,moduleName:t.authObj.moduleName,privLogKey:t.authObj.privLogKey});case 6:c=e.sent,code=c.code,c.data,"success"==code?t.$message({message:"创建成功",type:"success"}):t.$message({message:"创建失败",type:"warning"}),t.$refs.addAuthObj.resetFields(),t.addAuthDialogVisible=!1;case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),editAuth:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.$refs.editAuthObj.validate(function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(r){var o,code;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=9;break}return e.next=3,n.a.post(n.a.forent_url.url+"/priv/save.mvc",{parentId:t.systemObj.systemId,privId:t.authObj.privId,systemCode:t.systemCode,belongSystemCode:"",privCode:t.authObj.privCode,privType:t.authObj.privType,privOrder:t.authObj.privOrder,privName:t.authObj.privName,moduleName:t.authObj.moduleName,privLogKey:t.authObj.privLogKey});case 3:o=e.sent,code=o.code,o.data,"success"==code?t.$message({message:"修改成功",type:"success"}):t.$message({message:"修改失败",type:"warning"}),t.$refs.editAuthObj.resetFields(),t.editAuthDialogVisible=!1;case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),addURL:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.$refs.addURLObj.validate(function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(r){var o,l,i,c,code,data;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=11;break}for(o=t.$refs.addURLTree.$refs["filter-tree"].getCheckedNodes(),l=[],i=0;i<o.length;i++)l.push(o[i].systemId);return e.next=6,n.a.post(n.a.forent_url.url+"/priv/URL/save.mvc",{privId:t.currentAuthObj.privId,belongSystemCode:l.join(","),urlId:t.addURLObj.urlId||"",url:t.addURLObj.url||""});case 6:c=e.sent,code=c.code,data=c.data,"success"==code?(t.$message({message:"修改成功",type:"success"}),t.controlUrlTableData.push(data)):t.$message({message:"修改失败",type:"warning"}),t.addURLDialogVisible=!1;case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),editURL:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.$refs.editURLObj.validate(function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(r){var o,code,data;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=8;break}return e.next=3,n.a.post(n.a.forent_url.url+"/priv/URL/save.mvc",{privId:t.currentAuthObj.privId||"",belongSystemCode:"",urlId:t.editURLObj.urlId||"",url:t.editURLObj.url||""});case 3:o=e.sent,code=o.code,data=o.data,"success"==code?(t.$message({message:"修改成功",type:"success"}),t.controlUrlTableData[t.editURLObj.$index]=data):t.$message({message:"修改失败",type:"warning"}),t.addURLDialogVisible=!1;case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),handleAuthDialogClose:function(e){this.$refs[e].clearValidate(),this.$refs[e].resetFields()},handleURLDialogClose:function(e){this.$refs[e].clearValidate(),this.$refs[e].resetFields()},test:function(){},getUrlList:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(t){var r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={systemCode:t.systemCode,privId:t.privId,pageNo:t.pageNo,pageSize:t.pageSize},e.next=3,n.a.post(n.a.forent_url.url+"/priv/URL/list.mvc",r);case 3:return"success"!=(o=e.sent).code&&this.$message({message:"请求失败",type:"warn"}),e.abrupt("return",o);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getAuthInfo:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(t){var r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={systemCode:t.systemCode,privId:t.privId,pageNo:t.pageNo,pageSize:t.pageSize},e.next=3,n.a.post(n.a.forent_url.url+"/priv/list.mvc",r);case 3:return"success"!=(o=e.sent).code&&this.$message({message:"请求失败",type:"warn"}),e.abrupt("return",o);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getAuthList:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(t){var r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={systemCode:t.systemCode||"",privId:t.privId||"",pageNo:t.pageNo||1,pageSize:t.pageSize||6},e.next=3,n.a.post(n.a.forent_url.url+"/priv/list.mvc",r);case 3:return"success"!=(o=e.sent).code&&this.$message({message:"请求失败",type:"warn"}),e.abrupt("return",o);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getPrivTreeData:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.a.post(n.a.forent_url.url+"/priv/privsInSystem.mvc",t);case 2:return"success"!=(r=e.sent).code&&this.$message({message:r.message,type:"warning"}),e.abrupt("return",r);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},watch:{tempTreeData:function(e,t){e!=t&&this.testT()},orgCode:function(e,t){}},filters:{statusEve:function(e,t,r,o){return"false"!=e?"已激活":"锁定"}}},w=(r(1524),r(31)),component=Object(w.a)(y,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-container",[r("el-aside",{attrs:{width:"18vw"}},[r("div",{staticClass:"closeBox",on:{click:function(t){return e.closeBox()}}},[r("el-collapse",{attrs:{accordion:""},on:{change:e.handleCollapseChange},model:{value:e.systemCode,callback:function(t){e.systemCode="string"==typeof t?t.trim():t},expression:"systemCode"}},e._l(e.systems,function(t,o){return r("el-collapse-item",{key:o,attrs:{name:t.systemCode}},[r("template",{slot:"title"},[r("span",{staticClass:"title"},[e._v(e._s(t.systemName))])]),e._v(" "),r("FilterTree",{attrs:{refData:t.systemCode+"_tree",data:t.tree,treeHeight:200,defaultProps:{label:"privName",children:"children",isLeaf:"leaf"}},on:{handleTreeNodeClick:e.handleSystemTreeNodeClick}})],2)}),1)],1)]),e._v(" "),r("el-main",[r("el-row",{staticClass:"header",attrs:{gutter:10}},[r("el-col",{staticClass:"title",attrs:{span:5}},[r("span",[e._v("权限列表")])]),e._v(" "),r("el-col",{staticClass:"right",attrs:{span:19}},[r("el-button",{directives:[{name:"show",rawName:"v-show",value:e.addAuthBtnVisible,expression:"addAuthBtnVisible"}],attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.handleUserClick("addAuth")}}},[e._v("添加权限")]),e._v(" "),r("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.addAuthBtnVisible,expression:"!addAuthBtnVisible"}],attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.handleUserClick("addURL")}}},[e._v("添加URL")])],1)],1),e._v(" "),r("el-row",{staticClass:"body"},[r("el-row",[r("el-col",{attrs:{span:24}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.modulesVisible.systemTableVisble,expression:"modulesVisible.systemTableVisble"}],staticClass:"userNotab"},[r("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{data:e.systemTableData,height:"100%"}},[r("el-table-column",{attrs:{label:"权限编码",prop:"privOrder",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{label:"权限名称",prop:"privName"}}),e._v(" "),r("el-table-column",{attrs:{label:"权限类型","show-overflow-tooltip":"",prop:"privType",formatter:e.privTypeFormatter}}),e._v(" "),r("el-table-column",{attrs:{"min-width":"100",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tooltip",{directives:[{name:"show",rawName:"v-show",value:e.operateAuth.edit,expression:"operateAuth.edit"}],attrs:{content:"编辑",placement:"bottom"}},[r("i",{staticClass:"ggicon-modification icon-l-new l-icons",on:{click:function(r){return e.handleUserClick("editAuth",e.orgObj,t)}}})]),e._v(" "),r("el-tooltip",{directives:[{name:"show",rawName:"v-show",value:e.operateAuth.logoff,expression:"operateAuth.logoff"}],attrs:{content:"删除",placement:"bottom"}},[r("i",{staticClass:"cloud-trash icon-l-new l-icons",on:{click:function(r){return e.handleUserClick("deleteAuth",e.orgObj,t)}}})])]}}])})],1),e._v(" "),r("Pagination",{staticClass:"userPage",attrs:{widgetInfo:e.authListPageInfo},on:{sonHandleCurrentChange:e.authListCurrentChange}})],1)])],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-tabs",{directives:[{name:"show",rawName:"v-show",value:e.modulesVisible.childSystemTableVisble,expression:"modulesVisible.childSystemTableVisble"}],staticStyle:{width:"100%",border:"none","box-shadow":"none","padding-bottom":"none"},attrs:{type:"border-card"},on:{"tab-click":e.handleTabClick},model:{value:e.activeName,callback:function(t){e.activeName="string"==typeof t?t.trim():t},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"权限信息",name:"auth"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.modulesVisible.systemTableVisble,expression:"!modulesVisible.systemTableVisble"}],staticClass:"authNotab"},[r("el-table",{ref:"authTableData",staticStyle:{width:"100%"},attrs:{data:e.authTableData}},[r("el-table-column",{attrs:{label:"权限编码",prop:"privCode",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{label:"权限名称",prop:"privName"}}),e._v(" "),r("el-table-column",{attrs:{label:"权限类型","show-overflow-tooltip":"",prop:"privType",formatter:e.privTypeFormatter}}),e._v(" "),r("el-table-column",{attrs:{"min-width":"100",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tooltip",{directives:[{name:"show",rawName:"v-show",value:e.operateAuth.edit,expression:"operateAuth.edit"}],attrs:{content:"编辑",placement:"bottom"}},[r("i",{staticClass:"ggicon-modification icon-l-new l-icons",on:{click:function(r){return e.handleUserClick("editAuth",e.orgObj,t)}}})]),e._v(" "),r("el-tooltip",{directives:[{name:"show",rawName:"v-show",value:e.operateAuth.logoff,expression:"operateAuth.logoff"}],attrs:{content:"删除",placement:"bottom"}},[r("i",{staticClass:"cloud-trash icon-l-new l-icons",on:{click:function(r){return e.handleUserClick("deleteAuth",e.orgObj,t)}}})])]}}])})],1),e._v(" "),r("Pagination",{staticClass:"userPage",attrs:{widgetInfo:e.authInfoPageInfo},on:{sonHandleCurrentChange:e.authInfoCurrentChange}})],1)]),e._v(" "),r("el-tab-pane",{attrs:{label:"控制URL信息",name:"url"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.modulesVisible.systemTableVisble,expression:"!modulesVisible.systemTableVisble"}],staticClass:"authNotab"},[r("el-table",{ref:"controlUrlTableData",staticStyle:{width:"100%"},attrs:{data:e.controlUrlTableData}},[r("el-table-column",{attrs:{label:"权限名称",prop:"url"}}),e._v(" "),r("el-table-column",{attrs:{"min-width":"100",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tooltip",{directives:[{name:"show",rawName:"v-show",value:e.operateAuth.edit,expression:"operateAuth.edit"}],attrs:{content:"编辑",placement:"bottom"}},[r("i",{staticClass:"ggicon-modification icon-l-new l-icons",on:{click:function(r){return e.handleUserClick("editURL",e.orgObj,t)}}})]),e._v(" "),r("el-tooltip",{directives:[{name:"show",rawName:"v-show",value:e.operateAuth.logoff,expression:"operateAuth.logoff"}],attrs:{content:"删除",placement:"bottom"}},[r("i",{staticClass:"cloud-trash icon-l-new l-icons",on:{click:function(r){return e.handleUserClick("deleteURL",e.orgObj,t)}}})])]}}])})],1),e._v(" "),r("Pagination",{staticClass:"userPage",attrs:{widgetInfo:e.urlPageInfo},on:{sonHandleCurrentChange:e.urlCurrentChange}})],1)])],1)],1)],1)],1)],1),e._v(" "),r("ModifyUser",{ref:"formModifyUser",attrs:{form:e.userObj,loginName:e.userObj.loginNameValidate,show:e.formObj.editFormVisible},on:{userPageListener:e.userPageListener}}),e._v(" "),r("ModifyRoleUser",{ref:"formModifyRoleUser",attrs:{form:e.userObj,show:e.formObj.roleFormVisible},on:{userPageListener:e.userPageListener}}),e._v(" "),r("AddUser",{attrs:{show:e.formObj.addFormVisible},on:{userPageListener:e.userPageListener}}),e._v(" "),r("RefuseUser",{attrs:{show:e.formObj.refuseFormVisible,userObj:e.userObj},on:{userPageListener:e.userPageListener}}),e._v(" "),r("el-dialog",{attrs:{title:"添加权限",visible:e.addAuthDialogVisible,width:"25%"},on:{"update:visible":function(t){e.addAuthDialogVisible=t},close:function(t){return e.handleAuthDialogClose("addAuthObj")}}},[r("el-form",{ref:"addAuthObj",attrs:{model:e.authObj,rules:e.authFormRules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"权限编码",prop:"privCode"}},[r("el-input",{attrs:{clearable:""},model:{value:e.authObj.privCode,callback:function(t){e.$set(e.authObj,"privCode","string"==typeof t?t.trim():t)},expression:"authObj.privCode"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"权限类型",prop:"privType"}},[r("el-select",{staticStyle:{width:"100%"},model:{value:e.authObj.privType,callback:function(t){e.$set(e.authObj,"privType","string"==typeof t?t.trim():t)},expression:"authObj.privType"}},[r("el-option",{attrs:{label:"模块点",value:"1"}},[e._v("模块点")]),e._v(" "),r("el-option",{attrs:{label:"功能点",value:"2"}},[e._v("功能点")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"权限顺序",prop:"privOrder"}},[r("el-input",{attrs:{clearable:""},model:{value:e.authObj.privOrder,callback:function(t){e.$set(e.authObj,"privOrder","string"==typeof t?t.trim():t)},expression:"authObj.privOrder"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"权限名称",prop:"privName"}},[r("el-input",{attrs:{clearable:""},model:{value:e.authObj.privName,callback:function(t){e.$set(e.authObj,"privName","string"==typeof t?t.trim():t)},expression:"authObj.privName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"所属组件名称",prop:"moduleName"}},[r("el-input",{attrs:{clearable:""},model:{value:e.authObj.moduleName,callback:function(t){e.$set(e.authObj,"moduleName","string"==typeof t?t.trim():t)},expression:"authObj.moduleName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"操作日志key",prop:"privLogKey"}},[r("el-input",{attrs:{clearable:""},model:{value:e.authObj.privLogKey,callback:function(t){e.$set(e.authObj,"privLogKey","string"==typeof t?t.trim():t)},expression:"authObj.privLogKey"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"同步到其他系统",prop:"belongSystemCode"}},[r("FilterTree",{ref:"addAuth",attrs:{inputWidth:24,inputOffset:0,check:!0,data:e.authTreeObj,defaultProps:{label:"systemName",children:"children",isLeaf:"leaf"}}})],1)],1),e._v(" "),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addAuthDialogVisible=!1,e.test,e.handleAuthDialogClose("addAuthObj")}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.addAuth}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"编辑权限",visible:e.editAuthDialogVisible,width:"25%"},on:{"update:visible":function(t){e.editAuthDialogVisible=t},close:function(t){return e.handleAuthDialogClose("editAuthObj")}}},[r("el-form",{ref:"editAuthObj",attrs:{model:e.authObj,rules:e.editAuthFormRules,"label-width":"120px"}},[r("el-row",[r("el-col",{attrs:{span:20,offset:2}},[r("el-form-item",{attrs:{label:"权限编码",prop:"privCode"}},[r("el-input",{attrs:{clearable:""},model:{value:e.authObj.privCode,callback:function(t){e.$set(e.authObj,"privCode","string"==typeof t?t.trim():t)},expression:"authObj.privCode"}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"权限类型",prop:"privType"}},[r("el-col",{attrs:{span:20,offset:2}},[r("el-select",{staticStyle:{width:"93%"},model:{value:e.authObj.privType,callback:function(t){e.$set(e.authObj,"privType","string"==typeof t?t.trim():t)},expression:"authObj.privType"}},[r("el-option",{attrs:{label:"模块点",value:"1"}},[e._v("模块点")]),e._v(" "),r("el-option",{attrs:{label:"功能点",value:"2"}},[e._v("功能点")])],1)],1)],1),e._v(" "),r("el-row"),e._v(" "),r("el-row",[r("el-col",{attrs:{span:20,offset:2}},[r("el-form-item",{attrs:{label:"权限顺序",prop:"privOrder"}},[r("el-input",{attrs:{clearable:""},model:{value:e.authObj.privOrder,callback:function(t){e.$set(e.authObj,"privOrder","string"==typeof t?t.trim():t)},expression:"authObj.privOrder"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:20,offset:2}},[r("el-form-item",{attrs:{label:"权限名称",prop:"privName"}},[r("el-input",{attrs:{clearable:""},model:{value:e.authObj.privName,callback:function(t){e.$set(e.authObj,"privName","string"==typeof t?t.trim():t)},expression:"authObj.privName"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:20,offset:2}},[r("el-form-item",{attrs:{label:"所属组件名称",prop:"moduleName"}},[r("el-input",{attrs:{clearable:""},model:{value:e.authObj.moduleName,callback:function(t){e.$set(e.authObj,"moduleName","string"==typeof t?t.trim():t)},expression:"authObj.moduleName"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:20,offset:2}},[r("el-form-item",{attrs:{label:"操作日志key",prop:"privLogKey"}},[r("el-input",{attrs:{clearable:""},model:{value:e.authObj.privLogKey,callback:function(t){e.$set(e.authObj,"privLogKey","string"==typeof t?t.trim():t)},expression:"authObj.privLogKey"}})],1)],1)],1)],1),e._v(" "),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editAuthDialogVisible=!1,e.handleAuthDialogClose("editAuthObj")}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.editAuth}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"添加URL",visible:e.addURLDialogVisible,width:"30%"},on:{"update:visible":function(t){e.addURLDialogVisible=t},close:function(t){return e.handleURLDialogClose("addURLObj")}}},[r("el-form",{ref:"addURLObj",attrs:{model:e.addURLObj,rules:e.urlFormRules,"label-width":"150px"}},[r("el-form-item",{attrs:{label:"控制URL",prop:"url"}},[r("el-row",[r("el-col",{attrs:{span:20,offset:2}},[r("el-input",{attrs:{clearable:"",type:"textarea",rows:4},model:{value:e.addURLObj.url,callback:function(t){e.$set(e.addURLObj,"url","string"==typeof t?t.trim():t)},expression:"addURLObj.url"}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"同步到其他系统"}},[r("FilterTree",{ref:"addURLTree",attrs:{inputWidth:20,inputOffset:2,check:!0,data:e.addURLObjTree,defaultProps:{label:"systemName",children:"children",isLeaf:"leaf"}}})],1)],1),e._v(" "),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addURLDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.addURL}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"编辑URL",visible:e.editURLDialogVisible,width:"30%"},on:{"update:visible":function(t){e.editURLDialogVisible=t},close:function(t){return e.handleURLDialogClose("editURLObj")}}},[r("el-form",{ref:"editURLObj",attrs:{model:e.editURLObj,rules:e.urlFormRules,"label-width":"150px"}},[r("el-form-item",{attrs:{label:"控制URL",prop:"url"}},[r("el-row",[r("el-col",{attrs:{span:20,offset:2}},[r("el-input",{attrs:{clearable:"",type:"textarea",rows:4},model:{value:e.editURLObj.url,callback:function(t){e.$set(e.editURLObj,"url","string"==typeof t?t.trim():t)},expression:"editURLObj.url"}})],1)],1)],1)],1),e._v(" "),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editURLDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.editURL}},[e._v("确 定")])],1)],1)],1)],1)},[],!1,null,"a390c636",null);t.default=component.exports}}]);