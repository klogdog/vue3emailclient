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
  // Fetch sent emails from an API or store
  emails.value = [
    { id: 1, subject: 'Project Update', sender: 'you@example.com', body: 'Here is the latest update on the project.' },
    // Add more sent emails here
  ]
})
</script>
