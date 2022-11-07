import express, { json } from 'express';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(json());

const users = []
const tweets = []

let user = {}

app.post('/sign-up', (req, res) => {
    user = {
      username: req.body.username,
      avatar: req.body.avatar
    }
    users.push(user)
    res.send("ok");
  })

  app.post('/tweets', (req, res) => {

    const obj = {
      username: req.body.username,
      tweet: req.body.tweet
    }
  
    const avatar = verificaIguais(user.username, obj.username)
  
    const tweet = {
      username: obj.username,
      avatar: avatar,
      tweet: obj.tweet
  
    }
  
    tweets.push(tweet)
    res.send("ok");
  })

  app.listen(5000, () => {
    console.log("Rodando em http://localhost:5000")
  });
  