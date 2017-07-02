const form = document.namedItem("file-form");
form.addEventListener("submit", function(event) {

    const oData = new FormData(form);

    var oReq = new XMLHttpRequest();

    oReq.open("POST", "/uploads");

    oReq.send(oData);

});