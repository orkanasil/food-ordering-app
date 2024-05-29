<template>
    <div>
        {{ basketList }}
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(['basketList']),
    }
}
</script>

<style scoped></style>