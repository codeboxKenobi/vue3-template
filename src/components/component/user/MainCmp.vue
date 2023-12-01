<template>
    <div class="main">
        <sidebar-cmp />
        <content-cmp />
    </div>
</template>

<script>
import SidebarCmp from '@/components/component/sidebar/SidebarCmp.vue';
import ContentCmp from '@/components/component/content/ContentCmp.vue';
    export default {
        components: {
            SidebarCmp,
            ContentCmp
        }
    }
</script>

<style lang="scss" scoped>
@import "~/src/sass/app.scss";

.main {
    @include flex_row(space-between, center);
    height: calc(100% - 56px);
    width: 100%;
    background-color: $flatdrop;
}
</style>