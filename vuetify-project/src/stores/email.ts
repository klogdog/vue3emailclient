import { defineStore } from 'pinia'

export const useEmailStore = defineStore('email', {
  state: () => ({
    emails: [
      { id: 1, subject: 'Hello World', sender: 'john@example.com', body: '<!-- SDP_DigitalSKUs --> <span style="display: block; color: red;"></span> <!DOCTYPE html ...</html>' },
      // Add more emails here
    ]
  }),
  actions: {
    getEmailById(id) {
      return this.emails.find(email => email.id === parseInt(id))
    }
  }
})
