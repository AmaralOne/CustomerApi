# Welcome!

 

## I'm Flávio Amaral!

<p>This API was developed in Node.js with Typscript. Using the Express framework. MongoDb Local was used as the database to persist  the datas.</p>

This Api manages Customer.

But, first authenticate with the Api:



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
For  anywhere other request, put in headrs the Key Authorization with the Bearer + Token returned.

## Request of Api Customer:

- Get: http://localhost:3333/customer/search/{text}

<p>Route to search customer by free text search across all customer fields</p>
<p>{text} is free text utilized to search across all customer fields</p>

- Get: http://localhost:3333/customer/{id}

<p>Route to find customer by id  of mongodb</p>
<p>{id} is id created by mongodb</p>

- Get: http://localhost:3333/customer/cpf/{cpf}

<p>Route to find customer by cpf</p>
<p> {cpf} is cpf of customer</p>

- Get: http://localhost:3333/customers

<p>Route to list customer</p>

- Post:http://localhost:3333/customers

<p>Route to create customer</p>
<p>json example: {
    "name": "Joao figueredo da Silva",
    "email": "joaofigueredo@gmail.com",
    "cpf": "111111111",
    "telefone": "99999999",
    "cidade": "Itaberaí",
    "estado": "São Paulo",
    "endereco": "teste"
}</p>

- Put:http://localhost:3333/customer/{id}

<p>Route to update customer</p>
<p>{id} is id created by mongodb</p>
<p>json example: {
    "name": "Joao figueredo da Silva",
    "email": "joaofigueredo@gmail.com",
    "cpf": "111111111",
    "telefone": "99999999",
    "cidade": "Itaberaí",
    "estado": "São Paulo",
    "endereco": "teste"
}</p>

- Delete:http://localhost:3333/customer/{id}

<p>Route to delete customer</p>
<p>{id} is id created by mongodb</p>