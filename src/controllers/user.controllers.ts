import {create} from 'domain';
import {Router} from 'express';
import { Request, Response } from 'express';
import {User} from '../entities/User';


export const createUser = async (req:Request, res: Response ) =>{
    try {
        const{Nombre,Apellido,direccion,telefono,Mail,cumple,id_talle}= req.body;
        
        const user = new User();

        user.Nombre = Nombre;
        user.Apellido = Apellido;
        user.direccion = direccion;
        user.telefono= telefono;
        user.Mail = Mail;
        user.cumple = cumple;
        user.id_talle = id_talle;

        await user.save();

        console.log(user)
        res.send(' Hello World!');

    } catch (error) {
        if (error instanceof Error) {
        return res.status(500).json({message: error.message});
        }
    }

 
};
export const getUser = async(req:Request, res:Response) => {


    try {
        const users = await User.find()
        return res.json(users)
    } catch (error) {
        if (error instanceof Error) {
        return res.status(500).json({message: error.message});
        }
    }

};
export const updateUser = async(req:Request, res:Response) => {


    try {
        const {Nombre, Apellido,direccion,telefono,Mail,activo,cumple,id_talle}= req.body;
        
        const user = await User.findOneBy({id: parseInt(req.params.id)}) 

        if (!user) return res.status(400).json({message:'El usuario no existe'});

        user.Nombre = Nombre;
        user.Apellido = Apellido;
        user.direccion = direccion;
        user.telefono= telefono;
        user.Mail = Mail;
        user.cumple = cumple;
        user.id_talle = id_talle;

        user.save();

        return res.json("Recibido");
    } catch (error) {
        if (error instanceof Error) {
        return res.status(500).json({message: error.message});
        }
    }

};