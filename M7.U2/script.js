let registerButton = document.querySelector('.register')
registerButton.addEventListener('click', Register)
let EnterButton = document.querySelector('.enter')
EnterButton.addEventListener('click', Enter)

function Register(){
    document.getElementById("Reg").style.display = "flex";
    document.getElementById("Ent").style.display = "none";
}
function Enter(){
    document.getElementById("Reg").style.display = "none";
    document.getElementById("Ent").style.display = "flex";
}