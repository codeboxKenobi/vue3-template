<template>
    <div class="login">
        <login-form />
    </div>
</template>

<script>
import LoginForm from '@/components/component/form/LoginForm.vue';

    export default {
        components: {
            LoginForm
        }
    }
</script>

<style lang="scss" scoped>
@import "~/src/sass/app.scss";

.login {
    @include flex-row(center, center);
    height: 100vh;
    width: 100vw;
}
</style>