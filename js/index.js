document.querySelectorAll('.button-value').forEach(element => {
    element.addEventListener('click', mudarCor)
});


document.getElementById("submit").addEventListener("click", submit)


function submit(){
    let cardPrincipal = document.querySelector('#card-principal')
    let cardSecundary = document.querySelector('#class-secundary')
    cardPrincipal.classList.add('hide')
    cardSecundary.classList.remove('hide')
}

function mudarCor(event){
    let buttonValue = document.querySelectorAll('.button-value')
    buttonValue.forEach(element => {
        element.classList.remove('active')
    });
    event.target.classList.add('active')
    let score = document.querySelector('.star-score')
    score.innerText = event.target.innerText
}