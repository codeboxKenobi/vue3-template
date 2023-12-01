<template>
    <div class="head" :class="[backdrop ? 'backdrop' : '']">
        <span class="head-text">
            {{ title }}
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            title: { type: String, default: "" },
            backdrop: { type: Boolean, default: false },
        }
    }
</script>

<style lang="scss" scoped>
@import "~/src/sass/app.scss";

.head {
    @include flex-col(flex-start, flex-start);
    width: 100%;
    padding: 10px;
    margin: 5px;

    &-text {
        font-family: $main-font;
        font-size: 18px;
        color: $text-color;
        font-weight: bold;
    }
}

.backdrop {
    width: auto;
    margin: 5px;
    background-color: $backdrop;
    border-radius: $rounded-sm;
}
</style>