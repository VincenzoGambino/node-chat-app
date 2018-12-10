


/**
 * Middleware for authentication
 * @param req
 * @param res
 * @param next
 */
var authenticate = (req, res, next) => {
  console.log('middleware');
  next();
};


module.exports = {authenticate};