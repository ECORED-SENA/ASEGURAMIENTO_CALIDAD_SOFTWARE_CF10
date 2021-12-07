<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/template/emparejamiento.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Relacionar conceptos con significados correctos.
        p.mb-3 El aprendiz debe relacionar los conceptos de los algoritmos de búsqueda y diferenciarlos, ya que la forma como se implementan se hizo para cumplir el mismo fin recorrer, comprar e intercambiar y tienen formas de iterar muy parecidas pero solo un cambio de cómo se hace aumenta o disminuye el tiempo de respuesta.

        p.mb-3 Por lo tanto se colocan conceptos a un lado con las características principales de cada una y al otro lado el nombre del algoritmo y se debe direccionar mediante una línea a cual corresponde.

        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Relacionar conceptos con significados correctos.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    

    

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
