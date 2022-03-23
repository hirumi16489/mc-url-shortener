
const set = new Set();
let count = 0;
let stopLoop = false;
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const generateString = length => {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

while (!stopLoop) {
  const newValue = generateString(7);

  if (set.has(newValue)) {
    stopLoop = true;
  }

  set.add(newValue);

  count++;
  console.log(count);
}


