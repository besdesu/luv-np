// script.js
function startConversation() {
    document.getElementById("introduction").style.display = "none";
    document.getElementById("chatbox").style.display = "block";
}

function sendMessage() {
    let userMessage = document.getElementById("userMessage").value;
    let messages = document.getElementById("messages");

    // แสดงข้อความของผู้ใช้
    let userChat = document.createElement("p");
    userChat.textContent = "คุณ: " + userMessage;
    messages.appendChild(userChat);

    // แสดงข้อความตอบกลับอัตโนมัติ
    let botReply = document.createElement("p");
    botReply.textContent = "บอทจีบสาว: " + generateReply(userMessage);
    messages.appendChild(botReply);

    // ล้างช่องข้อความ
    document.getElementById("userMessage").value = "";
    messages.scrollTop = messages.scrollHeight;
}

function generateReply(message) {
    // ข้อความตอบกลับอัตโนมัติเบื้องต้น
    const replies = [
        "ว้าว คุณน่ารักมากเลย!",
        "คุณชอบทำอะไรเวลาว่าง?",
        "ขอบคุณที่มาเยี่ยมชมเว็บของฉันนะคะ",
        "เราอยากรู้จักคุณมากขึ้นนะ 😊"
    ];
    return replies[Math.floor(Math.random() * replies.length)];
}
