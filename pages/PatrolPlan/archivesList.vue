<!--
 * @Descripttion: 
 * @version: 
 * @Author: yangxq
 * @Date: 2019-08-20 10:43:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-21 11:04:36
 -->
   <!-- 单位列表 -->
<template>
  <div>
    <!--<div class="l-head">
       面包屑
      <Title/>
    </div>-->
    <div class="right-main-warpper" v-loading="isLoading">
      <div class="h2-title-wrap">
        <h2 class="tilte-h2">单位列表</h2>
      </div>
      <div class="main-top-header">
        <el-form label-position="left" inline class="expend-serch">
          <el-form-item label="所属运营中心:">
            <el-select
              v-model="orgCode"
              size="small"
              filterable
              placeholder="全部"
              @change="changeoperationCenter"
            >
              <el-option
                v-for="item in operationCenter"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="单位:">
            <el-select
              v-model="unitId"
              size="small"
              :loading="isSlectLoading"
              filterable
              placeholder="全部"
              @focus="changeUnits"
            >
              <el-option
                v-for="item in units"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="服务模式:">
            <el-select v-model="serverModel" size="small" filterable placeholder="全部">
              <el-option
                v-for="item in ServiceModelList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态:">
            <el-select v-model="status" size="small" filterable placeholder="全部">
              <el-option
                v-for="item in stateList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="t-right" style="width:20%;">
            <el-button type="primary" @click="handleFind(orgCode, unitId, serverModel, status)">查询</el-button>
            <el-button @click="reSet">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!--列表-->
      <el-row class="body">
        <div class="userNotab">
          <el-table ref="table" :data="table" stripe style="width: 100%;padding:0">
            <el-table-column
              label="单位"
              :show-overflow-tooltip="true"
              prop="unitName"
              align="center"
              min-width="13%"
            ></el-table-column>
            <el-table-column
              label="所属运营中心"
              :show-overflow-tooltip="true"
              prop="orgName"
              align="center"
              min-width="13%"
            ></el-table-column>
            <el-table-column
              label="楼栋"
              :show-overflow-tooltip="true"
              prop="buildCount"
              align="center"
              min-width="6%"
            ></el-table-column>
            <el-table-column
              label="楼层"
              :show-overflow-tooltip="true"
              prop="floorCount"
              align="center"
              min-width="6%"
            ></el-table-column>
            <el-table-column
              label="设备"
              :show-overflow-tooltip="true"
              prop="deviceCount"
              align="center"
              min-width="6%"
            ></el-table-column>
            <el-table-column
              label="视频"
              :show-overflow-tooltip="true"
              prop="videoCount"
              align="center"
              min-width="6%"
            ></el-table-column>
            <el-table-column
              label="消控室"
              :show-overflow-tooltip="true"
              prop="firecontrolroomCount"
              align="center"
              min-width="7%"
            ></el-table-column>
            <el-table-column
              label="消控人员"
              :show-overflow-tooltip="true"
              prop="fcroomperCount"
              align="center"
              min-width="8%"
            ></el-table-column>
            <el-table-column
              label="蓝牙"
              :show-overflow-tooltip="true"
              prop="bluetoothCount"
              align="center"
              min-width="6%"
            ></el-table-column>
            <el-table-column
              label="重点部位"
              :show-overflow-tooltip="true"
              prop="keyportCount"
              align="center"
              min-width="8%"
            ></el-table-column>
            <el-table-column
              label="商户"
              :show-overflow-tooltip="true"
              prop="locationCount"
              align="center"
              min-width="6%"
            ></el-table-column>
            <el-table-column
              label="操作"
              :show-overflow-tooltip="true"
              align="center"
              min-width="16%"
            >
              <template slot-scope="scope">
                <el-button
                  type="text"
                  class
                  @click="toDetail(scope.$index, scope.row,scope.row.unitId)"
                >查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
          <Pagination
            :widgetInfo="widgetInfo"
            v-on:sonHandleCurrentChange="sonHandleCurrentChange"
          />
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
import api from "~/config/http";
import Mock from "mockjs";
import Title from "~/components/Title";
import Pagination from "~/components/Pagination";
// import qs from "qs";
import "~/assets/css/style.css";
import "~/assets/css/ggicon.css";
/* 本地数据开始 */

