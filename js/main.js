let slotColorTable
let slotCommandsColorTable
let crossBoardId
/**
 * Инициализация всех данных
 */
function init() {
    setTextData()
    slotCommandsColorTable = {
        disabled: "disabled-block",
        active: "active-block",
        error: "error-block"
    }
    slotColorTable = {
        0: slotCommandsColorTable.disabled,
        1: slotCommandsColorTable.active,
        2: slotCommandsColorTable.error
    }
    crossBoardId = "board-block"
}
/**
 * Инициализация текстовых данных в блоках
 */
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
}
/**
 * Изменение цвета лампочки
 * @param {Element} slot Слот, на который нажали
 */
function changeSlotColor(slot) {
    //Выведем всплывашку с вопросом о значении
    let command = prompt("Введите 0 - отключен, 1 - активен или 2 - ошибка", 0)
    //Если не целое число, остановим код
    if (!parseInt(command))
        if (command != 0)
            return false

    //Если команды нет в таблице, остановим выполнение
    if (!slotColorTable[command])
        return

    //Получаем CSS-класс по коду, который ввели
    let bgCssClass = slotColorTable[command]

    //Удаляем все CSS-классы из таблицы, чтобы не привязываться к куче условий
    removeSlotClasses(slot)
    //Добавляем полученный по команде CSS-класс
    slot.classList.add(bgCssClass)

    if (slot.id === crossBoardId && bgCssClass !== slotCommandsColorTable.active) {
        disableSlots()
    }
}

function disableSlots() {
    let slots = document.querySelectorAll(".block-child")

    slots.forEach((slot) => {
        removeSlotClasses(slot)
        slot.classList.add(slotCommandsColorTable.disabled)
    })
}

function removeSlotClasses(slot) {
    for (let i in slotColorTable) {
        if (slot.classList.contains(slotColorTable[i]))
            slot.classList.remove(slotColorTable[i])
    }
}

init()