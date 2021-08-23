let tabela = document.querySelector(".tabela");

const arrayPaises = [{"country":"Estados Unidos","flag":"us","flag_url":"https://www.countryflags.io/us/flat/24.png","id":1,"medal_bronze":29,"medal_gold":46,"medal_silver":29},{"country":"China","flag":"cn","flag_url":"https://www.countryflags.io/cn/flat/24.png","id":2,"medal_bronze":38,"medal_gold":27,"medal_silver":23},{"country":"Argentina","flag":"ar","flag_url":"https://www.countryflags.io/ar/flat/24.png","id":3,"medal_bronze":29,"medal_gold":17,"medal_silver":19},{"country":"R\u00fassia","flag":"ru","flag_url":"https://www.countryflags.io/ru/flat/24.png","id":4,"medal_bronze":24,"medal_gold":26,"medal_silver":32},{"country":"Coreia do Sul","flag":"kr","flag_url":"https://www.countryflags.io/kr/flat/24.png","id":5,"medal_bronze":13,"medal_gold":8,"medal_silver":7},{"country":"Alemanha","flag":"de","flag_url":"https://www.countryflags.io/de/flat/24.png","id":6,"medal_bronze":11,"medal_gold":19,"medal_silver":14},{"country":"Fran\u00e7a","flag":"fr","flag_url":"https://www.countryflags.io/fr/flat/24.png","id":7,"medal_bronze":11,"medal_gold":11,"medal_silver":12},{"country":"It\u00e1lia","flag":"it","flag_url":"https://www.countryflags.io/it/flat/24.png","id":8,"medal_bronze":8,"medal_gold":9,"medal_silver":11},{"country":"Hungria","flag":"hu","flag_url":"https://www.countryflags.io/hu/flat/24.png","id":9,"medal_bronze":8,"medal_gold":4,"medal_silver":5},{"country":"Austr\u00e1lia","flag":"au","flag_url":"https://www.countryflags.io/au/flat/24.png","id":10,"medal_bronze":7,"medal_gold":16,"medal_silver":12},{"country":"Brasil","flag":"br","flag_url":"https://www.countryflags.io/br/flat/24.png","id":11,"medal_bronze":90,"medal_gold":96,"medal_silver":124},{"country":"Jap\u00e3o","flag":"jp","flag_url":"https://www.countryflags.io/jp/flat/24.png","id":12,"medal_bronze":23,"medal_gold":12,"medal_silver":9},{"country":"Austria","flag":"at","flag_url":"https://www.countryflags.io/at/flat/24.png","id":13,"medal_bronze":44,"medal_gold":23,"medal_silver":10},{"country":"Romania","flag":"ro","flag_url":"https://www.countryflags.io/ro/flat/24.png","id":14,"medal_bronze":89,"medal_gold":95,"medal_silver":123},{"country":"Portugal","flag":"pt","flag_url":"https://www.countryflags.io/pt/flat/24.png","id":15,"medal_bronze":4,"medal_gold":8,"medal_silver":12}]

//FUNÇÃO QUE CRIA A COLUNA RANK
function criaColuna_rank(rank){

    // 1 COLUNA - RANK
    let coluna_rank = document.createElement("div");
    coluna_rank.classList.add("coluna" , "coluna-rank");

    //CRIANDO SPAN TÍTULO rank
    let coluna_rank_titulo = document.createElement("span");
    coluna_rank_titulo.innerText = rank
    coluna_rank.appendChild(coluna_rank_titulo);
    return coluna_rank;
}

//FUNÇÃO QUE CRIA A COLUNA  COUNTRY
function criaColuna_country(country, urlImagem ){

    // 1 COLUNA - COUNTRY   
    let coluna_country = document.createElement("div");
    coluna_country.classList.add("coluna" , "country");

    //CRIANDO SPAN COUNTRY
    let coluna_country_titulo = document.createElement("span");
    coluna_country_titulo.innerText = country

    //CRIANDO IMAGEM COUNTRY
    let coluna_country_imagem = document.createElement("img");
    coluna_country_imagem.src= urlImagem;
    coluna_country_imagem.alt= country;
    coluna_country.appendChild(coluna_country_imagem);
    coluna_country.appendChild(coluna_country_titulo);

    return coluna_country;
}  

