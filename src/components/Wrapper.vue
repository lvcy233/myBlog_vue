<template>
  <div class="wrapper">
    <div class="leftDiv">
      <a href="/">首页</a>
      <a href="">关注</a>
    </div>
    <div class="rightDiv">
      <Button size="large" type="dashed" @click="login" v-show="!this.isLogin">
        登录</Button
      >
      <Dropdown v-show="this.isLogin" @on-click="goTo">
        <a href="javascript:void(0)">
          <img class="circleImg" src="@/assets/Head.jpg" />
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem name="MyBlog">
            <Icon type="md-browsers" />&nbsp;我的博客
          </DropdownItem>
          <DropdownItem name="PersonCenter">
            <Icon type="md-contact" />&nbsp;个人中心
          </DropdownItem>
          <DropdownItem name="456">
            <Icon type="md-settings" />&nbsp;设置
          </DropdownItem>
          <DropdownItem name="789">
            <Icon type="md-power" />&nbsp;退出
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: "wrapper",
  data: function() {
    return {
      isLogin: this.GLOBAL.userStatus
    };
  },
  methods: {
    goTo(value) {
      this.$router.push({ path: "/" + value });
    },
    login() {
      this.$router.push({ path: "/Login" });
    }
  },
  mounted() {}
};
</script>
<style scoped lang="stylus">
a {
  padding: 0px 20px;
  font-size: 24px;
  line-height: 60px;
}
.wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 0px 5px #333;
  z-index:99999;
}
.leftDiv{
  float: left;
}
.leftDiv>span{
  color: #fff;
  font-size: 24px;
  padding: 20px;
}
.rightDiv {
  float: right;
  margin-right:20px;
}
.rightDiv>Button{
  margin-top:10px
}
.wBotton {
  font-size: 24px;
}
.circleImg{
  border-radius: 20px;
  width: 40px;
  height: 40px;
}
</style>
