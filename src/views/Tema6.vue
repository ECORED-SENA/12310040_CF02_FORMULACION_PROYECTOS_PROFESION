<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Fundamentos estadísticos para la estructuración del proyecto
    p.mb-5 La estructuración del proyecto requiere información confiable que permita fundamentar la identificación de necesidades y la toma de decisiones. En este sentido, los fundamentos estadísticos aportan herramientas básicas para analizar datos y sustentar la formulación de manera objetiva. Su uso conceptual no implica desarrollar análisis complejos, sino comprender elementos esenciales que respalden el diagnóstico y orienten la organización de la información. A continuación, se presenta un pódcast que explica los conceptos de población, muestra, variables y técnicas de recolección de información, fundamentales para la estructuración metodológica de un proyecto.
    .row.align-items-center.m-0.mb-5
      .col-xl
        .row.align-items-center.justify-content-center.caja-tema2-1(data-aos="zoom-in")
          .col-auto
            figure(data-aos="fade-right")
              img(src="@/assets/curso/tema2/2.svg" style="max-width: 220px").m-auto
          .col.espacio___movil_3
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="nombre"
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/tema6/1.png" ).m-auto
    .caja-tema1-3.cambio-color-2.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.col-md-2(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema6/2.svg', alt='' style="width: 85px").m-auto
        .col-xl.col-md-10.espacio___movil_3
          p.mb-0 Estos mecanismos permiten obtener datos que sustenten la identificación de la necesidad y la definición de objetivos, consolidando el diagnóstico como base técnica de la estructuración del proyecto.
    p.mb-5 En la fase inicial, no basta con recolectar información; es necesario interpretarla, proyectarla y organizarla de manera coherente. A continuación, se integran los elementos que fortalecen este proceso:
    .bg--slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Interpretación de datos en la fase de inicio
                p.mb-0 Implica analizar la información obtenida para comprender la magnitud y características de la necesidad identificada. Permite establecer objetivos coherentes y alineados con la realidad diagnosticada.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema6/3.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Uso conceptual de la inferencia estadística
                p.mb-0 Permite formular conclusiones generales a partir de datos obtenidos en una muestra. Su aplicación conceptual contribuye a fundamentar decisiones sin requerir análisis estadísticos complejos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema6/4.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Representación gráfica como apoyo
                p.mb-0 Facilita la organización y síntesis de la información mediante gráficos, tablas y esquemas que permiten identificar tendencias y relaciones relevantes.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema6/5.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 La incorporación de estos elementos fortalece la argumentación técnica y contribuye a una estructuración más clara, organizada y sustentada en evidencia.
</template>

<script>
export default {
  name: 'Tema6',
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
