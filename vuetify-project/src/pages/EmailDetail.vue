<template>
  <v-container>
    <v-card>
      <v-card-title>{{ email?.subject }}</v-card-title>
      <v-card-subtitle>{{ email?.sender }}</v-card-subtitle>
      <v-card-subtitle>{{ formatDate(email?.receivedAt) }}</v-card-subtitle>
      <v-card-text>{{ email?.body }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Email } from '@/services/emailService'
import apiClient from '@/plugins/axios'

const email = ref<Email | null>(null)
const route = useRoute()
const emailId = route.params.id as string

const fetchEmailDetail = async (id: string) => {
  try {
    const response = await apiClient.get<Email>(`/emails/${id}`)
    email.value = response.data
  } catch (error) {
    console.error('Failed to fetch email detail:', error)
  }
}

const formatDate = (dateString: string | undefined) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleString()
}

onMounted(() => {
  fetchEmailDetail(emailId)
})
</script>
