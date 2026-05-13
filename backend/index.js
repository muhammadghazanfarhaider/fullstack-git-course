const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	  res.send("Backend Working");
});

app.get("/health", (req, res) => {
	  res.json({
		      success: true,
		      message: "Backend Health API Working",
		      timestamp: new Date(),
		    });
});

app.listen(5000, () => {
	  console.log("Server running on port 5000");
});
