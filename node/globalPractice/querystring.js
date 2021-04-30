const url = require('url');
const querystring = require('querystring');

const parseUrl = url.parse('https://comic.naver.com/webtoon/detail.nhn?titleId=758037&no=26&weekday=mon');
const query = querystring.parse(parseUrl.query);
console.log('querystring.parse()  :  ', query);
console.log('querystring.stringify()  :  ', querystring.stringify(query));