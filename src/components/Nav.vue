<script setup>
    import {RouterLink} from 'vue-router'
</script>

<template>
    <nav>
        <RouterLink to="/" active-class="active">Home</RouterLink>     
        <RouterLink to="/about" active-class="active">About</RouterLink>     
    </nav>
</template>

<style scoped>
.active{
    font-weight: 900;
    color: rgb(153, 104, 14);
}
</style>