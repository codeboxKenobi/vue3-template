<template>
    <div class="device-wrapper">
        <div class="device">
            Устройства
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "~/src/sass/app.scss";

.device-wrapper {
    @include flex_col(flex-start, center);
    height: 100%;
    width: 100%;
    padding: 15px;
}

.device {
    @include flex_col(flex-start, center);
    height: 100%;
    width: 100%;
    border: $main-border;
    border-radius: $rounded-sm;
}
</style>