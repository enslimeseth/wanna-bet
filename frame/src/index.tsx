import { Frog } from "frog";
import { devtools } from "frog/dev";
import { serveStatic } from "frog/serve-static";

import { Home } from "./web";
import { getFont } from "./fonts";
import { homeScreen } from "./screens/home";
import { createScreen } from "./screens/create";

export const app = new Frog({
  browserLocation: "/",
  imageOptions: async () => ({ fonts: [await getFont("satoshi")] }),
});

app.get("/", (ctx) => ctx.html(<Home />));
app.frame("/home", homeScreen);
app.frame("/create/:pageNum", createScreen);

devtools(app, { serveStatic });
export default app;
