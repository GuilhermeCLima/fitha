# fitha
Projeto Integrador

Model CategoriaModel
id (Long),
nome (String)
produto (List<ProdutoModel>)

EndPoints 
Method GET 	| FindAll -> /categoria
Method GET 	| FindById -> /categoria/{id}
Method GET 	| FindByNome -> /categoria/nome/{nome}
Method POST	| FindAll -> /categoria
Method PUT	| FindAll -> /categoria
Method DELETE 	| FindById -> /categoria/{id}

Json
{
“id”: numero, //Apenas para put
“nome”:
"produto":{} 
}

Model ProdutoModel

id (Long),
nome (String)
preço (float)
descricao (String)
material (String)
cor (String)
quantidade (BigInt)
disponibilidade (boolean)

EndPoints 
Method GET 	| FindAll -> /produto
Method GET 	| FindById -> /produto/{id}
Method GET 	| FindByNome -> /produto/nome/{nome}
Method POST	| FindAll -> /produto
Method PUT	| FindAll -> /produto
Method DELETE 	| FindById -> /produto/{id}

Json
{
	“id”: numero, //Apenas para put
"nome": ""
"preço": 
"descricao":""
"material": ""
"cor": ""
"quantidade":
"disponibilidade": 
"Categoria":{}

Model UsuarioModel

id (Long),
nome (String)
email (String)
senha (String)
cep (String)
bairro (String)
complemento (String)
cpf (String)
telefone (String)
admin (boolean)

EndPoints 
Method GET 	| FindAll -> /usuario
Method GET 	| FindById -> /usuario/{id}
Method GET 	| FindByNome -> /usuario/nome/{nome}
Method POST	| FindAll -> /usuario
Method PUT	| FindAll -> /usuario
Method DELETE 	| FindById -> /usuario/{id}

Json
{
“id”: numero, //Apenas para put e delete
"nome":, 
"email": ,
"senha": ,
"cep": ,
"bairro": ,
"complemento": ,
"cpf": ,
"telefone": ,
"admin": 
}
