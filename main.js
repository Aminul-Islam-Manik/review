const clicked = document.getElementsByClassName('extend')
const modalInfo = document.getElementsByClassName('modal-info')
for(let i = 0; i < clicked.length; i++){
    clicked[i].addEventListener('click', function(){
        // if(modalInfo[i].classList.contains('modal-open')){
        //     modalInfo[i].classList.remove('modal-open')
        // }else{
        //     modalInfo[i].classList.add('modal-open')
        // }
        modalInfo[i].classList.toggle('modal-open')
    })
}


