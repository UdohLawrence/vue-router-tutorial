<script setup>
    import cars from '../db/data.json';
    import {RouterLink} from 'vue-router';
</script>

<template>
    <div>
        <h1>Home View</h1>
        <div class="cars">
            <RouterLink :to="`/cars/${car.id}`" v-for="car in cars" :key="car.id">
                {{ car.name }}
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .cars{
        width: 100%;
        display: flex;
    }
</style>