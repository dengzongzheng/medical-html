<template>
  <div>
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <mt-loadmore  :top-method="loadTop" ref="loadmore">
        <div v-if="haveData">
          <work-news-item v-for="item in itemData" :key="item.id" :itemData="item" ></work-news-item>
        </div>

        <div v-if="!haveData">
          <no-item></no-item>
        </div>
      </mt-loadmore>
    </div>
    <div class="loading-box">
      <mt-spinner v-if="isLoading" type="fading-circle"></mt-spinner>
    </div>
  </div>
</template>
<script>
  import request from "~/services/xhr/xhr-axios"
  import WorkNewsItem from "~/components/work-news-item.vue"
  import ItemListNav from "~/components/item-list-nav.vue"
  import { InfiniteScroll,Indicator,Loadmore } from 'mint-ui';
  import NoItem  from "~/components/no-item.vue"

  export default{
    name: "itemList",
    components:{
      WorkNewsItem,
      ItemListNav,
      NoItem,
      InfiniteScroll,
      Indicator,
      Loadmore
    },
    data(){
      return {
        pageSize:10,
        pageNo:1,
        maxPage:10,
        itemData:[],
        isLoading:true,
        loading:true,
        haveData:true
      };
    },
    methods:{
      loadMore:function () {
        let that = this;
        that.isLoading = true;
        that.pageNo = that.pageNo+1;
        that.listLegal();

      },
      loadTop:function () {

        let that = this;
        that.pageNo = 1;
        that.pageSize = 10;
        that.itemData = [];
        that.listLegal();
        this.$refs.loadmore.onTopLoaded();
      },
      listLegal:function () {
        let that = this;
        request.get("/broadcast/listWorkNews",{
          params: {
            pageSize: that.pageSize,
            pageNo: that.pageNo
          }
        }).then(function (data) {

          if(data.data.code==="1"){
            that.loading = data.data.data.totalPage<=that.pageNo;
            that.itemData = that.itemData.concat(data.data.data.data);
          }
          that.isLoading = false;
        })
      }
    },
    created:function () {
      this.pageNo = this.$route.params.pageNo>0?this.$route.params.pageNo:1;
      this.pageSize = this.$route.params.pageSize>0?this.$route.params.pageSize:10;
      this.listLegal();

    },
    computed:{

    }
  };
</script>
<style>
  .loading-box{
    text-align: center;
    margin: 0 auto;
    width: 14%;
  }
</style>
