

//UUID => Universally unique identifier

//exemplo
/*function enviarEmail(para, id, assunto, texto) {
    //Biblioteca de envio de email

    console.log(para, id, assunto, texto);
}

class EnviarEmailParaUsuario {
    send() {
        enviarEmail("dani@gmail.com", 9899, "ola", "tudo bem?");
    }
}*/


interface DadosDeEnvioEmail {
    para: string;
    id: string;
    assunto: string;
    texto: string;
}

//Abaixo temos a mesma função de cima da interface, porém, utilizando o TypeScript

function enviarEmail(dados: DadosDeEnvioEmail) {
    console.log(dados.para, dados.id, dados.assunto, dados.texto);
}

class EnviarEmailParaUsuario {
    send() {
        enviarEmail({
            para: "dani@gmail.com",
            id: "9899",
            assunto: "Ola!",
            texto: "Tudo bem?"
        })
    }
}