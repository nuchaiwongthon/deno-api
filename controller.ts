const addGame = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  console.log(body.value);
  response.body = { message: 'OK' };
  response.status = 200;
};
export { addGame };
