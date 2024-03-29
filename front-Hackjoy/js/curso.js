let imagemEmBase64 = null;

function imagemAlterada(event) {
    var reader = new FileReader();
    reader.onload = function () {
        imagemEmBase64 = reader.result;

        $('.note-editable').css('background-image', 'url(' + reader.result + ')');
        $('.note-editable').css('background-size', '842px 595px');
    }
    reader.readAsDataURL(event.target.files[0]);
}

function certificadoList() {

    get("https://hackjoy-api.herokuapp.com/certificates", {}, function (data, textStatus, xhr) {

        var listCertificado = data;
        console.log(listCertificado);

        for (let i = 0; i < data.length; i++) {
            $("#list").append(
                "<option>" + listCertificado[i]["name"] + "</option>"
            );
        }
    }, true);
}

function cadastrarCurso(name, about, description, image, id_certificate) {
    $("#btnsubmit").attr("disabled", "disabled");
    $("#btnsubmit").html(
        "<span class='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>" +
        "<span class='visually-hidden'>Carregando...</span>&nbsp;&nbsp;Carregando..."
    );

    let curso = {
        "id_certificate": id_certificate,
        "name": name,
        "about": about,
        "description": description,
        "image": image,
    }

    console.log("foi até aqui");

    post("https://hackjoy-api.herokuapp.com/courses/new", curso, function (data, textStatus, xhr) {


        $("#btnsubmit").removeAttr("disabled");
        $("#btnsubmit").html("Cadastrar");

    })
}

$(document).ready(() => {

    certificadoList();

    $("#cadastroCurso").on("click", (e) => {
        e.preventDefault();

        let name = $("#name").val();
        let about = $("#about").val();
        let description = $("#description").val();
        //a imagem não está sendo enviada corretamente, error 500.
        let image = imagemEmBase64;
        let id_certificate = "3";

        cadastrarCurso(name, about, description, image, id_certificate);
    });

})