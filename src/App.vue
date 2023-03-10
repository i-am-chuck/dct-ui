<template>
  <div id="app">

    <div class="sidebar">
      <h2 class="sidebar-title">Components</h2>
      <nav class="sidebar-nav">
        <li class="sidebar-nav-el" :class="{ 'active': index === 1 }" v-for="(i, index) in 10">
          Button
        </li>
      </nav>
    </div>

    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style scoped lang="scss">

  #app {
    display: flex;
    justify-content: center;
    min-height: 100vh;

    .sidebar {
      flex-shrink: 0;
      padding: 50px;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 50vw;
        height: 100%;
        background: linear-gradient(to right, white, transparent);
        z-index: -1;
      }

      &-title {
        margin: 0;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: .2em;
        opacity: .4;
      }

      &-nav {
        list-style: none;
        margin-top: 2.5em;
        font-size: 13px;

        &-el {
          margin-left: 1.25em;
          display: flex;
          align-items: center;
          &:not(:first-child) {
            margin-top: 1.25em;
          }
          &:not(.active) {
            opacity: .6;
          }
          &.active {
            color: $bg-color;
            font-weight: 500;
            &:before {
              content: '';
              width: 4px;
              height: 4px;
              background-color: $bg-color;
              border-radius: 100%;
              margin-right: .75em;
              opacity: .5;
            }
          }
        }
      }
    }

    .content {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>

<style lang="scss">

  body {
    margin: 0;
    background-image: url('@/assets/img/mesh-gradient.png');
    background-position: center;
    background-size: cover;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: white;
      z-index: -1;
      opacity: .45;
    }
  }
</style>