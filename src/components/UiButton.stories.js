// Button.stories.js

import UiButton from './UiButton.vue';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'UiButton',
    component: UiButton
};

export const Primary = () => ({
    components: { UiButton },
    template: '<UiButton label="Button"/>',
});