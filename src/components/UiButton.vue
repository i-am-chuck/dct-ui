<script>
  export default {
    name: 'UiButton',
    props: {
      label: String
    }
  }
</script>

<template>
  <button>
    {{ label }}
  </button>
</template>

<style scoped lang="scss">

  $bg-color: #6d5dac;

  button {
    align-self: center;
    border: 0;
    background-color: $bg-color;
    color: #ffffff;
    padding: .9em 1.6em;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: .02em;
    cursor: pointer;
    transition: all .1s;

    &:hover {
      background-color: darken($bg-color, 10%);
    }

    &:active {
      box-shadow: 0 0 0 8px rgba($bg-color, 20%);
    }
  }
</style>