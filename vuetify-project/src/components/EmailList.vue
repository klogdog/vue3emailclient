<template>
  <div>
    <v-list>
      <v-list-item v-for="email in emails" :key="email.id">
        <v-list-item-content>
          <v-list-item-title>{{ email.subject }}</v-list-item-title>
          <v-list-item-subtitle>{{ email.sender }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emails = ref([
  { id: 1, subject: 'Hello World', sender: 'john@example.com' },
  // Add more emails here
])
</script>
