# HotelXpress API

This is a simple API for [HotelXpress](./HotelXpress.md), providing essential functionalities to manage hotel operations.

# Getting started
To run the server locally, you need to make some configurations:

- First, create a file named `.env` and write your configurations like this:

```
#database configuration
__DB_PORT=5432
__DB_USER=postgres
__DB_PASSWORD=12345678


#server configuration
__SERVER_PORT=5000

#token
__TOKEN=ggggggggggdgdddddkfdf54df54df215f54df54d15dfd1fdf12df1d2f1d

```
- You can also find a  `.env` example [here](./.env.example)) :

- The token is just some text that you choose, which is necessary for authentication.

- Next, install all dependencies with the following command:

```sh
npm install
```

- That's it! You can now run the server with:

```sh
npm start
```