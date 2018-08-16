<template>
  <div>
    <div class="content-title">{{detailData.title}}</div>
    <div class="content-sub">
      <div class="content-sub-left"><label class="label-title">时间:</label><span>{{detailData.createTime}}</span></div>
      <div class="content-sub-right"><label class="label-title">被浏览次数:</label><span>2019</span></div>
    </div>

    <div class="content-data" v-html="detailData.textData"></div>
  </div>
</template>

<script>

  import request from "~/services/xhr/xhr-axios"

  export default{
    name: "detail",
    data(){
      return {
        no:"",
        detailData:""
      };
    },
    methods:{
      getDetail:function () {
        let that = this;
        request.get("/forService/legalDetails",{
          params: {
            medicalLegalNo: that.no
          }
        }).then(function (data) {
          if(data.data.code==="1"){

            console.log(data.data);
            that.detailData = data.data.data;
          }
        })
      }
    },
    created:function () {
      this.no = this.$route.query.medicalLegalNo;
      console.log(this.no);
      this.getDetail();
    },
    computed: {

    }
//    middleware:'auth'
  };
</script>

<style>
  .content-title{
    text-align: center;
    padding: 30px 10px;
    font-size: 20px;
    font-weight: 400;
    border-bottom: solid 2px #F1F1F1;
  }

  .content-sub{
    padding: 10px 10px;
    text-align: center;
    font-size: 16px;
    border-bottom: solid 2px #F1F1F1;
  }

  .content-sub-right{
    display: inline-block;
  }

  .label-title{
    margin-right: 10px;
  }

  .content-sub-left{
    display: inline-block;
    padding-right: 10px;
  }

  .content-data{
    padding-top: 10px;
    overflow: hidden;
  }
</style>
