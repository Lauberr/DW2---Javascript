# Tipos de Dados
## Tipos Primitivos
São os tipos de dados básicos em linguagens de programação, que representam valores simples ou indivisíveis.
Normalmente são suportados diretamente pelo hardware ou pela linguagem de programação e não precisam ser construídos a partir de outros tipos.

### Boolean
 > - Um dos tipos primitivos mais simples e fundamentais da programação. Ele representa um valor lógico que pode ser `true` ou `false`.
 > - Frequentemente usado em expressores condicionais e em operações de controle de fluxo, onde decisões são tomadas com base na avaliação de uma condição.
  
```javascript
let isSunny = true;
let isWarm = true;
let isBeachWeather = isSunny && isWarm; // true (apenas se  ambos forem verdadeiros)
```
---
### Number
> - Um dos tipos primitivos mais basicos e amplamente utlizados em linguagens de programação. 
> - Representa valores numéricos, como inteiros e números de ponto flutuante. 
> - Dependendo da linguagem tbm pode ser implementado de diferentes maneiras, variando em precisão e faixa de valores suportados.
> - Essencial ao lidar com valores numéricos em ampla variedade de contextos como cálculos simples até operações mais complexas.
> - Caracteristicas:
>   - Inteiros
>   - Números de Ponto Flutuante
>   - Precisão Limitada
>   - Operações Matemáticas
>   - Constante Numérica

```javascript
let a = 5;
let b = 3;

let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;

console.log("A soma de a e b é:", soma);
console.log("A subtração de a por b é:", subtracao); 
console.log("A multiplicação de a por b é:", multiplicacao); 15
console.log("A divisão de a por b é:", divisao);
```

---
### Strings
> - Usadas para representar textos / sequência de caracteres delimitada por aspas simples '' ou duplas ""
> - Caracteristicas:
>   - Sequencia de Caract
>   - Imutaveis
>   - Operações de Manipulação
>   - Codificação de Caracter
>   - Delimitadores
>   - Escape de Caracteres
>   - Comparação de String

```javascript
let minhaString = "Olá, mundo!";
console.log(minhaString);
```

---
### Undefined
> - Representa ausência de valor.
> - Quando uma Váriavel não tem seu valor declarado ela é definida automaticamente como `undefined`
> - Valor retornado em funções sem instrução de `return`
> - Util na verificação se uma variavel foi declarada ou não e se uma função retorna um valor.

```javascript
// Declarando uma variável sem atribuir valor a ela
let x;
console.log(x); // Saída: undefined

// Declarando uma função sem instrução de retorno
function semRetorno() {
    // Não há instrução de retorno
}

// Chamando a função e atribuindo o resultado a uma variável
let resultado = semRetorno();
console.log(resultado); // Saída: undefined

// Verificando se uma variável foi inicializada
if (typeof y === 'undefined') {
    console.log("A variável y não foi inicializada.");
} else {
    console.log("A variável y foi inicializada com um valor.");
}
```
---
### Null
> - Ausência intencional de um valor.
> - Declaração de variaveis sem valor.

```javascript
// Criando uma variável e atribuindo null a ela
let carro = null;

// Verificando se a variável carro está definida como null
if (carro === null) {
    console.log("Não há carro atribuído.");
} else {
    console.log("Um carro está atribuído.");
}

// Criando um objeto
let pessoa = {
    nome: "João",
    idade: 30
};

// Atribuindo null à variável que referencia o objeto pessoa
pessoa = null;

// Tentando acessar propriedades do objeto pessoa
console.log(pessoa.nome); // Saída: TypeError: Cannot read property 'nome' of null
```

## Objeto
> - Estrutura de dados que permite armazenar e organizer dados de diversos tipos em um unico lugar.
> - Em linguagens como JavaScript, Python, C++ e Java, são fundamentais para 'POO'
> - Características:
>   - Propriedades 
>   - Métodos 
>   - Instâncias 
>   - Encapsulamento 
>   - Herança 
>   - Polimorfismo

> - Vale resslatar o uso de `for...of` e `for...in` o `for...of` é útil para iterar sobre os valores de um objeto iterável (como um array), o `for...in` é útil para iterar sobre as chaves de um objeto (como um objeto JavaScript).
```javascript
// Definindo um objeto com algumas propriedades
let pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

// Usando o for...in para iterar sobre as propriedades do objeto
console.log("Iterando com for...in:");
for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}
// Saída:
// nome: João
// idade: 30
// cidade: São Paulo

// Definindo um array de frutas
let frutas = ['Maçã', 'Banana', 'Laranja'];

// Usando o for...of para iterar sobre os elementos do array
console.log("\nIterando com for...of:");
for (let fruta of frutas) {
    console.log(fruta);
}
// Saída:
// Maçã
// Banana
// Laranja

```

## Array
> - Estrutura de dados que pode armazenar uma coleção ordenada de elementos.
> - Parte fundamental em muitas linguagens de progamação e são amplamente utilizados para armazenar e manipular conjuntos de dados.
> - Características:
>   - Coleção Ordenada 
>   - TAmanho fico ou dinamico
>   - Elementos de Diferentes Tipos 
>   - Acesso aos Elementos
>   - Iteração
>   - Performance

> - Alguns conceitos importantes sobre arrays incluem: 
>   - **Índices:** Cada elemento em um array tem um índice associado que representa sua posição dentro do array. Os índices geralmente começam em 0 e vão até o comprimento do array menos um. Por exemplo, no array meuArray, o elemento 10 está no índice 0, o elemento 20 está no índice 1, e assim por diante.
>   - **Comprimento:** O comprimento de um array é o número de elementos que ele contém. Em JavaScript, o comprimento de um array pode ser acessado através da propriedade length. Por exemplo, meuArray.length retornaria 5.
>   - **Métodos de Array:** JavaScript fornece vários métodos integrados para manipular arrays, como `push()`, `pop()`, `shift()`, `unshift()`, `slice()`, `splice()`, `forEach()`, entre outros. Esses métodos permitem adicionar, remover, acessar e manipular elementos de um array de várias maneiras.



```Javascript
// Método push(): Adiciona um elemento ao final do array
let meuArray = [1, 2, 3];
meuArray.push(4);
console.log(meuArray); // Saída: [1, 2, 3, 4]

// Método pop(): Remove o último elemento do array
let ultimoElemento = meuArray.pop();
console.log(ultimoElemento); // Saída: 4
console.log(meuArray); // Saída: [1, 2, 3]

// Método shift(): Remove o primeiro elemento do array
let primeiroElemento = meuArray.shift();
console.log(primeiroElemento); // Saída: 1
console.log(meuArray); // Saída: [2, 3]

// Método unshift(): Adiciona um elemento ao início do array
meuArray.unshift(0);
console.log(meuArray); // Saída: [0, 2, 3]

// Método splice(): Adiciona ou remove elementos do array
meuArray.splice(1, 0, 1.5); // Adiciona 1.5 na posição 1
console.log(meuArray); // Saída: [0, 1.5, 2, 3]

// Método slice(): Retorna uma parte do array
let novoArray = meuArray.slice(1, 3); // Retorna os elementos da posição 1 até a posição 2
console.log(novoArray); // Saída: [1.5, 2]

// Método forEach(): Executa uma função para cada elemento do array
meuArray.forEach(function(elemento) {
    console.log(elemento);
});
// Saída:
// 0
// 1.5
// 2
// 3

```
