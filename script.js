function activateFeature(featureName) {
    const outputBox = document.getElementById('output');
    outputBox.innerHTML = `Processing ${featureName}...`;

    fetch('/run-panel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ feature: featureName })
    })
    .then(response => response.json())
    .then(data => {
        outputBox.innerHTML = `[SUCCESS] ${data.message}`;
    })
    .catch(error => {
        outputBox.innerHTML = `[ERROR] Failed to connect!`;
        console.error('Error:', error);
    });
}
```