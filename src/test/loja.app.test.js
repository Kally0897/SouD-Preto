const app = require("../app")
const request = require("supertest")
const lojaModel = require("../models/LojaSchema")



describe("Loja Controller", () => {
    const lojaMock = {
        nome: "teste",
        cnpj: "111111111/1111-11",
        instagram: "@teste",
        cabelos: ["cabelo1", "cabelo2"],
        endereco: {
            rua: "Rua Teste Zerado",
            número: 11,
            bairro: "Test",
            cidade: "Testando",
            estado: "Teste",
            cep: "111.111-111"
        },
        produtos: ["produto1", "produto2"]
    }

    beforeAll (async () => {
        const newLoja = new lojaModel(lojaMock)
        await newLoja.save()

        lojaMock.id = newLoja._id
    })

    afterAll(async () => {
        await lojaModel.deleteMany();
    })

    test("GET /lojas/all", (done) => {
        request(app)
        .get("/lojas/all")
        .expect(200)
        .expect(response => {
            expect(response.body.message).toBe("Todas as lojas do catálogo em tela")
        })
        .end(Error => {
            if(Error){
                return done(Error)
            }
            return done()
        })
    })

    test("GET /lojas/all", (done) => {
        request(app)
        .get("/lojas/all" + lojaMock.nome)
        .expect(200)
        .expect(response => {
            expect(response.body.message).toBe("Todas as lojas com este nome em tela")
        })
        .end(Error => {
            if(Error){
                return done(Error)
            }
            return done()
        })
    })

    test("GET /lojas/all", (done) => {
        request(app)
        .get("/lojas/all" + lojaMock.id)
        .expect(200)
        .expect(response => {
            expect(response.body.message).toBe("Loja que detém o id")
        })
        .end(Error => {
            if(Error){
                return done(Error)
            }
            return done()
        })
    })

    test("POST /lojas/create", (done) => {
        const lojaBody = {
            nome: "teste1",
            cnpj: "222.222.222/0002-02",
            instagram: "@teste1",
            cabelos: ["item1", "item2"],
            endereco: {
                rua: "Rua Teste",
                número: 12,
                bairro: "Test1",
                cidade: "Glória",
                estado: "Testando",
                cep: "222.222-222"
            },
            produtos: ["produto3", "produto4"]

        }
        request(app)
        .post("/lojas/create")
        .send(lojaBody)
        .set("Authorization", `Bearer ${token}`)
        .expect(201)
        .expect(response => {
            expect(response.body.loja.nome).toBe("teste1")
        })
        .end(Error => {
            if(Error){
                return done(Error)
            }
            return done()
        })
    })

    test("PATCH /lojas/update/:id", (done) => {
        const lojaBody = {
            nome: "Kalliandra",
            cnpj: "kall@gmail.com",
            instagram: "@kall",
            produtos: ["Kolene", "Seda"],
            telefone: "98763-6666",

        }
    
        request(app)
        .patch("/lojas/update" + lojaMock.id)
        .send(lojaBody)
        .set("Authorization", `Bearer ${token}`)
        .expect(200)
        .expect(response => {
            expect(response.body.loja.nome).toBe("Kalliandra")
            expect(response.body.loja.cnpj).toBe("kall@gmail.com")
            expect(response.body.loja.instagram).toBe("@kall")
            expect(response.body.loja.produtos).toBe(["Kolene", "Seda"])
            expect(response.body.loja.telefone).toBe("98763-6666")
        })
        .end(Error => {
            if(Error){
                return done(Error)
            }
            return done()
        })
      })

      test("DELETE /lojas/delete:id", (done) => {
        request(app)
        .delete(`/lojas/delete/${lojaMock.id}`)
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