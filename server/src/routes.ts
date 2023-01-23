import { FastifyInstance } from "fastify"
import { prisma } from "./lib/prisma"
import { z } from "zod"
import { item, cardapio } from "@prisma/client"

export async function appRoutes(app: FastifyInstance){
    app.get("/pedidos", async (request) => {
        const getTitle = z.object({
            loja: z.string(),
          })
      
        const { loja } = getTitle.parse(request.query)

        const pedidos = await prisma.pedido.findMany({
            where: {
                loja_fk: loja,        
            }
        })
        return pedidos
    })

    app.get("/itens", async (request) => {
        const getTitle = z.object({
            pedido: z.string()
          })
          
        const { pedido } = getTitle.parse(request.query)

        const itens = await prisma.$queryRaw<[item[], cardapio[]]>`
        select * from "item", "cardapio"
        where pedido_fk = ${parseInt(pedido)} and item.nome = cardapio.nome`

        return itens
    })

    app.get("/cardapio", async (request) => {
        const getLoja = z.object({
            loja: z.string()
          })

        const { loja } = getLoja.parse(request.query)

        const cardapio = await prisma.cardapio.findMany({
            where:{
                loja_fk: loja
            }
        })
        return cardapio
    })

    app.get("/cliente", async (request) => {
        const getCliente = z.object({
            email: z.string()
          })

        const { email } = getCliente.parse(request.query)

        const cliente = await prisma.cliente.findMany({
            where:{
                email: email
            }
        })
        return cliente
    })

    app.get("/loja", async (request) => {
        const getLoja = z.object({
            nome: z.string()
        })

        const { nome } = getLoja.parse(request.query)

        const loja = await prisma.loja.findMany({
            where:{
                nome: nome
            }
        })
        return loja
    })

    app.get("/lojas", async () => {
        const lojas = await prisma.loja.findMany()
        return lojas
    })

    app.post("/pedido", async (request) => {
        const createPedido = z.object({
            loja: z.string(),
            cliente: z.string(),
            itens: z.array(
                z.object({
                    nome: z.string(),
                    qntd: z.number()
                })
            )
          })
      
          const { loja, cliente, itens } = createPedido.parse(request.body)
    
          await prisma.pedido.create({
            data:{
                concluido: false,
                loja_fk: loja,
                cliente_fk: cliente,
                item:{
                    create: itens.map((item) => {
                        return{
                            nome: item.nome,
                            qntd: item.qntd
                            }
                    })

                }
            }
          })
    })

    app.post("/cliente", async (request) => {
        const createCliente = z.object({
            nome: z.string(),
            email: z.string(),
            senha: z.string()
          })
      
          const { nome, email, senha } = createCliente.parse(request.body)

          await prisma.cliente.create({
            data:{
                nome: nome,
                email: email,
                senha: senha,
            }
          })
    })

    app.post("/loja", async (request) => {
        const createLoja = z.object({
            nome: z.string(),
            email: z.string(),
            senha: z.string()
          })
      
          const { nome, email, senha } = createLoja.parse(request.body)

          await prisma.loja.create({
            data:{
                nome: nome,
                email: email,
                senha: senha,
            }
          })
    })

    app.post("/delLoja", async (request) => {
        const deleteLoja = z.object({
            nome: z.string()
          })
      
          const { nome } = deleteLoja.parse(request.body)

          await prisma.item.deleteMany({
            where:{
                pedido:{
                    loja_fk: nome
                }              
            }
          })

          await prisma.pedido.deleteMany({
            where:{
                loja_fk: nome
            }
          })

          await prisma.cardapio.deleteMany({
            where:{
                loja_fk: nome
            }
          })

          await prisma.loja.delete({
            where:{
                nome: nome
            }
          })
    })

    app.post("/delCliente", async (request) => {
        const deleteCliente = z.object({
            email: z.string()
          })
      
          const { email } = deleteCliente.parse(request.body)

          await prisma.item.deleteMany({
            where:{
                pedido:{
                    cliente_fk: email
                }
            }
          })

          await prisma.pedido.deleteMany({
            where:{
                cliente_fk: email
            }
          })

          await prisma.cliente.delete({
            where:{
                email: email
            }
          })
          
    })

    app.post("/cardapio", async (request) => {
        const createCardapio = z.object({
            nome: z.string(),
            preco: z.number(),
            loja: z.string()
          })

          const { nome, preco, loja } = createCardapio.parse(request.body)

          await prisma.cardapio.create({
            data:{
                nome: nome,
                preco: preco,
                loja_fk: loja,
                status: true
            }
          })
    })
}