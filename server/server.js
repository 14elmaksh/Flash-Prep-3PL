const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const cors = require("cors");
const whitelist = ["http://localhost:3000"];

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
	origin: function (origin, callback) {
		if (!origin || whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	credentials: true,
};
app.use(cors(corsOptions));

app.use(errorHandler);

if (process.env.NODE_ENV === 'production') {
	// Exprees will serve up production assets
	app.use(express.static('/app/client/build'));
  
	// Express serve up index.html file if it doesn't recognize route
	const path = require('path');
	app.get('*', (req, res) => {
	  	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));