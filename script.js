function mostrarNome() {
    let nome = document.getElementById("nome").value;

    if (nome === "") {
        alert("Digite um nome!");
    } else {
        document.getElementById("resposta").innerText = "Olá, " + nome + " 👋";
    }
}