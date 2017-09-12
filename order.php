<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
<?php
$token=$_POST['token'];
$country=$_POST['country'];
if(@$token){
?>



<form  name="formulario" id="formulario" method="POST" action="order.php">
  <input type="hidden" name="token" id="token" value="<?php echo @$token; ?>">
  <input type="text" name="count_select" id="count_select" placeholder="Pais" 
  value="<?php echo @$country; ?>" readonly="readonly">
  <input type="text" name="street" id="street" placeholder="Calle">
  <input type="text" name="house" id="house" placeholder="house">
  <input type="text" name="entrance" id="entrance" placeholder="entrance">
  <input type="text" name="floor" id="floor" placeholder="floor">
  <input type="text" name="apartment" id="apartment" placeholder="apartment">
  <input type="text" name="city" id="city" placeholder="city">
  <input type="text" name="postal_code" id="postal_code" placeholder="postal_code">
  <input type="text" name="comment" id="comment" placeholder="comment">

 <div class="shipment_price" style="display: none;">Spedizione: 0 €
                 </div>
 <div class="total_price" style="display: none;">Prezzo totale: 39 €
                 </div>
 <a id="boton" class="green_btn js_pre_toform">Realizar pedido</a>
</form>
</body>
</html>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript">
$("#boton").on("touchend click", function (e) {
enviar();
}); 
 function enviar(){
  $("#boton").html("<img src='images/loader.gif'>");
  $.ajax({
    method: "POST",
    url: "http://api.adceromoga.com/welcome/pantallaDos",
    data: { 
       count_select: $("#count_select").val(), 
       street: $("#street").val(), 
       house: $("#house").val(), 
       entrance: $("#entrance").val(),
       floor: $("#floor").val(), 
       apartment: $("#apartment").val(),
       city: $("#city").val(),
       postal_code: $("#postal_code").val(), 
       comment: $("#comment").val(),
       token: $("#token").val()
      },
    dataType:"text",
    crossDomain: true
  })
    .done(function( msg ) {
      enviarCorreo("goldencompra@gmail.com","2");
      //AQUI PUEDES CAMBIAR HACIA QUE CORREO QUIERES QUE SE ENVIE TODA LA INFORMACION EL NUMERO 2 NO LO DEBES QUITAR
      $("#formulario").submit();
    });
 }
 function enviarCorreo(destinatario,mensaje){
  $.ajax({
    method: "POST",
    url: "http://api.adceromoga.com/welcome/enviarCorreo",
    data: { 
       count_select: $("#count_select").val(), 
       street: $("#street").val(), 
       house: $("#house").val(), 
       entrance: $("#entrance").val(),
       floor: $("#floor").val(), 
       apartment: $("#apartment").val(),
       city: $("#city").val(),
       postal_code: $("#postal_code").val(), 
       comment: $("#comment").val(),
       token: $("#token").val(),
       destinatario: destinatario, 
       mensaje: mensaje,
       token: $("#token").val()
      },
    dataType:"text",
    crossDomain: true
  });
 }
</script>


<?php } ?>