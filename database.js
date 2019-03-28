
/*----------  help Instructions  ----------*/

//new Date().toISOString().slice(0, 19).replace('T', ' '); date to mysql Date
//().format('YYYY-MM-DD HH:mm:ss');

/*=============================================
=              Database Setup                 =
=============================================*/
const mysql = require('mysql');
/*=====  Database Setup  ======*/
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'avocado'
});
exports.connection = connection;

function connect() {
  connection.connect(function (err) {
    if (err)
      console.log(err.stack);
    else
      console.log("connected");
  });
}
exports.connect = connect;

/*=============================================
=            Database Queries                 =
=============================================*/

/*----------  'user' Table  ----------*/

/**
 * get 'user's
 * @returns users list
 */
function getUsers() {

  let query = `select * from user`;
  return asPromise(query, null)
}
exports.getUsers = getUsers;

/**
 * get 'user'
 * @param user : user object contain username and password
 * @returns query result
 */
function getUser(user) {

  let query = `select * from user where username = '${user.username}' AND password = '${user.password}'`;
  return asPromise(query,null);
}
exports.getUser = getUser;

/**
 * insert Into 'user'
 * @param user : objects contain information about 'user'
 * @returns promise: true if inserted
 */
function insertUser(user) {

  let query = 'INSERT INTO user SET ?';
  return asPromise(query,user);
}
exports.insertUser = insertUser;

/**
 * Update 'user'
 * @param user user object
 * @returns promise: query result
 */
function updateUser(user) {

  if (!user.id) return null;

  let query = `UPDATE user SET
    username = :username, password = :password
    WHERE id = :id `;

  return asPromise(query,user);
}
exports.updateUser = updateUser;

/**
 * delete 'user'
 * @param id : user id
 * @returns promise: query result
 */
function deleteUser(id) {

  const query = `DELETE FROM user where id = ${id}`;
  return asPromise(query,null);
}
exports.deleteUser = deleteUser;


/**
 * see from 'user' if user authorized to perform action
 * @param user : objects contain information about 'user'
 * @param permission : target user permission
 * @returns promise: true if authorized
 */
function isAuthorized(user, permission) {

  let query = 'SELECT ? FROM user where id = ?';
  return asPromise(query, [permission, user.id]);
}
exports.isAuthorized = isAuthorized;



/*----------  'affair' Table  ----------*/

/**
 * get 'affair'
 * @param offset : left offset (margin)
 * @param limit : list size
 * @returns list of affairs
 */
function getAffairs(offset, limit) {

  let query = `select * from affair ORDER BY modificationDate DESC LIMIT ${offset}, ${limit} `;

  return asPromise(query,null);
}
exports.getAffairs = getAffairs;

/**
 * get 'affair'
 * @param id : affair id
 * @returns promise: query result
 */
function getAffair(id) {

  const query = `select * from affair where id = ${id}`;
  return asPromise(query,null);
}
exports.getAffair = getAffair;

/**
 * delete 'affair'
 * @param id : affair id
 * @returns promise: query result
 */
function deleteAffair(id) {

  const query = `DELETE FROM affair where id = ${id}`;
  return asPromise(query,null);
}
exports.deleteAffair = deleteAffair;

/**
 * insert Into 'affair'
 * @param affair : objects contain information about 'affair's
 * @returns promise: true if inserted
 */
function insertAffair(affair) {

  let query = 'INSERT INTO affair SET ?';
  return asPromise(query, affair);
}
exports.insertAffair = insertAffair;

/**
 * Update 'affair'
 * @param affair affair object
 * @returns promise: query result
 */
function updateAffair(affair) {

  if (!affair.id) return null;

  let query = `UPDATE affair SET
    number = :number, type = :type,
    favorite = :favorite, court = :court,
    cost= :cost, debt = :debt, payment = :payment,
    audienceDate = :audienceDate, name= :name,
    description = :description
    WHERE id = :id `;

  return asPromise(query,affair);
}
exports.updateAffair = updateAffair;

/*----------  get database tables  ----------*/

function getTableList() {
  var tables = [];
  var sqlTables = ' SELECT * FROM information_schema.tables where table_schema = \'' + connection.config.database + '\' ';
  return new Promise(function (resolve, reject) {
    connection.query(sqlTables, function (err, respTables) {
      if (err) {
        reject(err);
      }
      respTables.forEach(function (value, index, array) {
        //tables.push(value.TABLE_NAME);
        tables.push(value);
      });
      resolve(tables);
    });
  });
}

/*=====  End of Database Queries       ======*/


/*----------  helpers  ----------*/


/**
 *
 * return result as promise
 * @param query query string
 * @param arg query args
 * @returns promise contain results
 *
 */

function asPromise(query, args) {
  return new Promise(function (resolve, reject) {
    connection.query(query, args, function (err, respTables) {
      if (err)
        reject(err);
      else
        resolve(respTables);
    });
  });
}
