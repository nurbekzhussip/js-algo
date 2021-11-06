//FIFO

const queue = [];

for (let i = 0; i < 10; i++) {
  queue.push(i);
}

while (queue.length) {
  let el = queue.shift();
  console.log({ el });
}
