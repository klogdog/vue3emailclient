<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list>
        <v-list-item to="/inbox" prepend-icon="mdi-inbox">Inbox</v-list-item>
        <v-list-item to="/sent" prepend-icon="mdi-send">Sent</v-list-item>
        <v-list-item to="/drafts" prepend-icon="mdi-file-document">Drafts</v-list-item>
        <v-list-item to="/compose" prepend-icon="mdi-email-plus">Compose</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-toolbar-title>Email Client</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
// No additional setup needed here for now
</script>

<style>
.v-navigation-drawer {
  width: 250px;
}

.v-list-item {
  cursor: pointer;
}

.v-list-item:hover {
  background-color: #f5f5f5;
}

.v-app-bar {
  background-color: #6200ea;
  color: white;
}

.v-toolbar-title {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
