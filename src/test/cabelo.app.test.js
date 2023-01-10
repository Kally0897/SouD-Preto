const app = require("../app")
const request = require("supertest")
const cabeloModel = require("../models/CabeloSchema")

describe("Cabelo Controller", () => {

   const cabeloMock = {
     nome: "teste",
     tipo: "teste",
     caracteristicas: "teste",
     cuidados_solicitados: ["teste1", "teste2"]
   }


beforeAll (async () => {
    const newCabelo = new cabeloModel(cabeloMock)
    await newCabelo.save()

    cabeloMock.id = newCabelo._id
})

afterAll(async () => {
    await cabeloModel.deleteMany();
}) 

test("GET /cabelos/all", (done) => {
    request(app)
    .get("/cabelos/all")
    .expect(200)
    .expect(response => {
        expect(response.body.message).toBe("Todos os tipos de cabelo do nosso catálogo em tela")
    })
    .end(Error => {
        if(Error){
            return done(Error)
        }
        return done()
    })
})

test("POST /cabelos/create", (done) => {
    const cabeloBody = {
        nome: "5A",
        tipo: "crespíssimo",
        caracteristicas: "textura altamente densa",
        cuidados_solicitados: ["lavagem a cada dois dias", "humidificação constante"]
    }

    request(app)
    .post("/cabelos/create")
    .send(cabeloBody)
    .expect(201)
    .expect(response => {
        expect(response.body.cabelo.nome).toBe("5A")
    })
    .end(Error => {
        if(Error){
            return done(Error)
        }
        return done()
    })
})

test("PATCH /cabelos/update/:id", (done) => {
    const cabeloBody = {
        caracteristicas: "textura altamente densa e diâmetro extremamente fechado",
        cuidados_solicitados: ["lavagem a cada dois dias", "humidificação constante", "manter sempre hidratado"] 
    }

    request(app)
    .put("/cabelos/update" + cabeloMock.id)
    .send(cabeloBody)
    .set("Authorization", `Bearer ${token}`)
    .expect(200)
    .expect(response => {
        expect(response.body.cabelo.caracteristicas).toBe("textura altamente densa e diâmetro extremamente fechado")
        expect(response.body.cabelo.cuidados_solicitados).toBe(["lavagem a cada dois dias", "humidificação constante", "manter sempre hidratado"])
    })
    .end(Error => {
        if(Error){
            return done(Error)
        }
        return done()
    })
  })
});