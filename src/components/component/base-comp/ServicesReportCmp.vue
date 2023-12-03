<template>
    <div class="services-wrapper">
        <div class="services">
            Отчет по услугам
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "~/src/sass/app.scss";

.services-wrapper {
    @include flex_col(flex-start, center);
    height: 100%;
    width: 100%;
    padding: 15px;
}

.services {
    @include flex_col(flex-start, center);
    height: 100%;
    width: 100%;
    border: $main-border;
    border-radius: $rounded-sm;
}
</style>