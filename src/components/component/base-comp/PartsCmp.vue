<template>
    <div class="parts-wrapper">
        <div class="parts">
            Запчасти
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "~/src/sass/app.scss";

.parts-wrapper {
    @include flex_col(flex-start, center);
    height: 100%;
    width: 100%;
    padding: 15px;
}

.parts {
    @include flex_col(flex-start, center);
    height: 100%;
    width: 100%;
    border: $main-border;
    border-radius: $rounded-sm;
}
</style>