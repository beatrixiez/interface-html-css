function mensagem(elemento) {

    let texto = elemento.firstElementChild.innerText;
    let numero = prompt('Digite o número que deseja enviar com o DDD, exemplo: 11999999999. Em seguida, clique em OK:');
    let zapLink = `https://api.whatsapp.com/send?phone=55${numero}&text=${texto}`;
    window.open(zapLink);
    
}