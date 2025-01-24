function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById("resultado").innerText = "Por favor, insira todas as notas!";
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;
    const status = media >= 7 ? "Aprovado" : "Recuperação";

    document.getElementById("resultado").innerText = `Média: ${media.toFixed(2)} - ${status}`;
}
