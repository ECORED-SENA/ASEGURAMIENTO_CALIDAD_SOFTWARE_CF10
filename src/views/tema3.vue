<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Afinamiento de bases de datos.

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
