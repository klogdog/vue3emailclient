<template>
  <div>
    <v-form>
      <v-text-field label="To" v-model="to"></v-text-field>
      <v-text-field label="Subject" v-model="subject"></v-text-field>
      <v-textarea label="Body" v-model="body"></v-textarea>
      <v-btn @click="sendEmail">Send</v-btn>
    </v-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const to = ref('')
const subject = ref('')
const body = ref('')

const sendEmail = () => {
  // Handle sending email
  console.log('Email sent:', { to: to.value, subject: subject.value, body: body.value })
}
</script>
