<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li class="completed" v-for="item in list" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="fn(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState: mapStateList, mapActions: mapActionsList } =
  createNamespacedHelpers('user')
export default {
  data() {
    return {}
  },
  methods: {
    ...mapActionsList(['delList']),
    fn(id) {
      this.delList(id)
    }
  },
  computed: {
    ...mapStateList(['list'])
  }
}
</script>
