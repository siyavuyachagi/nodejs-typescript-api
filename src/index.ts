import express, { type Request, type Response } from "express";
import "dotenv/config";

const app = express();
const port = 5000;

app.get("/", (req: Request, res: Response) => {
    res.json("Hello world")
})

app.get("/health", (req: Request, res: Response) => {
    res.json({ status: "ok" })
})


app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`)
})