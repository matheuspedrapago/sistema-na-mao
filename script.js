const data = {
  "FOOD SERVICE": {
    "Digital": {
        "Pagamento Integrado": ["Neemo"],
        "Assinatura": ["Pedzap"] // Changed from "Atendimento automatizado"
    },
    "TEF": {
        "Pagamento Integrado": ["RP Info"]
    },
    "Android 3G": {
        "Pagamento Integrado": ["STI", "Delivery Much", "Biz System", "Sismec Mobile", "Prover"],
        "Atendimento personalizado": ["NXZ"], // Keep original, as it has no mapping
        "Autonomia p/ funcionário": ["Pigz"],
        "Integração de sistemas": ["Rek Parking"], //Was "Vínculo entre um Celular Android..."
        "Ponto inteligente":["Vibra"], //Was "App para cadastramento dos pontos..."
         "Pagamento integrado e Conciliação":["RDF Comanda","Vetwork", "Ultracar", "EasyCarros"]
    },
      "Android 4G":{
        "Pagamento Integrado": ["Menew", "Odhen POS | Teknisa","Colibri", "PDV Legal", "Lexsis", "F-rest", "Metre Sistemas", "Picks", "Yooga", "Raffinato", "Click Soluções", "SOMA", "Chef Mio", "DWPDV", "Plana tecnologia","Controle na Mão","Qmenu","Beerpass","Vedas Sistemas","KCMS","UniTech | UniTablet", "Build Solutions","MGM Garçom", "Sistema Pallas","BitBar", "Olga Pay", "App Garçom","Takeat","Gplus","Saipos","Suitable", "Navi Vendas", "Sagres","Controle na Mão","Qmenu","Beerpass","Vedas Sistemas","SWFast", "Simsoft", "Maistre"],
        "Auto credenciamento":["Pigz"],
        "Assinatura": ["Eyemobile", "ContaHUB","Metre Sistemas", "Picks", "Lexsis","F-rest", "SOMA", "DWPDV"], //Changed from multiple values
        "Personalização":["Picbuy"],
        "Integração de sistemas":["BitBar", "Olga Pay", "App Garçom", "Controle na Mão","Gplus","Qmenu","Beerpass","Gototem", "Navi Vendas", "UniTech | UniTablet", "Navi Vendas", "Navi Vendas", "SWFast", "Simsoft","Vedas Sistemas", "Suitable", "Gototem", "Simsoft","Total Player", "Mobtickets", "Novaoito","Festas TOP e W2R POS", "Tiketo", "Klockz", "Doblefy", "Quick Pay Soft", "Furafilla","Servo Fiel", "Curia Pay","Maistre", "Quality","Sispet", "CarMob", "Valeti", "Adaptive Sistemas", "Jump Park", "ACS PDV MÓVEL", "Valet Fitpark", "Embratecc Tecnologia", "Selfparking", "Argo Sistemas", "Sanvitron", "EcoLoja","Presence Sales", "AppMoove","Zenitech", "Multicom", "Soft TI"],
        "Comanda na máquina":["ContaHUB"], //Was "Plataforma integrada"
        "Recarga de crédito":["Almasis", "Santa Ficha"] //Was "Emissão de tickets..."
    },
  },
  "IGREJAS": {
    "Digital":{
      "Integração de sistemas":["Theos"] //Was "Solução integrada..."
    },
    "Android 4G":{
      "Integração de sistemas":["Servo Fiel", "Curia Pay", "Maistre"] //Was Solução integrada..
    },
    "Android 3G":{
      "Pagamento Integrado":["Prover"] //Was Pagamento integrado
    }
  },
  "Lavanderia": {
    "Android 4G": {
      "Integração de sistemas": ["Cicclo", "Maxpan", "Laundry Kit"]
    }
  }
};


