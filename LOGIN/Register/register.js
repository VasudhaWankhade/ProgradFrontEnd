let registerBtn = document.querySelector('#register')
let firstName = document.querySelector('input[placeholder="firstname"]')
let lastName = document.querySelector('input[placeholder="lastname"]')
let contactNo = document.querySelector('input[placeholder="number"]')
let email = document.querySelector('input[placeholder="email"]')


registerBtn.addEventListener('click', (eve) => {
    eve.preventDefault()

    if (firstName.value != '' && lastName.value != '' && contactNo.value != '' && email.value != '') {
        alert("You registerd successfully !")
    } else {
        alert("Please enter valid details.")
    }
    console.log(typeof firstName.value)
})