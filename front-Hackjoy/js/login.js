function loginStudent(email, password) {
    $("#btnsubmit").attr("disabled", "disabled");
    $("#btnsubmit").html(
        "<span class='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>" +
        "<span class='visually-hidden'>Carregando...</span>&nbsp;&nbsp;Carregando..."
    );

    let student = {
        "email": email,
        "password": password,
    };

    post("https://hackjoy-api.herokuapp.com/students/login", student, function (data, textStatus, xhr) {
        console.log("Token retornado: " + data);

        $("#btnsubmit").removeAttr("disabled");
        $("#btnsubmit").html("Entrar");
    });
}

$(document).ready(() => {

    $("#btnsubmit").on("click", (e) => {
        e.preventDefault();

        if (formularioEstaValido("formLoginStudent")) {
            let email = $("#email_login").val();
            let password = $("#password_login").val();

            loginStudent(email, password);
        } else {
            console.log("is not valid");
        }


    })

})