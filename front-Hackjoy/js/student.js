function verificaSeStudentEstaLogado() {
    console.log(getToken());
}

function carregaStudentAtual() {
    get("https://hackjoy-api.herokuapp.com/students/" + getIdUserEntity(), {}, function(data, textStatus, xhr) {
        // console.log(data);
        $("#student_name").text(data["user"]["name"]);
    }, true);
}

$(document).ready(() => {

    carregaStudentAtual();

    $("#btnsubmit").on("click", (e) => {
        e.preventDefault();

        if (formularioEstaValido("formLoginStudent")) {
            let email = $("#email_login").val();
            let password = $("#password_login").val();

            loginStudent(email, password);
        }

    })

})