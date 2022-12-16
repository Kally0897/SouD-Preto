const app = require("../app")
const request= require("supertest")
const login = require("../controller/authController")


    
("POST /users/login", (done) => {
    request(app)
    .post("/users/login")
    .send({
        email: "email@test.com",
        password: "12345"
    })
    .expect(200)
    .end((error, response) => {
        if (error) return done(error);
        return done();
    })
})