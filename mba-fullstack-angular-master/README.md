#### Aula de Angular do MBA FullStack (IESP)
- Angular
- Angular Material
- RXJS
- TypeScript


### Avaliação

O projeto deve conter os seguintes conceitos:
- Carregamento assíncrono dos módulos (minimo 2 módulos)
- Resolver os dados antes de entrar no componente quando necessário
- Diretiva
- Pipe
- NgContent
- Template driven form
- Reactive form

- API = [http://5dd975f118c0a50014576483.mockapi.io/api](http://5dd975f118c0a50014576483.mockapi.io/api)

#### CRUD para cadastro de usuários `/api/usuarios` 
- Utilizar template-driven forms
	- Colocar dois inputs para senha senha atual e confirmação de senha
	- Criar diretiva para validar se as senhas estão iguais
#### CRUD para cadastro de pacientes `/api/pacientes` 
- Utilizar reactive form
	- Criar mascara para CPF, CEP, telefone
	- Quando preencher o CEP consultar a API [https://viacep.com.br/ws/{cep}/json/](https://viacep.com.br/ws/{cep}/json/) e preencher os campos de endereço
