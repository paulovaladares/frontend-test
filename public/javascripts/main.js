(function(){

	var xmlHttp;
	var arquivo = "fazenda.json";

	// Listando os valores na tela.
	var listarTela = function(dados){
		var imprimir = "";
		var resp_porcentagens = "";
		var classe_espaco;
	    var i;
	    var pos;
	    var neg;
	    var v_pos;
	    var v_neg;
	    var soma;

	    dados.sort(function(a, b){
		    return a.positive > b.positive? -1:1;
		});

	    for (i = 0; i < dados.length; i++){
	    	classe_espaco = (((i % 2) == 0) ? "espaco-menor" : "");

	    	// Tirar porcentagem.
	    	v_pos = dados[i].positive;
	    	v_neg = dados[i].negative;
	    	soma = parseInt(v_pos) + parseInt(v_neg);
	    	pos = Math.round((v_pos / soma) * 100) + "%";
	    	neg = Math.round((v_neg / soma) * 100) + "%";

	        imprimir += '<div class="participantes ' + classe_espaco + '">'+
							'<div class="imagens">'+
								'<span><img src="' + dados[i].picture + '" /></span>  '+  
								'<small>' + (i + 1) + '</small>'+
							'</div>'+
							'<h2>' + dados[i].name + '</h2>'+
							'<span class="texto">' + dados[i].description + '</span>';

			if (typeof(v_pos) != "object"){
				resp_porcentagens += '<div class="porcentagens">'+
									'<img src="imgs/seta.png" />'+
									'<span class="gostam">'+
										'<small>Gostam</small>'+
										'<span>' + pos + '</span>'+
									'</span>'+
									'<span class="nao-gostam">'+
										'<small>Não Gostam</small>'+
										'<span>' + neg + '</span>'+
									'</span>'+
								'</div>';
			}
			else {
				resp_porcentagens = "";
			}

			imprimir += resp_porcentagens + '</div>';
	    }

	    document.querySelector(".container section").innerHTML = imprimir;
	};
	
	// AJAX.
	xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange=function(){
  		if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
    		var arrayJSON = JSON.parse(xmlHttp.responseText);
    		listarTela(arrayJSON.data);
    	}
  	}

  	xmlHttp.open("GET", arquivo, true);
	xmlHttp.send();
})();