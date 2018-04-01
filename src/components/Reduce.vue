<template>
<div>
    <button @click="handleClick">减少</button>
    <button @click="handleAsync">减少异步</button>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
      handleClick(){
         this.$store.commit('reduce')
        //  callback
      },
      handleAsync(){
        //    this.$store.commit('callback')
        // 此时通过devtools可以看到，点击的时候，callback方法立即被执行，但是视频并没有更新，2s后才更新
        
           this.$store.dispatch('callback')
        // 此时通过devtools可以看到，点击的时候，callback方法没有被立即执行，2s后执行并伴随着视图的更新
      }
  }
}
</script>
