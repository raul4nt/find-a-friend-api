# Regras da Aplicação

## Requisitos Funcionais (RFs)

- [ ] Deve ser possível cadastrar um pet.
- [ ] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade.
- [ ] Deve ser possível filtrar pets por suas características (como porte, idade, etc.).
- [ ] Deve ser possível visualizar detalhes de um pet para adoção.
- [x] Deve ser possível se cadastrar como uma ORG.
- [x] Deve ser possível realizar login como uma ORG.

## Regras de Negócio (RNs)

- [ ] Para listar os pets, obrigatoriamente precisamos informar a cidade.
- [ ] Uma ORG precisa ter um endereço e um número de WhatsApp.
- [ ] Um pet deve estar ligado a uma ORG.
- [ ] O usuário que quer adotar, entrará em contato com a ORG via WhatsApp.
- [ ] Todos os filtros, além da cidade, são opcionais.
- [ ] Para uma ORG acessar a aplicação como admin, ela precisa estar logada.

## Requisitos Não Funcionais (RNFs)

- [x] A senha do usuário precisa estar criptografada.
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL.
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página.
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token).
