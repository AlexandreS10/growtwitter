import usuarios from "../data/usuario";


function confirmaRemoverUsuario(email: string, senha:string): boolean {

    const existeEmail = usuarios.find(
      (item) => item.detalheUsuario().email === email
    );
    const existeSenha = usuarios.find(
      (item) => item.detalheUsuario().senha === senha
    );
  
    if (existeEmail || existeSenha) {
      return false;
    }
    return true;
  }
  export default confirmaRemoverUsuario;
  