<template>
  <button
    @click="handleClick"
    :class="[
      // 主要是控制class来控制显示不同的按钮样式
      type ? 'ice-button--' + type : '',
      'button_init',
      size
    ]"
  >
    <!-- //使用插槽 -->
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  // 使用prop自定义属性
  props: {
    // type来定义button的类型
    type: {
      type: String,
      default: 'normal'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  computed: {},
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
