import Route from "../models/Route.js";

export const searchRoute = async (req, res) =>{
    const {origin, destination} = req.body;

    const distance = Math.floor(Math.random() * 20) + 5;
    const estimatedTime = distance * 3;

    res.json({
        origin,
        destination,
        distance,
        estimatedTime
    });
};

export const saveRoute = async (req,res)=>{
    const {origin, destination, distance, estimatedTime}= req.body;
    const route = await Route.create({
        user: req.user,
        origin,
        destination,
        distance,
        estimatedTime
    });
    res.status(201).json(route);
};
export const getSavedRoutes = async (req,res) =>{
    const routes = await Route.find({ user: req.user});

    res.json(routes);
};