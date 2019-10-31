/*cadastrar*/
$(document).on("click","#cadastrar",function(){
var parametros = {
  "horaE":$("#horaE").val(),
  "nomeProp":$("#nomeProp").val(),
  "modelo":$("#modelo").val(),
  "tipo":$("#tipo").val(),
  "marca":$("#marca").val(),
  "placa":$("#placa").val()
};

$.ajax({
type:"post",
url:"https://brajaos-est.000webhostapp.com/cadastra.php",
data:parametros,
success: function(data){
  navigator.notification.alert(data);
  $("horaE").val("");
  $("nomeProp").val("")
  $("modelo").val("")
  $("tipo").val("")
  $("marca").val("")
  $("placa").val("")
},

error: function(data){
  navigator.notification.alert("Erro ao cadastrar!");
    }
  });
});
 