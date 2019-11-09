<template>
    <div class="card-body">
        <div class="card-title">{{ item.name }}</div>
        <div class="card-text mb-2">{{ item.description }}</div>
        <a href="#" class="btn btn-primary card-body_enroll-button">Apuntarse</a>
    </div>
</template>

<script>
    export default {
        props: {
            item: Object,
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
