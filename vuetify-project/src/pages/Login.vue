<template>
  <v-container>
    <v-form @submit.prevent="login">
      <v-text-field label="Email" v-model="email" required></v-text-field>
      <v-text-field label="Password" v-model="password" type="password" required></v-text-field>
      <v-btn type="submit" color="primary">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import apiClient from '@/plugins/axios'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  try {
    const response = await apiClient.post('/login', { email: email.value, password: password.value })
    if (response.status === 200) {
      router.push('/inbox')
    } else {
      alert('Login failed. Please check your credentials and try again.')
    }
  } catch (error) {
    console.error('Login failed:', error)
    alert('Login failed. Please check your credentials and try again.')
  }
}
</script>
