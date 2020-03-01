const {buffer, text, json} = require('micro')

module.exports = async (req, res) => {
  console.log(req.query);
  const txt = await text(req)
  console.log(txt)
  // 9.99
  return 'ok'
}