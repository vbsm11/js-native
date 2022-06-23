// обработчик - handler - подписчик - subscriber - слущатель - listener -> function
// Handler будет вызван при наступлении события
// Handler будет вызван с аргументом ({})
// {} (сведения о произошедшем событии) -> event, ev, e

const sm = document.getElementById('small');
const md = document.getElementById('medium');
const bg = document.getElementById('big');
const a = document.getElementById('a');


function onclickHandlerSm(e) {
    e.stopPropagation();
    alert('yo');
}

function anchorHandler(e) {
    e.preventDefault();
    alert('Смерть ссылкам')
}

// sm.onclick = onclickHandler;
// sm.onclick = null;

sm.addEventListener("click", onclickHandlerSm);
// //
// sm.removeEventListener("click", onclickHandler);
md.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log(e.currentTarget.id)
})
bg.addEventListener("click", (e) => console.log('Hey'));
a.addEventListener("click", anchorHandler);
