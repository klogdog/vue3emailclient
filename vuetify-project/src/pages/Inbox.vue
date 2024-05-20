<template>
  <div>
    <v-container>
      <EmailList :emails="emails" />
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EmailList from '@/components/EmailList.vue'

const emails = ref([])

onMounted(() => {
  // Fetch emails from an API or store
  emails.value = [
    { id: 1, subject: 'Welcome!', sender: 'noreply@example.com', body: 'Welcome to our service!' },
    // Add more emails here
  ]
})
</script>
