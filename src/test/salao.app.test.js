const app = require("../app")
const request = require("supertest")
const salaoModel = require("../models/SalaoSchema")



describe("Salao Controller", () => {
    const salaoMock = {
        nome: "teste",
        cnpj: "111111111/1111-11",
        instagram: "@teste",
        telefone: "819857-76395",
        endereco: {
            rua: "Rua Teste Zerado",
            número: 11,
            bairro: "Test",
            cidade: "Testando",
            estado: "Teste",
            cep: "111.111-111"
        },
        especialidades: ["cabelo1", "cabelo2"],
        produtos: ["produto1", "produto2"]
    }

    beforeAll (async () => {
        const newSalao= new salaoModel(salaoMock)
        await newSalao.save()

        salaoMock.id = newSalao._id
    })

    afterAll(async () => {
        await lojaModel.deleteMany();
    })

    test("GET /saloes/all", (done) => {
        request(app)
        .get("/saloes/all")
        .expect(200)
        .expect(response => {
            expect(response.body.message).toBe("Todos os salões do catálogo em tela")
        })
        .end(Error => {
            if(Error){
                return done(Error)
            }
            return done()
        })
    })

    test("GET /saloes/all", (done) => {
        request(app)
        .get("/saloes/all" + lojaMock.nome)
        .expect(200)
        .expect(response => {
            expect(response.body.message).toBe("Todos os saloes com este nome em tela")
        })
        .end(Error => {
            if(Error){
                return done(Error)
            }
            return done()
        })
    })

    test("GET /saloes/all", (done) => {
        request(app)
        .get("/saloes/all" + lojaMock.id)
        .expect(200)
        .expect(response => {
            expect(response.body.message).toBe("Salão que detém o id")
        })
        .end(Error => {
            if(Error){
                return done(Error)
            }
            return done()
        })
    })

    test("POST /saloes/create", (done) => {
        const salaoBody = {
            nome: "teste1",
            cnpj: "222.222.222/0002-02",
            instagram: "@teste1",
            telefone: "81 98755-6355",
            especialidades: ["especialidade1", "especialidade2"]

        }
        request(app)
        .post("/saloes/create")
        .send(salaoBody)
        .set("Authorization", `Bearer ${token}`)
        .expect(201)
        .expect(response => {
            expect(response.body.salao.nome).toBe("teste1")
            expect(response.body.salao.cnpj).toBe("222.222.222/0002-02")
            expect(response.body.salao.instagram).toBe("@teste1")
            expect(response.body.salao.telefone).toBe("81 98755-6355")
            expect(response.body.salao.especialidades).toBe(["especialidade1", "especialidade2"])
        })
        .end(Error => {
            if(Error){
                return done(Error)
            }
            return done()
        })
    })

    test("PATCH /saloes/update/:id", (done) => {
        const salaoBody = {
            nome: "Kalliandra",
            cnpj: "kall@gmail.com",
            instagram: "@kall",
            especialidades: ["especialidade1", "especialidade2"],
            telefone: "98763-6666",

        }
    
        request(app)
        .patch("/saloes/update" + salaoMock.id)
        .send(salaoBody)
        .set("Authorization", `Bearer ${token}`)
        .expect(200)
        .expect(response => {
            expect(response.body.salao.nome).toBe("Kalliandra")
            expect(response.body.salao.cnpj).toBe("kall@gmail.com")
            expect(response.body.salao.instagram).toBe("@kall")
            expect(response.body.salao.especialidades).toBe(["especialidade1", "especialidade2"])
            expect(response.body.salao.telefone).toBe("98763-6666")
        })
        .end(Error => {
            if(Error){
                return done(Error)
            }
            return done()
        })
      })

      test("DELETE /saloes/delete:id", (done) => {
        request(app)
        .delete(`/saloes/delete/${salaoMock.id}`)
        .set("Authorization", `Bearer ${token}`)
        .expect(200)
        .end(Error => {
            if(Error){
                return done(Error)
            }
            return done()
        });

      })




})