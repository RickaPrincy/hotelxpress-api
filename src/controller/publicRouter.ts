import { Router } from "express";
import { getAllRooms, getRoomById } from "../services/room/getRoom";
import { getAllRoomContents, getRoomContentIlike } from "../services/room_content/getRoomContent";
import { getSearch } from "../services/utils/getSearch";
import { getAllUserTypes } from "../services/utils/getUserTypes";
import { signin } from "../services/signin";
import { signup } from "../services/signup";
import { getAllHotels, getHotelById } from "../services/hotel/getHotel";

export const publicRouter = Router();

//get All
publicRouter.get("/rooms", getAllRooms);
publicRouter.get("/hotels",getAllHotels);
publicRouter.get("/room_contents",getAllRoomContents);
publicRouter.get("/user_types",getAllUserTypes);

//utils
publicRouter.get("/search",getSearch);

//by id
publicRouter.get("/room/:id",getRoomById);
publicRouter.get("/hotel/:id",getHotelById);

//room_content
publicRouter.get("/find/room_content/:ilike",getRoomContentIlike);

//authentification
publicRouter.post("/signin", signin);
publicRouter.post("/signup", signup);

