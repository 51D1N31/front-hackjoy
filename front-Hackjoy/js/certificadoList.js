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
                "</td>" +

                "<td>" +
                "</td>" +
                "</tr>"
            );
        }
    }, true);
}

$(document).ready(() => {

    carregaCertificados();

})