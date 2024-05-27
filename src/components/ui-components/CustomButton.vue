<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.add {
    background-color: #6DC5D1;
    display: flex;
    gap: 6px;
    padding: 8px 16px;
    margin-left: 4px;
    border-radius: 8px;
}

.icons {
    background-color: #6DC5D1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    padding: 2px;
}
</style>