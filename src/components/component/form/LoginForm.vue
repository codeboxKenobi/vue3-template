<template>
    <div class="form">
        <head-title title="Вход" />
        <form-input title="Почта" placeholder="@" :errors="errors" fieldName="email" @input="input($event, 'email')" />
        <form-input title="Пароль" placeholder="Пароль" :errors="errors" fieldName="password" @input="input($event, 'password')" />
        <div class="form-button-wrapper">
            <FormButton title="Войти" @handler="login" />
        </div>
        <div class="form-link-wrapper">
            <form-link title="Регистрация" :border="false" link="/registration" />
        </div>
    </div>
</template>

<script>
import HeadTitle from '../../UI/HeadTitle.vue';
import FormInput from '../../UI/FormInput.vue';
import FormButton from '../../UI/ButtonCmp.vue';
import FormLink from '../../UI/LinkCmp.vue';

import validate from '../../../helpers/validate.js'

    export default {
        components: {
            HeadTitle,
            FormInput,
            FormButton,
            FormLink
        },

        data() {
            return {
                email: "",
                password: "",
                errors: {}
            }
        },

        methods: {
            input(value, field) {
                this[field] = value;
            },

            login() {
                this.errors = {};

                const rules = [
                    { type: "email", value: this.email },
                    { type: "password", value: this.password }
                ];

                this.errors = validate(rules);
            }
        },
    }
</script>

<style lang="scss" scoped>
@import "~/src/sass/app.scss";

.form {
    height: 330px;
    width: 320px;
    margin: 10px;
    background-color: $flatdrop;
    border: $main-border;
    border-radius: $rounded;

    &-button-wrapper {
        @include flex-row(center, center);
        width: 100%;
    }
}
</style>