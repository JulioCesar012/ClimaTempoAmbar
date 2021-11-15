# Clima tempo Avaliação Projeto Frontend

Projeto para busca de temperatura atual, máxima e miníma de cidades.

## 💻 Web preview

<h1 align="center">
    <img src="src/assets/TelaInicialPC.png">
</h1>

📷 [Imagens](#-outras-imagens)

---

## ℹ️ Sobre o projeto

- ✅ Desenvolvido para avaliação no processo seletivo para vaga de frontend developer!

- ✅ O projeto tem como objetivo realizar a busca de qualquer cidade e retornar sua temperatura atual, miníma e máxima.Também deve se gravar os locais buscados até o momento.

- ✅ Através do Redux persist conseguimos manter o histórico de cidade já pesquisadas, assim o usuário pode clicar nela e conferir todas suas informações.

- ✅ Um dos pontos a destacar é que pode pesquisar qualquer cidade incluindo de outro país. Um dos diferenciais foi isso. Eu optei por fazer inputs onde captura a cidade que o usuário digitar, assim não fica limitado a tres cidades apenas.

* ✅ Algumas personalizações: Fiz o uso do efeito ThreeDots da biblioteca react-loader-spinner para o carregamento de dados, para ter um pouco mais de interação. Além disso também coloquei Alert de erro para quando o usuário esquecer de digitar a cidade ou a mesma não ser encontrada.

* OBS: Se o resultado for igual pra ambas temperaturas, é normal, pois ele faz calculo aproximado, e certas cidades acontecem de ter a temperatura minima e máxima iguais a atual. Experimente cidades como Paraná, São Paulo e Rio de Janeiro, essas a temperatura fica normal.

* Você precisa configurar todo o ambiente react.js instalando suas dependencias através de um dos comandos abaixo:

- <img src="https://img.shields.io/badge/-Nodejs-026e00?logo=Node.js&logoColor=white&labelColor=026e00" alt="Javascript" /> - npm install

- <img src="https://img.shields.io/badge/-Yarn-117cad?logo=yarn&logoColor=white&labelColor=117cad" alt="Javascript" /> - yarn install

---

## ⚫ Na pasta Web (frontend):

🔲 Inicie o frontend também com o comando do yarn.

## 🕵️ Observação:

📜 Eu conseguiria fazer o uso do ícone da api porém ia deixar o código um pouco verboso. Por isso optei por deixar um estático.

---

## 🚀 Tecnologias usadas

💚 Frontend:

- <img src="https://img.shields.io/badge/-Javascript-D2B523?logo=javascript&logoColor=white&labelColor=D2B523" alt="Javascript" />

- <img src="https://img.shields.io/badge/-React.js-61dafb?logo=react&logoColor=white&labelColor=61dafb" alt="Reactjs" />

- <img src="https://media.vlpt.us/images/zofqofhtltm8015/post/10f9a3b9-114d-4ba9-a903-49c122bbe25d/image.png" width="80" alt="Axios" />

- <img src="https://img.shields.io/badge/-React_Router_Dom-E94949?logo=react-router&logoColor=white&labelColor=E94949" alt="react router-dom" />

- <img src="https://img.shields.io/badge/-Redux-764abc?logo=redux&logoColor=white&labelColor=764abc" alt="Redux" />

* 🗃️ Outras Bibliotecas que usei:

* <img href="https://material-ui.com/pt/" src="https://img.shields.io/badge/-Material UI-2786E5?logo=material-ui&logoColor=white&labelColor=2786E5" alt="Material UI" />

* redux-devtools-extension
* redux-logger
* redux-persist
* redux-thunk
---

Teste a aplicação online [clicando aqui][linkapp]

## 📷 Outras Imagens

<div align="center">
    <div style="display: flex; align-items: flex-start;">
        <img src="src/assets/BuscaRecentes.png" width="300px">
        &nbsp;&nbsp;
        <img src="src/assets/ErroInserirCidade.png" width="300px">
    </div>
</div>

 <h2 align="center">
     <img src="src/assets/CidadeNaoEncontrada.png">
 </h2>

<div align="center">
    <div style="display: flex; align-items: flex-start;">
        <img width="250px" src="src/assets/TelaInicialMobile1.jpeg">
        &nbsp;&nbsp;
        <img width="250px" src="src/assets/TelaInicialMobile3.jpeg">
    </div>
</div>


<h2 align="center">
👨‍💻 Developer

De @JulioCesar012 para Processo Seletivo Ambar

Feito com muito 💚 e muito ☕!
</h2>

[linkapp]:https://climatempo2021.herokuapp.com
