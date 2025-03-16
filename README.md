Este es el readme del challenge amigo imaginario de Alura.

Descripción de su proyecto: El challenge amigo imaginario buscaba hacer uso de las prácticas de la lógica de programación aprendidas en los anteriores cursos.

Funcionalidades: Su función es la de hacer un sorteo entre un grupo de amigos para bridarle al ganador algún tipo de premio (o castigo jaj).

Cómo pueden usarlo los usuarios: Los usuarios pueden ingresar al HTML del proyecto e interactuar con el botón de agregar amigos para ir haciendo una lista, si no agregan nada y pulgan el botón el mismo tirará un mensaje de error, el cual fue cambiado del típico alert a un mensaje directamente en el html para no ser tan molesto. Al tener la lista completa se puede sortear uno de los nombres el cual también aparecerá directamente en el html.

Donde los usuarios pueden encontrar ayuda sobre su proyecto: Aquí, en el archivo README XD o enviandome un mail a Rodrigo_v92@outlook.com, saludos.

Autores del proyecto: Vera Rodrigo

Empezamos en ésto:
![Screenshot_37](https://github.com/user-attachments/assets/e6a8c299-2d59-4eca-a82b-a3273a0f875d)

Y terminamos en ésto:
![Screenshot_35](https://github.com/user-attachments/assets/91ea915e-cd2a-443f-84d3-a1c3065295d1)

¿Cómo?

Facil en primera instancia tenemos una variable que almacena los nombres en un array.
![Screenshot_38](https://github.com/user-attachments/assets/cd48690b-7d97-4ebe-b76a-ef8f7262ecc2)

Seguido tenemos una función que obtiene el valor ingresado en el campo de texto (el nombre que introducimos cada uno a la lista), lo valida (evita nombres vacíos), lo guarda en el array y lo muestra en pantalla.
Si el usuario no ingresa nada, aparece un mensaje de advertencia en rojo en el HTML.
![Screenshot_39](https://github.com/user-attachments/assets/718c1bb5-4087-4f22-ad27-ee08fddb490c)

Agregamos una función que limpie la caja luego de agregar un nombre para no tener que andar borrando cada nombre.
![Screenshot_40](https://github.com/user-attachments/assets/ec8dc179-750b-4817-a4d9-7de57c4a78a5)

Agregamos otra función para elegir uno de los amigos al azar y mostrarlo en pantalla y que además tire un mensaje de error si la lista está vacía.
![Screenshot_41](https://github.com/user-attachments/assets/fe900ba1-dc07-4cd6-bbc9-773917e9ae85)

Y por último la función que agrega cada nombre uno abajo del otro en una lista en el mismo html.
![Screenshot_42](https://github.com/user-attachments/assets/952263d6-930c-4141-8427-6119fb617c73)

Más allá de los conocimientos aprendidos en Alura se tuvo que obtener ayuda de diferentes fuentes de google ya que había cosas que sinó no se podían lograr, como mostrar toda la lista en pantalla si se agregaban sus elementos con push ya que el html no lo tomaba; en vez de push `<li>` y `<ul>` eran lo mejor para usarlo.
