<template>
  <div class="flex h-screen flex-col">
    <Navbar class="fixed left-0 right-0 top-0 z-50 shadow-md" />
    <div class="flex flex-grow items-center justify-center">
      <div class="container relative top-36 mx-auto mb-auto">
        <div
          :class="showSidebar ? 'gap-10 lg:grid-cols-5' : 'lg:grid-cols-6'"
          class="grid grid-cols-1"
        >
          <div v-if="showSidebar" class="lg:col-span-1">
            <SideBar />
          </div>
          <div :class="showSidebar ? 'lg:col-span-4' : 'lg:col-span-6'">
            <RouterView />
          </div>
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
