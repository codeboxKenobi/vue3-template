<template>
    <div class="content">
        <div class="head-top"></div>
        <work-area>
            <template #work-area>
                <router-view />
            
            </template> 
        </work-area>
        <div class="footer"></div>
    </div>
</template>

<script>
import WorkArea from './WorkArea.vue';

    export default {
        components: {
            WorkArea
        }
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