export default {
  components: {
    Title,
    Pagination
  },
  data() {
    return {
      isLoading: true,
      isSlectLoading: true,
      isShow: false, //对话框
      isFind: true, //查询
      orgCode: "", //运营中心
      operationCenter: [
        {
          label: "全部",
          value: ""
        }
      ], //所属运营中心列表
      unitId: "", //选中单位
      units: [
        {
          label: "全部",
          value: ""
        }
      ], //单位列表
      table: [],
      pageNo: 1,
      pageSize: 15,
      total: 0,
      widgetInfo: {
        pageSize: 10,
        pageNo: 1,
        total: 0
      },
      dialogFormVisible: false,
      plan: {},
      formLabelWidth: "140px",
      optTitle: null,
      inputDisabled: false,
      showSaveOrUpdate: false,
      optMode: null,
      serverModel: "",
      ServiceModelList: [
        {
          label: "全部",
          value: ""
        }
      ],
      status: "",
      stateList: [
        {
          value: "",
          label: "全部"
        },
        {
          value: "0",
          label: "在用"
        },
        {
          value: "1",
          label: "停用"
        },
        {
          value: "2",
          label: "删除"
        },
        {
          value: "9",
          label: "待启用"
        }
      ]
    };
  },
  mounted() {
    //所属运营中心
    this.findOrgListByRole();
    //this.findUnitByRole();
    //服务模式
    this.getServerModel();
  },
  methods: {
    getTableData(orgCode, unitId) {
      this.isLoading = true;
      api
        .post("/remoteApi/tool/record/recordList", {
          userId: api.getGlobalVal("userObj").id,
          roleName: api.getGlobalVal("userObj").userAuthList[0].authRoleList[0]
            .roleName,
          orgCode: this.orgCode,
          unitId: this.unitId,
          status: this.status,
          serverModel: this.serverModel,
          pageNo: this.widgetInfo.pageNo,
          pageSize: this.widgetInfo.pageSize
        })
        .then(res => {
          if (res && res.code === "success") {
            this.isLoading = false;
            this.table = res.data.rows;
            this.widgetInfo.total =
              res.data.total === null ? 0 : res.data.total;
          } else {
            this.table = [];
            this.widgetInfo.list = res.data;
            this.widgetInfo.total = 0;
            console.log("没有数值。。。。。");
          }
        });
    },
    //所属运营中心
    findOrgListByRole() {
      this.isLoading = true;
      api
        .post("/remoteApi/tool/org/findOrgListByRole", {
          userId: api.getGlobalVal("userObj").id,
          roleName: api.getGlobalVal("userObj").userAuthList[0].authRoleList[0]
            .roleName
        })
        .then(res => {
          if (res && res.code === "success") {
            var list = res.data;
            for (var key in list) {
              var temp = {};
              temp.value = list[key].orgCode;
              temp.label = list[key].orgName;
              this.operationCenter.push(temp);
            }
          } else {
            this.table = [];
            console.log("没有数值。。。。。");
          }
        })
        .catch(err => {
          console.log(err);
          this.isLoading = false;
        });
    },
    //联动单位
    changeoperationCenter() {
      this.isSlectLoading = true;
      this.units = [
        {
          label: "全部",
          value: ""
        }
      ];
      this.unitId = "";
      api
        .post("/remoteApi/tool/unit/findUnitByOrgCode", {
          orgCode: this.orgCode
        })
        .then(res => {
          if (res && res.code === "success") {
            this.isSlectLoading = false;
            var list = res.data;
            for (var key in list) {
              var temp = {};
              temp.value = list[key].unitId;
              temp.label = list[key].unitName;
              this.units.push(temp);
            }
          } else {
            this.units = [];
          }
        });
    },
    //默认全部单位
    findUnitByRole() {
      this.isSlectLoading = true;
      this.units = [
        {
          label: "全部",
          value: ""
        }
      ];
      api
        .post("/remoteApi/tool/unit/findUnitByRole", {
          userId: api.getGlobalVal("userObj").id,
          roleName: api.getGlobalVal("userObj").userAuthList[0].authRoleList[0]
            .roleName
        })
        .then(res => {
          if (res && res.code === "success") {
            this.isSlectLoading = false;
            var list = res.data;
            for (var key in list) {
              var temp = {};
              temp.value = list[key].unitId;
              temp.label = list[key].unitName;
              this.units.push(temp);
            }
          } else {
            this.units = [];
          }
        });
    },
    //查询
    handleFind(orgCode, unitId, serverModel, status) {
      this.isFind = !this.isFind;
      this.pageNo = 1;
      this.getTableData(orgCode, unitId, serverModel, status);
    },
    changeUnits() {
      if (this.orgCode == "") {
        this.findUnitByRole();
      }
    },
    //重置
    reSet() {
      this.isFind = !this.isFind;
      this.pageNo = 1;
      this.orgCode = "";
      this.unitId = "";
      this.serverModel = "";
      this.status = "";
      this.unitId = "";
      this.findUnitByRole();
      this.getTableData();
    },
    sonHandleCurrentChange(widgetInfo) {
      this.widgetInfo.pageSize = widgetInfo.pageSize
        ? parseInt(widgetInfo.pageSize)
        : this.widgetInfo.pageSize;
      this.widgetInfo.pageNo = widgetInfo.pageNo
        ? parseInt(widgetInfo.pageNo)
        : this.widgetInfo.pageNo;
      this.getTableData();
    },
    //审核跳转
    toMap(row, unitId, buildId) {
      this.$router.push({ name: "G2mapNew", params: { unitId: unitId } });
    },
    //查看
    look(index, row) {
      localStorage.setItem("routerFlag", "routerFlagTwo");
      this.$router.push({
        name: "PatrolPlan-addElectronic",
        params: {
          unitId: row.unitId,
          fileId: row.id,
          subCenterCode: row.orgCode,
          show: false
        }
      });
    },

    //查看详情
    toDetail(index, row, unitId) {
      row["limtShow"] = false;
      this._Storage.setObj("fileItem", "obj", row);
      this.$router.push({
        name: "PatrolPlan-editAll",
        params: {
          row: row
        }
      });
      this.$store.commit("updateZSCurrentBuild", "");
      localStorage.setItem("unitId", unitId);
      localStorage.setItem("routerFlag", "routerFlagTwo");
    },
    //服务模式
    getServerModel() {
      api.get("/remoteApi/tool/unit/getServerModel", {}).then(res => {
        if (res && res.code === "success") {
          var list = res.data;
          for (var key in list) {
            var temp = {};
            temp.value = list[key].id;
            temp.label = list[key].name;
            this.ServiceModelList.push(temp);
          }
        } else {
          console.log("失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/table.scss";

.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
  background: rgba(32, 160, 255, 0.5) !important;
}

.l-icons {
  font-size: 2rem;
  cursor: pointer;
  color: #2892e2;
}

.el-tooltip__popper.is-dark {
  max-width: 300px;
}
.dri-wrapper {
  text-overflow: ellipsis;
  overflow: hidden;
}

.main-top-header label {
  width: 80px;
}
.main-top-header {
  font-size: 14px;
}
/deep/.el-table {
  .el-table__body-wrapper {
    height: calc(100vh - 90px - 60px - 140px - 43px);
    overflow-y: auto;
  }
}
.userNotab > div:first-child {
  height: auto;
}
/deep/.expend-serch {
  text-align: left;
  font-size: 0;
  .el-form-item {
    width: 20%;
    margin-right: 0;
    font-size: 14px;
    label {
      width: 100px;
      text-align: right;
    }
    .el-form-item__content {
      width: calc(100% - 100px);
      .el-select {
        width: 100%;
      }
    }
  }
}
.t-right {
  text-align: right;
}
</style>

