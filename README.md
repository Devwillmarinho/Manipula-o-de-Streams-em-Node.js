# 🔄 Manipulação de Streams em Node.js

Projeto de prática com os quatro tipos principais de **Streams** do Node.js, utilizando apenas módulos nativos (`fs` e `stream`). Ideal para entender como trabalhar com dados em fluxo contínuo!

---

## 📚 Tipos de Streams implementados

- 📖 **Readable Stream**  
  Lê arquivos de texto em pedaços (chunks) e exibe no console.

- ✍️ **Writable Stream**  
  Escreve múltiplas linhas em arquivos diferentes.

- 🔁 **Transform Stream**  
  Lê arquivos e transforma o conteúdo para MAIÚSCULAS antes de gravar.

- 🔄 **Duplex Stream**  
  Stream personalizada que escreve e lê dados armazenados internamente.

---

## 📁 Estrutura do Projeto

streams-project/
├── arquivos/
│ ├── input1.txt
│ ├── input2.txt
│ ├── output1.txt
│ ├── output2.txt
│ ├── input1-maiusculas.txt
│ ├── input2-maiusculas.txt
├── readable.js
├── writable.js
├── transform.js
├── duplex.js
├── package.json
└── README.md

yaml


---

## 🚀 Como executar

Certifique-se de estar na raiz do projeto e execute os arquivos com Node.js:

```bash
node readable.js     # Leitura de arquivos com Readable Stream
node writable.js     # Escrita em arquivos com Writable Stream
node transform.js    # Transformação para maiúsculas com Transform Stream
node duplex.js       # Escrita/leitura com Duplex Stream
📌 Pré-requisitos
Node.js instalado na sua máquina

Os arquivos input1.txt e input2.txt devem estar na pasta arquivos/

🧠 Aprendizados
Este projeto mostra na prática como os Streams do Node.js podem ser usados para:

Processar dados em partes (chunks)

Otimizar performance com arquivos grandes

Criar fluxos personalizados de leitura e escrita

👨🏻‍💻 Autor
Desenvolvido por Willian Marinho 🚀
