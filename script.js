const buton = document.getElementById("kacanButon");

document.addEventListener("mousemove", (e) => {
    const butonRect = buton.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const mesafeX = Math.abs(mouseX - (butonRect.left + butonRect.width / 2));
    const mesafeY = Math.abs(mouseY - (butonRect.top + butonRect.height / 2));

    if (mesafeX < 100 && mesafeY < 50) {
        const yeniX = Math.random() * (window.innerWidth - butonRect.width);
        const yeniY = Math.random() * (window.innerHeight - butonRect.height);
        buton.style.left = yeniX + "px";
        buton.style.top = yeniY + "px";
    }
});
