<template>
    <div class="form">
        <head-title title="Регистрация" />
        <form-input 
            title="Почта" 
            placeholder="@" 
            fieldName="email"
            :errors="errors"
            @input="input($event, 'email')" 
        />
        <form-input 
            title="Пароль" 
            placeholder="Пароль" 
            fieldName="password" 
            :errors="errors" 
            @input="input($event, 'password')" 
        />
        <form-input 
            title="Пароль еще раз" 
            placeholder="Повторите пароль" 
            fieldName="passwordConfirm"
            :errors="errors"
            @input="input($event, 'passwordConfirm')" 
        />
        <div class="form-button-wrapper">
            <FormButton title="Зарегистрироваться" @handler="registration" />
        </div>
        <div class="form-link-wrapper">
            <form-link title="Вход" :border="false" link="/login" />
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
                passwordConfirm: "",
                errors: {}
            }
        },

        methods: {
            input(value, field) {
                this[field] = value;
            },

            toValidate() {
                this.errors = {};

                const rules = [
                    { type: "email", value: this.email },
                    { type: "password", value: this.password },
                    { type: "passwordConfirm", value: [this.password, this.passwordConfirm] }
                ];

                this.errors = validate(rules);
            },

            registration() {
                this.toValidate();
                if (this.errors.count > 0) return;

                console.log("GO");
            }
        },
    }
</script>

<style lang="scss" scoped>
@import "~/src/sass/app.scss";

.form {
    height: 400px;
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