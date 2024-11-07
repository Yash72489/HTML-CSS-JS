let net = navigator.onLine
if (net) {
    document.getElementsByTagName("li")
}
else {
    let random = document.getElementsByTagName("li")
    random[0].innerHTML = "OFFLINE"
    random[0].style.color = "red"
    random[0].style.fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
}




