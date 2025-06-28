const fs = require('fs');
const { Transform } = require('stream');

class EmMaiusculas extends Transform {
  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
}

function transformarArquivo(entrada, saida) {
  const leitura = fs.createReadStream(entrada, { encoding: 'utf-8' });
  const escrita = fs.createWriteStream(saida, { encoding: 'utf-8' });
  const transformar = new EmMaiusculas();

  leitura.pipe(transformar).pipe(escrita);

  escrita.on('finish', () => {
    console.log(`✅ Transformação concluída: ${saida}`);
  });
}

transformarArquivo('./arquivos/input1.txt', './arquivos/input1-maiusculas.txt');
transformarArquivo('./arquivos/input2.txt', './arquivos/input2-maiusculas.txt');
