# Welcome!

 

## I'm Flávio Amaral!

This Api manages Customer.

But, first authenticate with the Api.

- Create a new Customer with this url (http://localhost:3333/auth/register) with a json object as
{
    "name": "teste2",
    "email": "teste2@email.com",
    "password":"123"
}

- Afert, authenticate with this url (http://localhost:3333/auth/authenticate) with a json object as
{
    "email": "teste2@email.com",
    "password":"123"
}

The request return the Token that will be used to authenticate in other requests.
For  anywhere other request, put in headrs the Key Authorization with the Token returned.

## Request of Api Customer:

- Get: http://localhost:3333/customer/search/{text}

* Route to search customer by free text search across all customer fields
* {text} is free text utilized to search across all customer fields

- Get: http://localhost:3333/customer/{id}

* Route to find customer by id  of mongodb
* {id} is id created by mongodb

- Get: http://localhost:3333/customer/cpf/{cpf}

* Route to find customer by cpf
* {cpf} is cpf of customer

- Get: http://localhost:3333/customers

* Route to list customer

- Post:http://localhost:3333/customers

* Route to create customer
* json example: {
    "name": "Joao figueredo da Silva",
    "email": "joaofigueredo@gmail.com",
    "cpf": "111111111",
    "telefone": "99999999",
    "cidade": "Itaberaí",
    "estado": "São Paulo",
    "endereco": "teste"
}

- Put:http://localhost:3333/customer/{id}

* route to update customer
* {id} is id created by mongodb
* json example: {
    "name": "Joao figueredo da Silva",
    "email": "joaofigueredo@gmail.com",
    "cpf": "111111111",
    "telefone": "99999999",
    "cidade": "Itaberaí",
    "estado": "São Paulo",
    "endereco": "teste"
}

- Delete:http://localhost:3333/customer/{id}

* route to delete customer
* {id} is id created by mongodb