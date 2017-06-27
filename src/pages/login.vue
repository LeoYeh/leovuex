<template>
    <div id="login">
        <div style="text-align: center;">
            <img src="static/img/logo1.jpg" class="">
        </div>
        <div class="container">
            <div class="form-signin">
                <h2 class="form-signin-heading">Please sign in</h2>
                <label for="email" class="sr-only">Email address</label>
                <input v-model="email" type="email" id="email" class="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" class="sr-only">Password</label>
                <input v-model="password" @keyup.enter="login" type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login">
                    Sign in
                </button>
                <br/>
            </div>
        </div>
    </div>
</template>
<script>
import {
    mapGetters,
    mapActions
} from 'vuex'

export default {
    mounted() {
            // console.log('reset toekn')
            this.actReset();
        },
        data() {
            return {
                email: 'leo@iprefer.com.tw',
                password: '123',
            }
        },
        methods: {
            ...mapActions([
                'setUserName',
                'actReset',
            ]),
            login() {
                //呼叫 root action 寫法一 => 不推
                this.$store.dispatch('actionLogin', {
                        email: this.email,
                        password: this.password
                    })
                    .then(() => {
                        //呼叫 root action 寫法二
                        this.setUserName(this.email.split("@")[0]);
                        this.$router.push('/tmpl');
                    })
                    .catch((err) => {
                        // console.log('error get Promise reject!');
                        alert(err);
                    });
            }
        }
}
</script>
<style>
.responsive-img {
    width: 100%;
}

#login {
    padding-bottom: 40px;
}

.form-signin {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}

.form-signin .form-signin-heading,
.form-signin .checkbox {
    margin-bottom: 10px;
}

.form-signin .checkbox {
    font-weight: normal;
}

.form-signin .form-control {
    position: relative;
    height: auto;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
}

.form-signin .form-control:focus {
    z-index: 2;
}

.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>
