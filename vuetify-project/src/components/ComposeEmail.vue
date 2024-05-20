<template>
  <v-form>
    <v-text-field label="To" v-model="to" />
    <v-text-field label="Subject" v-model="subject" />
    <v-textarea label="Body" v-model="body" />
    <v-btn @click="sendEmail">Send</v-btn>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'

const to = ref('')
const subject = ref('')
const body = ref('')

const sendEmail = () => {
  // Handle sending email logic
  console.log('Email sent:', { to: to.value, subject: subject.value, body: body.value })
}
</script>
