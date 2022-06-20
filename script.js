const init = () => {
    const validateCPF = (event) => {
        
        const input = event.currentTarge;
        const regex = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;
        

        if($CPF) {
            submitButton.setAttribute('disabled', 'disabled');
            input.nextElementSibling.classList.add('error');
        } else {
            sublimeButton.removeAttribute('disabled');
            input.nextElementSibling.classList.remove('error');
        }
    }

    const validatePassword = (event) =>{
        const input = event.currentTarget;

    }
    
    const inputCPF = document.querySelector('input [type="CPF"]');
    const inputPedido = document.querySelector('input [type="Pedido"]');
    const submitButton = document.querySelector('.login__submit');

    if(submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            



            
            submitButton.textContent = "verificando";

            fetch('https://sheetdb.io/api/v1/oej5hqfe8lvkc',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                   CPF: inputCPF.value,
                   password: inputPedido.value,
                })
            }).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data)
            })
        })
    }
   
}

window.onload = init;

function pedidoVerificar(){
    if 
}
