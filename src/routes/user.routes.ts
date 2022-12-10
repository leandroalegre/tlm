import { Router } from 'express';
import { createUser, getUser, updateUser } from '../controllers/user.controllers';

const router = Router();

router.post("/users", createUser);

router.get("/users", getUser);

router.put("/users:id", updateUser);

export default router;