// Objeto Map()

/** Principais métodos do Map():
 * has - valida se a chave existe no map
 * delete - deleta chave e valor através da chave
 * clear - limpa todo o mapa
 * forEach
 * keys - retorna todas as keys do map
 * values - retorna todos os valores do map
 * entries - retona um iterável
 * size - retona o tamanho do map
 **/

const mapa = new Map([
  [1, 'gabriel'],
  [2, 'nelcael'],
  [3, 'pedro'],
  [4, 'letycia'],
])

mapa.set(5, 'tokashiki')

console.log('Mapa: ', mapa.values());
