function sendEmail() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    // console.log(name.value);
    // console.log(email.value);
    // console.log(subject.value);
    // console.log(message.value);
    let check = "@gmail.com";
    const mes = email.value;
    if (name.value != "" && email.value != "" && subject.value != "" && mes.includes(check)) {
        Email.send({
            Host: "smtp.gmail.com",
            Username: name.value,
            From: email.value,
            Subject: subject.value,
            Body: message.value,

        })
        .then(function (message) {
            alert("mail sent successfully");
            location.reload();
        });

    }
}