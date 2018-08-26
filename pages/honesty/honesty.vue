<template>
  <div class="box">
    <div class="selected-title">您是:</div>
    <select-place-box v-for="item in items" :key="item.value" :item="item"></select-place-box>
    <div class="button-box">
      <input type="button" class="next-button" v-on:click="toSubmitQuestion"  value="下一步" name=""/>
    </div>
  </div>
</template>
<script>
 import SelectPlaceBox from '~/components/select-place-box.vue'
 export default{
     name:"honesty",
     components:{
       SelectPlaceBox
     },
     data(){
         return {
             items:[
               {
                  name:"学校卫生",
                  value:"1",
                  icon:"school"
               },
               {
                 name:"公共场所",
                 value:"2",
                 icon:"public"
               },
               {
                 name:"医疗机构",
                 value:"3",
                 icon:"medical"
               },
               {
                 name:"供水单位",
                 value:"4",
                 icon:"water"
               }
             ]
         }
     },
     methods:{
        toSubmitQuestion:function () {
          console.log(this.SelectType);
          this.$router.push({ path: '/honesty/submit-check', params: { placeId: 123 }})
        }
     }
 }
</script>
<style>

  .box{
    padding: 0 42px;
  }
  .selected-title{
    padding-top: 20px;
    padding-left: 3px;
    height:66px;
    font-size:48px;
    font-family:PingFangSC-Light;
    font-weight:300;
    color:rgba(86,83,83,1);
    line-height:66px;
  }

  .button-box{
    padding-top: 30px;
    text-align: center;
    font-size: 20px;
  }

  .next-button {

    height: 100px;
    width: 400px;
    border:2px solid red;
    border-radius: 1px;
    background-color: red;
    color: white;
    font-size: 40px;
  }
</style>
