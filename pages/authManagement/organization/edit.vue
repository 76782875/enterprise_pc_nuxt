<template>
  <div id="userEdit">
    <el-form ref="form" :rules="rules" :model="form" size="mini" status-icon label-width="80px">
      <nuxt-link to="/authManagement/organization/list"><i class="el-icon-back"></i></nuxt-link>
      <el-form-item label="用户名" prop="loginName">
        <el-input clearable  style="max-width:300px;" disabled type="text"  v-model.trim="form.loginName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input clearable  style="max-width:300px;" type="password"  v-model.trim="form.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input clearable  style="max-width:300px;" type="password"  v-model.trim="form.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="userName">
        <el-input clearable  style="max-width:300px;" type="text"  v-model.trim="form.userName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item  prop="userSex" label="性别">
        <el-radio-group  v-model.trim="form.userSex">
          <el-radio class="radio" :label="1">男</el-radio>
          <el-radio class="radio" :label="0">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item prop="userPhone" label="移动电话">
        <el-input clearable  style="max-width:300px;"  v-model.trim="form.userPhone"></el-input>
      </el-form-item>
      <el-form-item prop="userEmail" label="邮箱">
        <el-input clearable  style="max-width:300px;" type="text" auto-complete="off"  v-model.trim="form.userEmail"></el-input>
      </el-form-item>

      <el-form-item prop="userType" label="用户类型">
        <el-select  v-model.trim="form.userType" placeholder="请选择用户类型">
          <el-option label="超级管理员" value="0"></el-option>
          <el-option label="管理员" value="1"></el-option>
          <el-option label="普通用户" value="2"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item prop="" label="上传头像">
         <el-upload class="avatar-uploader" action="" :show-file-list="false" :on-success="handleAvatarSuccess"
         :on-error="handleAvatarError"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div class="el-upload__tip" v-show="errTip" style="color:red">{{msg}}</div>
      </el-form-item>
     
      <el-form-item class="sub">
        <el-button type="primary" @click="onSubmit('form')">确定</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import api from '~/config/http';
  export default {
    data() {
      let validateUsername = (rule, value, callback) => {
        let userReg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
        if (!value) {
          callback(new Error('用户名不能为空'));
        } else if (!userReg.test(value)) {
          callback(new Error('用户名应为以字母开头，长度在6~18的字母、数字和下划线'));
        } else {
          callback();
        }
      };
      let validatePass = (rule, value, callback) => {
        let passReg=/^[a-zA-Z]\w{5,17}$/;
        if (!value) {
          callback(new Error('请输入密码'));
        } else if (!passReg.test(value)) {
          callback(new Error('密码应为以字母开头，长度在6~18的字母、数字和下划线'));
        }else{
          if (this.form.checkPass !== '') {
            this.$refs.form.validateField('checkPass');
          }
          callback();
        }
      };
      let validatePassCheck = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      let validateEmail = (rule, value, callback) => {
        let emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        /* if (!value) {
          callback(new Error('邮箱不能为空'));
          //
        } else  */if (!emailReg.test(value) && value != "") {
          callback(new Error('邮箱格式错误'));
        } else {
          callback();
        }
      };
      let validateName = (rule,value,callback) => {
        let nameReg = /^[\u4E00-\u9FA5A-Za-z]+$/;
        if (!nameReg.test(value) && value != "") {
          callback(new Error('只能输入中文和英文'));
        } else {
          callback();
        }
        
      };
      let validatePhone = (rule,value,callback) => {
        let nameReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if (!nameReg.test(value) && value != "") {
          callback(new Error('手机号错误'));
        } else {
          callback();
        }
        
      }
      let validateUserType = (rule,value,callback) => {
        if (!value) {
          callback(new Error('请选择用户类型'));
        } else {
          callback();
        }
        
      }
      return {
        orgCode:1,
        form: {
          loginName: '',
          pass: '',
          checkPass: '',
          userName: '',
          userSex: 1,
          userEmail: '',
          userPhone: '',
          userType: '',
          userId:''
        },
        rules: {
          loginName: [{
            validator: validateUsername,
            trigger: 'blur',
            required: true
          }],
          pass: [{
            validator: validatePass,
            trigger: 'blur',
            required: true,
          }],
          checkPass: [{
            validator: validatePassCheck,
            trigger: 'blur',
            required: true,
          }],
          userEmail: [{
            validator: validateEmail,
            trigger: 'blur',
            required: false,
          }],
          userName:[{
            validator: validateName,
            trigger: 'blur',
          }],
          userPhone:[{
            validator: validatePhone,
            trigger: 'blur'
          }],
          userType:[{
            validator: validateUserType,
            required: true,
          }]
         
        },
        imageUrl: '',
        msg:'',
        errTip:''
      }
    },
    methods: {
      //查询详情/upmsUser/findUserById
      getDetail(params){
        api.post(api.ajaxUrl + 'upmsUser/findUserById',params).then(res => {
           if(res.data.code == "success"){
             this.form = res.data.data;
             this.form.userSex = this.form.userSex*1;
           }else{}
           
        }).catch(err=>{})
      },
      onSubmit(formName) {
         var that = this;
         this.$refs[formName].validate((valid) => {
          if (valid) {
            var params = {
              userId : this.form.userId,
              loginName	:this.form.loginName,
              password	:this.form.pass,
              userName	:this.form.userName,
              userSex	:this.form.userSex,
              userEmail	:this.form.userEmail,
              userPhone	:this.form.userPhone,
              userType	:this.form.userType,
              userPhoto	:this.imageUrl,
              tenantId :this.$route.params.orgObj.tenantId,
              orgCode:this.$route.params.orgObj.orgCode
            }
            //debugger
            api.post(api.ajaxUrl + '/upmsUser/updateUser',params).then(res => {
              let data = res.data;
              var pId = this.$route.params.rowObj.parentCode;
              if(data.code == 'success'){
                this.$message({
                  message: '修改成功',
                  type: 'success'
                });
                 that.$router.push({
                  "name":'authManagement-organization-list',
                  "params":{
                    "id":pId,
                    "tenantId":params.tenantId
                  }
                });
              }else{
                this.$message({
                  message: '修改失败',
                  type: 'error'
                });
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //上传头像
      //
      handleAvatarSuccess(res, file) {
        this.errTip = false;
        this.imageUrl = URL.createObjectURL(file.raw);
      },
       //上传头像失败
      handleAvatarError(err, file, fileList) {
        this.errTip = true;
        this.msg = '上传头像失败';
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
           this.errTip = true;
          this.msg = '上传头像图片只能是 JPG 格式!';
        }
        if (!isLt2M) {
           this.errTip = true;
          this.msg = '上传头像图片大小不能超过 2MB!';
        }
        return isJPG && isLt2M;
      }
    },
    mounted() {
      //信息回显
        //this.form = this.$route.params.orgObj;
        console.log(this.$route.params)
        if(JSON.stringify(this.$route.params) == "{}"){
          this.$router.push({"path":'/authManagement/organization/list'});
        }else{
          let params = {
            tenantId : this.$route.params.rowObj.tenantId,
            userId : this.$route.params.rowObj.userId
          }
          
          this.imageUrl = api.imgUrl + this.$route.params.rowObj.userPhoto;
          this.getDetail(params);
        }
     
    }
  }

</script>

 <style scoped lang="scss">
 @import url("~/assets/css/user.scss");
  //用户头像上传
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: 1px dashed #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 78px;
    height: 78px;
    line-height: 78px;
    text-align: center;
    border:1px solid #eee;
  }

  .avatar {
    width: 78px;
    height: 78px;
    display: block;
  }
 </style>