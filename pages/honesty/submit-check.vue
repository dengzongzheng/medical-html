<template>
  <div>

    <div class="check-box">
      <select-range v-for="item in ranges" :key="item.value"></select-range>
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
  import SelectRange from "~/components/select-range-type-box.vue"
  export default{
      name:"submit-check",
      components:{
        SelectRange
      },
    data(){
      return {
          ranges:[
            {
                name:"公共场所",
                value:"1",
                rangeItems:[
                  {
                      name:"住宿业",
                      value:"1",
                      className:"hotel-i"
                  },
                  {
                    name:"理发店",
                    value:"2",
                    className:"hotel-i"
                  },
                  {
                    name:"美容店",
                    value:"3",
                    className:"hotel-i"
                  },
                  {
                    name:"公共浴室",
                    value:"1",
                    className:"hotel-i"
                  },
                  {
                    name:"商场",
                    value:"1",
                    className:"hotel-i"
                  },
                  {
                    name:"经营者",
                    value:"1",
                    className:"hotel-i"
                  }
                ]
            },
            {
              name:"学校卫生",
              value:"2",
              rangeItems:[

              ]
            },
            {
              name:"医疗机构",
              value:"3",
              rangeItems:[
                {
                  name:"传染病防控",
                  value:"1",
                  className:"hotel-i"
                },
                {
                  name:"放射卫生",
                  value:"2",
                  className:"hotel-i"
                },
                {
                  name:"依法执业",
                  value:"3",
                  className:"hotel-i"
                }
              ]
            },
            {
              name:"供水单位",
              value:"4",
              rangeItems:[

              ]
            }
          ]
      };
    }
  }
</script>
<style>
  .check-box{
    padding: 2px 2px;
  }

  .line{
    clear: both;
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
    height: 40px;
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
