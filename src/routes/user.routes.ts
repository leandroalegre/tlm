import { Router } from 'express';
import { createUser, getUser } from '../controllers/user.controllers';

const router = Router();

router.post("/users", createUser);

router.get("/users", getUser);

export default router;