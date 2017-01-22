var TradeoffAnalyticsV1 = require('watson-developer-cloud/tradeoff-analytics/v1');
var tradeoff_analytics = new TradeoffAnalyticsV1({
  username: 'aca0768d-7633-4bea-9a80-22b727491915',
  password: 'TXQHzwdXz7ro'
});

var params = require('problem.json');

tradeoff_analytics.dilemmas(params, function(error, resolution) {
  if (error)
    console.log('error:', error)
  else
    console.log(JSON.stringify(resolution, null, 2));
});
