const connectToMongo = require("./db.js");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const dotenv = require("dotenv");
dotenv.config();

connectToMongo();
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// AVAILABLE ROUTES
app.use("/auth", require("./routes/auth.js"));
app.use("/notes", require("./routes/notes.js"));

app.listen(port, () => {
  console.log(`Backend Running`);
});
