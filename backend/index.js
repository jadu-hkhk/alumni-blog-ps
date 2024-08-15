const express = require("express");
const app = express();
const alumniRouter = require("./routes/alumni");
const publicRouter = require("./routes/public");

app.use(express.json());
app.use("/alumni", alumniRouter);
app.use("/public", publicRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});