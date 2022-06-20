function ajaxDinamico(url, tipo, dados, sucesso) {
    $.ajax({
        url: url,
        type: tipo,
        data: dados,
        headers: { "Content-type": "application/json" },
        success: function(data, textStatus, xhr) {
            sucesso(data, textStatus, xhr);
        },
        error: function(response) {
            console.error(response);

            swal(response.responseJSON[0], "", "error");
        }
    });
}

function get(url, dados, sucesso) {
    ajaxDinamico(url, "GET", JSON.stringify(dados), sucesso);
}

function post(url, dados, sucesso) {
    ajaxDinamico(url, "POST", JSON.stringify(dados), sucesso);
}

function put(url, dados, sucesso) {
    ajaxDinamico(url, "PUT", JSON.stringify(dados), sucesso);
}

function delet(url, dados, sucesso) {
    ajaxDinamico(url, "DELETE", JSON.stringify(dados), sucesso);
}

function patch(url, dados, sucesso) {
    ajaxDinamico(url, "PATCH", JSON.stringify(dados), sucesso);
}

function formularioEstaValido(id_formulario) {
    let form = $("#" + id_formulario)[0];
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return false;
    }
    return true;
}

$(document).ready(function() {

    $('#sidebarCollapse, #sidebarCollapse1').on('click', function() {
        $('#sidebar').toggleClass('active');
        $("#sidebarCollapse").toggleClass('active');
    });

});