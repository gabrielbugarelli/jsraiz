/** Principais métodos do objeto Set():
 * - size - Exibe a quantidade de valores no array
 * - add - Adiciona valores no array
 * - has - Verifica se o valor existe no array
 * - delete - Deleta o valor
 * - clear - Limpa todo o array
 * - values - exibe os valores no array
 * - entries - Retorna um iteravel do Array
**/

{
  /**
   * Basicamente, o Set() é um array de valores, porém,
   * diferente de uma array convencional, o Set() não permite
   * valores repetidos dentro do array.
  **/

  //Exemplo com o Set():
  const obj = { name: 'teste', password: 123 }

  const set = new Set([
    100,
    'string',
    obj,
    true,
    obj
  ])

  console.log(set);
}

/** Com o Set(), é possível fazer:
 * - União
 * - Interseção
 * - Diferença
**/

{
  //Exemplo de União de arrays:
  const conjunto1 = [1, 'Gabriel', true, 100]
  const conjunto2 = [2, 'Gabriel', false, 200]

  const set = new Set([...conjunto1, ...conjunto2])

  console.log('União com set: ', set);
}

{
  //Exemplo de Interseção de arrays:
  const conjunto1 = new Set([1, 'Gabriel', true, 100])
  const conjunto2 = new Set([2, 'Gabriel', false, 200])

  let intersecaoExemplo1 = [...conjunto1].filter((valor) => {
    return conjunto2.has(valor)
  })

  let intersecaoExemplo2 = new Set([...conjunto1].filter((valor) => {
    return conjunto2.has(valor)
  }))

  console.log('Interseção com set: ', intersecaoExemplo2);
}

{
  /** Diferença:
   * Basicamente, diferença é tudo que tem no conjunto 1
   * que não tem no conjunto 2
  **/

  //Exemplo de Diferença de arrays:
  const conjunto1 = new Set([1, 'Gabriel', true, 100])
  const conjunto2 = new Set([2, 'Gabriel', false, 200])

  let diferenca = new Set([...conjunto1].filter((valor) => {
    return !conjunto2.has(valor)
  }))

  console.log('Diferença com set: ', diferenca);
}

/**
 * Existe também o WeakSet,
 * mas a sua única diferença é que
 * ele é uma 'caixa preta', ou seja,
 * não possui a maioria dos métodos do
 * Set(), e também, não permite valores
 * dúplicados dentro do array.
**/