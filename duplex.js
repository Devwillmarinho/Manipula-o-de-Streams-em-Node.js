const { Duplex } = require('stream');

class MeuDuplex extends Duplex {
  constructor() {
    super();
    this.buffer = [];
  }

  _write(chunk, encoding, callback) {
    const data = chunk.toString();
    console.log(`📝 Escrevendo: ${data}`);
    this.buffer.push(data);
    callback();
  }

  _read(size) {
    if (this.buffer.length > 0) {
      const data = this.buffer.shift();
      console.log(`📤 Lendo: ${data}`);
      this.push(data);
    } else {
      this.push(null);
    }
  }
}

const stream = new MeuDuplex();

stream.write('Mensagem 1');
stream.write('Mensagem 2');
stream.end();

stream.on('data', (chunk) => {
  console.log(`🔁 Recebido no .read(): ${chunk.toString()}`);
});
