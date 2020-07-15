import { Application } from 'https://deno.land/x/oak/mod.ts';
import router from './route.ts';
import { oakCors } from 'https://deno.land/x/cors/mod.ts';
const port = 5000;

const app = new Application();
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port ${port}`);

app.listen({ port });
