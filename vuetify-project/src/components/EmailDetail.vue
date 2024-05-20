<template>
  <div>
    <v-card>
      <v-card-title>{{ email.subject }}</v-card-title>
      <v-card-subtitle>{{ email.sender }}</v-card-subtitle>
      <v-card-text>{{ email.body }}</v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref({
  subject: 'Hello World',
  sender: 'john@example.com',
  body: 'This is the body of the email.',
})
</script>
