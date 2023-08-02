# HotelXpress API

This is a simple API for [HotelXpress](./HotelXpress.md), providing essential functionalities to manage hotel operations.

# Getting started
To run the server locally, you need to make some configurations:

- First, create a file named `.env` and write your configurations like this:

```
#server configuration
__SERVER_PORT=5000

#token
__TOKEN=ggggggggggdgdddddkfdf54df54df215f54df54d15dfd1fdf12df1d2f1d

DATABASE_URL="postgresql://postgres:12345678@localhost:5432/hotelxpress_v"

```
- You can also find a  `.env` example [here](./.env.example)) :

- The token just some text that you want which is necessary for the authentification

- Next, install all dependecies with the following command

```sh
npm install
```

- That's it, you can now run the server with

```sh
npm start
```