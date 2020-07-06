<template>
  <div class="home">
    <wrapper />
    <div class="leftDiv">
      <Card class="homeContentCard top70">
        <Row>
          <Col span="6" style="padding-right:10px">
            <Input v-model="title" placeholder="请输入文章名" />
          </Col>
          <Col span="6" style="padding-right:10px">
            <Select
              v-model="categories"
              filterable
              allow-create
              placeholder="请选择分类"
            >
              <Option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </Col>
          <Col span="6" style="padding-right:10px">
            <Select
              v-model="tags"
              filterable
              allow-create
              placeholder="请选择标签"
            >
              <Option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </Col>
          <Col span="6" style="padding-right:10px">
            <Button type="primary" @click="query">查询</Button>
          </Col>
        </Row>
        <Button type="text" class="marginTop10">写博客</Button>
        <Button type="text" class="marginTop10" @click="uploadModal = true"
          >上传博客</Button
        >
        <Table border :columns="columns" :data="tableData" class="marginTop10">
          <template slot-scope="{ row }" slot="name">
            <strong>{{ row.name }}</strong>
          </template>
          <template slot-scope="{ row, index }" slot="action">
            <Button
              type="primary"
              size="small"
              style="margin-right: 5px"
              @click="show(index)"
              >修改</Button
            >
            <Button type="error" size="small" @click="remove(index)"
              >删除</Button
            >
          </template>
        </Table>
      </Card>
    </div>
    <Modal
      v-model="uploadModal"
      title="上传博客"
      @on-ok="ok"
      @on-cancel="cancel"
    >
      <Select v-model="tags" filterable allow-create class="marginTop10">
        <Option
          v-for="item in cityList"
          :value="item.value"
          :key="item.value"
          >{{ item.label }}</Option
        >
      </Select>
      <Select v-model="tags" filterable allow-create class="marginTop10">
        <Option
          v-for="item in cityList"
          :value="item.value"
          :key="item.value"
          >{{ item.label }}</Option
        >
      </Select>
      <Upload
        ref="upload"
        :data="uploadData"
        :before-upload="handleUpload"
        action="/Blog/blog/uploadBlog"
      >
        <Button icon="ios-cloud-upload-outline"
          >Select the file to upload</Button
        >
      </Upload>
    </Modal>
  </div>
</template>
<script>
import wrapper from "@/components/Wrapper.vue";
import blogApi from "@/axios/api/blogApi.js";

export default {
  name: "personCenter",
  components: {
    wrapper
  },
  data() {
    return {
      title: "",
      categories: "",
      tags: "",
      uploadModal: false,
      file: null,
      uploadData: null,
      cityList: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        },
        {
          value: "Sydney",
          label: "Sydney"
        },
        {
          value: "Ottawa",
          label: "Ottawa"
        },
        {
          value: "Paris",
          label: "Paris"
        },
        {
          value: "Canberra",
          label: "Canberra"
        }
      ],
      columns: [
        {
          title: "文章名",
          key: "title"
        },
        {
          title: "分类",
          key: "categories"
        },
        {
          title: "标签",
          key: "tags"
        },
        {
          title: "创建时间",
          key: "create_time"
        },
        {
          title: "修改时间",
          key: "edit_time"
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      tableData: []
    };
  },
  methods: {
    handleUpload(file) {
      this.file = file;
      this.uploadData = { UserInfoId: this.GLOBAL.userId };
      return false;
    },
    ok() {
      this.$refs.upload.post(this.file);
    },
    cancel() {},
    query() {
      blogApi.getAll().then(res => {
        this.tableData = res.data;
      });
    }
  },
  mounted() {
    this.query();
  }
};
</script>
<style scoped>
@import "../static/css/Home.css";

.leftDiv {
  top: 70px;
  width: 80%;
  height: 100%;
}
</style>
