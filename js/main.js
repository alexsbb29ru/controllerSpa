function init() {
    setTextData()
}

function setTextData() {
    //Устанавливаем текстовые значения в блоки
    let vectorBlock = document.getElementById("vector-block")
    let centralBlock = document.getElementById("central-block")
    let cpiBlock = document.getElementById("cpi-block")
    let boardText = document.getElementById("board-text")

    vectorBlock.innerText = "Вектор"
    centralBlock.innerText = "Название блока"
    cpiBlock.innerText = "ЦПИ"
    boardText.innerText = "Кросс-плата"

    generateSlots()
}

function generateSlots() {
    let slotCount = 9
    let mainSlotBlock = document.getElementById("main-slots-block")

    for (let i = 0; i < slotCount; i++) {
        let slotName = i == 0 ? "Main" : "Slave"

        let slotDiv =
            `<div class="slot-block" id="slot${i + 1}">
                <div class="slot-numb">Слот ${i + 1}</div>
                <div class="lamp red-lamp"></div>
                <div class="slot-name">${slotName}</div>
                <div class="slot-params">
                    <button onclick="changeLamp(this)" class="params-btn" slot-id="${i + 1}"><img src="img/settings.png" /></button>
                </div>
            </div>`

        mainSlotBlock.innerHTML += slotDiv
    }
}

function changeLamp(btn) {
    let slotId = btn.attributes["slot-id"].value
    let slot = document.getElementById(`slot${slotId}`)

    if (!parseInt(slotId))
        slot = document.getElementById(slotId)

    let slotLamp = slot.querySelector(".lamp")

    if (slotLamp.classList.contains("red-lamp")) {
        slotLamp.classList.remove("red-lamp")
        slotLamp.classList.add("green-lamp")
    }
    else {
        slotLamp.classList.remove("green-lamp")
        slotLamp.classList.add("red-lamp")
    }
}

init()