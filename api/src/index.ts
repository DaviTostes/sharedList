import express from "express";
import userRoute from "./routes/userRoute";
import listRoute from "./routes/listRoute";

const app = express()
const port = 80

app.use(express.json())

app.use('/user', userRoute)
app.use('/list', listRoute)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})