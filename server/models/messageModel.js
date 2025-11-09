// Simple message model (placeholder)
class Message {
  constructor(sender, message) {
    this.id = Date.now();
    this.sender = sender;
    this.message = message;
    this.timestamp = new Date().toISOString();
  }
}

module.exports = Message;
