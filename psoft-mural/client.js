const listagem_view = document.getElementById('listagem');

const mensagens = [];

function update_view() {
	const items = mensagens.map(e => `<li>Titulo: ${e.title}, Mensagem:${e.msg}, Autor: ${e.author}, Enviado em:${e.created_at}</li>`).join("\n");
	listagem_view.innerHTML = '<ul>' + items + '</ul>';
}

function enviarMSG() {
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
	mensagem["title"] = document.getElementById("titulo").value;
	mensagem["mensagem"] = document.getElementById("mensagem").value;
	mensagem["autor"] = document.getElementById("autor").value;
	mensagem["credenciais"] = document.getElementById("id").value + ":" + document.getElementById("senha").value;

	enviarMSG(mensagem)
	
}


function mudarEstado(entrada) {
	  var display = document.getElementById(entrada).style.display;
	  if (display == "none")
	    document.getElementById(entrada).style.display = 'block';
	  else
	    document.getElementById(entrada).style.display = 'none';
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


