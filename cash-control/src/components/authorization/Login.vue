<template>
    <div class="login">
        <div class="login-container">
            <div class="login-container-content">
                 <h3 class="answer-messages">{{answer}}</h3>
                <h1>Домашняя бухгалтерия</h1>
                <hr>
                <form @submit.prevent="onsubmit">
                    <input
                     id="email"
                     type="text"
                     placeholder="E-mail"
                     v-model.trim="email"
                     :class="{invalid: 
                     ($v.email.$dirty && !$v.email.required) || 
                     ($v.email.$dirty && !$v.email.email)
                     }"
                     />
                    <input
                     id="password"
                     type="password"
                     placeholder="Пароль"
                     v-model.trim="password"
                     :class="{invalid: 
                     ($v.password.$dirty && !$v.password.required) || 
                     ($v.password.$dirty && !$v.password.minLength)
                     }"
                     />
                    <button type="submit">Войти</button>
                </form>
                <p>Нет аккаунта?
                    <router-link :to="'/registration'">
                        <div class="path-regist">ЗАРЕГИСТРИРОВАТЬСЯ</div>
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
import messages from '../../utils/messages'

export default {
    name: 'Login',
    data: () => ({
        email: '',
        password: '',
        answer: '',
    }),
    validations: {
        email: {email, required},
        password: {required, minLength: minLength(5)},
    },
    mounted() {
        // проверяет url
        if (messages[this.$route.query.message]) {
            this.answer = messages[this.$route.query.message]
        }
    },
    methods: {
        onsubmit() {
            // вызывается если ошибка
            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }
            // данные которые должны отправлять в back-end
            const formData = {
                email: this.email,
                password: this.password,
            }
            this.$router.push('/')
        }
    }
}
</script>
<style lang="sass">
.answer-messages
    text-align: center
    color: #57cc85
.path-regist
    display: inline
    font-size: 13px
    color: #757575
.login
    padding-top: 20vh
    background-color: #757575
    display: flex
    align-items: center
    flex-direction: column
    height: 80vh
    &-container
        width: 300px
        transition: box-shadow .25s, -webkit-box-shadow .25s
        border-radius: 2px
        position: relative
        margin: .5rem 0 1rem 0
        background-color: #fff
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)
        &-content
            padding: 24px
            border-radius: 0 0 2px 2px
            & h1
                text-align: center
            & form
                display: flex
                flex-direction: column
            & .invalid
                position: relative
                background: none
                border-bottom: 1px solid red
                animation: 1s invalidform
                &::placeholder
                    color: red
            & input
                width: 100%
                padding-top: 30px
                margin-top: 20px
                border: none
                padding-bottom: 10px
                padding-left: 10px
                border-bottom: 1px solid grey
                &:focus
                    border-bottom: 1px solid #59c77e
                    outline: none
                    &::placeholder
                        position: relative
                        bottom: 25px
                        color: #59c77e
            & button
                background-color: #59c77e
                color: white
                font-size: 15px
                padding: 10px 20px
                margin-top: 20px
                &:hover
                    transition: 1.5s
                    filter: contrast(200%)

</style>
