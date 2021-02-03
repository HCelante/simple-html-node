# simple-html-node

Para criação da estrutura básica do projeto foi utilizado o express instalado de forma global:

> express --view=pug formhtml


Extrutura criada pelo comando:

.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug


Em seguida instaladas as dependências geradas:

> cd formhtml

> npm install


Dependências que foram instaladas:

    [cookie-parser](https://www.npmjs.com/package/cookie-parser)
    [debug](https://www.npmjs.com/package/debug)
    [express](https://www.npmjs.com/package/express)
    [http-errors](https://www.npmjs.com/package/http-errors)
    [morgan](https://www.npmjs.com/package/morgan)
    [pug](https://www.npmjs.com/package/pug)




Para rodar no modo DEBUG:

> DEBUG=formhtml:* npm start