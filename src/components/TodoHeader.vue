<template>
  <header class="header">
    <h1 :style="{ color: color }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      v-model="listname"
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="addLista(listname)"
    />
  </header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions: mapActionsList } = createNamespacedHelpers('user')
const { mapState: mapStateColor } = createNamespacedHelpers('color')
export default {
  data() {
    return {
      listname: ''
    }
  },
  methods: {
    // addList(liatname) {
    //   this.$store.dispatch('user/updateList', {
    //     name: liatname,
    //     done: false,
    //     id: this.lastListId++
    //   })
    // }
    ...mapActionsList(['addLista'])
  },
  computed: {
    ...mapStateColor(['color'])
  }
}
</script>
