<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Ciclo de vida del proyecto
    p.mb-5 El ciclo de vida del proyecto se define como el conjunto organizado de fases que estructuran su desarrollo desde la identificación de una necesidad hasta la obtención de resultados y su cierre formal. No constituye únicamente una secuencia temporal, sino una estructura conceptual que orienta la organización lógica del proyecto y facilita su comprensión integral.
    .caja-tema2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/tema2/1.png', alt='').m-auto
        .col-xl
          p.mb-0 Todo proyecto, independientemente de su naturaleza o contexto profesional, atraviesa etapas que permiten avanzar progresivamente hacia el logro del propósito definido. Cada una de estas fases posee objetivos específicos, actividades determinadas y requerimientos particulares. Reconocer esta estructura favorece la organización coherente del proceso y garantiza que cada fase cumpla una función dentro del conjunto.
    p.mb-0 Comprender el ciclo de vida fortalece la capacidad de estructurar propuestas organizadas, ya que permite anticipar las necesidades propias de cada etapa y delimitar con claridad las acciones que deben desarrollarse. De esta manera, se reduce la improvisación y se promueve la coherencia entre formulación y ejecución.
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1. Concepto de ciclo de vida
    p.mb-5 A continuación, se presenta un pódcast que explica el ciclo de vida del proyecto, sus características fundamentales y su función organizadora dentro del proceso de estructuración.
    .row.align-items-center.m-0.mb-5
      .col-xl
        .row.align-items-center.justify-content-center.caja-tema2-1(data-aos="zoom-in")
          .col-auto
            figure(data-aos="fade-right")
              img(src="@/assets/curso/tema2/2.svg" style="max-width: 220px").m-auto
          .col.espacio___movil_3
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Ciclo de la vida del proyecto"
              :audio="require('@/assets/curso/podcast/podcast1.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/tema2/3.png" ).m-auto
    p.mb-0 En conjunto, estas características permiten comprender que el ciclo de vida no es una estructura rígida, sino un marco organizador que aporta orden, coherencia y dirección estratégica al desarrollo del proyecto.
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2. Función del ciclo de vida en la estructuración
    p.mb-5 El ciclo de vida cumple una función organizadora dentro del proyecto, ya que permite dividirlo en etapas manejables. Esta segmentación favorece el análisis y la planificación, debido a que cada fase puede abordarse con mayor claridad conceptual y operativa. En consecuencia, el proyecto deja de concebirse como una secuencia aislada de acciones y se comprende como un proceso articulado que exige coherencia y previsión. Cuando la estructuración se fundamenta en el ciclo de vida, se generan beneficios concretos en la organización del trabajo:
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.fa-ul.estilo___ul_bloque.mb-0
          li.mb-0.ajuste---li
            span.fa-li
              i.fas.fa-check-circle
            | Se identifican responsabilidades por etapa.
          br
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Se delimitan actividades específicas.
          br
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Se reconocen requerimientos indispensables.
          br
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Se facilita el seguimiento conceptual.
    p.mb-0 Esta organización por fases fortalece la lógica interna del proyecto y contribuye a mantener una secuencia ordenada entre planificación, desarrollo y evaluación.       
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3. Relación entre el ciclo de vida y la identificación de requerimientos
    p.mb-5 La relación entre el ciclo de vida y los requerimientos es directa y estructural. Cada fase demanda condiciones específicas que deben preverse con anticipación para garantizar el desarrollo adecuado del proyecto. Por ello, la identificación oportuna de los requerimientos no constituye una actividad aislada, sino un componente integrado a la dinámica de cada etapa. A continuación, se sintetiza la correspondencia entre fase y tipo de requerimiento:
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema1/5.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.ajuste--tarjetas-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/tema2/5.png' ).m-auto
                h4.mb-3.estilo-text Inicio
                p.mb-0.text-center Datos diagnósticos y claridad conceptual.
              .tarjeta.color-acento-botones.ajuste--tarjetas-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/tema2/6.png' ).m-auto
                h4.mb-3.estilo-text Planificación
                p.mb-0.text-center Recursos definidos y actividades organizadas.
              .tarjeta.color-acento-botones.ajuste--tarjetas-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/tema2/7.png' ).m-auto
                h4.mb-3.estilo-text Ejecución
                p.mb-0.text-center Condiciones operativas adecuadas.
              .tarjeta.color-acento-botones.ajuste--tarjetas-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/tema2/8.png' ).m-auto
                h4.mb-3.estilo-text Control
                p.mb-0.text-center Indicadores para el seguimiento y la medición.
              .tarjeta.color-acento-botones.ajuste--tarjetas-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/tema2/9.png' ).m-auto
                h4.mb-3.estilo-text Cierre
                p.mb-0.text-center Mecanismos de validación de resultados.
        p.mb-0 Esta correspondencia permite estructurar el proyecto con mayor precisión, ya que cada etapa incorpora exigencias propias que orientan la toma de decisiones y la asignación de recursos. De este modo, el ciclo de vida no solo organiza el proceso, sino que también anticipa las condiciones necesarias para su correcta ejecución.
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4. Importancia del ciclo de vida en el contexto profesional
    p.mb-5 En el contexto profesional, el ciclo de vida del proyecto se convierte en una herramienta que facilita la organización del trabajo y la toma de decisiones. La estructuración por fases permite asignar responsabilidades, establecer prioridades y definir tiempos realistas.
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Además, el ciclo de vida favorece la claridad en la comunicación, ya que permite explicar el proyecto en términos de etapas definidas. Esta claridad contribuye a fortalecer la comprensión de los procesos y a garantizar que cada integrante del equipo conozca su papel dentro del desarrollo del proyecto.
    p.mb-0 Comprender el ciclo de vida también permite anticipar posibles dificultades y establecer mecanismos preventivos. Esta anticipación fortalece la capacidad de estructurar proyectos viables y coherentes.
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5. Ciclo de vida y logro del propósito del proyecto
    p.mb-5 El propósito del proyecto representa el resultado que se desea alcanzar. Sin embargo, su cumplimiento depende de que las fases del ciclo de vida estén claramente estructuradas y de que los requerimientos hayan sido identificados en cada etapa. Existe, por tanto, una relación directa entre la organización por fases y la consecución del objetivo general. A continuación, se sintetiza la relación entre cada fase del ciclo de vida y su contribución al logro del propósito:
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 1.
          span Ciclo de vida del proyecto
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/11.svg', alt='Diagrama sobre el ciclo de vida del proyecto que presenta cinco etapas principales: Inicio, Planificación, Ejecución, Control y Cierre, organizadas de forma secuencia ').m-auto
    .row.align-items-center.mb-5
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema2/12.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Inicio").ajuste-cajaAcordion
            p.mb-3 Corresponde a la etapa en la que se identifica la necesidad o problemática que da origen al proyecto. Se realiza un análisis preliminar de viabilidad, se definen los objetivos generales, el alcance inicial y los principales interesados. En esta fase se autoriza formalmente el proyecto y se establecen las bases conceptuales que orientarán su desarrollo.
          .row(titulo="Planeación").ajuste-cajaAcordion
            p.mb-3 En esta fase se desarrolla una definición detallada del proyecto. Se estructuran los objetivos específicos, actividades, cronograma, recursos, presupuesto y requerimientos. Se establecen responsabilidades, indicadores de seguimiento y mecanismos de control. La planeación permite anticipar riesgos y organizar el trabajo de manera sistemática.
          .row(titulo="Ejecución").ajuste-cajaAcordion
            p.mb-3 Consiste en la implementación del plan previamente diseñado. Se desarrollan las actividades programadas, se gestionan los recursos y se coordinan los equipos de trabajo. Durante esta etapa se materializan las acciones que conducen al cumplimiento de los objetivos definidos en la planeación. 
    .row.align-items-center.mb-5
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="Control").ajuste-cajaAcordion
            p.mb-3 Se realiza la medición y supervisión constante del avance del proyecto. Se comparan los resultados obtenidos con lo planificado, se identifican desviaciones y se aplican acciones correctivas cuando es necesario. Esta fase garantiza coherencia entre lo proyectado y lo ejecutado.
          .row(titulo="Cierre").ajuste-cajaAcordion
            p.mb-3 Comprende la finalización formal del proyecto. Se validan los resultados alcanzados, se documentan los aprendizajes, se entrega el producto o servicio final y se consolida la aceptación por parte de los interesados. El cierre permite evaluar el cumplimiento del propósito inicial y dejar evidencia del proceso desarrollado. 
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema2/13.png", alt="" ).m-auto
    p.mb-0 Cada fase incorpora un elemento indispensable dentro del proceso global. En conjunto, estas etapas permiten que el propósito del proyecto trascienda la intención inicial y se materialice mediante una secuencia organizada, controlada y coherente de acciones.
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
