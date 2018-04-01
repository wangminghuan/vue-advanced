<template>
<div>
<p>当前count的值为：{{count}}</p>
<increase class="item"></increase>
<reduce class="item"></reduce>
<tenFold class="item"></tenFold>
</div>
</template>

<script>
import increase from "./Increase";
import reduce from "./Reduce";
import tenFold from "./tenFold";
export default {
  components:{
    increase,
    reduce,
    tenFold
  },
  data () {
    return {
    }
  },
  computed:{
     count:function(){
      //  必须通过计算属性，否则视图无法触发更新
       return this.$store.state.count
     } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item{
  margin-top:10px
}
</style>
