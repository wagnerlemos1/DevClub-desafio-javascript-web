# DevClub-desafio-javascript-web

## 🌟 Visão Geral  
Este projeto é um conversor de moedas em JavaScript feito como desafio do módulo Web do curso DevClub.  
Ele permite que o usuário selecione uma moeda de origem e uma moeda de destino, insira um valor e veja:  
- a moeda de origem com o valor digitado, formatado com o símbolo correto;  
- a moeda de destino com o valor convertido segundo uma taxa fixa;  
- a atualização dinâmica das imagens e nomes das moedas conforme a seleção.  

---

## 🧰 Tecnologias Utilizadas

- **HTML5** — estrutura da página e elementos (inputs, selects, botões, imagens, parágrafos)  
- **CSS3** — estilos básicos e layout responsivo para boa apresentação  
- **JavaScript (Vanilla / DOM API)** — lógica de conversão, manipulação de DOM, formatação de moeda e controle de eventos  

---

## 📂 Estrutura do Projeto

/

├── 📄 index.html               # Página principal: estrutura da interface
├── 🎨 style.css                # Estilos visuais da aplicação
├── 🧠 scripts.js               # Lógica da conversão e manipulação do DOM
│
├── 🖼️ assets/                  # Imagens e ícones das moedas
│   ├── 🇧🇷 brasil2.png
│   ├── 🇪🇺 euro.png
│   ├── 🇬🇧 libra1.png
│   ├── 🇺🇸 estados-unidos (1) 1.png
│   └── ... outras imagens





---

## 🚀 Como Usar

1. Clone o repositório  
   ```bash
   git clone https://github.com/wagnerlemos1/DevClub-desafio-javascript-web.git
Abra index.html no navegador (você pode usar uma extensão Live Server ou abrir diretamente)

Insira um valor no campo de entrada

Selecione a moeda de origem (→ será mostrada à esquerda)

Selecione a moeda de destino (→ o valor convertido aparecerá à direita)

Clique em “Converter” para ver o resultado da conversão

---

🔄 Fluxo de Funcionamento / Lógica
Quando o usuário digita um valor e escolhe a moeda de origem, o valor é formatado com o símbolo da moeda e exibido à esquerda, sem conversão.

Ao clicar em “Converter”, o valor é convertido usando taxas fixas definidas no código (ex: dólar, euro, libra comparados ao real) e exibido com o símbolo da moeda destino à direita.

As imagens e nomes das moedas mudam de acordo com as seleções (origem/destino), oferecendo feedback visual imediato.
<br>
<br>
---
⚙️ Configuração e Customização
As taxas de câmbio estão definidas manualmente no arquivo scripts.js. Você pode atualizá-las conforme desejado.

As imagens de moedas ficam na pasta assets/. Para adicionar novas moedas, basta colocar a imagem e atualizar os selects + objeto de mapeamento no JS.

A formatação de moeda usa Intl.NumberFormat, o que facilita adaptar para outras localizações (locale) se necessário.
<br>
---

🧪 Possíveis Melhorias Futuras
Buscar taxas de câmbio dinâmicas via API — para refletir a cotação atual do mercado.

Validar o input para aceitar vírgulas, pontos e diferentes formatos numéricos.

Melhorar a interface com responsividade, temas (modo claro/escuro) e feedbacks de erro.

Suporte para mais moedas e atualização automática da lista.
<br>
---

📄 Licença & Créditos
<br>
Este projeto é de código aberto — sinta-se à vontade para usar, adaptar e aprender com ele.
Créditos a todos os autores de recursos (imagens, ícones) usados — verifique a pasta assets/ para licenças.
<br>
----

👤 Sobre o Autor
<br>
Criado por você (@wagnerlemos1).
<br>
Sinta-se à vontade para entrar em contato ou contribuir!
