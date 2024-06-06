<template>
  <button
    :type="type"
    :class="{
      primary: variant === 'primary',
      secondary: variant === 'secondary',
      rounded: variant === 'rounded',
      link: variant === 'link',
      close: variant === 'close',
      delete: variant === 'delete',
    }"
    class="flex items-center justify-center"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },
    variant: {
      type: String,
      default: "primary",
      validator(value, props) {
        return [
          "primary",
          "secondary",
          "rounded",
          "link",
          "close",
          "delete",
        ].includes(value);
      },
    },
  },
};
</script>

<style scoped>
.primary {
  background-color: #6dc5d1;
  display: flex;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 8px;
}

.secondary {
  background-color: #f4f4f4;
  color: black;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 8px;
}

.link {
  color: black;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 8px;
}

.rounded {
  background-color: #c2d6d8;
  border-radius: 100%;
  padding: 2px;
}
.close {
  background-color: white;
  border: none;
}
.delete {
  background-color: rgb(252, 121, 121);
  padding: 16px;
  border-radius: 8px;
}
</style>
