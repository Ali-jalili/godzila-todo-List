const express = require("express")
const cors = require('cors');
require('dotenv').config();



const membersRuter = require('./routes/members')

const taskRout = require('./routes/tasks')

const history = require('./routes/historyRout')

const connection = require('./db/conction')



const app = express();

const port = process.env.APP_PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/membres', membersRuter)

app.use('/task', taskRout)

app.use('/history', history)



app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})


connection(process.env.MONGO_URL).then(() => {
    console.log('detabase is connect');
})
    .catch((err) => {
        console.log(err);
    })