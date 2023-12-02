<template>
    <div class="sidebar">
        <div class="sidebar-wrapper">
            <div v-for="(item, i) in sidebarMenu" :key="i" class="sidebar-item" @click="menuToggle(item.id)">
                <ul class="sidebar-item-parent">
                    <div class="p-wrapper" :class="[item.id === openMenu ? 'p-wrapper-active' : '']">
                        <li class="sidebar-item-parent-children head-title" :class="[ item.id === openMenu ? 'head-title-border' : '']">
                            <div class="icon">
                                <icon-cmp :name="item.icon" />
                            </div>
                            {{ item.title }}
                        </li>
                    </div>
                    <transition name="decent-top">
                        <div v-if="item.id === openMenu">
                            <li v-for="(mI, x) in item.children" :key="x" class="sidebar-item-parent-children">
                                <div class="icon" />
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
import IconCmp from '@/components/UI/IconCmp.vue';

    export default {
        components: {
            IconCmp
        },

        data() {
            return {
                openMenu: [],
                sidebarMenu: [
                    {
                        id: 1,
                        icon: "add",
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
                        icon: "calendar",
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
                        icon: "check",
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
                this.openMenu = menuItem;
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

.p-wrapper {
    @include flex_row(space-between, center);
    &:hover {
        border-top-left-radius: $rounded;
        border-top-right-radius: $rounded;
        background-color: $hdrop;
        border-bottom-left-radius: $rounded;
        border-bottom-right-radius: $rounded;
    }
}

.p-wrapper-active:hover {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background-color: $hdrop;
}

.icon {
    @include flex_row(center, center);
    height: 40px;
    width: 40px;
    margin-right: 10px;
}

.head-title {
    @include flex_row(center, center);
    &:hover {
        border-top-left-radius: $rounded;
        border-top-right-radius: $rounded;
        background-color: $flatdrop;
    }
}

.head-title-border {
    // border-bottom: $main-border;
}

.sidebar {
    @include flex_col(flex-start, center);
    height: 100%;
    width: 240px;
    border-right: $main-border;

    &-item {
        @include flex_row(flex-start, center);
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