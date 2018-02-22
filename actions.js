const ADD_NOTA = "ADD_NOTA"
const REMOVER_NOTA = "REMOVER_NOTA"
const EDITAR_NOTA = "EDITANDO_NOTA"
const ALTERAR_NOTA = "ALTERAR_NOTA"

export function addNota(titulo, texto){
    return {
        type: ADD_NOTA,
        titulo,
        texto
    }
}
export function removerNota(posicao){
    return {
        type: REMOVER_NOTA,
        posicao
    }
}
export function editarNota(posicao){
    return {
        type: EDITAR_NOTA,
        posicao
    }
}
export function alterarNota(posicao, titulo, texto){
    type: ALTERAR_NOTA,
    posicao,
    titulo,
    texto
}