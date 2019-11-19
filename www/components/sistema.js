/*cadastrar*/
$(document).on("click","#cadastrar",function(){
var parametros = {
  "horaE":$("#horaE").val(),
  "nomeProp":$("#nomeProp").val(),
  "placa":$("#placa").val(),
  "marca":$("#marca").val(),
  "tipo":$("#tipo").val(),
  "modelo":$("#modelo").val()
};

$.ajax({
type:"post",
url:"https://brajaos-est.000webhostapp.com/cadastra.php",
data:parametros,
success: function(data){
  navigator.notification.alert(data);
  $("horaE").val("");
  $("nomeProp").val("");
  $("placa").val("");
  $("marca").val("");
  $("modelo").val("")
},

error: function(data){
  navigator.notification.alert("Erro ao cadastrar!");
    }
  });
});

/*listar*/
$(document).on("click","#busca",function(){
    var parametro ={
      "placa":$("#placa").val()
    };

    $.ajax({
      type: "post",
      url:"https://brajaos-est.000webhostapp.com/listar.php",
      data:parametro,
      dataType:"json",

      success: function(data){
        $("#horaE").val(data.entrada.horaE);
        $("#nomeProp").val(data.entrada.nomeProp);
        $("#modelo").val(data.entrada.modelo);
        $("#marca").val(data.entrada.marca);
        $("#tipo").val(data.entrada.tipo);
        $("#horaS").val(data.saida.horaS);
        $("#totalPagar").val(data.saida.totalPagar)
      },

      error: function(data){
        navigator.notification.alert("Erro ao listar veiculos cadastrados!");
      }
  });
});


/*Mascara input*/
$(document).ready(function(){
      $('#placa').mask('AAA-9999')
});

/*Voltar*/
$(document).on("click","#voltar", function(){
$(location).attr
(history.go(-1));
});

/*select*/
$(document).ready(function(){
    $('select').formSelect();
  });
        