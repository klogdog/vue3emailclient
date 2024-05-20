<template>
  <v-container>
    <v-card>
      <v-card-title>Email Viewer</v-card-title>
      <v-card-text v-html="strippedContent"></v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  emailContent: {
    type: String,
    required: true
  }
})

const strippedContent = computed(() => {
  // Create a DOM parser
  const parser = new DOMParser()
  const doc = parser.parseFromString(props.emailContent, 'text/html')
  // Extract the inner HTML of the body tag
  return doc.body.innerHTML
})
</script>

<style scoped>
/* Add any specific styles if needed */
</style>
