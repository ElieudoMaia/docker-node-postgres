## Um simples repositório com Node + Postgres + Docker + docker-compose

### Requerimentos
Certifique-se de que você tem o Docker e o docker-compose instalados em seu computador

### Executando
`docker-compose up`

ou

`docker-compose up -d`

(caso não queira executar em modo interativo)


O comando subirá criará uma imagem para API, fará o download da imagem do *postgres* e rodará os dois container com a comunicação de rede configurada.

> OBS: O projeto, por ser simples, não roda nenhuma migration e não faz o bind de nenhum volume com banco de dados. Portanto, caso o banco de dados venha a ser utilizado deve-se criar p banco e inserir as tabelas manualmente.


<br />
<br />
<br />
<br />

Linkedin: [Elieudo Maia](https://www.linkedin.com/in/elieudo-maia-871123141/)