const args = process.argv.slice(2);

const client = args[0]
const message = args[1]

if (message.body === 'HiX') {
      client.sendText(message.from, '👋 Hello from sulla!');
    }
