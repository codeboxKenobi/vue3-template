<template>
    <button class="button" :type="buttonType" @click="handler">
        {{ title }}
    </button>
</template>

<script>
    export default {
        props: {
            title: { type: String, default: "" },
            buttonType: { type: String, default: "button" }
        },

        methods: {
            handler() {
                this.$emit("handler")
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "~/src/sass/app.scss";

.button {
    @include flex-row(center, center);
        outline: none;
        height: 30px;
        font-size: 12px;
        font-family: $main-font;
        color: $text-color;
        border: $main-border;
        margin: $button-margin;
        padding-left: $input-padding;
        padding-right: $input-padding;
        border-radius: $rounded-sm;
        cursor: pointer;

        &:hover {
            color: $link-color;
            background-color: $button-bg-hover;
        }

        &:active {
            border: $main-border;
            background-color: $button-bg-active;
        }
}

</style>