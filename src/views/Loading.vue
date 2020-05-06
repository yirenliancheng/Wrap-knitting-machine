<template>
  <div class="h-background">
    <p class="h-p">经编数字化车间远程运维权限验证界面</p>
    <div class="h-load">
      <div class="h-form">
        <p style="margin:20px 0 30px;font-size:1.5rem;color:white;">用户登录</p>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item
            label="用户名"
            prop="name"
            :rules="[
           {required:true,message:'用户名不能为空',trigger:'blur'},
           {required:'email',message:'请输入正确的邮箱',trigger:['blur','change']}
         ]"
          >
            <el-input
              prefix-icon="el-icon-s-custom"
              placeholder="请输入用户名@qq.com"
              v-model="formLabelAlign.name"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="密码"
            prop="password"
            :rules="[
           {required:true,message:'密码不能为空',trigger:'blur'}
         ]"
          >
            <el-input
              prefix-icon="el-icon-lock"
              placeholder="请输入密码"
              type="password"
              v-model="formLabelAlign.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-checkbox
            v-model="checked"
            style="display:block; margin-left:80px"
            @click="memory"
          >记住密码</el-checkbox>
          <el-button
            type="primary"
            plain
            style="margin-left:120px;margin-top:20px;"
            @click="reset"
          >重置</el-button>
          <el-button type="primary" plain style="margin-left:50px" @click="submit">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        // name: "761101850@qq.com",
        // password: "MESjb2020"
        name:"",
        password:""
      },
      checked: true
    };
  },
  methods: {
    submit() {
      if (
        this.formLabelAlign.name === "761101850@qq.com" &&
        this.formLabelAlign.password === "MESjb2020"
      ) {
        this.setCookie(this.formLabelAlign.name,this.formLabelAlign.password),
        this.$store.commit('loadturn');
        this.$router.push("/DataVisualization");
      } else {
        alert("请输入正确的用户名及密码");
      }
    },
    reset() {
      this.formLabelAlign.name = "";
      this.formLabelAlign.password = "";
    },
    memory() {
      if (this.checked == true) {
        console.log("checked");
        setCookie(this.formLabelAlign.name, this.formLabelAlign.password);
      } else {
        clearCookie();
      }
    },
    clearCookie() {
      this.setCookie("", "");
    },
    getCookie() {
      if (document.cookie.length > 0) {
        let arr = document.cookie.split(";");
        for (let i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("=");
          if (arr2[0] == "username") {
            // console.log("1");
            this.formLabelAlign.name = arr2[1];
          } else if(arr2[0] == "userpassword") {
            // console.log("2");
            this.formLabelAlign.password = arr2[1];
          }
        }
      }
    },
    setCookie(name, password) {
      let nowdate = new Date();
      let memorydate = 7; //保存的天数
      nowdate.setTime(nowdate.getTime() + 24 * 60 * 60 * 1000 * memorydate);
      window.document.cookie =
        "username=" + name + ";path=/;expires=" + nowdate.toTimeString();
      window.document.cookie =
        "userpassword=" +
        password +
        ";path=/;expires=" +
        nowdate.toTimeString();
    }
  },
  mounted() {
    if (this.checked) {
      this.getCookie();
      // console.log(this.formLabelAlign.name);
      // console.log(this.formLabelAlign.password);
      // this.setCookie(this.formLabelAlign.name, this.formLabelAlign.password);
    } else {
      this.clearCookie();
    }

  }
};
</script>

<style scoped>
.h-p {
  display: block;
  position: relative;
  top: 10%;
  margin-left: 2%;
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 4rem;
  letter-spacing: 0.2rem;
}

.h-background {
  background-color: aquamarine;
  background-image: url(../assets/预览图_千图网_编号33963078.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 1920px;
  height: 937px;
}
.h-load {
  width: 500px;
  height: 320px;
  border: solid 3px #00ff99;
  border-radius: 25px;
  box-shadow: 20px 20px 5px #888888;
  position: relative;
  left: 25%;
  top: 20%;
  background-color: rgba(0, 250, 154, 0.7);
}
.h-form {
  width: 400px;
  height: 300px;
  margin-left: 20px;
}
</style>