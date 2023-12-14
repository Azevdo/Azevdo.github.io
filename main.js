const screen1 = document.querySelector("screen1")
const screen2 = document.querySelector("screen2")

function handleClick(event) {
    event.preventDefault()

}

let frases = [
    "Hoje você tem a oportunidade de construir o amanhã que você deseja.",
    "Sonhe sem medos, viva sem limites.",
    "Se o plano não funciona, mude o plano, não a meta.",
    "Você é mais valente do que acredita, mais forte do que parece e está mais preparado do que imagina.",
    "A luz só ilumina na escuridão, por isso faça de toda escuridão uma oportunidade de brilhar.",
    "Não se conforme com o que você precisa, lute pelo que você merece.",
    "Para ter um negócio de sucesso, alguém, algum dia, teve que tomar uma atitude de coragem",
    "A vida se contrai e se expande proporcionalmente à coragem do indivíduo",
    "Uma palavra de encorajamento durante o fracasso vale mais do que uma hora de elogio após o sucesso.",
    "Com fé em Deus e determinação, todos os seus sonhos podem se tornar realidade."

];

function selecioneFrase() {
    let indice = Math.floor(Math.random() * frases.length);
    return frases[indice];
}

function trocarTela() {
    let screen1 = document.querySelector(".screen1");
    let screen2 = document.querySelector(".screen2");
    let fraseSorte = document.querySelector("#fraseSorte");

    fraseSorte.innerHTML = selecioneFrase();
    screen1.classList.add("hide");
    screen2.classList.remove("hide");
}

function abrirBiscoito () {
    let screen1 = document.querySelector(".screen1");
    let screen2 = document.querySelector(".screen2");

    screen2.classList.add("hide");
    screen1.classList.remove("hide");

}

