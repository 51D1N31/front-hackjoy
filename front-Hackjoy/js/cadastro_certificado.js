function imagemAlterada(event) {
    var reader = new FileReader();
    reader.onload = function () {
        $('.note-editable').css('background-image', 'url(' + reader.result + ')');
        $('.note-editable').css('background-size', '842px 595px');
    }
    reader.readAsDataURL(event.target.files[0]);
}