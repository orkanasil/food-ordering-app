<template>
    <div>
        pizza detail: {{ selectedPizza }}
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    mounted() {
        // object destructing
        const { params } = this.$route;
        this.getPizzaById(params.id);
    },
    methods: {
        ...mapActions(['getPizzaById'])
    },
    computed: {
        ...mapGetters(['selectedPizza'])
    }
}
</script>

<style lang="scss" scoped></style>