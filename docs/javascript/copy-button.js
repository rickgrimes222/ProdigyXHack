document.getElementById("copy-button").addEventListener("click", async () => {
    const text = await (await fetch("https://raw.githubusercontent.com/ProdigyAPI/ProdigyX/master/bookmarklet.txt")).text()
    navigator.clipboard.writeText(text);
})
