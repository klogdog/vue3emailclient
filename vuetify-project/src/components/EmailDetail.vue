<template>
  <v-card>
    <v-card-title>{{ email.subject }}</v-card-title>
    <v-card-subtitle>{{ email.sender }}</v-card-subtitle>
    <v-card-text>{{ email.body }}</v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const email = ref({
  subject: 'Hello World',
  sender: 'john@example.com',
  body: 'This is the body of the email.',
})

// Fetch the email details based on route or selected email
</script>
