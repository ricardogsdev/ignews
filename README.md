# <center>Blog News - ig.news</center>

Essa aplicação faz parte do curso da Rocketseat - Trilha ReactJs 
Nesse módulo aprendemos como o Next.js transforma a nossa maneira de desenvolver aplicações front-end e descobriremos conceitos importantes como SSR e SSG.
Aprendemos tambem a integrar a aplicação com a API do Stripe e criar uma assinatura.
Durante esse módulo eaprendemod como o front-end se transformou nos últimos anos com a possibilidade de termos funções back-end (serverless) executando em um ambiente front-end.
É muito comum o desenvolvimento de aplicações front-end que não estão conectadas a um único back-end hoje em dia, por isso, aprendemos o conceito de JAMStack e como conectar nosso front-end com um CMS.

## Tela Inicial

<img src="#" alt="tela" style="max-width:100%;">

## Linguagens e tecnologias utilizadas
<p align="left"> 
    <a href="https://www.w3schools.com/css/" rel="nofollow"> 
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" style="max-width:100%;"> 
    </a> 
    <a href="https://www.w3.org/html/" rel="nofollow"> 
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" style="max-width:100%;"> 
    </a> 
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="nofollow"> 
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" style="max-width:100%;"> 
    </a> 
    <a href="https://nodejs.org" rel="nofollow"> 
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" style="max-width:100%;"> 
    </a> <a href="https://reactjs.org/" rel="nofollow"> 
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" style="max-width:100%;"> 
    </a> <a href="https://git-scm.com/" rel="nofollow"> 
        <img src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="git" width="40" height="40" data-canonical-src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" style="max-width:100%;"> 
    </a> <a href="https://www.figma.com/" rel="nofollow"> 
        <img src="https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667" alt="figma" width="40" height="40" data-canonical-src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" style="max-width:100%;"> 
    </a>
    <a href="https://nextjs.org" rel="nofollow">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="nextjs" width="40" height="40" style="max-width:100%;"/>
    </a> 
</p>

## Requisitos
<p>Necessário realizar as instalações:</p>

<ul>
    <li>Git</li>
    <li>Yarn</li>
    <li>Stripe CLI</li>
</ul>

<p>Criar conta e configurar os serviços externos:</p>

<ul>
    <li>Stripe</li>
    <li>FaunaDB</li>
    <li>Prismic CMS</li>
</ul>

<p>*Configurações dos serviços estão localizadas no arquivo servicesConfig.md na raiz do projeto.*</p>

## Funcionalidades do Projeto
<ul>
<li>Instalação e configuração do nextjs</li>
<li>Criação do template conforme o figma</li>
<li>Utilização dos styles com scss</li>
<li>Implementação da API do Stripe</li>
<li>Implementação da API do banco faunaDB</li>
<li>Implementação da integração com o Headless cms - Prismic</li>
</ul>

## Instrutor
<ul>
<li><a href="https://github.com/diego3g" rel="nofollow">Diego Fernandes</a> <br></li>
</ul>

## Instalação
<pre><code>- Clonar repositorio
$ git clone https://github.com/ricardogsdev/ignews.git &amp;&amp; cd ignews

# Execute yarn para instalar as dependências
$ yarn

# Na raiz do projeto crie uma copia do arquivo .env.local.example
# Altere o nome da copia para .env.local
# Preencha as variáveis ambiente de acordo com as instruções
$ cp .env.local.example .env.local

# Execute stripe listen para ouvir eventos do webhook
$ yarn stripe

# Para iniciar a aplicação
$ yarn dev
</code></pre>


