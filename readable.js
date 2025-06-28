const fs = require('fs');

function lerArquivo(caminho) {
  const stream = fs.createReadStream(caminho, { encoding: 'utf-8' });

  stream.on('data', (chunk) => {
    console.log(`📖 Chunk de ${caminho}:`, chunk);
  });

  stream.on('end', () => {
    console.log(`✅ Leitura finalizada de: ${caminho}\n`);
  });
}

lerArquivo('./arquivos/input1.txt');
lerArquivo('./arquivos/input2.txt');
