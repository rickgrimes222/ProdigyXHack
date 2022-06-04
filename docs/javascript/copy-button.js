document.getElementById("copy-button").addEventListener("click", async () => {
    const text = await (await fetch("https://raw.githubusercontent.com/ProdigyAPI/ProdigyX/master/bookmarklet.txt")).text()
    navigator.clipboard.writeText(text).then(() => {
        const oldText = document.getElementById("copy-button").innerText
        document.getElementById("copy-button").innerText = "Copied!"
        setTimeout(() => {
            document.getElementById("copy-button").innerText = oldText
        }, 1000)
    }).catch(() => {
        const oldText = document.getElementById("copy-button").innerText
        document.getElementById("copy-button").innerText = "Failed!"
        setTimeout(() => {
            document.getElementById("copy-button").innerText = oldText
        }, 1000)
    })
})
