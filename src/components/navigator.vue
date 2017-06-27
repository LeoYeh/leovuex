<template>
    <div>
        <nav class="navbar navbar-default ">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link class="navbar-brand" :to="{path: '/'}">2017 vue & vuex</router-link>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li>
                            <router-link :to="{path: '/jumbotron'}">jumbotron</router-link>
                        </li>
                        <li>
                            <router-link :to="{path: '/tmpl'}">tmpl</router-link>
                        </li>
                        <li>
                            <router-link :to="{path: '/login'}">login</router-link>
                        </li>
                    </ul>
                    <h4 class="uname navbar-right">{{greeting}}</h4>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
    </div>
</template>
<script>
import {
    mapGetters,
    mapActions
} from 'vuex'

export default {
    watch: {},
    data() {
        return {}
    },
    mounted() {},
    computed: {
        //取得 root 資料
        ...mapGetters({
            'userName': 'getUserName',
        }),
        greeting() {
            return (this.userName) ? `welcome ${this.userName}` : '';
        },
        greeting1() {
            //不建議
            let uname = this.$store.state.uname;
            return (this.userName) ? `welcome ${uname}` : '';
        },
    },
    methods: {
        ...mapActions([])
    }
}
</script>
<style lang="scss">
.uname {
    margin-top: 15px;
    vertical-align: top;
}
</style>
