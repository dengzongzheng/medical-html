<template>
  <div>
    <ItemListNav :path="'common/item-list'" :page="pageNo" :maxPage="maxPage"></ItemListNav>
    <item v-for="item in itemData" :key="item.id" :item="item" ></item>
    <ItemListNav :path="'common/item-list'" :page="pageNo" :maxPage="maxPage"></ItemListNav>
  </div>
</template>

<script>

  import request from "~/services/xhr/xhr-axios"
  import Item from "~/components/item.vue"
  import ItemListNav from "~/components/item-list-nav.vue"

  export default{
    name: "itemList",
    components:{
      Item,
      ItemListNav
    },
    data(){
      return {
        pageSize:10,
        pageNo:1,
        maxPage:10,
        itemData:[]
      };
    },
    methods:{
      listLegal:function () {
        let that = this;
        request.get("/forService/listLegal",{
          params: {
            pageSize: that.pageSize,
            pageNo: that.pageNo
          }
        }).then(function (data) {

          if(data.data.code==="1"){
            that.itemData = data.data.data.data;
          }
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

</style>
