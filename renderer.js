window.electronAPI.onSetVersion((event, value) => {
    const element = document.getElementById(`app-version`)
    if (element) element.innerText = `v` + value 
})

const Buttons = {
    close: document.querySelector(`#exit`),
    handle: document.querySelector(`#handle`),
}

const result = document.querySelector(`#result`);

Buttons.close.addEventListener(`click`, () => {
  window.electronAPI.closeWindow();
});

Buttons.handle.addEventListener(`pointerdown`, (evt) => {
    result.textContent = `pointerdown`;
});

Buttons.handle.addEventListener(`pointerup`, () => {
    if (result.textContent.length > 0) {
        result.textContent += ' >>> '
    }
    result.textContent += `pointerup`;
});