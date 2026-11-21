document.getElementById("connectBtn").addEventListener("click", function() {
    let playerId = document.getElementById("playerIdInput").value;
    
    if(!playerId) {
        alert("Pehle Player ID toh daal mere bhai!");
        return;
    }

    fetch('/connect-ff', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ player_id: playerId })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("Success: " + data.message);
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Connection mein koi locha ho gaya!");
    });
});
```

---