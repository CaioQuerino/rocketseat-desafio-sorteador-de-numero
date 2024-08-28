function sortearNumero() {
    // Obtém os valores mínimos e máximos
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);

    // Gera um número aleatório entre min e max
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;

    // Exibe o resultado
    document.getElementById("resultado").textContent = numeroSorteado;
}