import express from "express";
import userRoute from "./routes/userRoute";

const app = express()
const port = 80

app.use(express.json())

app.use('/user', userRoute)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})