let tabela = document.querySelector(".tabela");

const china = {  
    country: "China",
    flag: "cn",
    flag_url: "https://www.countryflags.io/cn/flat/24.png",
    id: 1,
    medal_bronze:10,
    medal_silver:10,
    medal_gold:10,
}

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
function criarTemplateLinha(colocacao, country, flag_url, medal_gold, medal_silver, medal_bronze){

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
    let total = criaMedal_total("30");

    linha.appendChild(coluna_rank);
    linha.appendChild(coluna_country);
    linha.appendChild(gold);
    linha.appendChild(silver);
    linha.appendChild(bronze);
    linha.appendChild(total);
    
    tabela.appendChild(linha);
}

criarTemplateLinha(
    1,
    china.country,
    china.flag_url,
    china.medal_gold,
    china.medal_silver,
    china.medal_bronze
);
