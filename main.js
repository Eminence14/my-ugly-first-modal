const openModalBtn = document.querySelector('.open-modal')
const closeModalBtn = document.querySelector('.close')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('#overlay')
const learnMore = document.querySelector('.learn')
const closers = [closeModalBtn, overlay, learnMore]

closers.forEach(closer => {
    closer.addEventListener('click', closeModal)
})

openModalBtn.addEventListener('click', () => {
    modal.classList.add('active')
    overlay.classList.add('active')
})

function closeModal () {
    modal.classList.remove('active')
    overlay.classList.remove('active')
}