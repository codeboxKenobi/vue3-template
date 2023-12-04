<template>
    <div class="sidebar">
        <div class="head-top"></div>
        <div class="sidebar-wrapper">
            <div v-for="(item, i) in setState" :key="i" class="sidebar-item">
                <ul class="sidebar-item-parent">
                    <div v-if="getAccess(item.rules)" class="sidebar-item-parent-wrapper" 
                        :class="[item.isOpen 
                            ? 'sidebar-item-parent-wrapper-active' 
                            : 'sidebar-item-parent-wrapper']"
                        >
                        <li class="sidebar-item-parent-wrapper-children head-title" 
                            :class="[ item.isOpen 
                                ? 'head-title-border' 
                                : '']" 
                                @click.stop="menuToggle(item)"
                            >
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
                            <div v-for="(mI, x) in item.children" :key="x" >
                                <li v-if="getAccess(mI.rules)"
                                    class="sidebar-item-parent-wrapper-children" 
                                    @click="goTo(mI.to)" 
                                >
                                <div class="icon" />
                                {{ mI.title }}
                            </li>
                            </div>
                        </div>
                    </transition>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import IconCmp from '@/components/UI/IconCmp.vue';
import getAccess from "../../utils/acc.js"

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
                        icon: "services",
                        title: "Услуги",
                        rules: "service.main.read",
                        children: [
                            {
                                title: "Ремонт",
                                rules: "service.repair.read",
                                to: "/user/repair"
                            },
                            {
                                title: "Диагностика",
                                rules: "service.diagnostic.read",
                                to: "/user/diagnostics"
                            },
                        ]
                    },
                    {
                        id: 2,
                        icon: "list",
                        title: "Продажи",
                        rules: "sales.main.read",
                        children: [
                            {
                                title: "Устройства",
                                rules: "sales.device.read",
                                to: "/user/devices"
                            },
                            {
                                title: "Запчасти",
                                rules: "sales.parts.read",
                                to: "/user/parts"
                            },
                            {
                                title: "Аксессуары",
                                rules: "sales.accessories.read",
                                to: "/user/accessories"
                            },
                        ]
                    },
                    {
                        id: 3,
                        icon: "box",
                        title: "Склад",
                        rules: "warehouse.main.read",
                        children: [
                            {
                                title: "Основной склад",
                                rules: "warehouse.base.read",
                                to: "/user/warehouse"
                            }
                        ]
                    },
                    {
                        id: 4,
                        icon: "clients",
                        title: "Клиенты",
                        rules: "",
                        children: [
                            {
                                title: "Список клиентов",
                                rules: "",
                                to: "client_list"
                            },
                            {
                                title: "Черный список",
                                rules: "",
                                to: "client_list_block"
                            }
                        ]
                    },
                    {
                        id: 5,
                        icon: "report",
                        title: "Аналитика",
                        rules: "",
                        children: [
                            {
                                title: "По услугам",
                                rules: "",
                                to: "services_report"
                            },
                            {
                                title: "По продажам",
                                rules: "",
                                to: "sales_report"
                            },
                            {
                                title: "По складу",
                                rules: "",
                                to: "warehouse_report"
                            },
                        ]
                    },
                    // {
                    //     id: 6,
                    //     icon: "add",
                    //     title: "Склад",
                    //     rules: "",
                    //     children: [
                    //         {
                    //             title: "Склад 'Основной'",
                    //             rules: "",
                    //             to: ""
                    //         }
                    //     ]
                    // },
                    // {
                    //     id: 7,
                    //     icon: "close",
                    //     title: "Склад",
                    //     rules: "",
                    //     children: [
                    //         {
                    //             title: "Склад 'Основной'",
                    //             rules: "",
                    //             to: ""
                    //         }
                    //     ]
                    // },
                    // {
                    //     id: 8,
                    //     icon: "list",
                    //     title: "Склад",
                    //     rules: "",
                    //     children: [
                    //         {
                    //             title: "Склад 'Основной'",
                    //             rules: "",
                    //             to: ""
                    //         }
                    //     ]
                    // },
                    // {
                    //     id: 9,
                    //     icon: "delete",
                    //     title: "Склад",
                    //     rules: "",
                    //     children: [
                    //         {
                    //             title: "Склад 'Основной'",
                    //             rules: "",
                    //             to: ""
                    //         }
                    //     ]
                    // },
                    // {
                    //     id: 10,
                    //     icon: "search",
                    //     title: "Склад",
                    //     rules: "",
                    //     children: [
                    //         {
                    //             title: "Склад 'Основной'",
                    //             rules: "",
                    //             to: ""
                    //         }
                    //     ]
                    // },
                    // {
                    //     id: 11,
                    //     icon: "box",
                    //     title: "Склад",
                    //     rules: "",
                    //     children: [
                    //         {
                    //             title: "Склад 'Основной'",
                    //             rules: "",
                    //             to: ""
                    //         }
                    //     ]
                    // }
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
            getAccess,
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

.head-top {
    min-height: 40px;
    width: 100%;
}

.sidebar-wrapper {
    @include flex_col(flex-start, center);
    // height: 100%;
    width: 100%;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 10px;
    overflow-y: auto;
}

.icon {
    @include flex_row(center, center);
    height: 30px;
    width: 30px;
    margin-right: 5px;
}
.close {
    width: 100%;
}

.head-title {
    @include flex_row(space-between, center);
    width: 100%;
    font-size: 14px;

    &:hover {
        border-top-left-radius: $rounded;
        border-top-right-radius: $rounded;
        background-color: $flatdrop;
    }
}
.head-title-border {
    border: none;
    border-bottom-left-radius: $rounded;
    border-bottom-right-radius: $rounded;
}

.sidebar {
    @include flex_col(flex-start, center);
    height: 100%;
    width: 240px;

    &-item:not(:first-child) {
        margin-top: 10px;
    }
    
    &-item {
        @include flex_row(flex-start, center);
        width: 100%;
        border-radius: $rounded;
        font-family: $main-font;
        font-size: 12px;
        color: $text-color;
        background-color: $main-white;
        user-select: none;
        
        &-parent {
            width: 100%;

            &-wrapper {
                height: 100%;
                @include flex_row(space-between, center);
                
                &:hover {
                    border-top-left-radius: $rounded;
                    border-top-right-radius: $rounded;
                    background-color: $hdrop;
                    border-bottom-left-radius: $rounded;
                    border-bottom-right-radius: $rounded;
                }

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

            &-wrapper-active {
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