<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-list>
          <v-list-item v-for="email in emails" :key="email.id" @click="selectEmail(email)">
            <v-list-item-content>
              <v-list-item-title>{{ email.subject }}</v-list-item-title>
              <v-list-item-subtitle>{{ email.sender }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ formatDate(email.receivedAt) }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import apiClient from '@/plugins/axios';

const emails = ref([]);
const router = useRouter();

const loadEmails = async () => {
  try {
    const response = await apiClient.get('/inbox');
    emails.value = response.data;
  } catch (error) {
    console.error('Failed to fetch emails:', error); // Log the error
  }
};

const selectEmail = (email) => {
  router.push({ name: 'emailDetail', params: { id: email.id } });
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

onMounted(() => {
  loadEmails();
});
</script>

<style scoped>
.v-list-item {
  cursor: pointer;
}
.v-list-item:hover {
  background-color: #f5f5f5;
}
</style>
