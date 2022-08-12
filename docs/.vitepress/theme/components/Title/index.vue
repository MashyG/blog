<template>
  <div>{{ title }}</div>
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
  props: {
    title: {
      type: String,
      default: 'title'
    }
  },
  setup(props) {
    return {
      ...props
    }
  }
}
</script>
