# Variáveis
`let`  `var`  `const`

## Declaração de Variáveis
### var:
  > - Variáveis declaradas com `var` têm escopo de função ou escopo global; 
  > - Permitem redeclaração e reatribuição de valores; 
  > - Podem ser usadas antes de serem declaradas 

```Javascript
  var x = 10;

  function example() {
      var y = 20;
      console.log(x); // 10
      console.log(y); // 20
  }

  console.log(x); // 10
  console.log(y); // ReferenceError: y is not defined
```

### let:
  > - Variáveis declaradas com `let` têm escopo de bloco, o que significa que são acessíveis apenas dentro do bloco em que são declaradas.
  > - Não permitem redeclaração de variáveis no mesmo escopo, mas permitem reatribuição de valores.
  > - Não são içadas

```Javascript
  let x = 10;

  if (true) {
      let y = 20;
      console.log(x); // 10
      console.log(y); // 20
  }

  console.log(x); // 10
  console.log(y); // ReferenceError: y is not defined
```
### const
  > - Constantes declaradas com `const` também têm escopo de bloco.
  > - Devem ser inicializadas no momento da declaração e não podem ser reatribuídas.
  > - Não permitem redeclaração.

```Javascript
  const PI = 3.14;
  console.log(PI); // 3.14

  PI = 3.14159; // TypeError: Assignment to constant variable.
  
  const obj = { name: 'John' };
  obj.age = 30; // Isso é permitido

  console.log(obj); // { name: 'John', age: 30 }

```
## Escopo

### Global
  > - Variáveis declaradas fora de qualquer bloco de código tem escopo global
  > - Podem ser acessadas de qualquer lugar do código, **dentro de qualquer função ou bloco**.
  > - Geralmente declaradas fora de todas as funções e blocos  

```JavaScript
  var globalVar = 10;
  
  function example() {
      console.log(globalVar); // 10
  }

  example();
  console.log(globalVar); // 10
```

### Bloco
  > - Variáveis declaradas com `let` e `const` têm escopo de bloco.
  > - Isso significa que elas só podem ser acessadas **dentro do bloco** em que são declaradas, como um bloco `if`, `for`, `while`, etc.
  > - Este tipo de escopo ajuda a evitar vazamentos de variáveis e a manter o código mais seguro.

```Javascript
  if (true) {
    let blockVar = 30;
    console.log(blockVar); // 30
  }

  console.log(blockVar); // ReferenceError: blockVar is not defined
```
### Função
  > - Variáveis declaradas dentro de uma função com `var` têm escopo de função.
  > - Isso significa que elas só podem ser acessadas **dentro da função onde foram definidas** ou em **funções aninhadas dentro dela**.

```Javascript
  function example() {
    var functionVar = 40;
    console.log(functionVar); // 40
  }

  example();
  console.log(functionVar); // ReferenceError: functionVar is not defined
```