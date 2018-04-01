<template>
<div>
    <button @click="handleClick">获取count*10的值</button>
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
        alert(this.$store.getters.tenFold)
      }
  }
}
</script>
