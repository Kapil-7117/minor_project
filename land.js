function mytrip() {
    const destination = document.querySelector(".userInput").value.trim();
    if (!destination) {
        alert("Please select a destination.");
        return;
    }

    // Redirect based on the selected destination
    switch (destination) {
        case 'Mumbai':
            window.location.href = "mumbai.html";
            break;
        case 'Delhi':
            window.location.href = "delhi.html";
            break;
        case 'Jaipur':
            window.location.href = "jaipur.html";
            break;
        case 'Udaipur':
            window.location.href = "udaipur.html";
            break;
        case 'Goa':
            window.location.href = "goa.html";
            break;
        case 'Darjelling':
            window.location.href = "darjelling.html";
            break;
         case 'Leh Ladakh':
             window.location.href = "leh-ladakh.html";
            break; 
        case 'Lucknow':
             window.location.href = "lucknow.html";
            break;
        case 'Manali':
            window.location.href = "manali.html";
             break;
        case 'Mussoorie':
            window.location.href = "mussoorie.html";
             break;
        case 'Rishikesh':
             window.location.href = "Rishikesh.html";
            break;
        case 'Srinagar':
            window.location.href = "Srinagar.html";
            break;
        default:
            alert("Sorry. Currently We Don't Serve For This Location.");
            break;
    }
}
