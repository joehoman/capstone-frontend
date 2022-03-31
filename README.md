## Embark
Embark is a React + Express Full-Stack Application that is fully deployed using Heroku. 

## 🎉 UI Features
The React App has the following functionalities:
- 🌎A home page that has Navbar to allow for users to easily navigate the webpage. 
- 🚀Sponsors and inbound guardians can register a new account and select their role. 
- 📬 Once a sponsor is logged in, they can see a list of inbound guardians attached to them to get their contact information.
- 🧾 Once an inbound guardian is logged in, they can see a list of their tasks and their sponsor's contact information. 
- ✏ An administrator can log in to assign inbound guardians to a sponsor. 
- 📑 Sponsors and adminstrators can add tasks to an inbound guardian's checklist.  

## 🏞 Background 
This project was designed with the intent of replacing the paper in-processing checklists. This website allows for a central location for sponsors and inbound guardians to easily get contact information for each other and to see required tasks for upcoming PCS moves. 

##  🚚 Website in Use
Here is an image of the Home Page:
![image](https://user-images.githubusercontent.com/96899068/161108646-f58bf429-6df4-4e78-af90-4c217d746feb.png)


Here is an image of the inbound guardian's dashboard: 
![image](https://user-images.githubusercontent.com/96899068/161109431-ea36bfef-719f-4c21-b65d-7b7c2706e20a.png)


Here is an image of the sponsor's dashboard:
![image](https://user-images.githubusercontent.com/96899068/161109600-ae4c57aa-c5ef-4710-b43c-2af7d86f019e.png)

Here is an image of a specific inbound after the sponsor clicks on their name:
![image](https://user-images.githubusercontent.com/96899068/161109790-3fc8c298-9e74-435b-bc1d-7e23980953c9.png)


Here is an image of the admin's dashboard: 
![image](https://user-images.githubusercontent.com/96899068/161110036-33593a4f-bf70-4986-86aa-f3c3817d9e54.png)

Here is an image of the admin viewing unassigned guardians:
![image](https://user-images.githubusercontent.com/96899068/161110180-6ef5f497-606e-40f3-ae9c-fa6f0cb29c69.png)

Here is an image of the admin being able to assign someone to a sponsor:
![image](https://user-images.githubusercontent.com/96899068/161110232-1cf0c3b3-226b-4e9d-86ec-7da3aac41d4b.png)




## 🎊 Using the React App
Get more information about React here: https://reactjs.org/.
It was styled using some MUI: https://mui.com/.
Testing was completed using Cypress: https://www.cypress.io/ and Jest: https://jestjs.io/.


## 🛠 Server Development
The following instructions are for those who want to develop the API on a local server.

## 🖥️ Server Architecture 
- The server was made using Express.

## 💿 How to install repo
Fork this repo, then clone it onto your machine.

### 🤲 Cloning and Installing Packages
The following dependencies need to be installed with ``` npm install ``` 
- body-parser 
- dotenv
- express
- jest
- knex
- morgan
- nodemon
- pg
- supertest
- bcrypt

### 🔥 Environment Variables
Make a .env file and set the CONNECTION_STRING to equal the location of your database. 

### 🤓 Database Requirements
Embark uses a PostgreSQL docker container. Tables are created programaticly, but you will have to create the database throught the psql CLI.
1. Pull the PostgreSQL docker container.

    ``` docker pull postgres ```

2. Create volume, turn on container, log into container
    1.  ```mkdir -p $HOME/docker/volumes/postgres```
    
    2.  ```docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres```

    3. ```docker ps -a```
    
    4. Copy the container ID from the output

    5. ``` docker exec -it <PSQL-Container-ID> bash ```
3. Create a DB called " zork_db "

    ```dbcreate -U postgres zork_db```

##  🚀 Database Schema
This was made with PostgreSQL DB to persist user data, maintain tasks, and provide relations between users and tasks.
![image](https://user-images.githubusercontent.com/96899068/161108255-c20dd489-c95d-422c-b0da-59fd6bcfb2d5.png)


This schema is created through the Knex Migrations and is built with command: ``` npx knex migrate:latest ```


