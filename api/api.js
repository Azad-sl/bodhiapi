const quotes = require('./quotes.json');

module.exports = async (req, res) => {
  // 随机选择一条名句
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  res.status(200).json({
    quote: randomQuote,
    source: "佛经",
    timestamp: new Date().toISOString()
  });
};
