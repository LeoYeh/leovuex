<template>
    <!-- http://getbootstrap.com/examples/jumbotron/ -->
    <div class="banner">
        <!-- Main jumbotron for a primary marketing message or call to action -->
        <div class="jumbotron">
            <div class="container">
                <h1>{{getKvTitle}}</h1>
                <p>{{getKvDes}}</p>
                <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
            </div>
        </div>
        <!-- 
        <jcolumn></jcolumn>
        <jcolumn></jcolumn> 
        -->
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="item in jumbotronList">
                    <h2>{{item.title}}</h2>
                    <p>{{item.description}}</p>
                    <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import jcolumn from '@/components/jumbotronColumn.vue';
import {
    mapGetters,
    mapActions
} from 'vuex'

export default {
    components: {
        'jcolumn': jcolumn,
    },
    computed: {
        ...mapGetters([
            'getKvTitle',
            'getKvDes',
        ]),
        ...mapGetters({
            'jumbotronList': 'getJumbotronList',
        })
    },
    mounted() {},
    data() {
        return {}
    },
    methods: {
        ...mapActions([]),
    }
}
</script>
<style>
</style>
