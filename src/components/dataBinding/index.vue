<template>
 <section>
  <button @click="handleClick">点我open弹窗1</button>
  <button @click="handleClick2">点我open弹窗2</button>
  <!-- 通过sync修饰符进项双向绑定 -->
  <myDialog 
  title="我是自定义内容1"
  :visible.sync="dialogVisible"
  ></myDialog>
  <!-- 通过v-modle进行双向绑定 -->
  <myDialog2 
  title="我是自定义内容2"
  v-model="dialogVisible2"
  ></myDialog2>
 </section>
</template>
<script>
import myDialog from "./myDialog";
import myDialog2 from "./myDialog2";
export default {
    components:{
        myDialog,
        myDialog2
    },
  data(){
      return{
       dialogVisible:false,
       dialogVisible2:false,
      }
  },
  methods:{
      handleClick(){
          this.dialogVisible=true;
      },
      handleClick2(){
        //   console.log("dinji")
        this.dialogVisible2=true;
        // console.log(2,this.dialogVisible2)
      }
  }
}
</script>

<style lang="less">

</style>

