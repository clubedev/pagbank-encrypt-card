# @clubedev/pagbank-encrypt-card

Biblioteca JavaScript para **criptografar dados de cartão** usando o padrão do **PagBank**, com suporte a ES Modules, CommonJS e UMD (uso direto no navegador).

Ideal para projetos Node.js, navegadores e SPAs (Vue, React, Angular, etc).

---

## 🚀 Instalação

```bash
npm install @clubedev/pagbank-encrypt-card
```

## 🔧 Importação

ES Modules (Vite, Next, Nuxt, Vue, React)
```js
import { PagbankEncryptCard } from '@clubedev/pagbank-encrypt-card';
```

CommonJS (Node tradicional)
```js
const { PagbankEncryptCard } = require('@clubedev/pagbank-encrypt-card');
```

Navegador (via script UMD)
```html
<script src="https://unpkg.com/@clubedev/pagbank-encrypt-card/dist/pagbank-encrypt-card.umd.js"></script>
```

## 🔐 Como usar
```js
import { PagbankEncryptCard } from '@clubedev/pagbank-encrypt-card';

PagbankEncryptCard.encrypt('PUBLIC_KEY', {
  number: "4111111111111111",
  holder: "JOAO DA SILVA",
  expMonth: "12",
  expYear: "2028",
  securityCode: "123",
}).then((token) => {
    console.log(token);
}).catch((errors) => {
    for (let k in errors) {
        console.log(`[${errors[k]?.code}] - ${errors[k]?.message}`);
    }
});;

```

### 🧩 Parâmetros

O primeiro parâmetro é a chave publica gerada no PagBank, segue detalhes de como gerar sua **PUBLIC_KEY**:

1. Acesse: [Caso não tenha criado, clique aqui](https://developer.pagbank.com.br/reference/criar-chave-publica) ou [Se já criou, clique aqui](https://developer.pagbank.com.br/reference/consultar-chave-publica)
2. Em **Authorization** coloque **Bearer {seu token gerado no PagBank}**
3. Clique em **Try It!**
4. Seu token estará na sessão **RESPONSE** abaixo de **Try It!**

O segundo parâmetro é um objeto contendo os dados do cartão:

```js
{
  number: "4111111111111111",
  holder: "JOAO DA SILVA",
  expMonth: "12",
  expYear: "2028",
  securityCode: "123",
}
```

| Campo            | Tipo   | Obrigatório | Descrição                                   |
| ---------------- | ------ | ----------- | ------------------------------------------- |
| `number`         | string | sim         | Número do cartão (somente dígitos).         |
| `holder`         | string | sim         | Nome impresso no cartão.                    |
| `expMonth`       | string | sim         | Mês de expiração (ex: `"05"`).              |
| `expYear`        | string | sim         | Ano de expiração (ex: `"2028"`).            |
| `securityCode`   | string | sim         | Código de segurança.                        |


## 📄 Licença

MIT — utilize livremente em projetos comerciais e pessoais.

## Suporte

- **Site ClubeDev:** https://clubedev.com.br