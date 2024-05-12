import express from 'express';
import mongoo from 'mongoose';
const app = express();

const url = process.env.MONGO_URL || "mongo://localhost:27017"

mongoo.connect(url);

const userSchema = new mongoo.Schema({
    email : String,
    password: String
})
const user = mongoo.model('User', userSchema);

app.use(express.json());
app.get('/', async function(req,res) {
    const users = await user.find({});
    res.json({
        user
    })
})

app.post('/', async function(req,res) {
    const {email, password} = req.body
    const users = await user.create({
        email,
        password
    })
})

app.listen(3000);