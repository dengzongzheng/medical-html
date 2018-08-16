<template>
  <div class="item-list-box">
    <item-header :nav_image="nav_image" :nav_title="nav_title" :nav_text="nav_text"
                   :nav_type="nav_type"></item-header>
    <div class="item-list-title">消息</div>
    <item v-for="item in legalItems" :key="item.id" :item="item" ></item>
    <router-link :to="'/common/item-list'">
      <div class="all-item">
        <div class="all-text">全部</div>
        <div class="all-img"><img src="../../assets/images/left-arrow.png"></div>
      </div>
    </router-link>
  </div>
</template>
<script>
  import Item from "~/components/item.vue"
  import ItemHeader  from "~/components/item-header.vue"
  import request from "~/services/xhr/xhr-axios"
  import { rootPath} from '~/services/xhr/config'

  export default{
    name: "legal",
//    async asyncData({ params }) {
//      // We can use async/await ES6 feature
//      const { data } = await request.get('/forService/legalDetails',{
//         params:{
//           medicalLegalNo: "ML1807753428"
//         }
//      });
//      console.log(data);
//      return { post: data.data }
//    },
    components: {
      Item,
      ItemHeader
    },
    metaInfo: {
      titleTemplate: '中国卫生监督 - %s',
      title: 'About Us'
    },
    methods:{
      listLegal:function () {
        let that = this;
        request.get("/forService/listLegal",{
          params: {
            pageSize: 3,
            pageNo:1
          }
        }).then(function (data) {

          if(data.data.code==="1"){

            that.legalItems = data.data.data.data;
          }
        })
      }
    },
    created:function () {
      this.listLegal();
    },
    computed: {

    },
    data(){
      return {
        nav_image: rootPath+"/img/legal-logo.png",
        nav_title: "法律法规大全",
        nav_text: "为您提供全面的法律法规，条例释义，您身边的法律助手，随时随地为您提供法律知识，欢迎使用。",
        nav_type: "legal",
        legalItems: []
      };
    },
    transition: {
      name: 'page',
      mode: 'out-in'
    }
  };
</script>

<style>
  .item-list-box{
    padding: 0;
    margin: 0;
    background-color: #EFEEF4;
  }
  .item-list-title{
    background-color: white;
    margin-top: 20px;
    padding: 10px 10px;
    border-bottom: solid 1px #F1F1F1;
    font-size: 20px;
  }

  .all-item{
    background: white;
    padding: 10px 10px;
    height: 38px;
    color: black;
    margin-bottom: 10px;
  }

  .all-text{
    float: left;
    font-size: 20px;
  }

  .all-img img {
    width: 11px;
    height: 21px;
    display: inline-block;
    float: right;
  }

  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
