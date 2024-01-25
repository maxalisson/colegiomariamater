    // Função para manipular o envio do formulário
    document.getElementById("whatsappForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Coleta os valores dos campos
        var nome = document.getElementById("nome").value;
        var mensagem = encodeURIComponent("Olá, sou o " + nome + ". Gostaria de falar com algum representante da escola.");

        // Número de telefone do WhatsApp
        var numeroWhatsapp = "+5511949632480"; // Substitua pelo número do WhatsApp

        // Cria a URL com a mensagem e o número do WhatsApp
        var url = "https://wa.me/" + numeroWhatsapp + "?text=" + mensagem;
        console.log('url')
        // Abre o WhatsApp em uma nova aba
        window.open(url, "_blank");
    });