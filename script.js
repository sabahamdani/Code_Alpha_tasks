
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// FAQ Questions and Answers
const faqs = [
    {
        question: "hello",
        answer: "Hello! Welcome to our FAQ Chatbot."
    },
    {
        question: "your name",
        answer: "I am an FAQ Chatbot."
    },
    {
        question: "how are you",
        answer: "I am fine! How can I help you?"
    },
    {
        question: "services",
        answer: "We provide helpful information and customer support."
    },
    {
        question: "contact",
        answer: "You can contact us through our email."
    },
    {
        question: "thank you",
        answer: "You're welcome! Have a nice day."
    },
    {
        question: "bye",
        answer: "Goodbye! Have a great day."
    }
];

// Send Message Function
function sendMessage() {
    const message = userInput.value.trim().toLowerCase();

    if (message === "") {
        return;
    }

    addMessage(userInput.value, "user-message");

    let answer = "Sorry, I don't understand your question. Please try another question.";

    // Find matching FAQ
    for (let faq of faqs) {
        if (message.includes(faq.question)) {
            answer = faq.answer;
            break;
        }
    }

    setTimeout(function () {
        addMessage(answer, "bot-message");
    }, 500);

    userInput.value = "";
}

// Display Messages
function addMessage(message, className) {
    const messageDiv = document.createElement("div");

    messageDiv.className = className;
    messageDiv.textContent = message;

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Button Click
sendBtn.addEventListener("click", sendMessage);

// Enter Key
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
