<template>
<div class="vux-confirm">
    <div class="vux-x-dialog vux-x-dialog-absolute">
        <div class="weui-mask" v-show="isShow"></div> 
        <div class="weui-dialog" v-show="isShow">
            <div class="weui-dialog__hd">
            <strong class="weui-dialog__title">操作提示</strong>
            </div> 
            <div class="weui-dialog__bd">
                <p style="text-align: center;">{{title}}</p>
                </div> 
            <div class="weui-dialog__ft">
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click="close">取消</a> 
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="handleConfirm">确定</a>
            </div>
            </div>
    </div>
    </div>
</template>
<script>
export default {
    props:{
        value: Boolean,
        title: String
    },
  data(){
      return{
          isShow:false
      }
  },
  watch:{
      value(val) {
          //监听父级v-modle的值
        // console.log(val);
        this.isShow = val;
      },
      isShow(val) {
        this.$emit('input', val);
      }
  },
  methods:{
      close(){
         this.isShow=false;
      },
      handleConfirm(){
          console.log("确定")
          this.close()
      }
  }
}
</script>
<style lang="less">
.weui-mask{
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,.6);
}

.weui-dialog {
    position: fixed;
    z-index: 5000;
    width: 80%;
    max-width: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    text-align: center;
    border-radius: 3px;
    overflow: hidden
}

.weui-dialog__hd {
    padding: 1.3em 1.6em .5em
}

.weui-dialog__hd.with-no-content {
    padding: 1.7em 1.6em
}

.weui-dialog__title {
    font-weight: 400;
    font-size: 18px
}

.weui-dialog__bd {
    padding: 0 1.6em .8em;
    min-height: 40px;
    font-size: 15px;
    line-height: 1.3;
    word-wrap: break-word;
    word-break: break-all;
    color: #999
}

.weui-dialog__bd:first-child {
    padding: 2.7em 20px 1.7em;
    color: #353535
}

.weui-dialog__ft {
    position: relative;
    line-height: 48px;
    font-size: 18px;
    display: flex
}

.weui-dialog__ft:after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #d5d5d6;
    color: #d5d5d6;
    transform-origin: 0 0;
    transform: scaleY(.5)
}

.weui-dialog__btn {
    display: block;
    flex: 1;
    color: #3cc51f;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    position: relative
}

.weui-dialog__btn:active {
    background-color: #eee
}

.weui-dialog__btn:after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    bottom: 0;
    border-left: 1px solid #d5d5d6;
    color: #d5d5d6;
    transform-origin: 0 0;
    transform: scaleX(.5)
}

.weui-dialog__btn:first-child:after {
    display: none
}
</style>
