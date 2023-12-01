<template>
    <div class="registration">
        <registration-form />
    </div>
</template>

<script>
import RegistrationForm from '@/components/component/form/RegistrationForm.vue';

    export default {
        components: {
            RegistrationForm
        }
    }
</script>

<style lang="scss" scoped>
@import "~/src/sass/app.scss";

.registration {
    @include flex-row(center, center);
    height: 100vh;
    width: 100vw;
}
</style>