import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
// 
const vuexStore = new Vuex.Store({
    state:{
        count:0
       //所有组件共享的状态，一旦改变所有视图都会更新
       //只能在mutations中改变states
    },
    getters:{
        // 可以看作计算属性
        tenFold: function(state){
            return state.count*10
          }
    },
    actions:{
        incrementAsync (context,payload) {
            context.commit('increment',payload)
        },
        callback(context){
            setTimeout(()=>{
                context.commit('reduce')
            },2000)
        }
        
    },
    mutations:{
        // 一条重要的原则就是要记住 mutation 必须是同步函数
        // 修改状态，所有的state状态都必须通过mutations下的方法来改变
        increment (state,payload) {
            state.count+=payload.amount;
        },
        reduce(state) {
            state.count--
        },
        callback(state){
            setTimeout(()=>{
                state.count--
            },2000)
        }
    },
    // this.$store.state.a // -> moduleA 的状态
    // this.$store.state.b // -> moduleB 的状态
    // modules: {
    //     a: moduleA,
    //     b: moduleB
    //   }   
})
export default vuexStore;
// 关于 action 和 mutations
// 尤雨溪的回答https://www.zhihu.com/question/48759748
// 区分 actions 和 mutations 并不是为了解决竞态问题，而是为了能用 devtools 追踪状态变化。

// https://zhuanlan.zhihu.com/p/24357762 可以通过这篇文章粗暴的认为
// mutation 只管存，你给我（dispatch）我就存；action只管中间处理，处理完我就给你，你怎么存我不管；Getter 我只管取，我不改的。