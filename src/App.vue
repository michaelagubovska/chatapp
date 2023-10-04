<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';

const app = createApp();
app.use(createPinia());
app.use(Quasar);

app.mount('#root');
</script>
