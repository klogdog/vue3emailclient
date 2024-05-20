<template>
  <v-list>
    <v-list-item v-for="email in emails" :key="email.id" @click="viewEmail(email)">
      <v-list-item-content>
        <v-list-item-title>{{ email.subject }}</v-list-item-title>
        <v-list-item-subtitle>{{ email.sender }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  emails: Array
})

const viewEmail = (email) => {
  // Implement email viewing logic here
  console.log('View email:', email)
}
</script>
