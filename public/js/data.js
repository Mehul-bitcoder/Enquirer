function finalCheck() {
    let form_item = document.getElementsByClassName('form_item')
    var scount = 0;
    for (i = 0; i < form_item.length; i++) {
        if (form_item[i].className === 'form_item success') {
            scount++
        }
    }
    if (scount === form_item.length) {
        console.log("all Good")

        // send data

        let fname = document.getElementById('fullname').value;
        let email = document.getElementById('email').value;
        let age = document.getElementById('age').value;
        let contact = document.getElementById('contact').value;
        let address = document.getElementById('address').value;
        let course = document.getElementById('course').value;


        let data = {
            name: fname,
            email: email,
            age: age,
            mobile: contact,
            address: address,
            course: course
        }
        const mydata = JSON.stringify(data)


        var request = new XMLHttpRequest();
        request.open("POST", `http://localhost:2500/data`);
        request.setRequestHeader("content-type", "application/json")
        request.send(mydata);

        window.location.href = "http://localhost:2500/data";
    }
}

function validation() {
    let fname = document.getElementById('fullname');
    let email = document.getElementById('email');
    let age = document.getElementById('age');
    let contact = document.getElementById('contact');
    let address = document.getElementById('address');
    let course = document.getElementById('course');
    //name
    if (fname.value === "") {
        setError(fname, "Name Cannot be Blank")
    } else {
        setSuccess(fname)
    }
    //email
    var regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (email.value.trim() === '') {
        setError(email, "Email cannot be blank")
    }
    if (!email.value.match(regEmail)) {
        setError(email, "Enter correct Email")
    } else {
        setSuccess(email)
    }
    //age
    if (age.value === "") {
        setError(age, "Age cannot be Blank")
    } else {
        setSuccess(age)
    }
    //mobile number
    var regMob = /^((\+)?(\d{2}[-]))?(\d{10}){1}?$/
    if (contact.value === "") {
        setError(contact, "Mobile Number cannot be Blank")

    } if (!contact.value.match(regMob)) {
        setError(contact, "Enter correct Mobile Number")
    } else {
        setSuccess(contact)
    }
    // address
    if (address.value === "") {
        setError(address, "Address cannot be Blank")
    } else {
        setSuccess(address)
    }
    //Course
    if (course.value === "") {
        setError(course, "course cannot be Blank")
    } else {
        setSuccess(course)
    }
    finalCheck()
}


function setSuccess(input) {
    const form_item = input.parentElement
    form_item.className = "form_item success"
}

function setError(input, message) {
    const form_item = input.parentElement
    const small = form_item.querySelector("small")
    small.textContent = message
    form_item.className = "form_item error"
}

function getValue() {
    validation()
}

