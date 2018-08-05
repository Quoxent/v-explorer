
/**
 * Global configuration object.
 */
const config = {
  'api': {
    'host': 'https://explorer.vulcanocrypto.com',
    'port': '443',
    'prefix': '/api',
    'timeout': '5s'
  },
  'coinMarketCap': {
    'api': 'http://api.coinmarketcap.com/v1/ticker/',
    'ticker': 'vulcano'
  },
  'db': {
    'host': '127.0.0.1',
    'port': '27017',
    'name': 'blockex',
    'user': 'blockexuser',
    'pass': 'Explorer!1'
  },
  'freegeoip': {
    'api': 'https://extreme-ip-lookup.com/json/'
  },
  'rpc': {
    'host': '127.0.0.1',
    'port': '52541',
    'user': 'vulcanorpc',
    'pass': 'someverysafepassword',
    'timeout': 8000, // 8 seconds
  }
};

module.exports = config;
