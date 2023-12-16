// module.exports = {
//     multipleStatements  : true,
//     host                : '34.101.81.213',
//     user                : 'root',
//     password            : 'rahasiasia',
//     database            : 'exava'
// };

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const config = {
  multipleStatements: true,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};

module.exports = config; 