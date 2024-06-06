<template>
  <div class="h-screen">
    <Navbar class="fixed left-0 right-0 top-0 z-50 shadow-md" />
    <div class="container relative top-24 mx-auto mt-5">
      <div
        :class="showSidebar ? 'gap-10 md:grid-cols-5' : 'md:grid-cols-4'"
        class="grid grid-cols-1"
      >
        <div v-if="showSidebar" class="md:col-span-1">
          <SideBar />
        </div>
        <div class="md:col-span-4">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/local/Navbar.vue";
import SideBar from "../components/local/SideBar.vue";
export default {
  components: {
    Navbar,
    SideBar,
  },
  computed: {
    showSidebar() {
      return this.$route.meta.showSidebar ?? false;
    },
  },
};
</script>
