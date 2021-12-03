<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Afinamiento de bases de datos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-7.mb-5.mb-lg-0
        p.mb-3 El afinamiento de Base de Datos es el proceso que se hace de acuerdo al sistema operativo, a la arquitectura del servidor, como el disco duro, memoria, etc. y a las transacciones y usuarios que se puedan conectar y hacer solicitudes.

        p Los informes basados en esquemas de rendimiento proporcionan información sobre las operaciones del servidor MySQL a través de útiles informes de alto nivel. MySQL Workbench utiliza las vistas SYS en el esquema de rendimiento para generar más de 20 informes para ayudar a analizar el rendimiento de sus bases de datos MySQL. Los informes ayudan a analizar los puntos de acceso de E / S,descubrir declaraciones SQL de alto costo y revisar las estadísticas de espera y las métricas del motor InnoDB.

      .col-lg-5.mb-5.mb-lg-0
        img.my-3(src="@/assets/curso/Images/tema3/img_9.svg", alt="")

    #t_3_1.titulo-segundo
      h2 3.1 Motor de almacenamiento
    
    p.mb-3 Un motor de base de datos es el que ofrece un sistema de administración para utilizar operaciones para editar, leer y actualizar datos, en este caso se hablará de Mysql y MariaDB, y hay dos tipos de motores transaccionales y no transaccionales.

    p.mb-3 Existen varios motores de almacenamiento los cuales se mencionan a continuación:

    .jumbotron-1.p-5
      .col-lg-12.mb-3(data-aos="flip-left")
        img(src="@/assets/curso/Images/tema3/img_10.svg", alt= "", style="width:600px; display:block; margin: auto; auto")

    Separador 
   
    #t_3_2.titulo-segundo
      h2 3.2 Parámetros de configuración

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-7.mb-5.mb-lg-0
        p.mb-3 Las configuraciones para un óptimo funcionamiento de una base de datos, depende del motor que se use, el tipo de base de datos, las necesidades del sistema, entre otras características, no es lo mismo configurar una base de datos en un servidor básico que en un servidor con discos en espejo con espacio sólido y 32 Gb de memoria, tampoco es lo mismo configurar un servidor para que almacene una base de datos de forma local en un servidor propio que configurarlo en un contenedor ofrecido por Amazon, por lo tanto se listan algunas conceptos para tener en cuenta según todas estas necesidades y arquitecturas. 

        h3 Recomendaciones generales: 
        
        p.mb-3 Emplear imágenes y gráficas puntuales, que faciliten resumir y esquematizar conceptos puntuales. Los conceptos deben abordarse de manera clara.

      .col-lg-5.mb-5.mb-lg-0
        img.my-3(src="@/assets/curso/Images/tema3/img_11.png", alt="")

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-6.mb-5.mb-lg-0
        img(src='@/assets/curso/Images/tema3/img_12.svg' alt="", style="width:400px; display:block; margin:auto;")
      .col-lg-6.mb-5.mb-lg-0
        LineaTiempoD.color-primario.p-4
          ul.lista-ul(numero="1" titulo="Aplicación web (Web)")
            li 
              i.fas.fa-angle-right
              | Normalmente vinculado a la CPU
            li 
              i.fas.fa-angle-right
              | DB mucho más pequeño que RAM
            li 
              i.fas.fa-angle-right
              | 90% o más consultas simples
          
          ul.lista-ul(numero="2" titulo="Procesamiento de transacciones en línea (oltp)")
            li 
              i.fas.fa-angle-right
              | Normalmente vinculado a CPU o E / S
            li 
              i.fas.fa-angle-right
              | DB un poco más grande que la RAM a 1TB
            li 
              i.fas.fa-angle-right
              | 20-40% de consultas de escritura de datos pequeños
            li 
              i.fas.fa-angle-right
              | Algunas transacciones largas y consultas de lectura complejas
        
          ul.lista-ul(numero="3" titulo="Almacén de datos (dw)")
            li 
              i.fas.fa-angle-right
              | Normalmente vinculado a E / S o RAM
            li 
              i.fas.fa-angle-right
              | Grandes cargas masivas de datos
            li 
              i.fas.fa-angle-right
              | Grandes consultas de informes complejos
            li 
              i.fas.fa-angle-right
              | También llamado "Apoyo a la toma de decisiones" o "Inteligencia empresarial

          ul.lista-ul(numero="4" titulo="Aplicación de escritorio")
            li 
              i.fas.fa-angle-right
              | No es una base de datos dedicada
            li 
              i.fas.fa-angle-right
              | Una estación de trabajo general, quizás para un desarrollador.
          ul.lista-ul(numero="5" titulo="Tipo de aplicación mixta")
            li 
              i.fas.fa-angle-right
              | Características mixtas de DW y OLTP
            li 
              i.fas.fa-angle-right
              | Una amplia mezcla de consultas

    Separador 
   
    #t_3_3.titulo-segundo
      h2 3.3 Herramientas de monitoreo

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-10.col-lg-6.mb-5.mb-lg-0
        p Se mencionan algunas herramientas que podrían ayudar con el monitoreo del rendimiento de las bases de datos.
        ul.lista-ul(numero="3" titulo="Almacén de datos (dw)")
          li 
            i.fas.fa-angle-right
            | Germain APM.
          li 
            i.fas.fa-angle-right
            | Datadog.
          li 
            i.fas.fa-angle-right
            | Percona.
          li 
            i.fas.fa-angle-right
            | MariaDB.
          li 
            i.fas.fa-angle-right
            | Sowflake.
            
      .col-lg-6.mb-5.mb-lg-0
        img.mx-0(src="@/assets/curso/Images/tema3/img_13.png", alt="")



















</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
