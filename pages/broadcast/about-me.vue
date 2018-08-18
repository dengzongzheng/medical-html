<template>
  <div>
    <div class="header">
      <div class="header-image"></div>
      <div class="header-title">
        卫生监督第一线
      </div>
      <div class="header-line">
        <img src="../../assets/images/down-arrow.png" class="line-image"/>
      </div>
    </div>
    <div class="content">
      <div class="content-child-box">
        <div class="box-left">
          01
        </div>
        <div class="box-right">
          <div class="right-top">
            公共场所卫生
          </div>
          <div class="right-bottom">
            公共场所卫生监督保障、卫生评级、证书检查
          </div>
        </div>
      </div>
      <div class="content-child-box">
        <div class="box-left">
          02
        </div>
        <div class="box-right">
          <div class="right-top">
            学校卫生
          </div>
          <div class="right-bottom">
            公共场所卫生监督保障、卫生评级、证书检查
          </div>
        </div>
      </div>
      <div class="content-child-box">
        <div class="box-left">
          03
        </div>
        <div class="box-right">
          <div class="right-top">
            医疗机构
          </div>
          <div class="right-bottom">
            公共场所卫生监督保障、卫生评级、证书检查
          </div>
        </div>
      </div>
      <div class="content-child-box no-border-bottom">
        <div class="box-left">
          04
        </div>
        <div class="box-right">
          <div class="right-top">
            供水单位
          </div>
          <div class="right-bottom">
            公共场所卫生监督保障、卫生评级、证书检查
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

  .header{

  }

  .header-image {
    background-image: url("../../assets/images/jd.png");
    background-repeat: no-repeat;
    height: 362px;
    width:100%;
  }

  .header-title{
    font-size: 48px;
    font-family: PingFangSC-Semibold;
    color: rgba(255,176,60,1);
    line-height: 66px;
    text-align: center;
    padding-bottom: 20px;
  }

  .header-line {
    height: 30px;
    border-top: 1px solid rgba(224, 201, 201, 1);
    position: relative;
  }

  .line-image {
    position: absolute;
    top: -5px;
    left: 370px;
  }

  .content-child-box{
    padding: 40px 20px;
    border-bottom:1px solid rgba(255,176,60,1);;
  }

  .box-left{
    display: inline-block;
    width:100px;
    font-size:72px;
    font-family:PingFangSC-Semibold;
    color:rgba(190,182,182,1);
    line-height:100px;
  }

  .box-right{
    display: inline-block;
    padding-left: 20px;
  }

  .right-top{
    height:56px;
    font-size:40px;
    font-family:PingFangSC-Semibold;
    color:rgba(255,176,60,1);
    line-height:56px;

  }

  .right-bottom{
    font-size:28px;
    font-family:PingFangSC-Semibold;
    color:rgba(124,130,133,1);
    line-height:40px;
  }

  .no-border-bottom{
    border:none;
  }

</style>
