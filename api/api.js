const path = require('path'); // 引入 path 模块

// 使用 process.cwd() 来获取当前工作目录，并构建 quotes.json 的绝对路径
const quotes = require(path.join(process.cwd(), 'quotes.json'));

module.exports = async (req, res) => {
  // 随机选择一条名句
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  res.status(200).json({
    quote: randomQuote,
    source: "菩提 · 禅言",
    timestamp: new Date().toISOString()
  });
};
