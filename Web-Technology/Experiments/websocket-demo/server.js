const WebSocket = require("ws");

// Create WebSocket server on port 3000
const wss = new WebSocket.Server({ port: 3000 });

console.log("WebSocket server running on ws://localhost:3000");

// When a client connects
wss.on("connection", function connection(ws) {
    console.log("✅ New client connected");

    // Send welcome message
    ws.send("Welcome to WebSocket Server!");

    // When server receives message
    ws.on("message", function incoming(message) {
        const msg = message.toString();
        console.log("Received:", msg);

        // Broadcast to all connected clients
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(msg);
            }
        });
    });

    ws.on("close", () => {
        console.log("Client disconnected");
    });

    ws.on("error", (err) => {
        console.log(" Error:", err.message);
    });
});