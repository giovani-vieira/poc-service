import { Server, Model } from 'miragejs'

export function makeServer({ environment = "development" } = {}) {
  
  const server = new Server({
    environment,
    models: {
      fruit: Model
    },
  
    seeds(server) {
      server.create("fruit", { description: "Apple" })
      server.create("fruit", { description: "Watermelon" })
      server.create("fruit", { description: "Orange" })
      server.create("fruit", { description: "Pear" })
      server.create("fruit", { description: "Cherry" })
      server.create("fruit", { description: "Strawberry" })
      server.create("fruit", { description: "Nectarine" })
      server.create("fruit", { description: "Grape" })
      server.create("fruit", { description: "Mango" })
      server.create("fruit", { description: "Blueberry" })
      server.create("fruit", { description: "Pomegranate" })
    },

    routes() {
      this.urlPrefix = 'http://localhost:7269';
      this.namespace = "/api";

      this.get("/fruits", (schema) => {
        return schema.fruits.all();
      });

    
      this.get("/fruits/:id", (schema, request) => {
        let id = request.params.id
        return schema.fruits.find(id)
      });

    }
  })
  
  return server;
}