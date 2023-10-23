const mongoose = require('mongoose');

const MONGO_USER = 'lyncare'
const MONGO_PASSWORD = 'fls2022'
const MONGO_CLUSTER = 'lyncare.5ip2vsa.mongodb.net'
const MONGO_DBNAME = 'wevibe'
const MONGO_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}/${MONGO_DBNAME}?retryWrites=true&w=majority`

const client = mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function connectToDatabase() {
  try {
    await client
    console.log('MongoDB 연결 성공');
  } catch (error) {
    console.error('MongoDB 연결 실패:', error);
    throw new Error('MongoDB connection failed');
  }
}

module.exports = {
  connectToDatabase
}
