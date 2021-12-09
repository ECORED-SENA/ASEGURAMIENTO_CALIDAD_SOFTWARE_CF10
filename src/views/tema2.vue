<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis de rendimiento

    .col-lg-12.mb-3
      img(src="@/assets/curso/Images/tema2/img_1.png", alt= "")

    p.mb-3 La base de datos es el centro de toda aplicación, si la aplicación no responde de la mejor manera después de un tiempo, se debe a la escalabilidad de la base de datos y del rendimiento de la misma, esto bajará la calidad de la aplicación por los tiempos de respuesta de la información, además hay muchos factores que si no se tienen en cuenta puede generar cuellos de botella y muchos inconvenientes más.

    Separador 
   
    #t_2_1.titulo-segundo
      h2 2.1 Preparación e identificación
    p.mb-3 A manera de ejemplo, inicialmente se importará una base de datos sencilla para poder identificar las consultas y consultar los datos, esta base tiene dos tablas, cliente y compra e inicialmente se generan dos índices que son sus llaves primarias.

    figure.mb-5
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador 
   
    #t_2_2.titulo-segundo
      h2 2.2 Análisis de plan de ejecución de consultas

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7.mb-5.mb-lg-0
        p.mb-3 Lo primero es identificar las consultas que van a traer más información y que pueden tornarse lentas al momento de que los usuarios comiencen a realizar solicitudes.

        p Ahora se inicia el monitoreo de esas consultas identificando los tiempos de respuesta utilizando el comando <i>explain</i> en Mysql, hay que tener en cuenta que este comando puede variar dependiendo del motor de base de datos que se utilice.
      .col-lg-5.mb-5.mb-lg-0
        img.my-3(src="@/assets/curso/Images/tema2/img_2.svg", alt="")

    .col-lg-12.mb-5
      img(src="@/assets/curso/Images/tema2/img_3.svg", alt= "")

    p.mb-3 Este comando lo que hace es desplegar el plan de ejecución de la consulta, en este caso se va a observar las dos últimas columnas que muestran que se está utilizando solo un índice y que arroja 20 resultados, de esta forma se puede verificar y monitorear qué hace la consulta.

    Separador 
   
    #t_2_3.titulo-segundo
      h2 2.3 Optimización de consultas

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg.order-2.order-lg-1
        .custom_box_right    
          p.mb-0 Ahora se puede monitorear el tiempo de respuesta de las consultas, en este caso se implementaron dos consultas que arrojan el mismo resultado pero los tiempos de respuesta entre una y otra cambian.
      .col-auto.mb-5.mb.onTop.order-1.order-lg-2
        img(src="@/assets/curso/Images/tema2/img_4.svg" alt='AvatarTop', style="width:320px;")

    .col-lg-12.mb-5
      img(src="@/assets/curso/Images/tema2/img_5.svg", alt= "")(data-aos="fade-right")

    p.mb-3 Si se observa la sentencia marcada con azul no utiliza Join y solo utiliza la llave primaria y la segunda sentencia utiliza el Join, sí se detalla el tiempo de la sentencia roja es mucho mejor el tiempo de respuesta, por lo tanto una forma de optimizar las sentencias de búsqueda con respecto al rendimiento es utilizando los Join.

    p.mb-3  Ahora se agrega además un <i>index</i> a la consulta con el campo identificación.

    .col-lg-12.mb-5
      img(src="@/assets/curso/Images/tema2/img_6.svg", alt= "")(data-aos="fade-right")
    .col-lg-12.mb-5
      img(src="@/assets/curso/Images/tema2/img_7.svg", alt= "")(data-aos="fade-right")

    p.mb-3 El tiempo entre las dos consultas agregándole el índice mejora aún más, de esta forma se puede monitorear y mejorar el rendimiento de nuestras consultas y de la base de datos.

    Separador 
    
    #t_2_4.titulo-segundo
      h2 2.4 Recomendaciones

    p.mb-5 Al momento de mejorar un sistema se debe tener muy en cuenta cómo se arman las consultas en la base de datos y como ya se tiene claro acerca de cómo se arman estas sentencias y se mejoran dichas consultas, se darán unas recomendaciones para mejorar el rendimiento que son:

    .col-lg-12
        img(src="@/assets/curso/Images/tema2/img_8.svg", alt= "")
    





</template>

<script>
export default {
  name: 'Tema2',
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
