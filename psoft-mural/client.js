const listagem_view = document.getElementById('listagem');

const mensagens = [];

function update_view() {
    const items = mensagens.map(e => `<li>${e.title}, ${e.msg}, ${e.created_at}, ${e.author}</li>`).join("\n");
    listagem_view.innerHTML = '<ul>' + items + '</ul>';
}

function iniciarCadastro() {
	
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


/*

fetch('http://150.165.85.16:9900/api/msgs')
.then(r => r.json())
.then(data => {
    Object.assign(mensagens, data);
    update_view();
})

*/

