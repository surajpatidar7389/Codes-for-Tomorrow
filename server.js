 const express = require('express');
 const dotenv = require('dotenv');
 const sequelize = require('./config/db');
 const authRoutes = require('./routes/auth.routes');
 const categoryRoutes = require('./routes/category.routes');

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", categoryRoutes);

sequelize.sync().then(() => {
  console.log('Database & tables created!');
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  })
}); 