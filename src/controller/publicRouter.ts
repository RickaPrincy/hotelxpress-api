import { Router } from "express";
import { getAllRooms, getRoomById, getRoomByOptions } from "../services/room/getRoom";
import { getAllRoomContents, getRoomContentIlike } from "../services/room_content/getRoomContent";
import { getSearch } from "../services/utils/getSearch";
import { getAllUserTypes } from "../services/utils/getUserTypes";
import { signin } from "../services/signin";
import { signup } from "../services/signup";
import { getAllHotels, getHotelById } from "../services/hotel/getHotel";
import { getAllHotelFeedbacks } from "../services/feedback/getHotelFeedback";
import { getStats } from "../services/quick/getStats";
import { getReservations, getReservationsUser } from "../services/quick/getReservations";
import { addReservation } from "../services/reservation/reservation";

export const publicRouter = Router();

//get All
publicRouter.get("/rooms", getAllRooms);
publicRouter.get("/hotels",getAllHotels);
publicRouter.get("/room_contents",getAllRoomContents);
publicRouter.get("/user_types",getAllUserTypes);
publicRouter.get("/hotel_feedbacks",getAllHotelFeedbacks);

//utils
publicRouter.get("/search",getSearch);

//by id
publicRouter.get("/room/:id",getRoomById);
publicRouter.get("/hotel/:id",getHotelById);

//room_content
publicRouter.get("/find/room_content/:ilike",getRoomContentIlike);

//limit 
publicRouter.get("/find/hotel_feedback/:limit",getAllHotelFeedbacks);
publicRouter.get("/find/room/:limit",getAllRooms);
publicRouter.post("/find/room/options",getRoomByOptions);

//authentification
publicRouter.post("/signin", signin);
publicRouter.post("/signup", signup);

//made quickly
publicRouter.get("/stats", getStats);
publicRouter.get("/reservations",getReservations);
publicRouter.get("/reservation/:id",getReservationsUser);
publicRouter.post("/add/reservation",addReservation);
