<template>
    <div class="content">

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "~/src/sass/app.scss";

.content {
    @include flex_col(flex-start, center);
    height: 100%;
    width: calc(100% - 240px);
}
</style>