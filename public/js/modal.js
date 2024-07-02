const dialog = document.querySelector('dialog')
const update = document.querySelector('#update')

const closeButtonDialog = document.querySelector('dialog button')

update.addEventListener("click", ()=>{
    dialog.showModal()
    
})

closeButtonDialog.addEventListener("click", ()=>{
    dialog.close();
})