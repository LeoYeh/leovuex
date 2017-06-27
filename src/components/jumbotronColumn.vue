<template><div class="container">
    <div class="row">
        <div class="col-md-4" v-for="item in jumbotronList">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
            <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
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
    computed: {
        ...mapGetters({
            'jumbotronList': 'getJumbotronList',
        })
    },
    mounted() {},
    data() {
        return {}
    },
    methods: {}
}
</script>
<style>
</style>
