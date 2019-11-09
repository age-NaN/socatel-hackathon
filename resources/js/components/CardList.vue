<template>
    <div class="container" v-if="loading == false">
        <div v-for="item in items" class="card m-4">
            <card-item :item="item"></card-item>
        </div>
    </div>
</template>

<script>
    import ActivityStore from '../ActivityStore.js';
    import CardItem from "./CardItem.vue";

    export default {
        components: {CardItem},
        props: {
            results: Object,
        },
        data: function() {
            return {
                items: null,
                loading: true
            }
        },
        methods: {
            init: async function() {
                this.items = await ActivityStore.methods.getAll();
                this.loading = false;
            }
        },
        created() {
            this.init();
        },
        mounted() {

        }
    }
</script>
