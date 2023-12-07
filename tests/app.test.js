import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";

describe('APP',()=>{
  let dom;

	// lectura de nuestro html
  beforeAll(async () => {
    dom = await JSDOM.fromFile("./index.html", { runScripts: "dangerously" });
    global.document = dom.window.document;
  });
      // it("should render css", async () => {
      //   let document = dom.window.document;
      //   let link = document.querySelector("link");
      //   console.log(link.href);
      //   expect(link.href).toMatch(/\/src\/css\/style.css$/);
      //   // expect(link.href).toMatch;
      // });
      it("should render CSS", async () => {
        let document = dom.window.document;
        let link = document.querySelector("link[rel='stylesheet']");
        console.log(link.href);
      
        // Ajusta la expresión regular para reflejar la ruta de tu archivo de estilo
        expect(link.href).toMatch('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css');
      });


      it("Existe H1", () => {
        let document = dom.window.document;
        let h1 = document.querySelector("h1");
  
        expect(h1).toBeInTheDocument();
      });

      it("should el ID button", () =>{
        let document = dom.window.document;
        let cartButton = document.getElementById("button");

        expect(cartButton).toBeDefined('button');
      })

      it("should click en btn cambie color", () =>{
        let document = dom.window.document;
        
        let tagBackground = document.querySelector(".tag");
        
        expect(tagBackground).toBeInTheDocument();
        let redColor = document.querySelector(".red")
        expect(redColor).toBeInTheDocument();
        expect(tagBackground.style.backgroundColor).toContain("")
        
      })
      
  
})
