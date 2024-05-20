const express = require('express');
const bodyParser = require('body-parser');
const imap = require('imap-simple');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors({
  origin: 'http://127.0.0.1:3002', // Allow requests from the frontend
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

let userCredentials = {}; // Temporary storage for credentials

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  userCredentials.email = email;
  userCredentials.password = password; // Replace with App Password
  res.sendStatus(200);
});

app.get('/api/inbox', async (req, res) => {
  console.log('Received request for /api/inbox');
  const { email, password } = userCredentials;

  if (!email || !password) {
    console.log('Unauthorized: Missing email or password');
    return res.status(401).send('Unauthorized');
  }

  const imapConfig = {
    imap: {
      user: email,
      password: password, // Use the App Password here
      host: 'imap.gmail.com',
      port: 993,
      tls: true,
      authTimeout: 3000,
      tlsOptions: { rejectUnauthorized: false }, // Add this line to ignore self-signed certificates
    },
  };

  try {
    const connection = await imap.connect(imapConfig);
    await connection.openBox('INBOX');
    const searchCriteria = ['ALL'];
    const fetchOptions = { bodies: ['HEADER', 'TEXT'], struct: true };
    const messages = await connection.search(searchCriteria, fetchOptions);
    console.log('Fetched messages:', messages.length);
    const emails = messages.map((message) => {
      const all = imap.getParts(message.attributes.struct);
      const headers = message.parts.filter((part) => part.which === 'HEADER')[0].body;
      const text = message.parts.filter((part) => part.which === 'TEXT')[0].body;

      return {
        id: message.attributes.uid,
        subject: headers.subject[0],
        sender: headers.from[0],
        body: text,
        receivedAt: headers.date[0],
      };
    });
    connection.end();
    res.json(emails);
  } catch (error) {
    console.error('Error fetching emails:', error);
    res.status(500).send('Failed to fetch emails');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