const systemDetails = {
  "Menew": { logo: "logos/menew_logo.png", link: "https://sites.google.com/stone.com.br/spandenovo/empresas-parceiras/empresas-investidas/menew?authuser=0" },
  "Odhen POS | Teknisa": { logo: "logos/odhen_logo.png", link: "https://odhenpos.com.br" },
  "Colibri": { logo: "logos/colibri_logo.png", link: "https://sites.google.com/stone.com.br/spandenovo/empresas-parceiras/food-service/colibri-ncr?authuser=0" },
  "PDV Legal": { logo: "logos/pdvlegal_logo.png", link: "https://sites.google.com/stone.com.br/spandenovo/empresas-parceiras/empresas-investidas/pdv-legal?authuser=0" },
  "Lexsis": { logo: "logos/lexsis_logo.png", link: "https://sites.google.com/stone.com.br/spandenovo/empresas-parceiras/food-service/lexsis-sistema-que%C3%B3ps?authuser=0" },
  "F-rest": { logo: "logos/frest_logo.png", link: "https://frest.com.br" },
  "Metre Sistemas": { logo: "logos/metre_logo.png", link: "https://metresistemas.com.br" },
  "Picks": { logo: "logos/picks_logo.png", link: "https://picks.com.br" },
  "Yooga": { logo: "logos/yooga_logo.png", link: "https://yooga.com.br" },
  "Raffinato": { logo: "logos/raffinato_logo.png", link: "https://raffinato.com.br" },
  "Click Soluções": { logo: "logos/clicksolucoes_logo.png", link: "https://clicksolucoes.com.br" },
  "SOMA": { logo: "logos/soma_logo.png", link: "https://soma.com.br" },
  "Chef Mio": { logo: "logos/chef_mio_logo.png", link: "https://chefmio.com.br" },
  "DWPDV": { logo: "logos/dwpdv_logo.png", link: "https://dwpdv.com.br" },
  "Plana tecnologia": { logo: "logos/plana_logo.png", link: "https://planatecnologia.com.br" },
  "Controle na Mão": { logo: "logos/cont_mao_logo.png", link: "https://cont_mao.com.br" },
  "Qmenu": { logo: "logos/qmenu_logo.png", link: "https://qmenu.com.br" },
  "Beerpass": { logo: "logos/beerpass_logo.png", link: "https://beerpass.com.br" },
  "Vedas Sistemas": { logo: "logos/vedas_logo.png", link: "https://vedas.com.br" },
  "Pigz": { logo: "logos/pigz_logo.png", link: "https://pigz.com.br" },
  "Eyemobile": { logo: "logos/eyemobile_logo.png", link: "https://eyemobile.com.br" },
  "ContaHUB": { logo: "logos/contahub_logo.png", link: "https://contahub.com.br" },
  "Neemo": { logo: "logos/neemo_logo.png", link: "https://neemo.com.br" },
  "Pedzap": { logo: "logos/pedzap_logo.png", link: "https://pedzap.com.br" },
  "STI": { logo: "logos/sti_logo.png", link: "https://sti.com.br" },
  "Delivery Much": { logo: "logos/deliverymuch_logo.png", link: "https://deliverymuch.com.br" },
  "Biz System": { logo: "logos/biz_logo.png", link: "https://biz.com.br" },
  "Sismec Mobile": { logo: "logos/sismec_logo.png", link: "https://sismec.com.br" },
  "NXZ": { logo: "logos/nxz_logo.png", link: "https://nxz.com.br" },
  "KCMS": { logo: "logos/kcms_logo.png", link: "https://sites.google.com/stone.com.br/spandenovo/empresas-parceiras/food-service/kcms?authuser=0" },
  "Picbuy": { logo: "logos/picbuy_logo.png", link: "https://picbuy.com.br" },
  "BitBar": { logo: "logos/bitbar_logo.png", link: "https://bitbar.com.br" },
  "Olga Pay": { logo: "logos/olgapay_logo.png", link: "https://olgapay.com.br" },
  "App Garçom": { logo: "logos/appgarcom_logo.png", link: "https://appgarcom.com.br" },
 "Controle na Mão": { logo: "logos/contmao_logo.png", link: "https://controlemao.com.br" },
  "Gplus": { logo: "logos/gplus_logo.png", link: "https://gplus.com.br" },
  "Gototem": { logo: "logos/gototem_logo.png", link: "https://gototem.com.br" },
  "UniTech | UniTablet": { logo: "logos/unitech_logo.png", link: "https://unitech.com.br" },
  "Biz System": {logo: "logos/bizsystem_logo.png", link: "https://bizsystem.com.br" },
  "Build Solutions": { logo: "logos/buildsolutions_logo.png", link: "https://sites.google.com/stone.com.br/spandenovo/empresas-parceiras/food-service/build-solutions?authuser=0" },
   "Pigz": {logo: "logos/pigz_2_logo.png", link: "https://pigz.com.br" },
   "MGM Garçom": {logo: "logos/mgm_logo.png", link: "https://mgm.com.br"},
   "Sistema Pallas": {logo: "logos/pallas_logo.png", link: "https://pallas.com.br"},
   "BitBar": {logo: "logos/bit_bar_logo.png", link: "https://bitbar.com.br"},
   "Olga Pay": {logo: "logos/olga_pay_logo.png", link: "https://olgapay.com.br"},
   "App Garçom":{logo: "logos/app_garcom_logo.png", link: "https://appgarcom.com.br"},
   "Takeat": {logo: "logos/takeat_logo.png", link: "https://takeat.com.br"},
   "Gplus": {logo: "logos/g_plus_logo.png", link: "https://gplus.com.br"},
   "Saipos": {logo: "logos/saipos_logo.png", link: "https://saipos.com.br"},
   "Suitable": {logo: "logos/suitable_logo.png", link: "https://suitable.com.br"},
    "Vedas Sistemas": {logo: "logos/vedas_sistemas2_logo.png", link: "https://vedas.com.br"},
    "Navi Vendas": {logo: "logos/navi_vendas_logo.png", link: "https://navi.com.br"},
    "Navi Vendas": {logo: "logos/navi_vendas2_logo.png", link: "https://navi.com.br"},
    "SWFast": {logo: "logos/swfast_logo.png", link: "https://swfast.com.br"},
    "Simsoft": {logo: "logos/simsoft_logo.png", link: "https://simsoft.com.br"},
    "RP Info": {logo: "logos/rpinfo_logo.png", link: "https://rpinfo.com.br"},
    "Payby": {logo: "logos/payby_logo.png", link: "https://payby.com.br"},
    "Theos": {logo: "logos/theos_logo.png", link: "https://sites.google.com/stone.com.br/spandenovo/empresas-parceiras/igrejas/theos?authuser=0"},
    "Servo Fiel": {logo: "logos/servofiel_logo.png", link: "https://sites.google.com/stone.com.br/spandenovo/empresas-parceiras/igrejas/servo-fiel?authuser=0"},
    "Curia Pay": {logo: "logos/curiapay_logo.png", link: "https://sites.google.com/stone.com.br/spandenovo/empresas-parceiras/igrejas/curia-pay?authuser=0"},
     "Prover": {logo: "logos/prover_logo.png", link: "https://sites.google.com/stone.com.br/spandenovo/empresas-parceiras/igrejas/prover?authuser=0"},
      "Maistre": {logo: "logos/maistre_logo.png", link: "https://maistre.com.br"},
     "Cicclo": {logo: "logos/cicclo_logo.png", link: "https://sites.google.com/stone.com.br/spandenovo/empresas-parceiras/outros-segmentos/cicclo-lavandeira?authuser=0"},
      "Maxpan": {logo: "logos/maxpan_logo.png", link: "https://sites.google.com/stone.com.br/spandenovo/empresas-parceiras/outros-segmentos/maxpan?authuser=0"},
      "Laundry Kit": {logo: "logos/laundrykit_logo.png", link: "https://sites.google.com/stone.com.br/spandenovo/empresas-parceiras/outros-segmentos/laundry-kit?authuser=0"}
};

