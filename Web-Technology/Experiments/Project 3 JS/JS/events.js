fetch("Data/events.json")
    .then(response => response.json())
    .then(events => {
        const container = document.getElementById("events-container");

        events.forEach(event => {
            const card = document.createElement("div");
            card.classList.add("event-card");

            card.innerHTML = `
            <h3>${event.title}</h3>
            <p> ${event.description}</p>
            <p><strong>Date:</strong> ${event.date} at ${event.time}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p><strong>Registrations:</strong> ${event.registrations}</p>
            <p><strong>Funds Collected:</strong> ₹${event.fundsCollected}</p>
            <p class="status" ${event.status}"><strong>Status:</strong> ${event.status}</p>
            `;

            container.appendChild(card);  
        });
    })
    .catch(error => console.error("Error loading events:", error));

document.getElementById("year").textContent = new Date().getFullYear();