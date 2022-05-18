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