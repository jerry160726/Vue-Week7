<template>
  <DashBoardNavbar></DashBoardNavbar>
  <router-view />
</template>

<script>
import DashBoardNavbar from '@/components/DashBoardNavbar.vue'
export default {
  components: {
    DashBoardNavbar
  }
}
</script>
