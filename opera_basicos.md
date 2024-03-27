# Operadores Básicos
Em JavaScript, existem diversos operadores básicos que são fundamentais para realizar operações em variáveis, valores e expressões.

## Aritméticos
> Os operadores padrão são: `+`  `-`  `*` `/`
> Alem disso também podem ser usados  resto `%`  exponenciação `**` incremento/decremento `++/--`

```javascript
let a = 10;
let b = 3;
let soma = a + b; 
let subtracao = a - b;
let multiplicacao = a * b; 
let divisao = a / b;
let restoDivisao = a % b; 
console.log(soma, subtracao, multiplicacao, divisao, restoDivisao); // Saída: 13 7 30 3.3333333333333335 1
```

## De Comparação
> `==` `===` `!=` `!==` `>` `<` `>=` `<=`
> Compara seus operandos e retorna um valor lógico baseado em se a comparação é verdadeira.
> Os operandos podem ser numéricos, strings, lógicos ou objetos

```javascript
let num1 = 10;
let num2 = 5;
console.log(num1 > num2); // Saída: true
console.log(num1 === num2); // Saída: false (igualdade estrita)
console.log(num1 !== num2); // Saída: true (diferença estrita)
```

## Lógicos
> `&&` `||` `!`
> Usados tipicamente com valores booleanos (lógicos); neste caso, retornam um valor booleano.

```javascript
let p = true;
let q = false;
console.log(p && q); // Saída: false (AND lógico)
console.log(p || q); // Saída: true (OR lógico)
console.log(!p); // Saída: false (NOT lógico)
```

## typeof
> Determina o tipo de um valor, seja uma variavel, uma expressão ou um literal.

```javascript
let x = 10;
let y = "Hello";
let z = true;

console.log(typeof x); // Saída: "number"
console.log(typeof y); // Saída: "string"
console.log(typeof z); // Saída: "boolean"
```
Um exemplo mais complexo:

 ```javascript
 console.log(typeof 42); // Saída: "number"
 console.log(typeof "Hello"); // Saída: "string"
 console.log(typeof true); // Saída: "boolean"
 console.log(typeof [1, 2, 3]); // Saída: "object" (arrays são objetos eJavaScript)
 console.log(typeof {name: "John", age: 30}); // Saída: "object"
 console.log(typeof function() {}); // Saída: "function"
 console.log(typeof undefined); // Saída: "undefined"
 console.log(typeof null); // Saída: "object" (especificamente um "null")
 ```

O `typeof` pode ser utilizado com qualquer expressão ou valor