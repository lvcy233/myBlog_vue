<template>
  <div class="login-background">
    <Card class="login_card center">
      <Tabs value="name1">
        <TabPane label="登录" name="name1">
          <Input icon="md-person" v-model="signUpUsername" placeholder="用户名" />
          <Input
            class="marginTop10"
            icon="md-key"
            type="password"
            v-model="signUpPassword"
            placeholder="密码"
          />
          <Button type="primary" shape="circle" long @click="signUp" class="marginTop10">登录</Button>
        </TabPane>
        <TabPane label="注册" name="name2">
          <Input icon="ios-happy" v-model="name" placeholder="昵称" />
          <Input class="marginTop10" icon="md-person" v-model="signInUsername" placeholder="用户名" />
          <Input
            class="marginTop10"
            icon="md-key"
            type="password"
            v-model="signInPassword"
            placeholder="密码"
          />
          <Button type="primary" shape="circle" long @click="signIn" class="marginTop10">注册</Button>
        </TabPane>
      </Tabs>
    </Card>
  </div>
</template>
<script>
import userApi from "@/axios/api/userApi.js";

export default {
  name: "login",
  data: function() {
    return {
      isLogin: this.GLOBAL.userStatus,
      signInUsername: "",
      signInPassword: "",
      signUpUsername: "",
      signUpPassword: "",
      name: ""
    };
  },
  methods: {
    signIn() {
      var params = {
        "username": this.signInUsername,
        "password": this.signInPassword,
        "name": this.name
      };
      userApi.signIn(params).then(res => {
        if (res.data.code == 200) {
          this.$Message.success(res.data.msg);
        } else {
          this.$Message.error(res.data.msg);
        }
      });
    },
    signUp() {
      var params = {
        username: this.signUpUsername,
        password: this.signUpPassword
      };
      userApi.signUp(params).then(res => {
        if (res.data.code == 200) {
          this.GLOBAL.userStatus = true;
          this.GLOBAL.userId = res.data.data.data.userId;
          this.$router.push({ path: "/" });
          localStorage.setItem("token",res.data.data.token)
        } else {
          this.$Message.error(res.msg);
        }
      });
    }
  }
};
</script>
<style scoped>
.login_card {
  width: 300px;
  height: 300px;
  margin-top: 10%;
  text-align: center;
}
</style>
