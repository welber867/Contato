function ValidarFormulario(){
    let erro = "";

    if (document.getElementById('Nome').value.trim() == "" ){
        erro = "- O campo nome é obrigatório\n";
    }

    if (document.getElementById('Telefone').value.trim() == ""){
        erro += "- O campo telefone é obrigatório\n";
    }

    if (document.getElementById('Email').value.trim() == ""){
        erro += "- O campo E-mail é obrigatório\n";
    }
    else if (validateEmail(document.getElementById('Email').value) == false)
    {
        erro += "- O e-mail digitado é inválido.\n"
    }
    
    
    if (document.getElementById('Cpf').value.trim() == ""){
        erro += "- O campo CPF é obrigatório\n";
    }
    else if (ValidarCpf(document.getElementById('Cpf').value) == false){
        erro += "- O CPF digitado é inválido.\n";
    }  


    if (document.getElementById('Bairro').selectedIndex == 0){
      erro += "-O campo Bairro é obrigatório\n";
    }

   let opcoes = document.getElementsByName('FormaContato');
   let selecionados = 0; 
   for (let i=0; i<opcoes.length; i++){
      if(opcoes[i].checked){    
        selecionados += 1;
      }
    }
    if (selecionados == 0){
      erro += "- O campo Forma de contato é obrigatório\n";
    }


    let opcoesServicos = document.getElementsByName('Servico');
   let select = 0; 
   for (let i=0; i<opcoesServicos.length; i++){
      if(opcoesServicos[i].checked){    
        select += 1;
      }
   }

      if( select ==0){
        erro += "- O campo servço é obrigatório"
      }
      
      if (select ==1){
        erro += "- O campo serviço é obrigatório 2 opções\n";      
      }





    if (erro != "") {
        alert("ATENÇÃO!\n\n" + erro);
        return false;
    }
    else{
        document.getElementById('frmContato').submit();
    }

}




function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);  
}

function ValidarCpf(cpf) {

    if((cpf = cpf.replace(/[^\d]/g,"")).length != 11)
      return false
  
    if (cpf == "00000000000")
      return false;
  
    var r;
    var s = 0;
  
    for (i=1; i<=9; i++)
      s = s + parseInt(cpf[i-1]) * (11 - i);
  
    r = (s * 10) % 11;
  
    if ((r == 10) || (r == 11))
      r = 0;
  
    if (r != parseInt(cpf[9]))
      return false;
  
    s = 0;
  
    for (i = 1; i <= 10; i++)
      s = s + parseInt(cpf[i-1]) * (12 - i);
  
    r = (s * 10) % 11;
  
    if ((r == 10) || (r == 11))
      r = 0;
  
    if (r != parseInt(cpf[10]))
      return false;
  
    return true;
  }


  $(document).ready(function(){
    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('0000-0000');
    $('.phone_with_ddd').mask('(00) 0000-0000');
    $('.phone_us').mask('(000) 000-0000');
    $('.mixed').mask('AAA 000-S0S');
    $('.cpf').mask('000.000.000-00', {reverse: false});
    $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
    $('.money').mask('000.000.000.000.000,00', {reverse: true});
    $('.money2').mask("#.##0,00", {reverse: true});
    $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
      translation: {
        'Z': {
          pattern: /[0-9]/, optional: true
        }
      }
    });
    $('.ip_address').mask('099.099.099.099');
    $('.percent').mask('##0,00%', {reverse: true});
    $('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
    $('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
    $('.fallback').mask("00r00r0000", {
        translation: {
          'r': {
            pattern: /[\/]/,
            fallback: '/'
          },
          placeholder: "__/__/____"
        }
      });
    $('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});
  });