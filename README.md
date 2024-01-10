# Desafio Full Cycle Rocks!

Este desafio tem como objetivo aplicar os conhecimentos relacionados à utilização do Nginx como um proxy reverso. A ideia principal é que, ao acessar o Nginx, este realizará uma chamada para a aplicação Node.js. A aplicação Node.js, por sua vez, adicionará um registro no banco de dados MySQL, cadastrando um nome na tabela "people".

O retorno esperado da aplicação Node.js para o Nginx deverá ser:

```html
<h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrados no banco de dados.
```
## Como Executar
Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina antes de prosseguir.

### Clone este repositório:
```
git clone git@github.com:edsonjabastos/desafio-nginx-node.git
cd desafio-nginx-node
```
### Execute o Docker Compose:
```
docker-compose up -d
```
Este comando iniciará os containers necessários e os deixará em execução em segundo plano.
### Acesse a aplicação em seu navegador:
[http://localhost:8080/](http://localhost:8080/)

## Observações
Certifique-se de que as portas necessárias (por exemplo, 8080) estejam disponíveis em sua máquina antes de executar o Docker Compose.
Pode-se verificar também as mensagens de log usando ```docker-compose logs```.
Agora você está pronto para rodar o desafio e acessar a aplicação em http://localhost:8080/.
