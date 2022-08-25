const topBtn = document.querySelector(".toTop");

topBtn.onclick = () => window.scrollTop({ top: 0, behavior: "smooth" });