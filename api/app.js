const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/',(req,res)=>{
    res.json([
        {
            "id":"1",
            "title":"title1"
        },
        {
            "id":"2",
            "title":"title2"
        },
        {
            "id":"3",
            "title":"title3"
        }
    ])
})

const port = 4000
app.listen(port,()=>{console.log(`listening at port ${4000}`)})
