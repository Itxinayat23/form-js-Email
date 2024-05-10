function emailSend(){
     var userName=document.getElementById('name').value;
     var phone=document.getElementById('phone').value;
     var email=document.getElementById('email').value;

     var messageBody ="Name" + userName+
    "<br/> Phone"+ phone + 
    "<br/> Email"+email;
    email.send({
        Host : "smtp.elasticemail.com",
        Username : "itxinayat23@gmail.com",
        Password :"A8BB2F7BAD8E0CAB46B5BC16755B5F96622C",
        To : 'inayatalisjaana622510@gmail.com',
        From : "itxinayat23@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => alert(message)
    )
}