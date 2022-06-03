$(document).ready(() => {
    /*
    $.ajax({
        url: "https://hackjoy-api.herokuapp.com/students",
        type: "GET",
        data: {
            "nomeDoUsuarioQueVaiSerCadastrado": "aaaaa",
            "email": "aaaaaa@gmail.com",
        },
        contentType: false,
        cache: false,
        processData: false,
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
        },
        success: function (response) {
            console.log("sucesso mlk");
            console.log("resposta do server: " + response);
        },
        error: function (response) {
            console.log("deu erro lek");
            console.error(response);
        }
    });
    
    console.log("Teste dando certo");
    
    */
    function cadastaUsuario() {
        let usuario = {
            "user": {
                "name": "student by ajax",
                "birth_date": "2022-04-20",
                "nationality": "Brazil",
                "document": "500.364.200-85",
                "gender": "Male",
                "email": "teste1@gmail.com",
                "password": "senha123"
            },
            "student": {
                "elo": 0
            }
        };

        $.ajax({
            url: "https://hackjoy-api.herokuapp.com/students/new",
            type: "POST",
            headers: { "Content-type": "application/json" },
            data: JSON.stringify(usuario),
            success: function (response) {
                console.log(response)
            },
            error: function (response) {
                console.error(response);
            }
        });
    }

    function ConfigPage() {
        document.getElementById('teacher_login').style.display = "none";
        document.getElementById('admin_login').style.display = "none";

        document.getElementById('teacher_cadastro').style.display = "none";
        document.getElementById('admin_cadastro').style.display = "none";

        document.getElementById('other').style.display = "none";
    }

    function check_user_login(type) {

        if (type == "user_student_login") {
            document.getElementById('student_login').style.display = "inline";

            document.getElementById('teacher_login').style.display = "none";
            document.getElementById('admin_login').style.display = "none";


        } else if (type == "user_teacher_login") {
            document.getElementById('teacher_login').style.display = "inline";

            document.getElementById('student_login').style.display = "none";
            document.getElementById('admin_login').style.display = "none";

        } else if (type == "user_admin_login") {
            document.getElementById('admin_login').style.display = "inline";

            document.getElementById('teacher_login').style.display = "none";
            document.getElementById('student_login').style.display = "none";

        }

    }

    function check_user_cadastro(type) {

        if (type == "user_student_cadastro") {


        } else if (type == "user_teacher_cadastro") {


        } else if (type == "user_admin_cadastro") {


        }
    }

    /* Testar esse if de mudar documento dependendo da região 
    function changeDocument(value) {
        if (value == "Brasil") {

            document.getElementById('cpf').style.display = "inline";
            document.getElementById('other').style.display = "none";

        } else {

            document.getElementById('other').style.display = "inline";
            document.getElementById('cpf').style.display = "none";

        }
    }*/

    $("body").ready(ConfigPage());

    $("#btnsubmit").on("click", (e) => {
        e.preventDefault();

        cadastaUsuario();
    })
}) 
