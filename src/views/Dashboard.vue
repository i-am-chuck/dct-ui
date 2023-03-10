<script>

  import UiButton from "@/components/UiButton.vue";

  export default {
    name: 'Dashboard',
    components: { UiButton }
  }
</script>

<template>
  <div class="dashboard">

    <div class="dashboard-element">
      <h4 class="dashboard-element-label">
        Button plain primary
      </h4>
      <UiButton type="plain" label="Button"/>
    </div>

    <div class="dashboard-element">
      <h4 class="dashboard-element-label">
        Button plain primary
      </h4>
      <UiButton type="plain" label="Button" icon-name="favorite"/>
    </div>

<!--    <div class="dashboard-element">
      <h4 class="dashboard-element-label">
        Button plain primary
      </h4>
      <UiButton type="plain" label="Button" icon-name="star" icon-position="after"/>
    </div>-->

    <div class="dashboard-element">
      <h4 class="dashboard-element-label">
        Button subtle primary
      </h4>
      <UiButton type="subtle" label="Button"/>
    </div>

    <div class="dashboard-element">
      <h4 class="dashboard-element-label">
        Button subtle primary
      </h4>
      <UiButton type="subtle" label="Button" icon-name="favorite"/>
    </div>

<!--    <div class="dashboard-element">
      <h4 class="dashboard-element-label">
        Button subtle primary
      </h4>
      <UiButton type="subtle" label="Button" icon-name="star" icon-position="after"/>
    </div>-->

    <div class="dashboard-element">
      <h4 class="dashboard-element-label">
        Button border primary
      </h4>
      <UiButton type="border" label="Button"/>
    </div>

    <div class="dashboard-element">
      <h4 class="dashboard-element-label">
        Button border primary
      </h4>
      <UiButton type="border" label="Button" icon-name="favorite"/>
    </div>

    <!--    <div class="dashboard-element">
          <h4 class="dashboard-element-label">
            Button border primary
          </h4>
          <UiButton type="border" label="Button" icon-name="star" icon-position="after"/>
        </div>-->
  </div>
</template>

<style scoped lang="scss">

  .dashboard {
    background-color: rgba(#ffffff, .7);
    align-self: center;
    display: inline-flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px 100px;
    border-radius: 30px;

    &-element {
      align-self: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 10px 0;

      &-label {
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 1em;
        opacity: .45;
      }
    }
  }
</style>