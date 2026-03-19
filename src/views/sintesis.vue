<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El presente componente formativo permitió comprender la importancia de estructurar las fases del proyecto de manera organizada, identificando en cada una de ellas los requerimientos indispensables que garantizan el cumplimiento del propósito general. A continuación, se presenta una síntesis de la temática estudiada. 
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis sobre estructuración de las fases y requerimientos del proyecto que incluye ciclo de vida del proyecto con inicio, planificación, ejecución, control y cierre; fundamentos estadísticos como población y muestra, variables y recolección de datos; integración estructural con claridad conceptual y definición de requerimientos; planeación de actividades con organización secuencial y asignación de recursos; y requerimientos del proyecto de negocio, stakeholders, funcionales, no funcionales, transición y trazabilidad, acompañada de íconos y elementos gráficos decorativos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
