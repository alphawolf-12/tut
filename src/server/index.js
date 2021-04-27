var path = require('path');
var express = require('express');
const app = express();
/**\
 * Auth Service => Forgot Password, Login
 * Messaging Service
 * Student => Add Student, get Student, 
 * Download Serivce, 
 * Fees Serivce => All the fees structures, class wise => CRUD
 */

 app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname , '../../public/index.html'));
  })

app.listen(3000);