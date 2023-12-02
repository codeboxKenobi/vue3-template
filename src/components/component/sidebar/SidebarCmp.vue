<template>
    <div class="sidebar">
        <div class="sidebar-wrapper">
            <div v-for="(item, i) in setState" :key="i" class="sidebar-item" >
                <ul class="sidebar-item-parent">
                    <div class="p-wrapper" :class="[item.isOpen ? 'p-wrapper-active' : 'p-wrapper']">
                        <li class="sidebar-item-parent-children head-title" :class="[ item.isOpen ? 'head-title-border' : '']" @click.stop="menuToggle(item)">
                            <div class="icon">
                                <icon-cmp :name="item.icon" />
                            </div>
                            <span class="close">{{ item.title }}</span>
                            <icon-cmp v-if="!item.isOpen" name="left" />
                            <icon-cmp v-if="item.isOpen" name="down" />
                        </li>
                    </div>
                    <transition name="decent-top">
                        <div v-if="item.isOpen">
                            <li v-for="(mI, x) in item.children" :key="x" class="sidebar-item-parent-children" @click="goTo(mI.to)">
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
                openMenu: null,
                sidebarMenu: [
                    {
                        id: 1,
                        icon: "wallet",
                        title: "Сервис",
                        rules: "",
                        children: [
                            {
                                title: "Ремонт",
                                rules: "",
                                to: "/login"
                            },
                            {
                                title: "Доставка",
                                rules: "",
                                to: "/registration"
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
                    },
                    {
                        id: 4,
                        icon: "user",
                        title: "Пользователи",
                        rules: "",
                        children: [
                            {
                                title: "Администратор",
                                rules: "",
                                to: ""
                            },
                            {
                                title: "Клиент",
                                rules: "",
                                to: ""
                            },
                        ]
                    },
                    {
                        id: 5,
                        icon: "setting",
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
                    },
                    {
                        id: 6,
                        icon: "add",
                        title: "Склад",
                        rules: "",
                        children: [
                            {
                                title: "Склад 'Основной'",
                                rules: "",
                                to: ""
                            }
                        ]
                    },
                    {
                        id: 7,
                        icon: "close",
                        title: "Склад",
                        rules: "",
                        children: [
                            {
                                title: "Склад 'Основной'",
                                rules: "",
                                to: ""
                            }
                        ]
                    },
                    {
                        id: 8,
                        icon: "list",
                        title: "Склад",
                        rules: "",
                        children: [
                            {
                                title: "Склад 'Основной'",
                                rules: "",
                                to: ""
                            }
                        ]
                    },
                    {
                        id: 9,
                        icon: "delete",
                        title: "Склад",
                        rules: "",
                        children: [
                            {
                                title: "Склад 'Основной'",
                                rules: "",
                                to: ""
                            }
                        ]
                    },
                    {
                        id: 10,
                        icon: "search",
                        title: "Склад",
                        rules: "",
                        children: [
                            {
                                title: "Склад 'Основной'",
                                rules: "",
                                to: ""
                            }
                        ]
                    },
                    {
                        id: 11,
                        icon: "box",
                        title: "Склад",
                        rules: "",
                        children: [
                            {
                                title: "Склад 'Основной'",
                                rules: "",
                                to: ""
                            }
                        ]
                    }
                ]
            }
        },

        computed: {
            setState() {
                this.sidebarMenu.forEach(i => {
                    i["isOpen"] = false;
                });
                return this.sidebarMenu;
            }
        },

        methods: {
            menuToggle(menuItem) {
                return menuItem.isOpen = !menuItem.isOpen;
            },

            goTo(endpoint) {
                this.$router.push(`${endpoint}`)
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "~/src/sass/app.scss";

.sidebar-wrapper {
    @include flex_col(flex-start, center);
    // height: 100%;
    width: 100%;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    overflow-y: auto;
}

.p-wrapper {
    height: 100%;
    @include flex_row(space-between, center);
    
    &:hover {
        border-top-left-radius: $rounded;
        border-top-right-radius: $rounded;
        background-color: $hdrop;
        border-bottom-left-radius: $rounded;
        border-bottom-right-radius: $rounded;
    }
}


.p-wrapper-active {
    height: 100%;
    @include flex_row(space-between, center);
    
    &:hover {
        border-top-left-radius: $rounded;
        border-top-right-radius: $rounded;
        background-color: $hdrop;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
}

.icon {
    @include flex_row(center, center);
    height: 30px;
    width: 30px;
    margin-right: 5px;
}

.head-title {
    @include flex_row(space-between, center);
    width: 100%;

    &:hover {
        border-top-left-radius: $rounded;
        border-top-right-radius: $rounded;
        background-color: $flatdrop;
    }
}

.close {
    width: 100%;
}

.head-title-border {
    border: none;
    border-bottom-left-radius: $rounded;
    border-bottom-right-radius: $rounded;
}

.sidebar {
    @include flex_col(space-between, center);
    height: 100%;
    width: 240px;
    // border-right: $main-border;
    
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