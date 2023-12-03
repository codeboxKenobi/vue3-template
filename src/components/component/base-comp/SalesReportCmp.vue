<template>
    <div class="sales-report-wrapper">
        <div class="sales-report">
            Отчет по продажам
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "~/src/sass/app.scss";

.sales-report-wrapper {
    @include flex_col(flex-start, center);
    height: 100%;
    width: 100%;
    padding: 15px;
}

.sales-report {
    @include flex_col(flex-start, center);
    height: 100%;
    width: 100%;
    border: $main-border;
    border-radius: $rounded-sm;
}
</style>