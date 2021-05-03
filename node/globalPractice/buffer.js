const buffer = Buffer.from('저를 버퍼로 바꿔보세요');

console.log(`from() : `, buffer); // 문자열을 버퍼로 바꾼다.
console.log(`length : `, buffer.length); // 버퍼의 길이
console.log(`toString() : `, buffer.toString); // 버퍼를 다시 문자열로 바꾼다.

const array = [Buffer.from(`띄엄 `), Buffer.from(`띄엄 `), Buffer.from(`띄어쓰기`)];
const buffer2 = Buffer.concat(array); // 배열 안에 든 버퍼들을 하나로 합친다.
console.log(`concant() : `, buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log(`alloc() : `, buffer3); // 빈 버퍼르 생성한다. 바이트를 인자로 지정해주면 해당 크기의 버퍼가 생성된다.