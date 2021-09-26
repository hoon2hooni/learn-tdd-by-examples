async function helloWorld() {
  return "hello";
}

async function byeWorld(params: string) {
  return `${params} bye world`;
}

async function wholeWorld() {
  const hello = await helloWorld();
  const bye = await byeWorld(hello);
  return bye;
}

wholeWorld().then((res) => console.log(res));
