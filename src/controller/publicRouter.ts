import { Router } from "express";
import { signin } from "../services/signin";
import { signup } from "../services/signup";
import { deleteUser } from "../services/user/userCrud";
import { getUserById } from "../services/user/getUser";
import { getAllRooms, getRoomById, getRoomByIntervalAndLocation } from "../services/room/getRoom";
import { deleteRoom } from "../services/room/roomCrud";
import { getAllHotels, getHotelById } from "../services/hotel/getHotel";
import { getAllRoomContent, getRoomContentIlike } from "../services/room/getRoomContent";

export const publicRouter = Router();

//Some endpoint are temporary public
publicRouter.delete("/delete/user/:id",deleteUser);
publicRouter.get("/find/room/interval", getRoomByIntervalAndLocation);
publicRouter.get("/find/room_content/:content_name", getRoomContentIlike);
publicRouter.get("/user/:id",getUserById);
publicRouter.get("/room/:id",getRoomById);
publicRouter.get("/delete/room/:id",deleteRoom);
publicRouter.get("/hotels",getAllHotels);
publicRouter.get("/room_contents",getAllRoomContent);
publicRouter.get("/hotel/:id", getHotelById);

publicRouter.get("/rooms", getAllRooms);
publicRouter.post("/signin",signin);
publicRouter.post("/signup", signup);