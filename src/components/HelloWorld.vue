<template>
  <h1>Home {{ userStore.userData }}</h1>
</template>

<script setup>
import { useUserStore } from "../state/store";
const userStore = useUserStore();
</script>