//FUNÇÃO QUE CRIA A COLUNA MEDAL GOLD
function criaMedal_gold(gold){

    // 1 COLUNA - RANK
    let coluna = document.createElement("div");
    coluna.classList.add("coluna" , "medal_gold");

    //CRIANDO SPAN TÍTULO rank
    let coluna_titulo = document.createElement("span");
    coluna_titulo.innerText = gold;
    coluna.appendChild(coluna_titulo);

    return coluna;
   
}

//FUNÇÃO QUE CRIA A COLUNA MEDAL SILVER
function criaMedal_silver(silver){

    // 1 COLUNA - RANK
    let coluna = document.createElement("div");
    coluna.classList.add("coluna" , "medal_silver");

    //CRIANDO SPAN TÍTULO rank
    let coluna_titulo = document.createElement("span");
    coluna_titulo.innerText = silver;
    coluna.appendChild(coluna_titulo);

    return coluna;
   
}

//FUNÇÃO QUE CRIA A COLUNA MEDAL BRONZE
function criaMedal_bronze(bronze){

    // 1 COLUNA - RANK
    let coluna = document.createElement("div");
    coluna.classList.add("coluna" , "medal_bronze");

    //CRIANDO SPAN TÍTULO rank
    let coluna_titulo = document.createElement("span");
    coluna_titulo.innerText = bronze;
    coluna.appendChild(coluna_titulo);

    return coluna;
}

//FUNÇÃO QUE CRIA A COLUNA total
function criaMedal_total(total){

    // 1 COLUNA - RANK
    let coluna_total = document.createElement("div");
    coluna_total.classList.add("coluna" , "total");

    //CRIANDO SPAN TÍTULO rank
    let coluna_total_titulo = document.createElement("span");
    coluna_total_titulo.innerText = total
    coluna_total.appendChild(coluna_total_titulo);

    return coluna_total;
}

//FUNÇÃO QUE CRIA A linha
function criarTemplateLinha(colocacao, country, flag_url, medal_gold, medal_silver, medal_bronze, totalMedalhas){

    // CRIANDO LINHA DO QUADRO
    let linha = document.createElement("div");
    // ADICIONANDO CLASE PARA A DIV LINHA
    linha.classList.add("linha");

    //COLUNA RANK
    let coluna_rank = criaColuna_rank(`${colocacao}º`);
    let coluna_country = criaColuna_country(country, flag_url);
    let gold = criaMedal_gold(medal_gold);
    let silver = criaMedal_silver(medal_silver);
    let bronze = criaMedal_bronze(medal_bronze);
    let total = criaMedal_total(totalMedalhas);

    linha.appendChild(coluna_rank);
    linha.appendChild(coluna_country);
    linha.appendChild(gold);
    linha.appendChild(silver);
    linha.appendChild(bronze);
    linha.appendChild(total);
    
    tabela.appendChild(linha);
}

function tratarDadosMedalhas(paises){

   let paisesOrdenados = ordenarPaises(arrayPaises)

   for (let i = 0; i < paisesOrdenados.length; i++) {

       let pais = paisesOrdenados[i];
       let totalMedalhas = (pais.medal_gold + pais.medal_silver + pais.medal_bronze);

       criarTemplateLinha (
           i+1,
           pais.country, 
           pais.flag_url, 
           pais.medal_gold,
           pais.medal_silver,
           pais.medal_bronze,
           totalMedalhas,
       )

   }
}

function ordenarPaises(arrayPaises){
    let newArrayPaises = arrayPaises.map(somarTotal).sort((a,b) => b.medal_gold - a.medal_gold )
    return newArrayPaises
}

function somarTotal(pais){
    return pais;
}

tratarDadosMedalhas();

