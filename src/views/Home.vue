<template>
  <div class="home">
    <wrapper />
    <div class="leftDiv" style="width: 55%">
      <Card class="top70">
        <div v-for="item in content" :key="item.id">
          <mavon-editor
            class="md"
            :value="item.content"
            :subfield="false"
            :defaultOpen="'preview'"
            :toolbarsFlag="false"
            :editable="false"
            :boxShadow="false"
            :ishljs="true"
          ></mavon-editor>
        </div>
      </Card>
    </div>
    <div class="rightDiv" style="width: 25%;">
      <div class="homeCard">
        <Card class="homeCard top70">
          <p slot="title">
            <Icon type="ios-albums" />
            Categories
          </p>
        </Card>
      </div>
      <div class="homeTags">
        <Card class="homeCard top70">
          <p slot="title">
            <Icon type="md-pricetags" />
            Tags
          </p>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import wrapper from "@/components/Wrapper.vue";
import blogApi from "@/axios/api/blogApi.js";

export default {
  name: "home",
  components: {
    wrapper
  },
  data: function() {
    return {
      content: ""
    };
  },
  methods: {},
  mounted() {
    blogApi.getBlogList().then(res => {
      this.content = res.data;
    });
  }
};
</script>
<style scoped>
@import "../static/css/Home.css";
.homeTags {
  padding: 10px 0px;
}
</style>
