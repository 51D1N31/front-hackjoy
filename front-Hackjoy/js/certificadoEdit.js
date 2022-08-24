function verCertificado() {

    let getUrl = (window.location).href;
    let id = getUrl.substring(getUrl.lastIndexOf('=') + 1);
    console.log(id);

    get("https://hackjoy-api.herokuapp.com/certificates/{" + id + "}", {}, function (data, textStatus, xhr) {

        console.log(data);
    });
}

$(document).ready(() => {

    verCertificado();
})