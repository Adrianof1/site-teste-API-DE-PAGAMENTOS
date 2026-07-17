const form = document.getElementById("payment-form");
const resultBox = document.getElementById("result-box");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const payload = {
    amount: Number(document.getElementById("amount").value),
    description: document.getElementById("description").value,
    email: document.getElementById("email").value,
  };

  resultBox.textContent = "Enviando requisição...";

  try {
    const response = await testarPagamento(payload);
    resultBox.textContent = JSON.stringify(response, null, 2);
  } catch (error) {
    resultBox.textContent = "Erro: " + error.message;
  }
});

// TODO: substituir esta função pelo código real de integração com a API de pagamentos.
async function testarPagamento(payload) {
  console.log("Payload enviado para a API:", payload);

  // Exemplo temporário (simulação). Será substituído pelo código da API.
  return {
    status: "simulado",
    mensagem: "Aguardando integração real com a API de pagamentos.",
    payload,
  };
}
