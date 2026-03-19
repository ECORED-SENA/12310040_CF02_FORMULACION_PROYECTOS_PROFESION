<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Requerimientos del proyecto
    p.mb-5 Los requerimientos constituyen las condiciones, especificaciones o elementos indispensables para que el proyecto pueda desarrollarse adecuadamente en cada una de sus fases. Estos aseguran que las actividades planificadas cuenten con los recursos, la información y las condiciones mínimas necesarias para avanzar hacia el logro del propósito general.
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Estructurar un proyecto no se limita a definir fases y actividades. También implica identificar con precisión qué se necesita en cada etapa para que el proceso se mantenga coherente y viable. En este sentido, los requerimientos actúan como garantías estructurales que sostienen la organización, reducen la incertidumbre y fortalecen la viabilidad del proyecto.
    p.mb-0 Comprender los requerimientos permite anticipar necesidades y evitar improvisaciones durante la ejecución. Además, facilita el seguimiento y la evaluación, ya que establece criterios claros sobre lo que debe cumplirse en cada fase.
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1. Concepto de requerimiento
    p.mb-5 Un requerimiento puede definirse como una condición indispensable que debe cumplirse para que una fase del proyecto se desarrolle adecuadamente. Puede estar relacionado con recursos, información, autorizaciones, especificaciones técnicas o criterios de evaluación. En el contexto de la estructuración del proyecto, los requerimientos cumplen una función organizadora fundamental. A continuación, se sintetizan sus principales aportes:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9(data-aos="fade-right")
        .caja-tema4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema4/2.png', alt="" ).m-auto
            h4.text-center Delimitar responsabilidades
            p.mb-0.text-center Define quién debe cumplir determinadas condiciones.
      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .caja-tema4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema4/3.png', alt="" ).m-auto
            h4.text-center Identificar recursos necesarios
            p.mb-0.text-center Precisa los medios indispensables para avanzar.
      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .caja-tema4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema4/4.png', alt="" ).m-auto
            h4.text-center Establecer condiciones mínimas de avance
            p.mb-0.text-center Determina cuándo una fase puede continuar.
      .col-xl-3.col-md-9(data-aos="fade-left").espacio___movil_3
        .caja-tema4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema4/5.png', alt="" ).m-auto
            h4.text-center Garantizar coherencia entre fases
            p.mb-0.text-center Asegura alineación estructural del proceso.
    p.mb-0 Los requerimientos no constituyen elementos opcionales. Son componentes esenciales que sostienen la viabilidad, la coherencia y la estabilidad del proyecto en todas sus etapas.
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2. Características de un requerimiento
    p.mb-5 Para que un requerimiento contribuya efectivamente a la estructuración del proyecto, debe cumplir determinadas características que garanticen su aplicabilidad y relevancia. A continuación, se presentan las características fundamentales:
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema4/6.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema4/7.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Claridad
                p.mb-0.text-center Formulación precisa y comprensible, sin ambigüedades.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema4/8.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Pertinencia
                p.mb-0.text-center Relación directa con la fase en la que se aplica.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema4/9.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Viabilidad
                p.mb-0.text-center Posibilidad real de cumplimiento según el contexto y los recursos disponibles.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema4/10.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Coherencia
                p.mb-0.text-center Alineación con los objetivos y el propósito general.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema4/11.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Verificabilidad
                p.mb-0.text-center Posibilidad de comprobar su cumplimiento mediante criterios definidos.
        p.mb-0 Estas características impiden que los requerimientos se conviertan en declaraciones generales sin impacto real. Por el contrario, permiten que funcionen como criterios estructurales que orientan la organización, el seguimiento y la evaluación del proyecto.
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3. Clasificación de los requerimientos
    p.mb-5 Los requerimientos pueden clasificarse según su naturaleza y función dentro del proyecto. Esta clasificación facilita su organización, análisis estructural y seguimiento a lo largo del ciclo de vida. A continuación, se presenta la tipología principal de requerimientos y su función dentro del proyecto:
    .row.align-items-center.mb-5
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema4/12.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Requerimientos de negocio").ajuste-cajaAcordion
            p Son aquellos relacionados con la necesidad que da origen al proyecto. Definen el propósito general y las expectativas que se pretenden satisfacer. Ejemplos:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Resolver una problemática identificada.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Mejorar un proceso organizacional.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Optimizar recursos.
            p.mb-3 Estos requerimientos orientan la formulación inicial del proyecto.
          .row(titulo="Requerimientos de <i>stakeholders</i>").ajuste-cajaAcordion
            p Se refieren a las necesidades y expectativas de los actores involucrados en el proyecto, como beneficiarios, equipo de trabajo o directivos. Estos requerimientos permiten garantizar que el proyecto responda a intereses reales del entorno profesional.
          .row(titulo="Requerimientos funcionales").ajuste-cajaAcordion
            p Son aquellos relacionados con las actividades que el proyecto debe desarrollar para cumplir sus objetivos. Incluyen:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Acciones específicas.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Procedimientos.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Tareas definidas.
            p.mb-3 Estos requerimientos se identifican principalmente en la fase de planificación.
          .row(titulo="Requerimientos no funcionales").ajuste-cajaAcordion
            p Se relacionan con condiciones de calidad, tiempo, seguridad o desempeño que deben cumplirse durante el desarrollo del proyecto. Ejemplos:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Cumplimiento de tiempos establecidos.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Uso organizado de recursos.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Cumplimiento de normativas.
            p.mb-3 Estos requerimientos fortalecen la coherencia estructural y garantizan condiciones adecuadas de desarrollo.
    .row.align-items-center.mb-0
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="Requerimientos de transición").ajuste-cajaAcordion
            p Son aquellos necesarios para pasar de una fase a otra dentro del ciclo de vida del proyecto. Por ejemplo:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Validación del diagnóstico antes de planificar.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Aprobación del plan antes de ejecutar.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Evaluación de resultados antes de cerrar.
            p.mb-3 Estos requerimientos garantizan continuidad estructural entre etapas.
          .row(titulo="Trazabilidad de los requerimientos").ajuste-cajaAcordion
            p La trazabilidad consiste en el seguimiento de los requerimientos a lo largo del ciclo de vida del proyecto. Permite verificar que cada requerimiento identificado haya sido atendido adecuadamente en las fases correspondientes. La trazabilidad facilita:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Control del cumplimiento.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Identificación de omisiones.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Coherencia entre fases.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Transparencia en el desarrollo del proyecto.
            p.mb-3 Un proyecto estructurado debe permitir rastrear cada requerimiento desde su identificación hasta su validación final.
          .row(titulo="Relación entre requerimientos y fases del proyecto").ajuste-cajaAcordion
            p Cada fase del ciclo de vida exige requerimientos específicos que garantizan su desarrollo adecuado. Esta relación puede comprenderse de la siguiente manera:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | En la fase de inicio se requieren datos diagnósticos y claridad conceptual.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | En la planificación se requieren objetivos definidos y recursos identificados.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | En la ejecución se requieren condiciones operativas y coordinación articulada.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | En el control se requieren indicadores y registros actualizados.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | En el cierre se requieren evidencias y validación formal.
            p.mb-3 La identificación clara de estos requerimientos permite estructurar el proyecto de manera coherente y garantizar que cada fase contribuya al logro del propósito general.
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema4/13.png", alt="" ).m-auto
</template>

<script>
export default {
  name: 'Tema4',
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
