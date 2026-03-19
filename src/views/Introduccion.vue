<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 La estructuración de un proyecto constituye un proceso fundamental dentro de su formulación, ya que permite organizar de manera lógica y coherente las acciones necesarias para alcanzar un propósito definido. Comprender cómo se articulan las fases del proyecto y cuáles son los requerimientos indispensables en cada una de ellas facilita la construcción de propuestas claras, viables y alineadas con las necesidades del contexto profesional. Este componente formativo orienta el análisis del proyecto desde una perspectiva estructural, reconociendo que su desarrollo no ocurre de manera aislada, sino mediante etapas interrelacionadas que exigen planificación y organización.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El proyecto debe entenderse como un proceso secuencial que inicia con la identificación de una necesidad y avanza a través de la definición de objetivos, la planificación de actividades, la ejecución de acciones y la evaluación de resultados. Cada una de estas fases cumple una función específica y demanda condiciones particulares que deben identificarse con anticipación. La ausencia de una estructura clara puede generar desorganización, duplicidad de esfuerzos o desviaciones frente al propósito planteado. Por ello, estructurar adecuadamente las fases fortalece la coherencia interna y favorece el logro de los resultados previstos.
    p.mb-5 Asimismo, la identificación de los requerimientos indispensables en cada fase permite garantizar que el proyecto disponga de las condiciones necesarias para su desarrollo. Estos requerimientos pueden relacionarse con recursos, información, responsabilidades, tiempos o condiciones técnicas, y su definición precisa contribuye a prevenir improvisaciones. Reconocer la relación entre fases y requerimientos permite comprender que el éxito del proyecto no depende únicamente de la idea inicial, sino de la forma en que se organizan y articulan sus elementos.
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Desde el enfoque formativo, este componente aborda el ciclo de vida del proyecto, el análisis detallado de sus fases y la clasificación de los requerimientos asociados a cada etapa. A través de esta comprensión se busca fortalecer la capacidad de estructurar proyectos de manera ordenada, identificando con claridad los elementos que intervienen en su desarrollo y garantizando que cada fase aporte al cumplimiento del propósito general. La estructuración adecuada se convierte así en una herramienta que permite transformar necesidades en propuestas organizadas, coherentes y orientadas a resultados.
</template>

<script>
export default {
  name: 'Introduccion',
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
