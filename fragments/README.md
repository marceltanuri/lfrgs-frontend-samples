# Fragments

Diretórios contendo cada um deles um fragmento reutilizável. Ao colaborar dê preferência para manter a estrutura do Fragment Toolkit:

```
├── diretório-do-seu-fragmento
|   ├── configuration.json
|   ├── fragment.json
|   ├── index.css
|   ├── index.html
|   ├── index.js
```


Estrutura do arquivo `fragment.json`

```
{
  "cssPath": "index.css",
  "configurationPath": "configuration.json",
  "htmlPath": "index.html",
  "jsPath": "index.js",
  "name": "Nome do seu fragmento",
  "type": "component",
  "description": "Descrição do seu fragmento"
}
```

Para mais informações sobre o Fragment Toolkit: https://learn.liferay.com/w/dxp/site-building/developer-guide/reference/fragments/fragments-toolkit-command-reference
 