<template>
  <div class="home">
    <wrapper />
    <div class="leftDiv" style="width: 25%;height: 100%;">
      <Card class="homeContentCard">
        <img class="circleImg" src="@/assets/Head.jpg" />
        <h1>lvcy</h1>
        <h3>
          起初，神创造天地。地是空虚混沌，渊面黑暗；
          神的灵运行在水面上。神说：“要有光。”就有了光。
          神看光是好的，就把光暗分开了。
          神称光为昼，称暗为夜。有晚上，有早晨，这是头一日。
        </h3>
        <div class="item">
          <a href=""
            ><span><Icon type="md-albums"/></span
          ></a>
          <a href=""
            ><span><Icon type="ios-albums"/></span
          ></a>
          <a href=""
            ><span><Icon type="md-pricetags"/></span
          ></a>
        </div>
      </Card>
    </div>
    <div class="rightDiv" style=" width: 55%;">
      <Card class="homeContentCard"> </Card>
    </div>
  </div>
</template>
<script>
import wrapper from "@/components/Wrapper.vue";

export default {
  name: "MyBlog",
  components: {
    wrapper
  }
};
</script>
<style scoped>
.homeContentCard {
  top: 70px;
  height: 500px;
}
.circleImg {
  border-radius: 60px;
  width: 120px;
  height: 120px;
}
.item > a {
  border: 1px solid black;
}
</style>