// Custom recommendation messages (Complete for all combinations)
const recommendationMessages = {

  "FOOD SERVICE": {
    "Digital": {
      "Pagamento Integrado": (systemName) => `Para Food Service, com integração de pagamento digital, o sistema ${systemName} atende bem.`,
      "Assinatura": (systemName) => `Para Food Service, com foco em assinatura e utilizando meio digital, o sistema ${systemName} é recomendado.`
    },
    "TEF": {
      "Pagamento Integrado": (systemName) => `Para Food Service, com integração de pagamento via TEF, o sistema ${systemName} é uma boa opção.`
    },
    "Android 3G": {
      "Pagamento Integrado": (systemName) => `Para Food Service, com integração de pagamento em máquinas Android 3G (S920/Q92), o sistema ${systemName} é recomendado.`,
      "Atendimento personalizado": (systemName) => `Para Food Service com atendimento personalizado em máquinas Android 3G, o sistema ${systemName} é recomendado.`,
       "Autonomia p/ funcionário":(systemName) => `Para Food Service, buscando dar autonomia para o funcionário, em máquinas Android 3G, o sistema ${systemName} atende bem.`,
        "Integração de sistemas":(systemName) => `Para Food Service, buscando integração de sistemas, em máquinas Android 3G, o sistema ${systemName} atende bem.`,
        "Ponto inteligente":(systemName) => `Para Food Service, buscando um ponto inteligente, em máquinas Android 3G, o sistema ${systemName} atende bem.`,
        "Pagamento integrado e Conciliação":(systemName) => `Para Food Service, buscando pagamento integrado e Conciliação, em máquinas Android 3G, o sistema ${systemName} atende bem.`
    },
    "Android 4G": {
      "Pagamento Integrado": (systemName) => `Para Food Service, com integração de pagamento em máquinas Android 4G, o sistema ${systemName} é recomendado.`,
      "Auto credenciamento": (systemName) => `Para Food Service com auto credenciamento em máquinas Android 4G, o sistema ${systemName} atende.`,
      "Assinatura": (systemName) => `Para Food Service, com assinatura em máquinas Android 4G, o sistema ${systemName} atende.`,
      "Personalização": (systemName) => `Para Food Service, com personalização em máquinas Android 4G, o sistema ${systemName} atende.`,
      "Integração de sistemas":(systemName) => `Para Food Service, buscando integração de sistemas, em máquinas Android 4G, o sistema ${systemName} atende bem.`,
      "Comanda na máquina":(systemName) => `Para Food Service, buscando comanda na máquina, em máquinas Android 4G, o sistema ${systemName} atende bem.`,
      "Recarga de crédito":(systemName) => `Para Food Service, buscando recarga de crédito, em máquinas Android 4G, o sistema ${systemName} atende bem.`
    }
  },
  "IGREJAS": {
    "Digital":{
       "Integração de sistemas":(systemName) => `Para Igrejas, com solução integrada e utilizando meio digital, o sistema ${systemName} é o ideal.`
    },
     "Android 4G":{
       "Integração de sistemas":(systemName) => `Para Igrejas, com solução integrada e utilizando máquinas Android 4G, o sistema ${systemName} é o ideal.`
     },
    "Android 3G":{
      "Pagamento Integrado":(systemName) => `Para Igrejas, com pagamento integrado e utilizando as máquinas Android 3G(S920/Q92), recomendamos o ${systemName}.`
    }
  },
  "Lavanderia": {
    "Android 4G": {
      "Integração de sistemas": (systemName) => `Para Lavanderias com integração de sistemas e máquinas Android 4G, o sistema ${systemName} é recomendado.`
    }
  }
};

