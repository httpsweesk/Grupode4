document.getElementById('sexualidadeSelect').addEventListener('change', function(){
    var bandeira = document.getElementById('bandeira');
    var selectedValue = this.value;
    
    if (selectedValue === 'hetero') {
        bandeira.src = "united-heterosexual-symbols-svgrepo-com (1).svg";
    } else if (selectedValue === 'gay') {
        bandeira.src = "https://www.svgrepo.com/show/304598/gay-flag.svg";
    } else if (selectedValue === 'trans') {
        bandeira.src = "transgender-svgrepo-com.svg";
    }

}); 

document.getElementById('idiomaSelect').addEventListener('change', function () {
    const bandeiraIdioma = document.getElementById('bandeiraIdioma');
    const idiomaSelecionado = this.value;
  
    if (idiomaSelecionado === 'br') {
      bandeiraIdioma.src = "https://flagcdn.com/w20/br.png";
    } else if (idiomaSelecionado === 'us') {
      bandeiraIdioma.src = "https://flagcdn.com/w20/us.png";
    } else if (idiomaSelecionado === 'es') {
      bandeiraIdioma.src = "https://flagcdn.com/w20/es.png";
    } else if (idiomaSelecionado === 'pt') {
        bandeiraIdioma.src = "https://flagcdn.com/w20/pt.png";}
  });