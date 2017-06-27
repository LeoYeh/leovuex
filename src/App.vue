<template>
    <div>
        <div v-if="loading" class="loader loader-curtain is-active"></div>
        <navigator></navigator>
        <router-view></router-view>
    </div>
</template>
<script>
import navigator from './components/navigator.vue';
import {
    mapGetters
} from 'vuex';
export default {
    computed: mapGetters({
        // 取得 loading state
        loading: 'getLoading',
        allState: 'getAllState',
    }),
    mounted() {
        console.log('這裡可以知道全部 state 的狀況');
        // console.log('allState ', JSON.stringify(this.allState))
    },
    components: {
        'navigator': navigator
    }
}
</script>
<style lang="scss">
@import "assets/scss/base.scss";
</style>
