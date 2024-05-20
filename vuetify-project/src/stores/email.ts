import { defineStore } from 'pinia'

export const useEmailStore = defineStore('email', {
  state: () => ({
    inbox: [],
    sent: [],
    drafts: [],
  }),
  actions: {
    sendEmail(email) {
      this.sent.push(email)
    },
    saveDraft(email) {
      this.drafts.push(email)
    },
    receiveEmail(email) {
      this.inbox.push(email)
    },
  },
})
