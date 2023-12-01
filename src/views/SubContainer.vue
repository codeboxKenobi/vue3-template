<template>
    <div class="sub_container">
        <header-cmp />
        <main-cmp />
    </div>
</template>

<script>
import HeaderCmp from '@/components/component/header/HeaderCmp.vue';
import MainCmp from '@/components/component/user/MainCmp.vue';
    export default {
        components: {
            HeaderCmp,
            MainCmp
        }
    }
</script>

<style lang="scss">
@import "~/src/sass/app.scss";

.sub_container {
    @include flex_col(flex-start, center);
    height: 100vh;
    width: 100vw;
}
</style>