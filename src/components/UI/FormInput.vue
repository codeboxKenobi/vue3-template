<template>
    <div class="input-wrapper">
        <div class="input">
            <span class="input-title">{{ title }}</span>
            <input 
                v-model="value"
                class="input-field" 
                :type="inputType" 
                :placeholder="placeholder" 
                :disabled="disabled"
                @change="input"
            >
            <div class="input-warning">
                <span v-if="errors[fieldName]">
                    {{ errors[fieldName].message }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            inputType: { type: String, default: "text" },
            title: { type: String, default: "" },
            placeholder: { type: String, default: "" },
            disabled: { type: Boolean, default: false },
            errors: { type: Object, default: () => { return {} } },
            fieldName: { type: String, default: "" },
        },

        data() {
          return {
              value: "",
          }
        },

        methods: {
            input() {
                this.$emit("input", this.value)
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "~/src/sass/app.scss";

.input-wrapper {
    @include flex-row(flex-start, center);
    height: 68px;
    width: 100%;
}

.input {
    @include flex-col(flex-start, flex-start);
    width: 100%;
    margin: 15px;

    &-title {
        @include flex-row(flex-start, center);
        height: 16px;
        margin-left: 2px;
        font-size: 10px;
        font-family: $main-font;
        color: $text-color;
    }

    &-field {
        @include flex-row(flex-start, center);
        outline: none;
        height: 30px;
        width: 100%;
        font-size: 12px;
        font-family: $main-font;
        color: $text-color;
        border: $main-border;
        padding-left: $input-padding;
        padding-right: $input-padding;
        border-radius: $rounded-sm;
    }

    &-warning {
        @include flex-row(flex-start, center);
        height: 16px;
        margin-left: 2px;
        font-size: 10px;
        font-family: $main-font;
        color: $text-warning;
    }
}

::placeholder {
        font-size: 12px;
        font-family: $main-font;
        color: $placeholder-color;
    }
</style>