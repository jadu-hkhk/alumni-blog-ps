const express = require("express");
const app = express();
const alumniRouter = require("./routes/alumni");
const publicRouter = require("./routes/public");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/alumni", alumniRouter);
app.use("/public", publicRouter);

app.use((err, req, res, next) => {
    res.status(500).json({ message: "Something went wrong" })
})

const port = 3000;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});