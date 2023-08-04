# HotelXpress API

This is a simple API for [HotelXpress](./HotelXpress.md), providing essential functionalities to manage hotel operations.

# Getting started
To run the server locally, you need to make some configurations:

## 1-   First, create a file named `.env` and write your configurations like this:

```
#database configuration

DATABASE_URL="postgresql://postgres:12345678@localhost:5432/hotelxpress"
#replace:postgres to your postgresql user (postgres not postgresql)
#replace:12345678 to your password
#replace:5432 to your postgresql port 
#replace:hotelxpress to any name of the database that you want (don't create it yourself, just give a name)

#server configuration
__SERVER_PORT=5000

#token
__TOKEN=ggggggggggdgdddddkfdf54df54df215f54df54d15dfd1fdf12df1d2f1d

```
## You can also find a  `.env` example [here](./.env.example)

- The token just some text that you want which is necessary for the authentification

## 2-   Next, install all dependecies with the following command

```sh
npm install
```

## 3-   Almost there, now you need to create the database before running the server. The following command includes some inserts, so you don't need to make inserts manually:

```sh
npx run init-database
```

## 4-   That's it, you can now run the server with :

```sh
npm start
```

# Another Script

-   `npm run create-database` : This will create your databse whithout insert 

-   `npm run insert-database` : This will insert some data for you (so you have to create the database first).

-   `npm run init-database` : As we showed earlier, this will create the database and insert data (same as `npm run create-database` and then `npm run insert-database`).

-   `npm run lint` : This will check all the source code with some rules in `.eslintrc`.

-   `npm run dev` : This will launch the server as a `typescript project` with the `nodemon` executor (which provides auto-refresh)

-   `npm run build` : This will build the project as a `javascript project`

-   `npm start` : Will build and run the project