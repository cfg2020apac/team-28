var express = require('express');
var router = express.Router();
const {db} = require('../db');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
/* GET home page. */
router.get('/', function(req, res) {

  res.render('index' )



});

router.get('/maincontent', async function (req,res) {

  const events = db.collection('Events');
  const snapshot = await events.where('eventstatus', '==', "approve").get();

  if (snapshot.empty) {
    console.log('No matching events.');
    return;
  }

  snapshot.forEach(doc => {
    res.json("hello");
    // console.log(doc.id, '=>', doc.data());
  });
});




module.exports = router;
