function carregaCertificados() {

    get("https://hackjoy-api.herokuapp.com/certificates", {}, function (data, textStatus, xhr) {

        var listCertificado = data;

        for (let i = 0; i < data.length; i++) {
            $("#list tbody").append(
                "<tr>" +
                "<th scope='row'>" + i + "</th>" +
                "<td>" +
                listCertificado[i]["name"] +
                "</td>" +

                "<td>" +
                "<a href='../html/certificadoEdit.html?id=" + i + "' class='btn btn-outline-secondary' id_certificado=" + listCertificado[i]["id"] + ">Abrir Certificado</a>" +
                "</td>" +

                "</tr>"
            );
        }
    }, true);
}

$(document).ready(() => {

    carregaCertificados();

})