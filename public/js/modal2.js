const dialog = document.querySelector('dialog')
const modifier= document.querySelector('#modifier')
const closeButtonDialog = document.querySelector('dialog button')

modifier.addEventListener("click", ()=>{
    dialog.showModal()
    
})

closeButtonDialog.addEventListener("click", ()=>{
    dialog.close();
    window.location.href ="/auth/admin/users/"
})