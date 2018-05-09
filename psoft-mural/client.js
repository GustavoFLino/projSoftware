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

function deletarMSG() {
	const login = document.getElementById("login").value;
	const pass = document.getElementById("pass").value;
	const numMsg = document.getElementById("nmsg").value;

	fetch('http://150.165.85.16:9900/api/msgs/' + numMsg, {
		method: 'DELETE',
		body: JSON.stringify({
			credentials: login + ":" + pass
		})
	});
	alert("Mensagem Deletada com Sucesso...")
	
}

//verificação de vazio do enviar e deletar
function check_emptyE() {
	if (document.getElementById('title').value == "" || document.getElementById('author').value == "" || document.getElementById('msg').value == "" || document.getElementById('id').value == "" || document.getElementById('senha').value == "") {
		alert("Preencha todos os Campos");
	} else {
		criarMSG();
	}
}

function check_emptyD() {
	if (document.getElementById('login').value == "" || document.getElementById('pass').value == "" || document.getElementById('nmsg').value == "") {
		alert("Preencha todos os Campos");
	} else {
		deletarMSG();
	}
}


//Function para popup do enviar e deletar
function div_show(element) {
	document.getElementById(element).style.display = "block";
}

function div_hide(element) {
	document.getElementById(element).style.display = "none";
}


//fetchs
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


