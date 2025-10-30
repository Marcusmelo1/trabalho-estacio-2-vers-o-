const escolhas = document.querySelectorAll(".escolha");

escolhas.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const textoOriginal = link.textContent.trim();
        const textoLower = textoOriginal.toLowerCase();

        // Pega o href e o ID base (sem o '#')
        const idHref = link.getAttribute("href");
        const idBase = (idHref && idHref.startsWith("#")) ? idHref.slice(1) : null;

        // 🔹 Caso seja botão de voltar
        if (
            textoLower.includes("voltar") ||
            textoLower.includes("inicio") ||
            textoLower.includes("home") ||
            textoLower.includes("back")
        ) {
            const voltarElemento = document.getElementById("voltar");
            if (voltarElemento) {
                voltarElemento.scrollIntoView({ behavior: "smooth" });
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
            return;
        }

        // 🔹 Cria a lista de tentativas de ID
        const tentativas = [
            idBase, // Prioridade máxima: o ID do href
            textoOriginal.replace(/\s+/g, ""), 
            textoLower.replace(/\s+/g, ""), 
            textoLower.replace(/\s+/g, "-"), 
            textoOriginal,
            textoLower,
            textoOriginal.replace(/\s+/g, "_"), 
            textoLower.replace(/\s+/g, "_"),
        ].filter(Boolean).filter((value, index, self) => self.indexOf(value) === index);

        // 🔹 Tenta encontrar o destino
        let destino = null;
        for (const tentativa of tentativas) {
            destino = document.getElementById(tentativa);
            if (destino) break;
        }

        // 🔹 Faz o scroll se encontrar
        if (destino) {
            destino.scrollIntoView({ behavior: "smooth" });
            if (history.pushState) {
                history.pushState(null, null, '#' + destino.id);
            }
        } else {
            console.warn(`❌ Nenhum elemento encontrado para "${textoOriginal}".`);
            console.log("IDs tentados:", tentativas.join(", "));
        }
    });
});
