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

```javascript
let pessoa = {
    nome: "João",
    idade: 30,
    saudacao: function() {
        return "Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.";
    }
};

console.log(pessoa.nome);
console.log(pessoa.saudacao()); 
```
