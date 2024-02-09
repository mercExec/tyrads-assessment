<template>
    <div class="flex h-screen">
        <!-- Side-nav -->
        <TemplateSidenav/>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import TemplateSidenav from './components/templates/TemplateSidenav.vue';



</script>
<style scoped></style>
