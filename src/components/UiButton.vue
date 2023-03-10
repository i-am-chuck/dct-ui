<script>
  // todo - https://storybook.js.org/docs/vue/get-started/setup
  export default {
    name: 'UiButton',
    props: {
      label: String
    },
    mounted() {
      const button = document.querySelector('button')
      button.addEventListener('click', function () {
        button.classList.add('active')
      })
      button.addEventListener('animationend', function () {
        button.classList.remove('active')
      })
    }
  }
</script>

<template>
  <button class="button">
    <span class="button-icon material-symbols-outlined">favorite</span>
    <span class="button-label">{{ label }}</span>
  </button>
</template>

<style scoped lang="scss">

  $bg-color: #6d5dac;

  .button {
    align-self: center;
    border: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: $bg-color;
    color: #ffffff;
    padding: .9em 1.6em;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: all .1s;

    &-icon {
      font-size: 1em;
      margin-right: .5em;
      font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 0;
      opacity: .5;
    }

    &-label {
      font-weight: 500;
      letter-spacing: .02em;
    }

    &:hover {
      background-color: darken($bg-color, 10%);
    }

    &.active {
      animation-name: active;
      animation-duration: .3s;
    }

    @keyframes active {
      0% { box-shadow: 0 0 0 0 rgba($bg-color, 20%) }
      100% { box-shadow: 0 0 0 35px rgba($bg-color, 0) }
    }
  }
</style>