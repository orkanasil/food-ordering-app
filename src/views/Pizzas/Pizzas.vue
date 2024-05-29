<template>
    <div class="container shadow-2xl">
        <List />
    </div>
</template>

<script>
import List from "./_components/List.vue";
import { mapGetters, mapActions } from "vuex";
export default {
    components: {
        List,
    },
    computed: {
        ...mapGetters(['pizzaList']),
    },
    methods: {
        ...mapActions(['loadPizzas']),
    },
    mounted() {
        this.loadPizzas();
    }
}
</script>

<style lang="scss" scoped></style>