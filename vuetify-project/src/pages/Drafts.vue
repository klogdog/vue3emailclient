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
  // Fetch draft emails from an API or store
  emails.value = [
    { id: 1, subject: 'Draft Email', sender: 'you@example.com', body: 'This is a draft email.' },
    // Add more draft emails here
  ]
})
</script>
