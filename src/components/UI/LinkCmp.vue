<template>
    <span class="link" :class="[border ? 'border' : '']" @click="toGo">
        {{ title }}
    </span>
</template>

<script>
    export default {
        props: {
            title: { type: String, default: "" },
            link: { type: String, default: "" },
            border: { type: Boolean, default: true }
        },

        methods: {
            toGo() {
                this.$router.push(`${this.link}`)
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "~/src/sass/app.scss";

.border {
    border-bottom: $main-border;
}

.link {
    @include flex-row(center, center);
    outline: none;
    height: 30px;
    font-size: 12px;
    font-family: $main-font;
    color: $text-color;
    margin: $button-margin;
    padding-left: $input-padding;
    padding-right: $input-padding;
    cursor: pointer;

    &:hover {
        color: $link-color;
    }

    &:active {
        color: $link-color;
    }
}

</style>