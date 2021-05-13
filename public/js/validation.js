const street = document.getElementById('street')
const street_number = document.getElementById('street_number')
const city = document.getElementById('city')
const country = document.getElementById('country')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (street.value === '' || street.value == null){
        messages.push('Zadejte Adresu')
    }

    if(!isNaN(street.value)){
        messages.push('Adresa nemůže být pouze číslo')
    }

    if(isNaN(street_number.value)){
        messages.push('Číslo Popisné musí být číslo')
    }
    

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    
})