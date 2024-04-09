function checkForSpam(message) {
    let LowerMessage = message.toLowerCase();
    return LowerMessage.includes(`spam`) || LowerMessage.includes(`sale`);
}
