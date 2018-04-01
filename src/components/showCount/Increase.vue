<template>
<div>
    <button @click="handleClick">增加</button>
    <button @click="handleAsync">增加(action触发)</button>
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
        //   可以传参
        this.$store.commit('increment',{
            amount: 10
        })
        //   等同于
        // this.$store.commit({
        //     type: 'increment',
        //     amount: 10
        // })
      },
      handleAsync(){
        // action里面的方法通过dispath触发
          this.$store.dispatch('incrementAsync',{
            amount: 10
        })
          
      }
  }
}
</script>
