function imagemAlterada(event) {
    var reader = new FileReader();
    reader.onload = function () {
        $('.note-editable').css('background-image', 'url(' + reader.result + ')');
        $('.note-editable').css('background-size', '842px 595px');
    }
    reader.readAsDataURL(event.target.files[0]);
}

function cadastrarCertificado(name, image, phrase) {
    $("#btnsubmit").attr("disabled", "disabled");
    $("#btnsubmit").html(
        "<span class='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>" +
        "<span class='visually-hidden'>Carregando...</span>&nbsp;&nbsp;Carregando..."
    );

    let certificado = {
        "name": name,
        "image": image,
        "phrase": phrase
    };

    post("https://hackjoy-api.herokuapp.com/certificates/new", certificado, function (data, textStatus, xhr) {

        console.log("entrou");
        if (typeof data == "object") {
            swal({
                title: "Cadastrado com sucesso!",
                icon: "success",
                buttons: true,
                dangerMode: false,
            }).then((willDelete) => {
                window.location = "login.html";
            });
        }

        $("#btnsubmit").removeAttr("disabled");
        $("#btnsubmit").html("Cadastrar");
    });
}

$(document).ready(() => {

    $("#cadastroCurriculo").on("click", (e) => {
        e.preventDefault();

        let name = 'legalzinn';
        let image = 'legazinn';
        let phrase = 'bem locon'
        cadastrarCertificado(name, image, phrase);
    })

})