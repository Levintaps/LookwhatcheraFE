const chatBody = document.querySelector('.chat-body');
const chatInput = document.querySelector('.chat-input');
const sendButton = document.querySelector('.send-button');

// API configuration
const API_URL = 'http://192.168.116.137:8080/api/gemini/generate-content';

// Function to sanitize HTML to prevent XSS
function sanitizeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Function to handle sending messages
async function handleSendMessage() {
    const message = chatInput.value.trim();
    
    if (message) {
        // Create and append user message
        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'message user';
        userMessageDiv.innerHTML = `<div class="message-content">${sanitizeHTML(message)}</div>`;
        chatBody.appendChild(userMessageDiv);
        
        // Clear input
        chatInput.value = '';
        
        // Create and append bot typing message
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot';
        typingDiv.innerHTML = '<div class="message-content">Typing...</div>';
        chatBody.appendChild(typingDiv);
        
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ prompt: message })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.text();
            
            // Remove typing indicator
            chatBody.removeChild(typingDiv);
            
            // Create and append bot response
            const botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'message bot';
            botMessageDiv.innerHTML = `<div class="message-content">${sanitizeHTML(data)}</div>`;
            chatBody.appendChild(botMessageDiv);
        } catch (error) {
            console.error('Error:', error);
            
            // Remove typing indicator
            chatBody.removeChild(typingDiv);
            
            // Show error message
            const errorDiv = document.createElement('div');
            errorDiv.className = 'message bot error';
            errorDiv.innerHTML = `<div class="message-content">Error: ${sanitizeHTML(error.message)}</div>`;
            chatBody.appendChild(errorDiv);
        }
        
        // Scroll to bottom
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

// Event listeners
sendButton.addEventListener('click', handleSendMessage);

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSendMessage();
    }
});