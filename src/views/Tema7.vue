<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Integración estructural del proyecto
    p.mb-5 La integración estructural consiste en articular de manera coherente las fases, actividades, requerimientos y resultados dentro de un sistema organizado. No se trata de considerar cada componente de forma aislada, sino de garantizar que todos interactúen de manera lógica y alineada con el propósito general. Esta integración asegura continuidad metodológica y fortalece la solidez técnica del proyecto desde su formulación hasta su cierre. A continuación, se sintetizan los principales ejes de la integración estructural:
    .row.align-items-center.mb-5
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema7/1.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Articulación entre fases").ajuste-cajaAcordion
            p.mb-3 Relaciona de manera lógica el inicio, la planificación, la ejecución, el control y el cierre. La claridad inicial facilita la planificación; la planificación orienta la ejecución; el control verifica el avance y el cierre consolida resultados.
          .row(titulo="Coherencia interna").ajuste-cajaAcordion
            p.mb-3 Garantiza que todos los componentes estén alineados con el propósito general.
          .row(titulo="Relación entre objetivos, actividades y resultados").ajuste-cajaAcordion
            p.mb-3 Asegura que cada objetivo esté respaldado por actividades concretas y genere resultados verificables.
          .row(titulo="Verificación conceptual del cumplimiento").ajuste-cajaAcordion
            p.mb-3 Permite analizar si la estructura diseñada posibilita alcanzar el propósito definido desde la fase de inicio.
    p.mb-0 La integración estructural fortalece la consistencia interna del proyecto y evita fragmentaciones que afecten su efectividad.
    Separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1. Buenas prácticas en la estructuración de fases y requerimientos
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La estructuración adecuada de un proyecto no depende únicamente del conocimiento teórico de sus fases, sino de la aplicación sistemática de buenas prácticas que fortalezcan la coherencia, claridad y viabilidad del proceso. Estas prácticas permiten organizar el proyecto con rigor metodológico, reducir errores y asegurar que cada fase contribuya efectivamente al logro del propósito general.
    p.mb-5 Adoptarlas implica actuar con organización, análisis crítico y responsabilidad metodológica. No se trata solo de cumplir una secuencia formal de etapas, sino de garantizar que cada decisión esté fundamentada y alineada con la necesidad identificada. Las buenas prácticas aportan los siguientes beneficios:
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema7/3.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema7/4.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Evitar improvisaciones
                p.mb-0.text-center Reduce decisiones no fundamentadas y fortalece la planificación.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema7/5.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Reducir inconsistencias entre fases
                p.mb-0.text-center Mantiene coherencia metodológica en todo el proceso.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema7/6.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Facilitar seguimiento y control
                p.mb-0.text-center Permite verificar avances y realizar ajustes oportunos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema7/7.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Fortalecer la calidad de resultados
                p.mb-0.text-center Mejora la pertinencia y sostenibilidad del proyecto.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema7/8.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Garantizar coherencia interna
                p.mb-0.text-center Alinea actividades, recursos y resultados con el propósito general.
        p.mb-5 Aplicarlas de manera sistemática fortalece la capacidad profesional para estructurar proyectos de forma organizada y sostenible. Dentro de estas prácticas se destacan los siguientes componentes clave:
    .row.align-items-center.mb-5
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="Claridad conceptual").ajuste-cajaAcordion
            p.mb-3 Definir con precisión la necesidad, el problema, el propósito y los objetivos, evitando ambigüedades en la formulación.
          .row(titulo="Delimitación adecuada").ajuste-cajaAcordion
            p.mb-3 Establecer límites claros respecto a lo que se desarrollará, evitando desviaciones y sobrecarga de actividades.
          .row(titulo="Seguimiento estructurado").ajuste-cajaAcordion
            p.mb-3 Verificar el avance y detectar desviaciones oportunamente, fortaleciendo la articulación entre lo planificado y lo ejecutado.
          .row(titulo="Evaluación coherente").ajuste-cajaAcordion
            p.mb-3 Analizar los resultados en función del propósito general y consolidar aprendizajes para futuras iniciativas.
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema7/9.png", alt="" ).m-auto 
    p.mb-0 La aplicación integrada de estas buenas prácticas contribuye a mantener la coherencia interna del proyecto y a garantizar que cada fase, requerimiento y resultado responda de manera directa al propósito definido desde su inicio.
</template>

<script>
export default {
  name: 'Tema7',
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
