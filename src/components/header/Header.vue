<template>
  <div>
    <a-layout>
      <a-layout-header style="padding: 0">
        <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (toggle)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (toggle)" />
      </a-layout-header>
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts">
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';

export default {
  name: "Header",
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  methods: {
    toggle () {
      this.$emit('toggle')
    }
  }
}
</script>

<style scoped>

</style>
