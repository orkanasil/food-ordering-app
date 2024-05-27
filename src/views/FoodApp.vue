<template>
    <div class="h-screen">
        <Navbar class="fixed top-0 right-0 left-0 z-50 shadow-md" />
        <div class="container mx-auto mt-5 relative top-24">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-10">
                <div class="md:col-span-1">
                    <SideBar />
                </div>
                <div class="md:col-span-4 shadow-2xl">
                    <MainList class="container shadow-2xl" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from "../components/Navbar.vue"
import SideBar from "../components/SideBar.vue";
import MainList from "../components/MainList.vue";
import { mapGetters } from "vuex";
export default {
    components: {
        Navbar,
        SideBar,
        MainList
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['pizzaList'])
    },
    mounted() {
        this.$store.dispatch('loadPizzas')
    }

}
</script>

<style lang="scss" scoped></style>