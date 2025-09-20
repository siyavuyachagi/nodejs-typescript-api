import express, { type Request, type Response } from "express";


const app = express();
const port = 5000;

app.get("/", (req: Request, res: Response) => {
    console.log(req)
    res.status(200).json("Hello world")
})


app.listen(port, () => {
    console.log(`App running at http//localhost:${port}`)
})