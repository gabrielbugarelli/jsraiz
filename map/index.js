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

const usuarios = new Map;

usuarios.set(0, { nome: 'Gabriel', pais: 'Brasil' })
usuarios.set(1, { nome: 'Pedro', pais: 'Brasil' })
usuarios.set(2, { nome: 'Nelcael', pais: 'Brasil' })
usuarios.set(3, { nome: 'Tokashiki', pais: 'Japão' })

//Filtra todos os usuários do brasil e instancia dentro da variável
const arrayUsuariosBrasil =
  Array.from(usuarios.entries())
    .filter((users) => {
      return users[1].pais === 'Brasil'
    })

//instancia um arrayUsuariosBrasil como Map em usuariosBrasil
const usuariosBrasil = new Map(arrayUsuariosBrasil)

console.log(usuariosBrasil);