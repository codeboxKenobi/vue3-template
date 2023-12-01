<template>
    <div class="sidebar">
        <div class="sidebar-wrapper">
            <div v-for="(item, i) in sidebarMenu" :key="i" class="sidebar-item" @click="menuToggle(item)">
                <ul class="sidebar-item-parent">
                    <li class="sidebar-item-parent-children head-title">
                        {{ item.title }}
                    </li>
                    <transition name="decent-top">
                        <div v-if="item.id === openMenu">
                            <li v-for="(mI, x) in item.children" :key="x" class="sidebar-item-parent-children">
                                {{ mI.title }}
                            </li>
                        </div>
                    </transition>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                openMenu: null,
                sidebarMenu: [
                    {
                        id: 1,
                        title: "Сервис",
                        rules: "",
                        children: [
                            {
                                title: "Ремонт",
                                rules: "",
                                to: ""
                            },
                            {
                                title: "Доставка",
                                rules: "",
                                to: ""
                            },
                        ]
                    },
                    {
                        id: 2,
                        title: "Продажы",
                        rules: "",
                        children: [
                            {
                                title: "Оптовые продажи",
                                rules: "",
                                to: ""
                            },
                            {
                                title: "Рознечные продажи",
                                rules: "",
                                to: ""
                            },
                        ]
                    },
                    {
                        id: 3,
                        title: "Склад",
                        rules: "",
                        children: [
                            {
                                title: "Склад 'Основной'",
                                rules: "",
                                to: ""
                            },
                            {
                                title: "Склад 'Регион'",
                                rules: "",
                                to: ""
                            },
                            {
                                title: "Поставщики",
                                rules: "",
                                to: ""
                            },
                        ]
                    }
                ]
            }
        },

        methods: {
            menuToggle(menuItem) {
                this.openMenu = menuItem.id;
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "~/src/sass/app.scss";

.sidebar-wrapper {
    @include flex_col(flex-start, center);
    height: 100%;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
}

.head-title {
    &:hover {
        border-top-left-radius: $rounded;
        border-top-right-radius: $rounded;
        background-color: $flatdrop;
    }
}

.sidebar {
    @include flex_col(flex-start, center);
    height: 100%;
    width: 240px;
    // border-right: $main-border;

    &-item {
        @include flex_row(flex-start, center);
        min-height: 40px;
        width: 100%;
        margin-top: 10px;
        border: $main-border;
        border-radius: $rounded;
        font-family: $main-font;
        font-size: 14px;
        color: $text-color;
        background-color: $main-white;
        user-select: none;

        &-parent {
            width: 100%;
            
            &-children {
                @include flex_row(flex-start, center);
                list-style-type: none;
                height: 40px;
                width: 100%;
                padding-left: 10px;
                padding-right: 10px;
                cursor: pointer;
                transition: all 0.5s;

                &:hover {
                    background-color: $hdrop;
                }

                &:last-child:hover {
                    border-bottom-left-radius: $rounded;
                    border-bottom-right-radius: $rounded;
                    background-color: $hdrop;
                }
            }
        }
    }
}

</style>