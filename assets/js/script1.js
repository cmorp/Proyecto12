
const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")
const input3 = document.querySelector(".input3")
const verify = document.querySelector("button")

function verifyStickers() {
    const a = Number(input1.value)
    const b = Number(input2.value)
    const c = Number(input3.value)
    const total = (a + b + c)

    if (total > 10) {
        result.innerHTML = "¡Agregaste demasiados stickers!"

    } else if (total == 1) {
        result.innerHTML = `Has agregado ${total} stickers`

    } else if (total > 0) {
        result.innerHTML = `Has agregado ${total} stickers`

    } else {
        result.innerHTML = "No has agregado ningún sticker :("

    }
}