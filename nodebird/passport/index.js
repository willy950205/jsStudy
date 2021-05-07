const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const User = require('../models/user');

module.exports = () => {
    // 로그인 시에만 실행된다. req.session 객체에 어떤 데이터를 저장할지 정하느 메서드입니다.
    // 매개변수에 들어오는 user의 출처는...???
    // serializeUser는 사용자 정보  객체를 세션에 아이디로 저장하는 것이고, deserializeUser는  세션에 저장한
    // 아이디를 통해 사용자 정보 객체를 불러오느 것입니다. 세션에 불필요한 데이터를 담아두지 않기 위한 과정이다.
    passport.serializeUser((user, done) => {
        // dnoe()의 첫번째 인수는 에러발생 시 사용하는 메소드, 두번째 인수는 저장하고 싶은 데이터를 넣는다.
        done(null, user.id);
    });

    // 매 요청시마다 실행되는 메소드임. passport.session() 메소드가 해당 메소드를 호출.
    // serializeUser의 두번째 인수로 넣었던 데이터가 deserializeUser의 매개변수가 됩니다.
    // 여기서는 User.id임
    passport.deserializeUser((id, done) => {
        User.findOne({
            where : {id},
            include:[
                {
                    model:User,
                    attributes:['id', 'nick'],
                    as:'Followers',
                },
                {
                    model:User,
                    attributes:['id', 'nick'],
                    as:'Followers',
                }
            ]   
        })
        .then(user => done(null, user))
        .catch(err => done(err));
    });

    local();
    kakao();
}
