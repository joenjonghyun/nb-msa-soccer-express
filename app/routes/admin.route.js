const { addArticle } = require('../controllers/article.controller');
module.exports = x => x.app.post(`${x.url}/write`, addArticle) ;