// DOM Elements
const segmentoSelect = document.getElementById("segmento");
const maquinaSelect = document.getElementById("maquina");
const funcionalidadeSelect = document.getElementById("funcionalidade");
const recommendationDiv = document.getElementById("recommendation");
const recommendationList = document.getElementById("recommendation-list");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button"); // Get the search button


// Function to update dropdown options for Maquina
function updateMaquinaOptions() {
    const selectedSegmento = segmentoSelect.value;

    // Reset Maquina and Funcionalidade dropdowns
    maquinaSelect.innerHTML = '<option value="">Selecione uma Máquina</option>';
    funcionalidadeSelect.innerHTML = '<option value="">Selecione uma Funcionalidade</option>';
    maquinaSelect.disabled = true;
    funcionalidadeSelect.disabled = true;
    recommendationDiv.style.display = "none";

    if (selectedSegmento) {
        maquinaSelect.disabled = false;
        // Get and normalize the machine options
        let machineOptions = new Set(); // Use a Set to avoid duplicates
        for (const machine in data[selectedSegmento]) {
          machineOptions.add(machine); //No need to normalize, already done
        }

        for (const machine of machineOptions) {
            const option = document.createElement("option");
            option.value = machine;
            option.textContent = machine; // Display normalized name
            maquinaSelect.appendChild(option);
        }
    }
}

