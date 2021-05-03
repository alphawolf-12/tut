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

 app.use('/',express.static( path.join(__dirname,'../../public')));

app.listen(3000);