<template>
  <aside class="h-100 px-10 py-5 text-xl shadow-2xl">
    <ul>
      <li
        v-for="(element, index) in sideList"
        :key="index"
        @click="filterPizza(element.value)"
        class="py-5 pl-5"
        :class="[getActiveKey === element.value ? 'bg-orange-500' : '']"
      >
        <a href="#">{{ element.title }}</a>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getActiveKey"]),
    sideList() {
      return [
        {
          title: "All",
          value: "all",
        },
        {
          title: "Meaty",
          value: "meaty",
        },
        {
          title: "Vegetarian",
          value: "vegetarian",
        },
      ];
    },
  },
  methods: {
    ...mapActions(["filterPizza"]),
  },
};
</script>

<style lang="scss" scoped></style>
