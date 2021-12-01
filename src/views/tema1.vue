<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1  Tiempos computacionales
 
    .col-lg-12.mb-3
      img(src="@/assets/curso/Images/tema1/img_1.png", alt= "")

    p.mb-3 La complejidad informática estudia la clasificación de los problemas computacionales teniendo en cuenta su dificultad, además mide el tiempo en que un algoritmo le da respuesta a una necesidad o a un problema, utilizando ciertas fórmulas matemáticas en las que no se profundizará, pero se explicarán algunos conceptos que se deben conocer para entender el ámbito de este tema, las ecuaciones matemáticas y todo su desarrollo se pueden investigar dirigiéndose a las referencias más adelante.

    Separador 
   
    #t_1_1.titulo-segundo
      h2 1.1 Estructura de datos

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6.mb-lg-0.p-4.fondo-2.mt-5
          p Es la forma de organizar los datos en una computadora para que después sean utilizados de manera eficiente. Existen diferentes estructuras de datos y estas estructuras son utilizadas dependiendo de la necesidad de la aplicación, para el almacenamiento y recuperación de los datos se manejan dos tipos de estructura de datos, dinámica y estática, y los recorridos de búsqueda de estas estructuras pueden ser lineales y no lineales.
      .col-lg-6.mb-lg-0.p-3.fondo-1
          img(src="@/assets/curso/Images/tema1/img_2_1.svg" alt="", style="width:450px; display:block; margin: 0 3rem;")

    p.mb-3 Se crean algoritmos para poder recorrer y hacer búsquedas de información en grandes cantidades de datos y se explica el funcionamiento de cada uno de ellos, para mejorar su comprensión: 
    
   
    SlyderB.mb-5(:datos="datosSlyder")(data-aos="fade-left")

    p.mb-5 Estas estructuras se pueden recorrer de tres formas: Preorden, postorden e inorden; ahora se explicará en qué consiste cada uno de estos recorridos:

    .jumbotron.p-4(data-aos="fade-left")
      .row.justify-content-center.align-items-center
        .col-lg-6.mb-5.mb-lg-0
          hr.mt-5.mb-4
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/Images/tema1/ico_1.svg' alt="", style="width:70px; display:block; margin:auto 0;")    
            .col
              h3 Preorden:
              p.mb-2 Se sigue el orden primero con el nodo raíz después el nodo de la izquierda y por último el de la derecha
          hr.mt-5.mb-4
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/Images/tema1/ico_2.svg' alt="", style="width:70px; display:block; margin:auto 0;")  
            .col
              h3 Postorden:
              p se recorre primero el nodo de la izquierda, luego el de la derecha y por último el nodo raíz.
          hr.mt-5.mb-4
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/Images/tema1/ico_3.svg' alt="", style="width:70px; display:block; margin:auto 0;")  
            .col
              h3 Inorden
              p Primero se recorre el nodo izquierdo después la raíz y por último el derecho.
          hr

        .col-lg-6.mb-5.mb-lg-0
          img(src="@/assets/curso/Images/tema1/img_5.svg" alt="", style="width:400px; display:block; margin:0 auto;")
    Separador 
   
    #t_1_2.titulo-segundo
      h2 1.2 Complejidad algorítmica

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-7.mb-5.mb-lg-0
        .cajon.color-custom-1.p-4.mb-4
          p.mb-0 Es una métrica que ayuda a describir el comportamiento de un algoritmo en dos características,  una es el tiempo que se demora para solucionar un problema y la otra es la memoria que utiliza para hacerlo, esto ayuda a seleccionar qué algoritmo es más eficiente que otro para solucionar un problema, una forma de medir esto es utilizando la Notación Asintótica. 
        h3 Notación Asintótica:  
        p.mb-0 La notación asintótica mide la eficiencia y complejidad de un algoritmo, según esta notación se puede interpretar que el algoritmo más eficiente es el que no varía o varía lo menos posible sin importar las entradas, su comportamiento se representa de la siguiente forma, ver figura 2.
      .col-lg-5.mb-5.mb-lg-0
        img.my-3(src="@/assets/curso/Images/tema1/img_6.png", alt="")(data-aos="fade-left")
    
    .titulo-quinto.color-acento-contenido
      h4 <b>Figura 2</b> Grafica de complejidad Big-O     

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
          img(src="@/assets/curso/Images/tema1/img_7.svg", alt="")
    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-6
        .cajon.color-custom-4.p-4.mb-4
          p Es simplemente buscar un dato en un conjunto de datos, existen algoritmos diferentes para realizar este tipo de búsquedas y depende de cómo estén ordenados los datos, de aquí se debe observar qué tipo de algoritmo utilizar uno que busque secuencialmente o uno que busque aleatoriamente.
       
          p.mb-3 <b>La búsqueda secuencial:</b>  es el algoritmo menos eficiente ya que solo toma el número que desea buscar y lo compara uno a uno con el conjunto de datos hasta encontrarlo.

          p.mb-3 Ahora para volver estas búsquedas eficientes se deben ordenar y el recorrido para realizar la búsqueda que depende de la necesidad.

          h3 ORDENACIÓN

          p.mb-3 <b>Este es un proceso para organizar los elementos o un conjunto de datos de forma ascendente o descendente si es el caso de que los elementos sean números y si son alfabéticos en orden alfabético,</b> esta ordenación se repite hasta que los elementos o datos estén ordenados correctamente, para lograr este proceso se utilizan dos simples operaciones, comparación e intercambio.

          p Por lo tanto se crearon unos algoritmos que permiten realizar estas acciones para lograr el orden deseado de los datos.

      .col-8.col-md-8.col-lg-6(data-aos="fade-left")
        img(src="@/assets/curso/Images/tema1/img_8.svg" alt="", style="width:450px; display:block; margin: 0 auto;")

    TabsC.color-acento-contenido(data-aos="fade-left")
      .py-3.py-md-4.color-custom-2.p-4(titulo="Burbuja")
        .row
          .col-md-6.mb-4.mb-md-0
            p Recorre el array, comparando valores que se encuentran en posiciones seguidas, si los datos de las dos posiciones no se encuentran ordenadas se intercambian, y se sigue iterando hasta que el array quede en el orden correcto, para entender más el funcionamiento de este algoritmo revisa material complementario.
        
          .col-md-6
            figure
              img(src='@/assets/curso/Images/tema1/img_9.svg', alt='Texto que describa la imagen')
              
      .py-3.py-md-4.color-custom-2.p-4(titulo="Método de Selección")
        .row
          .col-md-6.mb-4.mb-md-0
            p En este método lo que primero se debe hacer es seleccionar el elemento de la primera posición y compararlo como el más pequeño o el más grande de todo el conjunto de elementos, en este caso seleccionaremos el más pequeño, recorremos posición por posición comparando que el elemento que seleccionamos es el más pequeño que el de la posición actual, si después de recorrer todo el array ya encontramos el más pequeño lo intercambiamos con el elemento que está en la primera posición y nos desplazamos a la segunda posición volvemos a comprar hasta el final del array y si encontramos el más pequeño lo intercambiamos con el elemento de la segunda posición y así sucesivamente hasta terminar de desplazarnos por todo el array, para entender mejor revisar el material complementario de este documento.

        
          .col-md-6
            figure
              img(src='@/assets/curso/Images/tema1/img_10.svg', alt='Texto que describa la imagen')
              
      .py-3.py-md-4.color-custom-2.p-4(titulo="Método de Inserción")
        .row
          .col-md-6.mb-4.mb-md-0
            p Este modo lo que hace es comprar el elemento con el elemento que se encuentra a la izquierda, como el primer elemento está en la posición 0 y no hay ningún elemento al lado izquierdo pasamos al elemento 1 y lo comparamos con el elemento de la posición 0, si este elemento es menor que el elemento de la posición anterior entonces lo intercambiamos de lo contrario pasamos a la siguiente posición, el elemento debe desplazarse hacia la izquierda tantas veces hasta que encuentre uno menor.
        
          .col-md-6
            figure
              img(src='@/assets/curso/Images/tema1/img_11.svg', alt='Texto que describa la imagen')
              
      .py-3.py-md-4.color-custom-2.p-4(titulo="Quicksort")
        .row
          .col-md-6.mb-4.mb-md-0
            p Este método lo que hace es tomar inicialmente un pívot, normalmente se toma el primer elemento, después se empieza a comparar cada uno de los elementos y en el array de la izquierda se van a agregando uno a uno los menores o iguales al pivote y a la derecha se van agregando los mayores, después se concatenan teniendo en cuento que el pívot queda en el medio, y se toma los arrays a la izquierda y derecha y vuelve y se toma un pivote para volver a hacer el proceso, al final devuelve el array ordenado.

        
          .col-md-6
            figure
              img(src='@/assets/curso/Images/tema1/img_12.svg', alt='Texto que describa la imagen')
            
    Separador 
   
    #t_1_3.titulo-segundo
      h2 1.3 Índices y rendimiento en bases de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7.mb-5.mb-lg-0
        p.mb-3 Para mejorar el rendimiento de la base de datos y optimizar las consultas, es importante utilizar índices que permitan especificar las búsquedas de la información.
        .cajon.color-custom-1.p-4.mb-4
          p.mb-0 Índice es un identificador que permite que la consulta se haga teniendo en cuenta este parámetro y pueda ejecutarse de forma más eficiente y rápida, existen tipos de índices que se ajustan a la implementación de las búsquedas, cuando se crean las tablas de las bases de datos, normalmente uno crea un llave primaria que indica que la búsqueda debe ser relacionada con esa llave en especial, esta llave primaria es a su vez un índice.  
        p.mb-5 Como se puede observar en la siguiente tutorial, se tiene una tabla cliente y se creó una llave primaria que es el ID, este es el índice que se va a utilizar para consultas posteriores entre la tabla cliente y la tabla compra.
      .col-lg-5.mb-5.mb-lg-0
        img.my-3(src="@/assets/curso/Images/tema1/img_13.svg", alt="")

      .row.justify-content-center
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)













































    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br

    Muestras

































































  
  </template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Estructura de datos Lineal',
        texto:
          'Las estructuras lineales son estructuras que se definen inicialmente como una secuencia de elementos en donde se crea una relación de predecesor y sucesor, estas estructuras utilizan cuatro operaciones básicas que son: crear, añadir, borrar y consultar y existen tres estructuras lineales que son: las pilas ejecuta las tres operaciones al final de la secuencia, listas las tres operaciones se ejecutan sobre una posición en específico y puede ser desplazada y colas se añade al final y se consulta y borra al inicio	.',
        imagen: require('@/assets/curso/Images/tema1/img_3.svg'),
      },
      {
        titulo: 'Árbol Binario',
        texto:
          'Es una estructura de datos en donde se representa por nodos y cada nodo puede tener dos hijos uno a la izquierda y otro a la derecha, si uno de los nodos tiene un valor de null se le dice que es un nodo hoja.',
        imagen: require('@/assets/curso/Images/tema1/img_4.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
