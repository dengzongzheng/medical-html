<template>
  <div>
      <mt-button type="default" @click="message">default</mt-button>
      <mt-button type="primary" @click="addTodo">add</mt-button>
      <mt-button type="primary" @click="removeTodo">remove</mt-button>
      <mt-button type="primary" @click="addCounter">counter</mt-button>
      <mt-button type="primary" @click="decCounter">dec</mt-button>
      {{counter}}
      <li v-for="item in todos" :key="item.text">
          {{item.text}}
      </li>
  </div>
</template>
<script>
  import { Button,Toast } from 'mint-ui';
  import { mapMutations } from 'vuex';

  export default{
    name: "mint-ui",
    components:{
      Button,
      Toast
    },
    methods: {
      message: function () {
        Toast({
          message: '提示asdasdfasdfasdfsdfasdfasdfa',
          position: 'bottom',
          duration: 1000
        });
      },
      addTodo (e) {
        this.$store.commit('todos/add', this.count)
        this.count =  this.count+1;
        e.target.value = ''
      },
      removeTodo(){
        this.$store.commit('todos/remove',this.$store.state.todos.list[0])
      },
      addCounter(){
        this.$store.commit('increment', 1);
      },
      decCounter(){
          this.$store.commit('decrement');
      }
    },
    computed:{
      todos () { return this.$store.state.todos.list },
      counter(){
          return this.$store.state.counter;
      }
    },
    data(){
      return {
        count: 1
      };
    }
  };
</script>
<style>
</style>
