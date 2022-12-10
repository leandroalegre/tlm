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