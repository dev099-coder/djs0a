const help = (prefix) => {
	return `> *Comandos de adesivos* <
comando : *${prefix}figurinha* or *${prefix}stiker*
desc: converter imagem / gif / vídeo em adesivo
uso: responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n
comando : *${prefix}figurinha nobg* or *${prefix}stiker nobg*
desc: converte imagem em adesivo enquanto remove o fundo
uso: responder imagem ou enviar imagem com legenda\n
comando : *${prefix}paraimg*
desc: converter adesivo em imagem
uso: adesivo de resposta\n
comando : *${prefix}tsticker* or *${prefix}tstiker*
desc: converter texto em adesivo
uso: *${prefix}tfigurinha texto aqui*\n
> *Comandos Meme* <
comando: *${prefix}meme*
desc: imagens aleatórias de meme [inglês]
uso: basta enviar o comando\n
comando: *${prefix}memeindo*
desc: imagens meme aleatórias [indo]
uso: basta enviar o comando\n
> *Outros comandos * <
comando: *${prefix}fale*
desc: converter texto em fala / áudio
uso: *${prefix}fale [cc] [texto]*\nexemplo : *${prefix}fale ja On2-chan*\n
comando: *${prefix}loli*
desc: imagens aleatórias de loli
uso: basta enviar o comando\n
comando: *${prefix}nsfwloli*
desc: imagens aleatórias de nsfw loli
uso: basta enviar o comando\n
comando : *${prefix}url2img*
desc: faz capturas de tela da web
uso: *${prefix}url2img [tipo] [url]*\n
comando : *${prefix}simi*
desc: sua mensagem será respondida por simi
uso: *${prefix}simi sua mensagem*\n
comando: *${prefix}ocr*
desc: tira o texto da imagem
uso: responder imagem ou enviar imagem com legenda\n
comando : *${prefix}esperar*
desc: pesquisar anime com imagem [Que anime é este / que]
uso: responder imagem ou enviar imagem com legenda\n
comando : *${prefix}conjuntoprefixo*
desc: substituir prefixo
uso: *${prefix}conjuntoprefixo [texto|opcional]*\nexemplo : *${prefix}conjuntoprefixo ?*
nota: este comando só pode ser usado pelo proprietário do bot\n
> *Comandos de Grupo* <
comando : *${prefix}adicionar*
desc: adicionar membro ao grupo
uso: *${prefix}adicionar 5511xxxxx*\n
nota: só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}ban*
desc: expulsar membros do grupo
uso : *${prefix}ban @tagmember*\n
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin!\n
comando: *${prefix}adm*
desc: tornar o membro do grupo como administrador do grupo
uso : *${prefix}adm @tagmember*\n
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin!\n
comando: *${prefix}rebaixaradm*
desc: tornar o administrador do grupo como membro do grupo
uso : *${prefix}rebaixaradm @tagmember*\n
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin!\n
comando : *${prefix}linkgrupo*
desc: pegue o link do grupo
uso: basta enviar o comando
Nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n: *${prefix}leave*
desc: Faça o bot sair do grupo
uso: basta enviar o comando
nota: só pode ser usado por administradores de grupo e proprietário de bot\n
comando : *${prefix}marcartodos*
desc: marca todos os membros do grupo, incluindo administradores também
uso: basta enviar o comando
nota: este comando pode ser usado se você for um administrador de grupo\n
comando : *${prefix}simih*
desc: ativa o modo simi no grupo
uso : *${prefix}simih 1* para ativar o modo simi e *${prefix}simih 0* para desativar o modo simi
nota: este comando pode ser usado se você for um administrador de grupo\n`
}

exports.help = help
