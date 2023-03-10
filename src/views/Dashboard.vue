<script>

  import UiButton from "@/components/UiButton.vue";

  export default {
    name: 'Dashboard',
    components: { UiButton }
  }
</script>

<template>
  <div id="dashboard">
    <UiButton label="Button"/>
  </div>
</template>

<style scoped lang="scss">

  #dashboard {
    height: 100vh;
    display: flex;
    align-content: center;
    justify-content: center;
  }
</style>