<template>
    <div class="work-area">
        <div class="work-area-wrapper">
            <div class="work-area-wrapper-block">
                <slot name="work-area"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "~/src/sass/app.scss";

.work-area {
    @include flex_row(center, center);
    height: 100%;
    width: 100%;
    padding: 0px 20px 0px 10px;
    overflow: hidden;
    

    &-wrapper {
        @include flex_row(center, center);
        height: 100%;
        width: 100%;
        padding: 5px;
        // border: $main-border;
        border-radius: $rounded;
        background-color: $main-white;
        
        &-block {
            @include flex_col(flex-start, center);
            height: 100%;
            width: 100%;
            overflow-y: auto;
        }
    }
}

::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-button {
    height: 0px;
    background-color: #aa6363;
}

::-webkit-scrollbar-thumb {
    background-color: $scroll-thumb;
}

::-webkit-scrollbar-track {
    background-color: $scroll-track;
}

</style>