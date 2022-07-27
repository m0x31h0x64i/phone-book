# phone-book Application
## About this application :
- with this application you can have a simple phonebook to save your contacts .
------------
## How to run this Application ?
1. make sure you have installed mongodb on your system, [here](https://www.mongodb.com/docs/manual/administration/install-community/ "Here") is the installation link **&** make sure you have installed nodejs with npm, [here](https://nodejs.org/en/download/ "here") is the download link.
2. on terminal run the following command to download the application :<br>
`git clone https://github.com/m0x31h0x64i/phone-book`
3. then : <br>
`npm start`
------------
## How to use this Application ?
- on postman go to [this](https://127.0.0.1:3000/phonebook "this") link.
- by using **post** http method **&** make a request with name, phone, email as json  body you will be able to create contact.

- by using **get** http method **&** make a request with one of properties (name, phone, email) as json body you can get your contact data.

- 	by using **patch** http method **&** adding `/YOUR_CONTACT_ID` at the end of the URL **&** make a request with new properties including name, phone, email as json body you can update your contact information.

- by using **delete** http method **&** adding `/YOUR_CONTACT_ID` at the end of the URL you can delete contact information.
------------
### Notes :
- to make this application i used express, mongoose, validator libraries.
- i learned how we can connect people to database and do anything related to database with people which trying to visit our express routes.
