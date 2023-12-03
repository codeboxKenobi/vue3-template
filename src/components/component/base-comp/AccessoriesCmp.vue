<template>
    <div class="accessories-wrapper">
        <div class="accessories">
            Аксесуары
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "~/src/sass/app.scss";

.accessories-wrapper {
    @include flex_col(flex-start, center);
    height: 100%;
    width: 100%;
    padding: 15px;
}

.accessories {
    @include flex_col(flex-start, center);
    height: 100%;
    width: 100%;
    border: $main-border;
    border-radius: $rounded-sm;
}
</style>