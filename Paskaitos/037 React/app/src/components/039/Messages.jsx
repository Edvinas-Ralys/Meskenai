function Messages({ messages }) {
  if (!messages.length) {
    return null
  }

  return (
    <div className="messages">
      {messages.map(message => (
        <div key={message.id} className={`alert alert-${message.type}`}>
          {message.text}
        </div>
      ))}
    </div>
  )
}

export default Messages
