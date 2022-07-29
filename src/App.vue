<template>
  <div>
    <button @click="changeColor">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
    <Button circle size="mini" type="normal">mini</Button>
    <Button circle size="small" type="default">small</Button>
    <Button circle size="normal" type="error">normal</Button>
    <Button circle size="rather" type="success">rather</Button>
    <Button circle size="big" type="warning">big</Button>
  </div>
</template>

<script>
import { Button } from '@/components/index'
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('color')
export default {
  data() {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
    Button
  },

  created() {},

  methods: {
    ...mapActions(['changecolor']),
    changeColor() {
      const color = '#' + Math.random().toString(16).slice(2, 8)
      this.changecolor(color)
    }
  }
}
</script>

<style scoped></style>
