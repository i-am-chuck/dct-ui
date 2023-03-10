<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

  body {
    margin: 0;
    background-image: url('@/assets/img/mesh-gradient.png');
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

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