// Function to update dropdown options for Funcionalidade
// Function to update dropdown options for Funcionalidade
function updateFuncionalidadeOptions() {
    const selectedSegmento = segmentoSelect.value;
    const selectedMaquina = maquinaSelect.value;

    funcionalidadeSelect.innerHTML = '<option value="">Selecione uma Funcionalidade</option>';
    funcionalidadeSelect.disabled = true;
    recommendationDiv.style.display = "none";

    if (selectedMaquina) {
        funcionalidadeSelect.disabled = false;
        if (data[selectedSegmento] && data[selectedSegmento][selectedMaquina]) {
            // Create a Set to store unique functionalities
            const uniqueFunctionalities = new Set();

            // Iterate over the functionalities and add them to the Set
            for (const funcionalidade in data[selectedSegmento][selectedMaquina]) {
                uniqueFunctionalities.add(funcionalidade);
            }

            // Convert the Set back to an array and populate the dropdown
            for (const funcionalidade of uniqueFunctionalities) {
                const option = document.createElement("option");
                option.value = funcionalidade;
                option.textContent = funcionalidade;
                funcionalidadeSelect.appendChild(option);
            }
        }
    }
}
// Function to filter data based on search term (Now triggered by button)
function filterBySearch() {
  const searchTerm = searchInput.value.toLowerCase();

  // Reset dropdowns and recommendation
  segmentoSelect.value = "";
  maquinaSelect.innerHTML = '<option value="">Selecione uma Máquina</option>';
  funcionalidadeSelect.innerHTML = '<option value="">Selecione uma Funcionalidade</option>';
  maquinaSelect.disabled = true;
  funcionalidadeSelect.disabled = true;
  recommendationDiv.style.display = "none";
  recommendationList.innerHTML = ''; // Clear previous recommendations

  // 1. Filter Segmentos (and populate dropdown)
  const matchingSegmentos = [];
  for (const segmento in data) {
    if (segmento.toLowerCase().includes(searchTerm)) {
      matchingSegmentos.push(segmento);
    }
  }
  populateSegmentoDropdown(matchingSegmentos); // Pass filtered segmentos

  // 2. If a single segmento matches, auto-select it and populate maquinas
  if (matchingSegmentos.length === 1) {
    segmentoSelect.value = matchingSegmentos[0];
    updateMaquinaOptions(); // Automatically populate Maquina dropdown
  }
    //3.  Search within systemDetails for matches
    const matchingSystems = [];
      for(const systemName in systemDetails){
          if(systemName.toLowerCase().includes(searchTerm)){
              matchingSystems.push(systemName);
          }
      }
      //4. If systems match, show them
    if(matchingSystems.length > 0){
       showMatchingSystems(matchingSystems);
    }


}

function showMatchingSystems(systemNames){
    recommendationList.innerHTML = ''; //Clear

    systemNames.forEach(systemName => {
        const systemData = systemDetails[systemName];
        if(!systemData){
            console.warn("No details found");
            return;
        }
        const recommendationItem = document.createElement('div');
        recommendationItem.classList.add('recommendation-item');

        const logoImg = document.createElement('img');
        logoImg.src = systemData.logo;
        logoImg.alt = `Logo do ${systemName}`;
        recommendationItem.appendChild(logoImg);

        const textContainer = document.createElement('div');
        textContainer.classList.add('recommendation-text');

        const systemNameHeading = document.createElement('h3');
        systemNameHeading.textContent = systemName;
        textContainer.appendChild(systemNameHeading);

        //No custom message if searching by name
        const link = document.createElement('a');
        link.href = systemData.link;
        link.textContent = "Saiba mais";
        link.target = "_blank";
        textContainer.appendChild(link);

        recommendationItem.appendChild(textContainer);
        recommendationList.appendChild(recommendationItem);

    });
     recommendationDiv.style.display = "block";

}

