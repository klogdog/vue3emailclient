<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card @click="navigateTo('inbox')" class="hover-card">
          <v-card-title>Inbox</v-card-title>
          <v-card-subtitle>{{ inboxCount }} unread messages</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card @click="navigateTo('sent')" class="hover-card">
          <v-card-title>Sent</v-card-title>
          <v-card-subtitle>{{ sentCount }} messages sent</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card @click="navigateTo('drafts')" class="hover-card">
          <v-card-title>Drafts</v-card-title>
          <v-card-subtitle>{{ draftsCount }} drafts saved</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card @click="navigateTo('compose')" class="hover-card">
          <v-card-title>Compose</v-card-title>
          <v-card-subtitle>Create a new email</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const inboxCount = ref(5)  // Example counts
const sentCount = ref(10)
const draftsCount = ref(3)

const navigateTo = (page: string) => {
  router.push(`/${page}`)
}
</script>

<style scoped>
.hover-card {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}
.hover-card:hover {
  transform: scale(1.05);
}
</style>
