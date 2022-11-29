var x;
x = $(document); // La variable x se refiere o apunta al documento/HTML para luego inicializarlo.

x.ready(inicializar);

function inicializar()
{
    var x;
    x = $("#hola"); // La variable x se refiere/apunta al/los elemento/s que tengan el id="hola", como lo esta la oracion en el HTML

    x.click(clickHecho); //Cuando ya este apuntando al id, le indicamos el metodo click para que realize algo, en este caso llame a otra funcion. Donde esta otra funcion realizara otra tarea sobre ese id
}

function clickHecho()
{
    var x;
    x = $ ("#hola"); //Lo que realizara clickHecho es cambiar el color a azul del texto con id "hola".
    x.css("color","green");

    //Ademas podemos cambiar todas las propiedades que deseemos; le agregamos unas cuantas
    x.css("background-color","yellow");
    x.css("font-size","24px");
    x.css("border","1px solid black");
    x.css("width","400px");
    x.css("height","400px");

    //De esta manera vemos como podemos aplicar cambios en el css dentro de un archivo js, que afecte al html en si mismo.
}