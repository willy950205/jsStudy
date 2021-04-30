const {URL} = require('url');

const myURL = new URL('https://comic.naver.com/webtoon/detail.nhn?titleId=758037&titleId=12342&no=26&weekday=mon');
console.log('searchParams  :  ', myURL.searchParams);
console.log('searchParams.getAll()  :  ', myURL.searchParams.getAll('titleId'));
console.log('searchParams.get()  :  ', myURL.searchParams.get('titleId'));
console.log('searchParams.get()  :  ', myURL.searchParams.get('no'));
console.log('searchParams.has()  :  ', myURL.searchParams.has('weekday'));

console.log('searchParams.keys()  :  ', myURL.searchParams.keys());
console.log('searchParams.values()  :  ', myURL.searchParams.values());



