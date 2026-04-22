function updateDateTime(){
    const now = new Date();
    const options = {
        day : 'numeric', month : 'long',hour : '2-digit', minute : '2-digit', second : '2-digit' 
    };

    document.getElementById("date-time").textContent = now.toLocaleString("en-IN", options);
}


setInterval(updateDateTime, 1000);
updateDateTime();

function startCountDown(){
    const eventDate =new Date("April 15, 2026 10:00:00").getTime();

    const timer = setInterval(()=>{
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        if(distance < 0){
            clearInterval(timer);
            document.getElementById("timer".textContent = "The event has started!!");
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

startCountDown();


const joinBtn = document.getElementById("join-btn");
const popup = document.getElementById("popup");
const closePopup =  document.getElementById("close-popup");

joinBtn.addEventListener("click", ()=>{
    popup.style.display = "block";

    setTimeout(() => {
        window.location.href = "register.html";
    }, 1000);
});

closePopup.addEventListener("click", () =>{
    popup.style.display = "none";
});