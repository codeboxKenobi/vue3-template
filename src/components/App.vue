<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        created() {
            this.$router.push("/login");
        },
    }
</script>

<style lang="scss">

* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}
</style>