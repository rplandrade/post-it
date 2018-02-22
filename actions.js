const ADD_NOTA = "ADD_NOTA"
{
    type: ADD_NOTA,
    titulo: "???",
    texto: "???"
}
const REMOVER_NOTA = "REMOVER_NOTA"
{
    type: REMOVER_NOTA,
    posicao: "???"
}
const EDITAR_NOTA = "EDITANDO_NOTA"
{
    type: EDITAR_NOTA,
    posicao: "???"
}
const ALTERAR_NOTA = "ALTERAR_NOTA"
{
    type: ALTERAR_NOTA,
    posicao: "???",
    titulo: "???",
    texto: "???"
}

function addNota(titulo, texto){
    return {
        type: ADD_NOTA,
        titulo,
        texto
    }
}
function removerNota(posicao){
    return {
        type: REMOVER_NOTA,
        posicao
    }
}
function editarNota(posicao){
    return {
        type: EDITAR_NOTA,
        posicao
    }
}
function alterarNota(posicao, titulo, texto){
    type: ALTERAR_NOTA,
    posicao,
    titulo,
    texto
}