// Lendo conteúdo
console.log($("#lista1").text());
console.log($("#lista1").html());
console.log($("#novo").val());
console.log($("#novo").attr("name"))

// Modificando conteúdo
$("h1").text("Lista de compras");

// $("#lista1").text(`
//   <li>Novo Item 1</li>
//   <li>Novo Item 1</li>
// `);

$("#lista1").html(`
  <li name="Arroz">Novo Item 1</li>
  <li>Novo Item 1</li>
`);

$("#novo").val("Arroz");

$("#novo").attr("name", "Item de Compra")

$("li").attr("name", function(i, originalValue) {
  console.log(originalValue);
  return "item" + i;
});

$("#novo")
  .attr("maxLength", 5)
  .attr("type", "password");