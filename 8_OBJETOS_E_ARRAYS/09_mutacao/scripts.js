let pessoa = {
  nome: "Paulo"
}

let pessoa2 = pessoa;
console.log(pessoa2);

let pessoa3 = {
  nome: "Paulo"
}

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);

pessoa2.nome = "Pedro";

console.log(pessoa.nome);

pessoa.nome = "Maria";

console.log(pessoa2.nome);
