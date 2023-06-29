var request = require('request');

var url =
  'http://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlMdcncLcinfoInqire';
var queryParams =
  '?' +
  encodeURIComponent('serviceKey') +
  '=9ZhpN%2FoYdhTzJ11%2FvH37DdAjyeI5k5GC6d83bvQzQLnuUOXAYv81ljk196%2FXY0%2BC7Mf%2B51aLr7ck0fKxcXlb5g%3D%3D'; /* Service Key*/
queryParams +=
  '&' + encodeURIComponent('WGS84_LON') + '=' + encodeURIComponent(127.0851566);
queryParams +=
  '&' + encodeURIComponent('WGS84_LAT') + '=' + encodeURIComponent(37.48813256);
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(1);
queryParams +=
  '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent(100);

request(
  {
    url: url + queryParams,
    method: 'GET',
  },
  function (error, response, body) {
    console.log('Status', response.statusCode);
    console.log('Status', response.body);
    //console.log('Headers', JSON.stringify(response.headers));
    //console.log('Reponse received', body);
  }
);
