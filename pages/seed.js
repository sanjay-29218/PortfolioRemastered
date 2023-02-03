import db from '../utils/db'
import User from '../models/User'
 async function handler(req, res) {
    await db.connect();
    const users = await User.Create({
        name: 'admin',
        email: 'sanjay',
        password: '',
        isAdmin: true,
    });

    await db.disconnect();
    res.send(users);
    }
    handler();
