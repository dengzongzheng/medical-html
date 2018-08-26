<template>
  <div>

    <div class="check-box">
      <div class="check-type">
        <input type="radio" name="range-type" class="range-type"/>
        <i class="range-type-i hotel-i">住宿业</i>
      </div>
      <div class="check-type">
        <input type="radio" name="range-type" class="range-type"/>
        <i class="range-type-i hotel-i">住宿业</i>
      </div>
      <div class="check-type">
        <input type="radio" name="range-type" class="range-type"/>
        <i class="range-type-i hotel-i">住宿业</i>
      </div>
    </div>

    <div class="line"></div>

    <div class="check-question-box">
      <div class="check-self">自查表:</div>
      <div class="line"></div>
      <div class="question-table">
        <div class="question">
          1、《公共场所卫生许可证》是否在有效期内？<input type="text" class="answer" />
        </div>
        <div class="select-answer">
          A 是 B否
        </div>
      </div>
      <div class="question-table">
        <div class="question">
          1、《公共场所卫生许可证》是否在有效期内？<input type="text" class="answer" />
        </div>
        <div class="select-answer">
          A 是 B否
        </div>
      </div>
      <div class="question-table">
        <div class="question">
          1、《公共场所卫生许可证》是否在有效期内？<input type="text" class="answer" />
        </div>
        <div class="select-answer">
          A 是 B否
        </div>
      </div>
      <div class="question-table">
        <div class="question">
          1、《公共场所卫生许可证》是否在有效期内？<input type="text" class="answer" />
        </div>
        <div class="select-answer">
          A 是 B否
        </div>
      </div>
      <div class="question-table">
        <div class="question">
          1、《公共场所卫生许可证》是否在有效期内？<input type="text" class="answer" />
        </div>
        <div class="select-answer">
          A 是 B否
        </div>
      </div>
      <div class="question-table">
        <div class="question">
          1、《公共场所卫生许可证》是否在有效期内？<input type="text" class="answer" />
        </div>
        <div class="select-answer">
          A 是 B否
        </div>
      </div>
      <div class="question-table">
        <div class="question">
          1、《公共场所卫生许可证》是否在有效期内？<input type="text" class="answer" />
        </div>
        <div class="select-answer">
          A 是 B否
        </div>
      </div>
      <div class="question-table">
        <div class="question">
          1、《公共场所卫生许可证》是否在有效期内？<input type="text" class="answer" />
        </div>
        <div class="select-answer">
          A 是 B否
        </div>
      </div>
    </div>

    <div class="line"></div>

    <div class="check-image-box">
      <div class="check-self">自查图片上传：</div>
      <div class="line"></div>
      <div class="file-upload-box">
        <div class="preview-box">
          <img src="../../assets/images/demo.png"/>
        </div>
        <div class="upload-box">
          <img src="../../assets/images/upload-icon.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
      name:"submit-check"
  }
</script>
<style>
  .check-box{
    padding: 2px 2px;
  }

  .check-type{
    width:348px;
    height:144px;
    background:rgba(255,255,255,1);
    border:6px solid rgba(209,189,189,1);
    text-align: center;
    position: relative;
    display: inline-block;
    margin:1px 2px;
  }

  .range-type{
    width:346px;
    height:144px;
    opacity: 0;
    position: relative;
  }

  .hotel-i{
    background-size: 100px 84px;
    background: url("~/assets/images/hotle.png") no-repeat 40px 40px;
  }

  .range-type-i {
    font-style: normal;
    width:348px;
    padding-left: 30px;
    height:144px;
    font-size: 28px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(58, 24, 24, 1);
    line-height: 144px;
    top: 0;
    left: 0;
    position: absolute;
  }

  .line{
    margin-top: 10px;
    height: 2px;
    border-bottom: 2px solid #979797;
    width: 100%;
  }
  .check-self {
    font-size: 28px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    line-height: 40px;
    padding:22px 8px;
  }
  .question{
    height:62px;
    font-size:24px;
    font-family:Helvetica;
    color:rgba(0,0,0,1);
    line-height:28px;
    padding-top: 20px;
  }
  .question-table{
    padding:22px 8px;
  }
  .answer {
    display: inline-block;
    width: 100px;
    height: 30px;
    border:none;
    border-bottom:1px solid black;
  }

  .file-upload-box {
    padding-top: 20px;
    padding-left: 8px;
    line-height: 166px;
  }

  .preview-box{
    display: inline-block;
    float: left;
  }

  .preview-box img {

    width: 266px;
    height: 166px;
    border-radius: 6px;

  }

  .upload-box {
    width:224px;
    height:174px;
    background:rgba(251,247,247,1);
    border-radius:12px;
    border:2px solid rgba(240,217,217,1);
    display: inline-block;
    text-align: center;
    margin-left: 20px;
    position: relative;
  }

  .upload-box img {
    width: 108px;
    height: 108px;
    position: absolute;
    top: 30px;
    left: 60px;
  }
</style>
