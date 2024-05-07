import express from 'express';
import { getMessages, sendMessage} from '../controller/messageController.js';

import{isAdminAuthenticated } from '../middlewares/auth.js'
 

const router = express.Router();
router.post('/send',sendMessage);
router.get('/getmessage',isAdminAuthenticated,getMessages);

export default router;
