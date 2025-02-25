// Data (Extracted, organized, and *normalized*)
const data = {
    "FOOD SERVICE": {
        "A8, P2, GPOS700x": { // Normalized machine key
            "Pagamento Integrado": ["Menew", "Odhen POS | Teknisa"],
        },
        "A8, P2": {  // Normalized
            "Pagamento Integrado": ["Colibri", "PDV Legal", "Lexsis", "F-rest", "Metre Sistemas", "Picks", "Yooga", "Raffinato", "Click Soluções", "SOMA", "Chef Mio", "DWPDV", "Plana tecnologia","Controle na Mão","Qmenu","Beerpass","Vedas Sistemas"],
            "Auto credenciamento":["Pigz"],
            "Pagamento integrado e por link":["Eyemobile"],
            "Pagamento integrado, TEF e Autoatendimento":["ContaHUB"]
        },
        "Pagar.me": {
            "Pagamento Integrado": ["Neemo"],
            "Atendimento automatizado": ["Pedzap"]
        },
        "S920, Q92": { // Normalized
            "Pagamento Integrado": ["STI", "Delivery Much","Biz System","Sismec Mobile"],
            "Atendimento personalizado":["NXZ"]
        },
        "P2":{
          "Pagamento Integrado":["KCMS"],
          "Personalização":["Picbuy"],
           "Solução integrada embarcada nas maquininhas":["BitBar", "Olga Pay", "App Garçom", "Controle na Mão","Gplus","Qmenu","Beerpass","Gototem"]
        },
      "P2, A8, GPOS":{ // Normalized
         "Solução integrada embarcada nas maquininhas": ["UniTech | UniTablet"],
          "Pagamento Integrado":["Build Solutions","Biz System"]
      },
      "A8":{
          "Pagamento Integrado":["Build Solutions", "PDV Legal"]
      },
       "S920, Q92, V240, A8, P2":{ // Normalized
          "Auto credenciamento":["Pigz"]
       },
      "S920, Q92, V240":{ // Normalized
         "Pagamento Integrado":["Build Solutions"]
      },
      "P2, A8, GPOS700x":{ // Normalized
        "Solução integrada embarcada nas maquininhas":["MGM Garçom", "Sistema Pallas","BitBar", "Olga Pay", "App Garçom"]
      },
      "P2, L3, L4":{  // Normalized
        "Solução integrada embarcada nas maquininhas":["Takeat","Gplus","Saipos","Suitable"]
      },

       "A8, P2, L3, L4, GPOS700X":{ // Normalized
         "Solução integrada embarcada nas maquininhas":["Vedas Sistemas"]
       },

      "GPOS 700":{
        "Solução integrada embarcada nas maquininhas":["Navi Vendas"]
      },

      "P2, A8, L4":{ // Normalized
        "Solução integrada embarcada nas maquininhas":["SWFast"]
      },
       "L4":{
        "Solução integrada embarcada nas maquininhas":["Simsoft"]
      },
       "TEF":{
         "Pagamento Integrado":["RP Info"]
       },
        "PSP/ Subadquirente":{
          "Pagamento por QR code":["Payby"]
        }
    },
    "IGREJAS":{
     "A8, P2, Pagar.me":{ // Normalized
        "Solução integrada embarcada nas maquininhas":["Theos"]
     },
     "A8, P2":{ // Normalized
       "Solução integrada embarcada nas maquininhas":["Servo Fiel", "Curia Pay","Theos"]
     },
     "S920, Q92, V240":{ // Normalized
       "Pagamento Integrado":["Prover"]
     },
     "A8, P2, GPOS700X, L4":{ // Normalized
       "Solução integrada embarcada nas maquininhas":["Maistre"]
     }
   },
    "Lavanderia": {
        "A8, P2": {  // Normalized
            "Solução integrada embarcada nas maquininhas": ["Cicclo"]
        },
        "P2": {
            "Solução integrada embarcada nas maquininhas": ["Maxpan", "Laundry Kit"]
        }
    },
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
        "A8, P2, GPOS700x": {
            "Pagamento Integrado": (systemName) => `Para Food Service, com integração de pagamento em máquinas A8, P2 e GPOS700x, o sistema ${systemName} atende bem.`,
        },
        "A8, P2":{
          "Pagamento Integrado":(systemName) => `Para Food Service e Pagamento integrado, com máquinas A8 e P2, sugerimos o ${systemName}`,
          "Auto credenciamento":(systemName) => `Para Food Service e Auto Credenciamento, com máquinas A8 e P2, sugerimos o ${systemName}`,
          "Pagamento integrado e por link":(systemName) => `Para Food Service, com pagamento integrado ou por link, em máquinas A8 e P2, o ${systemName} é o ideal`,
          "Pagamento integrado, TEF e Autoatendimento":(systemName) => `Para Food Service, com pagamento integrado, TEF e autoatendimento, em máquinas A8 e P2, o ${systemName} é o ideal`
        },
        "Pagar.me":{
          "Pagamento Integrado":(systemName) => `Para Food Service, com pagamento integrado via Pagar.me, sugerimos o ${systemName}`,
           "Atendimento automatizado":(systemName) => `Para Food Service, com atendimento automatizado via Pagar.me, sugerimos o ${systemName}`
        },
        "S920, Q92":{
           "Pagamento Integrado":(systemName) => `Para Food Service e integração de pagamentos nas máquinas S920 e Q92, recomendamos o ${systemName}.`,
           "Atendimento personalizado":(systemName) => `Para Food Service, com atendimento personalizado para S920 e Q92, o ${systemName} atende.`
        },
        "P2":{
           "Pagamento Integrado":(systemName) => `Para Food Service e integração de pagamentos na maquininha P2, recomendamos o ${systemName}.`,
           "Personalização":(systemName) => `Para Food Service, com personalização em máquinas P2, sugerimos o ${systemName}`,
            "Solução integrada embarcada nas maquininhas":(systemName) => `Para Food Service e integração de pagamentos na maquininha P2, recomendamos o ${systemName}.`
        },
        "P2, A8, GPOS":{
           "Solução integrada embarcada nas maquininhas":(systemName) => `Para Food Service, com solução integrada para as máquinas P2, A8 e GPOS, o ${systemName} é o ideal.`,
           "Pagamento Integrado":(systemName) => `Para Food Service e integração de pagamentos nas máquinas P2, A8 e GPOS, recomendamos o ${systemName}.`
        },
        "A8":{
           "Pagamento Integrado":(systemName) => `Para Food Service e integração de pagamentos na maquininha A8, recomendamos o ${systemName}.`
        },
        "S920, Q92, V240, A8, P2":{
           "Auto credenciamento":(systemName) => `Para Food Service, com auto credenciamento nas máquinas S920, Q92, V240, A8 e P2, o ideal é o ${systemName}`
        },
        "S920, Q92, V240":{
           "Pagamento Integrado":(systemName) => `Para Food Service e integração de pagamentos nas máquinas S920, Q92 e V240, recomendamos o ${systemName}.`
        },
      "P2, A8, GPOS700x":{
          "Solução integrada embarcada nas maquininhas":(systemName) => `Para Food Service, com solução integrada embarcada nas maquininhas P2, A8 e GPOS700x, recomendamos ${systemName}`
      },
       "P2, L3 e L4":{
          "Solução integrada embarcada nas maquininhas":(systemName) => `Para Food Service, com solução integrada embarcada nas maquininhas P2, L3 e L4, recomendamos ${systemName}`
      },
       "P2 e A8":{
          "Solução integrada embarcada nas maquininhas":(systemName) => `Para Food Service, com solução integrada embarcada nas maquininhas P2 e A8, recomendamos ${systemName}`
      },
      "A8, P2, L3, L4, GPOS700X":{
         "Solução integrada embarcada nas maquininhas":(systemName) => `Para Food Service, com solução integrada embarcada nas maquininhas A8, P2, L3, L4 e GPOS700X, recomendamos ${systemName}`
      },
       "GPOS 700":{
          "Solução integrada embarcada nas maquininhas":(systemName) => `Para Food Service, com solução integrada embarcada nas maquininhas GPOS 700, recomendamos ${systemName}`
      },
      "P2, A8, GPOS 700":{
          "Solução integrada embarcada nas maquininhas":(systemName) => `Para Food Service, com solução integrada embarcada nas maquininhas P2, A8, GPOS 700, recomendamos ${systemName}`
      },
       "P2, A8 e L4":{
          "Solução integrada embarcada nas maquininhas":(systemName) => `Para Food Service, com solução integrada embarcada nas maquininhas P2, A8 e L4, recomendamos ${systemName}`
      },
        "L4":{
          "Solução integrada embarcada nas maquininhas":(systemName) => `Para Food Service, com solução integrada embarcada nas maquininhas L4, recomendamos ${systemName}`
      },
       "TEF":{
          "Pagamento Integrado":(systemName) => `Para Food Service, com pagamento integrado via TEF, indicamos o ${systemName}`
      },
      "PSP/ Subadquirente":{
          "Pagamento por QR code":(systemName) => `Para Food Service, com pagamento via QR Code por PSP/Subadquirente, sugerimos o ${systemName}`
      }
    },
   "IGREJAS":{
     "A8, P2, Pagar.me":{
        "Solução integrada embarcada nas maquininhas":(systemName) => `Para Igrejas, com solução integrada embarcada nas maquininhas A8 e P2, e integração com Pagar.me, sugerimos o ${systemName}`
     },
     "A8, P2":{
       "Solução integrada embarcada nas maquininhas":(systemName) => `Para Igrejas, com solução integrada embarcada nas maquininhas A8 e P2, o ${systemName} é uma boa opção.`
     },
     "S920, Q92, V240":{
       "Pagamento Integrado":(systemName) => `Para Igrejas, com pagamento integrado e utilizando as máquinas S920, Q92 e V240, recomendamos o ${systemName}.`
     },
     "A8, P2, GPOS700X, L4":{
       "Solução integrada embarcada nas maquininhas":(systemName) => `Para Igrejas, com solução integrada e utilizando as máquinas A8, P2, GPOS700X e L4, o sistema ${systemName} é o ideal.`
     }
   },
    "Lavanderia": {
        "A8, P2": {
            "Solução integrada embarcada nas maquininhas": (systemName) => `Para Lavanderias, com solução integrada embarcada nas maquininhas A8 e P2, recomendamos o ${systemName}.`
        },
        "P2": {
            "Solução integrada embarcada nas maquininhas": (systemName) => `Para Lavanderias, a solução integrada embarcada na maquininha P2, ${systemName}, é a mais indicada.`
        }
    },
};