// --- Modified populateSegmentoDropdown to accept a list of segmentos ---
function populateSegmentoDropdown(segmentos = Object.keys(data)) {
    segmentoSelect.innerHTML = '<option value="">Selecione um Segmento</option>'; // Clear existing options
    for (const segmento of segmentos) { // Iterate over provided list
        const option = document.createElement("option");
        option.value = segmento;
        option.textContent = segmento;
        segmentoSelect.appendChild(option);
    }
}
// Function to show the recommendation (Now handles multiple recommendations)
function showRecommendation() {
    const selectedSegmento = segmentoSelect.value;
    const selectedMaquina = maquinaSelect.value;
    const selectedFuncionalidade = funcionalidadeSelect.value;
    // Clear previous recommendations
    recommendationList.innerHTML = '';

    if (selectedSegmento && selectedMaquina && selectedFuncionalidade) {
        let recommendedSystems = data[selectedSegmento][selectedMaquina][selectedFuncionalidade];
        // Ensure recommendedSystems is ALWAYS an array, even for single systems
        if (!Array.isArray(recommendedSystems)) {
            recommendedSystems = [recommendedSystems];
        }
        // Limit to a maximum of 3 recommendations
        recommendedSystems = recommendedSystems.slice(0, 5);

        // Create a recommendation element for each system
        recommendedSystems.forEach(systemName => {
           const systemData = systemDetails[systemName];
            if (!systemData) {
              console.warn(`No details found for system: ${systemName}`);
              return; // Skip if no details for this system
            }
            const recommendationItem = document.createElement('div');
            recommendationItem.classList.add('recommendation-item');

            const logoImg = document.createElement('img');
            logoImg.src = systemData.logo;
            logoImg.alt = `Logo do ${systemName}`;
            recommendationItem.appendChild(logoImg);

            const textContainer = document.createElement('div');
            textContainer.classList.add('recommendation-text');

            const systemNameHeading = document.createElement('h3');
            systemNameHeading.textContent = systemName;
            textContainer.appendChild(systemNameHeading);
          //ADD CUSTOM MESSAGE
          const customMessage = document.createElement('p');
          customMessage.textContent = recommendationMessages[selectedSegmento][selectedMaquina][selectedFuncionalidade](systemName);
          textContainer.appendChild(customMessage);

            const link = document.createElement('a');
            link.href = systemData.link;
            link.textContent = "Saiba mais";
            link.target = "_blank";
            textContainer.appendChild(link);

            recommendationItem.appendChild(textContainer);
            recommendationList.appendChild(recommendationItem);
        });
        recommendationDiv.style.display = "block"; // Show recommendations
    } else {
        recommendationDiv.style.display = "none"; // Hide if not all selected
    }
}


// --- Normalization Function ---
function normalizeMachineKey(key) {
    key = key.toLowerCase(); // Convert to lowercase for case-insensitivity

    if (key.includes("pagar.me")) {
        return "Digital";
    } else if (key.includes("tef")) {
        return "TEF";
    } else if (key.includes("s920") || key.includes("q92")) {
        return "Android 3G";
    } else {
        return "Android 4G"; // Default case
    }
}

// --- Event Listeners ---
segmentoSelect.addEventListener("change", updateMaquinaOptions);
maquinaSelect.addEventListener("change", updateFuncionalidadeOptions);
funcionalidadeSelect.addEventListener("change", showRecommendation);
searchButton.addEventListener("click", filterBySearch);

// Add event listener for "Enter" key in search input
searchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        filterBySearch(); // Call the same filter function
    }
});

// --- Initial population of Segmento dropdown ---
function populateSegmentoDropdown(segmentos = Object.keys(data)) {
    segmentoSelect.innerHTML = '<option value="">Selecione um Segmento</option>'; // Clear existing options
    for (const segmento of segmentos) { // Iterate over provided list
        const option = document.createElement("option");
        option.value = segmento;
        option.textContent = segmento;
        segmentoSelect.appendChild(option);
    }
}
populateSegmentoDropdown(); // Call on load
