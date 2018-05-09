const listagem_view = document.getElementById('listagem');

const mensagens = [];

function update_view() {
	mensagens.sort((a, b) => a.created_at > b.created_at ? -1 : 1);
	const items = mensagens.map(e => `<div class="link-bloco">
 	 <div class = link-bloco-centro>#${e.id}</div><h3>Autor(a) : ${e.author}</br></br> Titulo : ${e.title} </br> </br>Mensagem : ${e.msg}</h3> </div>`).join(" ");;
	listagem_view.innerHTML = '<ul>' + items + '</ul>';
}

function enviarMSG(mensagem) {
	fetch("http://150.165.85.16:9900/api/msgs", {
		method: "POST",
		body: JSON.stringify(mensagem)
	}).then(function (response) {
		return response.json();
	}).then(function (data) {
		console.log("Resposta: ", data);
		window.location.reload();
	})
}

function criarMSG() {
	mensagem = {}
	mensagem["title"] = document.getElementById("title").value;
	mensagem["msg"] = document.getElementById("msg").value;
	mensagem["author"] = document.getElementById("author").value;
	mensagem["credentials"] = document.getElementById("id").value + ":" + document.getElementById("senha").value;

	enviarMSG(mensagem)
	alert("Mensagem Enviada com Sucesso...");
	
}


function mudarEstado(entrada) {
	  var display = document.getElementById(entrada).style.display;
	  if (display == "none")
	    document.getElementById(entrada).style.display = 'block';
	  else
	    document.getElementById(entrada).style.display = 'none';
}


function check_empty() {
	if (document.getElementById('title').value == "" || document.getElementById('author').value == "" || document.getElementById('msg').value == "" || document.getElementById('id').value == "" || document.getElementById('senha').value == "") {
		alert("Preencha todos os Campos");
	} else {
		criarMSG();
	}
}

function div_show() {
	document.getElementById('abc').style.display = "block";
}

function div_hide() {
	document.getElementById('abc').style.display = "none";
}

fetch('http://150.165.85.16:9900/api/msgs',{
	
	 method: "POST",
	 body: form
});


fetch('http://150.165.85.16:9900/api/msgs')
.then(r => r.json())
.then(data => {
    Object.assign(mensagens, data);
    update_view();
})


