function runSettings4Apple(deviceTag) {
    console.log("Estas navegando en un dispositivo IOS de Apple");
    document.body.classList.add("agent-Safari");
}

function runSettings4NoApple(deviceTag) {
    console.log("Estas navegando en un dispositivo No Apple")
    document.body.classList.add("agent-NoSafari");
}