// DOM Elements
const segmentoSelect = document.getElementById("segmento");
const maquinaSelect = document.getElementById("maquina");
const funcionalidadeSelect = document.getElementById("funcionalidade");
const recommendationDiv = document.getElementById("recommendation");
const recommendationList = document.getElementById("recommendation-list"); // Get the list container

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
          machineOptions.add(normalizeMachineKey(machine));
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
// *** CORRECTED FUNCTION ***
function updateFuncionalidadeOptions() {
    const selectedSegmento = segmentoSelect.value;
    const selectedMaquina = maquinaSelect.value; // This is the *normalized* key

    funcionalidadeSelect.innerHTML = '<option value="">Selecione uma Funcionalidade</option>';
    funcionalidadeSelect.disabled = true;
    recommendationDiv.style.display = "none";

    if (selectedMaquina) {
        funcionalidadeSelect.disabled = false;

        // *** FIX: Use normalized key to access data ***
        const normalizedMaquina = selectedMaquina; // Already normalized
        if (data[selectedSegmento] && data[selectedSegmento][normalizedMaquina]) {
            for (const funcionalidade in data[selectedSegmento][normalizedMaquina]) {
                const option = document.createElement("option");
                option.value = funcionalidade;
                option.textContent = funcionalidade;
                funcionalidadeSelect.appendChild(option);
            }
        }
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
        // Ensure recommendedSystems is an array
        if (!Array.isArray(recommendedSystems)) {
            recommendedSystems = [recommendedSystems]; // Convert to array if it's not
        }

        // Limit to a maximum of 3 recommendations
        recommendedSystems = recommendedSystems.slice(0, 3);

        // Create a recommendation element for each system
        recommendedSystems.forEach(systemName => {
            const systemData = systemDetails[systemName]; // Get details
            if (!systemData) {
              console.warn(`No details found for system: ${systemName}`);
              return; // Skip if no details
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

        recommendationDiv.style.display = "block"; // Show the main container
    } else {
        recommendationDiv.style.display = "none"; // Hide
    }
}


// --- Normalization Function ---
function normalizeMachineKey(key) {
    // Convert to a consistent format: lowercase, sorted alphabetically, comma-separated
    const parts = key.split(/[, | e ]+/).filter(part => part !== ""); // Split by ", ", " ", or " e "
    const normalizedParts = parts.map(part => part.trim().toUpperCase()); // Trim and uppercase
    normalizedParts.sort();  // Sort alphabetically

    // Handle special combinations
    if (normalizedParts.includes("A8") && normalizedParts.includes("P2") && normalizedParts.includes("GPOS700X")) {
        return "A8, P2, GPOS700x";
    }
      if (normalizedParts.includes("S920") && normalizedParts.includes("Q92") && normalizedParts.includes("V240")&& normalizedParts.includes("A8") && normalizedParts.includes("P2")) {
        return "S920, Q92, V240, A8, P2";
    }
     if (normalizedParts.includes("S920") && normalizedParts.includes("Q92") && normalizedParts.includes("V240")) {
        return "S920, Q92, V240";
    }
    if (normalizedParts.includes("A8") && normalizedParts.includes("P2") && normalizedParts.includes("PAGAR.ME")) {
        return "A8, P2, Pagar.me";
    }
    if (normalizedParts.includes("A8") && normalizedParts.includes("P2")) {
        return "A8, P2";
    }
     if (normalizedParts.includes("P2") && normalizedParts.includes("A8") && normalizedParts.includes("GPOS")) {
        return "P2, A8, GPOS";
    }
    if (normalizedParts.includes("S920") && normalizedParts.includes("Q92")) {
        return "S920, Q92";
    }
     if (normalizedParts.includes("A8") && normalizedParts.includes("P2") && normalizedParts.includes("GPOS") && normalizedParts.includes("L3") && normalizedParts.includes("L4")) {
        return "A8, P2, L3, L4, GPOS700X";
    }


    return normalizedParts.join(', '); // Join with commas and spaces
}



// --- Initial setup: Add event listeners ---
segmentoSelect.addEventListener("change", updateMaquinaOptions);
maquinaSelect.addEventListener("change", updateFuncionalidadeOptions);
funcionalidadeSelect.addEventListener("change", showRecommendation);


// --- Initial population of Segmento dropdown ---
function populateSegmentoDropdown() {
    for (const segmento in data) {
        const option = document.createElement("option");
        option.value = segmento;
        option.textContent = segmento;
        segmentoSelect.appendChild(option);
    }
}

populateSegmentoDropdown(); // Call on load