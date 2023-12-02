<template>
    <svg :class="['icon', className]" xmlns="http://www.w3.org/2000/svg">
      <use :xlink:href="srcSprite" xmlns:xlink="http://www.w3.org/1999/xlink" />
    </svg>
  </template>
  
  <script>
  export default {
    props: {
        iconName: { type: String, required: false, default: "" },
        nameSvg: { type: String, required: false, default: "" },
    },
    computed: {
      className() {
        return this.iconName ? `icon-${this.iconName}` : "";
      },
      srcSprite() {
        const defaultPath = "~/src/components/images/svg";
        // const manifest = JSON.parse(document.getElementById("mix-manifest")?.innerText ?? "{}");
        const name = "#icon-" + (this.iconName || this.nameSvg);
        return `${defaultPath}${name}`;
      },
    },
  };
  </script>
  