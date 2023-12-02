<template>
  <svg
    class="icon"
    style="width:44px; height:44px"
    viewBox="0 0 24 24"
  >
    <path :d="path" />
  </svg>
</template>
<script>
import icons from '../images/icons.json';

export default {
  name: 'AppIcon',

  props: {
    name: String,
  },

  computed: {
    path() {
      return icons[this.name];
    },
  },

};
</script>

<style lang="scss">
@import "~/src/sass/app.scss";

.icon {
  @include flex_row(center, center);
  height: 40px;
  width: 40px;
}
</style>