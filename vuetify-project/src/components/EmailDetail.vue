<template>
  <v-card>
    <v-card-title>{{ email.subject }}</v-card-title>
    <v-card-subtitle>{{ email.sender }}</v-card-subtitle>
    <EmailViewer :emailContent="email.body" />
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import EmailViewer from '@/components/EmailViewer.vue'
import { useEmailStore } from '@/stores/email'

const emailStore = useEmailStore()
const route = useRoute()
const email = ref({
  subject: '',
  sender: '',
  body: ''
})

// Fetch the email details based on route or selected email
onMounted(() => {
  const emailId = route.params.id
  const fetchedEmail = emailStore.getEmailById(emailId)
  if (fetchedEmail) {
    email.value = fetchedEmail
  }
})
</script>
