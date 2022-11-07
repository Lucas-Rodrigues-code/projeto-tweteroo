import express, { json } from 'express';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(json());

const users = []


app.post('/sign-up', (req, res) => {
    user = {
      username: req.body.username,
      avatar: req.body.avatar
    }
    users.push(user)
    res.send("ok");
  })