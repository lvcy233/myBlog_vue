<template>
  <div class="login-background">
    <Card class="login_card center">
      <Tabs value="name1">
        <TabPane label="登录" name="name1">
          <Input
            icon="md-person"
            v-model="signUpUsername"
            placeholder="用户名"
            style="width: 200px"
          />
          <Input
            icon="md-key"
            type="password"
            v-model="signUpPassword"
            placeholder="密码"
            style="width: 200px"
          />
          <Button type="primary" shape="circle" long @click="signUp"
            >登录</Button
          >
        </TabPane>
        <TabPane label="注册" name="name2">
          <Input
            icon="ios-happy"
            v-model="name"
            placeholder="昵称"
            style="width: 200px"
          />
          <Input
            icon="md-person"
            v-model="signInUsername"
            placeholder="用户名"
            style="width: 200px"
          />
          <Input
            icon="md-key"
            type="password"
            v-model="signInPassword"
            placeholder="密码"
            style="width: 200px"
          />
          <Button type="primary" shape="circle" long @click="signIn"
            >注册</Button
          >
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
        username: this.signInUsername,
        password: this.signInPassword,
        name: this.name
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
          this.GLOBAL.userId = res.data.data.id;
          this.$router.push({ path: "/" });
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
