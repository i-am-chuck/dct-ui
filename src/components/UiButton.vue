<script>
  // todo - https://storybook.js.org/docs/vue/get-started/setup
  export default {
    name: 'UiButton',
    props: {
      type: {
        type: String,
        default: 'plain'
      },
      label: String,
      iconName: String,
      iconPosition: {
        type: String,
        default: 'before'
      }
    },
    computed: {
      classes() {
        const type = 'type-'+this.type
        const iconPosition = this.iconName ? 'icon-position-'+this.iconPosition : ''
        return type + ' ' + iconPosition
      }
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
  <button class="button" :class="classes">
    <span v-if="iconName" class="button-icon material-symbols-outlined">{{ iconName }}</span>
    <span class="button-label">{{ label }}</span>
  </button>
</template>

<style scoped lang="scss">

  $bg-color: #6d5dac;

  .button {
    border: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: .7em 1.4em;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    transition: all .2s;
    &.type-plain {
      background-color: $bg-color;
      color: #ffffff;
    }
    &.type-subtle {
      background-color: rgba($bg-color, 15%);
      color: darken($bg-color, 10%);
    }
    &.type-border {
      background-color: transparent;
      color: darken($bg-color, 10%);
      box-shadow: inset 0 0 0 2px rgba($bg-color, 15%);
    }

    &-icon {
      $margin: .5em;
      font-size: 1em;
      font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 0;
      opacity: .5;
      .icon-position-before & {
        order: 1;
        margin-right: $margin;
      }
      .icon-position-after & {
        order: 2;
        margin-left: $margin;
      }
    }

    &-label {
      font-weight: 500;
      letter-spacing: .02em;
      .icon-position-before & {
        order: 2;
      }
      .icon-position-after & {
        order: 1;
      }
    }

    &:hover {
      &.type-plain {
        background-color: darken($bg-color, 10%);
      }
      &.type-subtle {
        background-color: rgba($bg-color, 25%);
      }
      &.type-border {
        background-color: rgba($bg-color, 15%);
      }
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