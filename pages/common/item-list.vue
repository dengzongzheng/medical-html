<template>
  <div>
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <item v-for="item in itemData" :key="item.id" :item="item" ></item>
    </div>
    <div class="loading-box">
      <mt-spinner v-if="isLoading" type="fading-circle"></mt-spinner>
    </div>
  </div>
</template>

<script>

  import request from "~/services/xhr/xhr-axios"
  import Item from "~/components/item.vue"
  import ItemListNav from "~/components/item-list-nav.vue"
  import { InfiniteScroll,Indicator } from 'mint-ui';

  export default{
    name: "itemList",
    components:{
      Item,
      ItemListNav,
      InfiniteScroll,
      Indicator
    },
    data(){
      return {
        pageSize:10,
        pageNo:1,
        maxPage:10,
        itemData:[],
        isLoading:true
      };
    },
    methods:{
      loadMore:function () {
        let that = this;
        that.isLoading = true;
        that.pageNo = that.pageNo+1;
        that.listLegal();

      },
      listLegal:function () {
        let that = this;
        request.get("/forService/listLegal",{
          params: {
            pageSize: that.pageSize,
            pageNo: that.pageNo
          }
        }).then(function (data) {

          if(data.data.code==="1"){
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
