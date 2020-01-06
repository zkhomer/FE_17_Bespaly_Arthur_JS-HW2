for (var i = 0; i < 10;) {
    var hour = prompt("перевод часов в секунды")
    var min = hour * 60
    var sec = min * 60
    if (isNaN(hour)) {
        alert("ведите ЧИСЛО!")


    } else {
        console.warn(sec)
        break
    }
}
