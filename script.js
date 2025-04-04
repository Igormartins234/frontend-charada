// Lista de charadas
const charadas = [
    {'id': 1, 'pergunta': 'O que é, o que é? Cai em pé e corre deitado.', 'resposta': 'Chuva'},
    {'id': 2, 'pergunta': 'O que é, o que é? Tem cabeça, tem dente, tem barba, não é gente e fala como a gente.', 'resposta': 'Alho'},
    {'id': 3, 'pergunta': 'O que é, o que é? Quanto mais se tira, maior fica.', 'resposta': 'Buraco'},
    {'id': 4, 'pergunta': 'O que é, o que é? Feito para andar e não anda.', 'resposta': 'Rua.'},
    {'id': 5, 'pergunta': 'O que é, o que é? Dá muitas voltas e não sai do lugar.', 'resposta': 'Relógio'},
    {'id': 6, 'pergunta': 'O que é, o que é? Tem 5 dedos, mas não tem unha', 'resposta': 'Luva'},
    {'id': 7, 'pergunta': 'O que é, o que é? Pode passar diante do sol sem fazer sombra.', 'resposta': 'Vento'},
    {'id': 8, 'pergunta': 'O que é, o que é? Nasce a socos e morre a facadas.', 'resposta': 'Pão'},
    {'id': 9, 'pergunta': 'O que é, o que é? Subindo o sol vai se encurtando, descendo o sol vai se alongando.', 'resposta': 'Sombra'},
    {'id': 10, 'pergunta': 'O que é, o que é? Quanto maior menos se vê.', 'resposta': 'Escuridão'}
];

let respostaCorreta = ''; 

// Função para buscar uma charada aleatória
function getCharada() {
    const charadaElement = document.getElementById('charada');
    charadaElement.style.opacity = '0'; // Inicia a transição de opacidade

    setTimeout(() => {
        const indiceAleatorio = Math.floor(Math.random() * charadas.length);
        const charadaSelecionada = charadas[indiceAleatorio];

        // Atualiza a pergunta da charada
        charadaElement.textContent = charadaSelecionada.pergunta;

        // Armazena a resposta correta
        respostaCorreta = charadaSelecionada.resposta;

        charadaElement.style.opacity = '1'; // Finaliza a transição de opacidade
    }, 300); // Tempo para a transição
}

// Função para verificar a resposta do usuário
function verificarResposta() {
    const respostaInput = document.getElementById('resposta');
    const resultado = document.getElementById('resultado');
    const respostaContainer = document.getElementById('resposta-container');
    const respostaTexto = respostaContainer.querySelector('p');

    if (respostaInput && resultado && respostaContainer) {
        const respostaUsuario = respostaInput.value.trim();

        // Verifica se o campo está vazio
        if (respostaUsuario === '') {
            alert('Por favor, insira uma resposta antes de verificar!');
            return;
        }

        const respostaFormatada = respostaCorreta.trim().toLowerCase(); // Formata a resposta correta
        if (respostaUsuario.toLowerCase() === respostaFormatada) {
            resultado.textContent = 'Parabéns! Você acertou!';
            resultado.style.color = 'green';
        } else {
            resultado.textContent = 'Resposta incorreta. Tente novamente!';
            resultado.style.color = 'red';
        }

        // Mostra a resposta correta com transição de opacidade
        respostaTexto.style.opacity = '0'; // Inicia a transição
        setTimeout(() => {
            respostaTexto.textContent = `Resposta correta: ${respostaCorreta}`;
            respostaTexto.style.opacity = '1'; // Finaliza a transição
        }, 300);
    }
    
}

// Função para carregar uma nova charada
function novaCharada() {
    // Limpa os campos e mensagens
    document.getElementById('resultado').textContent = '';
    document.getElementById('resposta').value = '';
    document.getElementById('resposta-container').querySelector('p').textContent = 'Resposta...';

    // Busca uma nova charada
    getCharada();
}

// Carrega a primeira charada ao iniciar
getCharada();
