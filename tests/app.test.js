import {describe ,expect, it, beforeAll} from 'vitest'
import {JSDOM} from 'jsdom'

describe('APP',()=>{
    let dom;
    beforeAll(async () => {
        dom = await JSDOM.fromFile("index.html", {
          resources: "usable",
          runScripts: "dangerously",
        });
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
        expect(link.href).toMatch(/\/src\/css\/style\.css$/);
      });
})