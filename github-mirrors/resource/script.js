const input = document.querySelector(".finder__input");
const finder = document.querySelector(".finder");
const form = document.querySelector("form");
const mirrors = document.querySelector(".mirrors")
const mirrorList = ["https://github.wuyanzheshui.workers.dev", "https://github.bajins.com"]

input.addEventListener("focus", () => {
    finder.classList.add("active");
});

input.addEventListener("blur", () => {
    if (input.value.length === 0) {
        finder.classList.remove("active");
    }
});

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    finder.classList.add("processing");
    finder.classList.remove("active");
    input.disabled = true;
    setTimeout(() => {
        finder.classList.remove("processing");
        input.disabled = false;
        if (input.value.length > 0) {
            finder.classList.add("active");
        }
        showMirrors(input.value);
    }, 1000);
});

function showMirrors(url) {
    if (!url.startsWith("https://github.com")) {
        alert("输入地址格式错误");
    } else {
        let mirrorHtml = "";
        for (let index in mirrorList) {
            let mirrorUrl = url.replace("https://github.com", mirrorList[index]);
            mirrorHtml += `<div class="mirror"><a href="${mirrorUrl}">mirror ${index}</a></div>`
        }
        mirrors.innerHTML = mirrorHtml;
    }
}