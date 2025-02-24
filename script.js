// เชื่อมต่อ WebSocket
const socket = new WebSocket('ws://localhost:8080');
// ส่วนของ UI
const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('message');
const responseDiv = document.getElementById('response');
// การเชื่อมต่อ
socket.onopen = () => {
    console.log('Connected to server.');
};
// การตอบกลับจากเซิฟเวอร์
socket.onmessage = (event) => {
    responseDiv.innerHTML = `Server says: ${event.data}`;
};
// การส่งข้อความไปยังเซิฟ เวอร์เมื่อกดปุ่ม
sendBtn.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim()) {
        socket.send(message); // ส่งข้อความไปยังเซิฟเวอร์
        messageInput.value = ''; // เคลียร์ช่องข้อความ
    } else {
        alert('Please enter a message.');
    }
});
// การแจ้งเตือนเม่อืเชื่อมตอหลุด
socket.onclose = () => {
    console.log('Disconnected from server.');
};
