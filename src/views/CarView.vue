<script setup>
import {useRoute} from 'vue-router'
import cars from '../db/data.json'
const route = useRoute()

const car = cars.find(c => c.id === parseInt(route.params.id))

</script>

<template>
    <div>
        <h1>Car View</h1>
        <p>{{car.name}}</p>
        <p>{{car.price}}</p>
        <p>{{car.year}}</p>
    </div>
</template>