class comcloudbot {
constructor(client) {
  this.cli = client
}
  onMsg(message) {
    if (message.body === 'HimitX') {
      client.sendText(message.from, '👋 Hello from sulla!');
    }
  }
  init() {
  }
}
export {comcloudbot}
