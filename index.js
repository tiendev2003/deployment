require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the application' });
});

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(err => console.log(err));
