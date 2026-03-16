<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Tema 2
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
    h2 2.1. Concepto de ciclo de vida

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
    h2 2.2. Función del ciclo de vida en la estructuración

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
    h2 2.3. Relación entre el ciclo de vida y la identificación de requerimientos

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
    h2 2.4. Importancia del ciclo de vida en el contexto profesional

    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
    h2 2.5. Ciclo de vida y logro del propósito del proyecto
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
