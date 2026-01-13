$(document).ready(function() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('body').addClass('mobile');
    } else {
        $('body').addClass('computer');
    };
});
document.getElementById("y").textContent = new Date().getFullYear();