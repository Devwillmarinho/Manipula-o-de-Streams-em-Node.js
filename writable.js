const fs = require('fs');

function escreverArquivo(caminho, linhas) {
  const stream = fs.createWriteStream(caminho, { encoding: 'utf-8' });

  linhas.forEach(linha => stream.write(linha + '\n'));
  stream.end();

  stream.on('finish', () => {
    console.log(`✅ Escrita concluída em: ${caminho}`);
  });
}

escreverArquivo('./arquivos/output1.txt', ['Linha 1 do arquivo 1', 'Linha 2 do arquivo 1']);
escreverArquivo('./arquivos/output2.txt', ['Linha 1 do arquivo 2', 'Linha 2 do arquivo 2']);
