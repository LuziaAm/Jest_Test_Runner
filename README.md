# Jest_Test_Runner

Jest é um framework de teste em JavaScript projetado para garantir a correção de qualquer código JavaScript. Ele permite que você escreva testes com uma API acessível, familiar e rica em recursos que lhe dá resultados rapidamente.

Building environment:

Instale cURL no Ubuntu 20.04 LTS:
sudo apt install curl

Adicionar chave GPG:
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -

Habilite o repositório Yarn:
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

Atualize o cache e instale o Yarn:
sudo apt update && sudo apt install yarn

Se você estiver usando Nodejs e NPM, poderá instalar o Yarn digitando o seguinte comando no terminal (Ctrl + Alt + T):
sudo apt install --no-install-recommends yarn

yarn --version

Instale pacotes com Yarn:

yarn add jest --dev