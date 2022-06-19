/*
    Já que a API ta retornando um array, é só manipular esse array
    Ai tu pode guardar esse token num local storage
    tendisó deixa eu ver um bgl

    agora, as próximas requisições vão precisar desse token para saber que o usuário está autenticado no sistema
    manda esse código aqui pro github que eu faço essa parte que eu acho que vai ser um pouco complicadinho de arrumar isso ae
    blz? d
    fecho, depois eu vejo oq tu fez e tento entender o codigo, dai ggblz
    manda na dev-s e na main
    blzz flw to indo
    floww
*/

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