import { Router } from 'https://deno.land/x/oak/mod.ts';
import { addGame } from './controller.ts';
const router = new Router();

router
  .get('/api/products', (res) => {
    const message = {
      message: 'Hello from API!',
      timeStamp: new Date().toTimeString(),
    };
    console.log(11111);
    res.response.body = message;
  })
  // router.post('/api/post', (res) => {
  //   const message = {
  //     message: 'Hello from API!',
  //     timeStamp: new Date().toTimeString(),
  //   };
  //   console.log(res);
  //  res.response.body = message;
  // });
  .post('/api/games', addGame);
export default router;
