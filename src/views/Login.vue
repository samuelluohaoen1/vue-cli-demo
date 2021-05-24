<template>
  <div>
    <el-card class="box-card/ek-card">
      <el-form ref="loginForm" :model="form" :rules="rules" class="login-box" label-width="80px">
        <h2 class="login-title">Welcome, traveler!</h2>
        <el-form-item label="Username" prop="username">
          <el-input v-model="form.username" placeholder="Enter your username" type="text"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="form.password" placeholder="Enter your password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="onSubmit('loginForm')">Login</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-dialog :before-close="handleClose" :visible.sync="dialogVisible" title="Whoops!" width="30%">
      <span>Please enter a correct username and password</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">o k</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },

      rules: {
        username: [
          {required: true, message: "Username cannot be empty", trigger: "blur"}
        ],
        password: [
          {required: true, message: "Password cannot be empty", trigger: "blur"}
        ]
      },

      dialogVisible: false
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push("/user-management/" + this.form.username);
        } else {
          this.dialogVisible = true;
          return false;
        }
      });
    },
    handleClose: function () {
      console.log();
    }
  }
}
</script>

<style lang="scss" scoped>
.login-box {
  border: 1px solid #DCDFE6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}

.box-card {
  width: 480px;
  margin: auto;
}

</style>
