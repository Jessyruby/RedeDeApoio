document.addEventListener("DOMContentLoaded", () => {
    const callButton = document.getElementById("callButton");

    if (/Mobi|Android|iPhone/.test(navigator.userAgent)) {
        callButton.style.display = "block";
        callButton.addEventListener("click", () => {
            window.location.href = "tel:180";
        });
    } else {
        callButton.style.display = "none";
    }
});