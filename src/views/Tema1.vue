<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentación de la estructuración del proyecto
    .row.align-items-center.mb-5.justify-content-center
      .col-lg
        .caja-tema1.mb-3.mb-lg-0(data-aos="fade-right")
          p.mb-0 La estructuración del proyecto constituye el eje central que permite transformar una idea en una propuesta organizada y coherente. Formular un proyecto no se limita a identificar una necesidad o problemática ni a plantear una solución general; implica organizar sus elementos de manera lógica, secuencial y articulada. Esta organización posibilita comprender el proyecto como un proceso compuesto por fases interdependientes que conducen al logro de un propósito definido.
      .col-lg-auto.mb-5.mb-lg-0.col-md-9(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema1/1.png', alt='', ).m-auto
      .col-lg
        figure.mb-3(data-aos="fade-left")
          img(src='@/assets/curso/tema1/1.svg', alt='Icono de objetivo con personas', style="width: 80px;")
        p.mb-0 Cuando se aborda la estructuración, se hace referencia a la forma en que se articulan los componentes esenciales del proyecto. Entre ellos se encuentran los objetivos, las actividades, los recursos, los tiempos, los requerimientos y los resultados esperados. Cada uno de estos elementos debe mantener coherencia con la necesidad identificada y con el contexto profesional en el que se desarrolla la propuesta. La ausencia de una estructura clara puede generar inconsistencias, duplicidad de acciones o desviaciones frente al propósito inicial.
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Concepto de estructuración
    .row.align-items-center.justify-content-center
      .col-lg.mb-3.mb-lg-0
        p.mb-3 La estructuración puede definirse como el proceso mediante el cual se organizan de manera lógica y secuencial los elementos que conforman un proyecto. Esta organización permite delimitar responsabilidades, establecer prioridades y definir el orden en que se desarrollarán las acciones necesarias para alcanzar el propósito planteado.
        .caja-tema1-2.mb-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/tema1/2.png', alt='').m-auto
            .col-xl
              p.mb-0 En el ámbito profesional, la estructuración adquiere especial relevancia porque facilita la planificación y el control. Un proyecto estructurado permite anticipar situaciones, identificar requerimientos indispensables y establecer mecanismos de seguimiento. Por el contrario, cuando un proyecto carece de estructura, se incrementa la probabilidad de improvisación y desorganización.
        p.mb-0 La estructuración no es una etapa aislada del proyecto; constituye una práctica transversal que acompaña todas las fases del ciclo de vida. Desde la identificación de la necesidad hasta el cierre, la organización coherente de los elementos garantiza que cada acción responda a un propósito claro.
      .col-lg-auto.mb-3.mb-lg-0.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/3.png', alt='').m-auto
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2. Importancia de la organización secuencial
    p.mb-5 La #[b estructuración] puede definirse como el proceso mediante el cual se organizan de manera lógica y secuencial los elementos que conforman un proyecto. Esta organización permite #[b delimitar responsabilidades, establecer prioridades y definir el orden de ejecución de las acciones] necesarias para alcanzar el propósito planteado.
    .caja-tema1-2.cambio-color-1.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/tema1/4.png', alt='').m-auto
        .col-xl
          p.mb-0 En el ámbito profesional, la estructuración adquiere especial relevancia porque facilita la #[b planificación] y el #[b control]. Un proyecto estructurado permite anticipar situaciones, identificar requerimientos indispensables y establecer mecanismos de seguimiento. Por el contrario, cuando un proyecto carece de estructura, aumenta la probabilidad de improvisación y desorganización.
    p.mb-5 La estructuración no constituye una etapa aislada, sino una práctica transversal que acompaña todas las fases del ciclo de vida del proyecto. Desde la identificación de la necesidad hasta el cierre, la organización coherente de los elementos garantiza que cada acción responda a un propósito claro y mantenga coherencia interna. Antes de sintetizar los elementos centrales del concepto, se presentan sus componentes esenciales:
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema1/5.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/5.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Organización lógica
                p.mb-0.text-center Disposición ordenada de los componentes del proyecto.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/6.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Secuencialidad
                p.mb-0.text-center Desarrollo progresivo de acciones conforme a un orden definido.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/7.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Delimitación de responsabilidades
                p.mb-0.text-center Asignación clara de funciones y tareas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/17.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Priorización
                p.mb-0.text-center Determinación de qué acciones deben ejecutarse primero.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/18.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Control y seguimiento
                p.mb-0.text-center Establecimiento de mecanismos para evaluar avances.

        .caja-tema1-3.mb-5(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/19.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10.espacio___movil_3
              p.mb-0 Esta síntesis permite comprender que la estructuración articula orden, coherencia y control como condiciones indispensables para la gestión eficaz de proyectos.    
    p.mb-5 El proyecto debe entenderse como un proceso secuencial en el que cada fase cumple una función específica dentro de un sistema progresivo. La organización secuencial establece un orden lógico en el desarrollo de las actividades y evita la ejecución de acciones sin planificación previa. La secuencia responde a una lógica estructural que garantiza coherencia interna. Su desarrollo puede describirse de la siguiente manera:
    .br-1
      .px-5
        .row.justify-content-center.mb-5
          .col-lg-10
            .caja-tema1-4(data-aos="zoom-in")
              .row.align-items-center
                .col-lg.order-2.order-lg-1
                  ol.lista-ol--cuadro.mb-lg-0
                    li
                      .lista-ol--cuadro__vineta
                        span a)
                      | Se identifica una necesidad.
                    li 
                      .lista-ol--cuadro__vineta
                        span b)
                      | Se analiza el contexto.
                    li 
                      .lista-ol--cuadro__vineta
                        span c)
                      | Se formulan objetivos.
                    li 
                      .lista-ol--cuadro__vineta
                        span d)
                      | Se planifican actividades.
                    li 
                      .lista-ol--cuadro__vineta
                        span e)
                      | Se ejecutan acciones.
                    li 
                      .lista-ol--cuadro__vineta
                        span f)
                      | Se controlan resultados.
                    li 
                      .lista-ol--cuadro__vineta
                        span g)
                      | Se cierra el proyecto.
                .col-lg-auto.order-1.order-lg-2.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/21.jpg', alt='').m-auto
        p.mb-5 Este orden no es arbitrario. Cada fase exige condiciones específicas que deben cumplirse antes de avanzar a la siguiente. Si la secuencia se altera, el proyecto puede perder dirección y afectar el cumplimiento de su propósito. A continuación, se sintetiza la función de cada fase dentro de la lógica secuencial:
    .row.align-items-center.mb-5
      .col-xl-4(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/tema1/8.png', alt='' style="max-width: 350px").m-auto
      .col-xl-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.ajuste--tarjetas-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/tema1/9.png' ).m-auto
            h4.mb-3.estilo-text Identificación de la necesidad
            p.mb-0.text-center Define el problema o situación que justifica el proyecto.
          .tarjeta.color-acento-botones.ajuste--tarjetas-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/tema1/10.png' ).m-auto
            h4.mb-3.estilo-text Análisis del contexto
            p.mb-0.text-center Examina condiciones internas y externas.
          .tarjeta.color-acento-botones.ajuste--tarjetas-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/tema1/11.png' ).m-auto
            h4.mb-3.estilo-text Formulación de objetivos
            p.mb-0.text-center Establece los resultados que se pretenden alcanzar.
          .tarjeta.color-acento-botones.ajuste--tarjetas-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/tema1/12.png' ).m-auto
            h4.mb-3.estilo-text Planificación
            p.mb-0.text-center Organiza recursos, tiempos y actividades.
          .tarjeta.color-acento-botones.ajuste--tarjetas-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/tema1/13.png' ).m-auto
            h4.mb-3.estilo-text Ejecución
            p.mb-0.text-center Desarrolla las acciones previstas.
          .tarjeta.color-acento-botones.ajuste--tarjetas-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/tema1/14.png' ).m-auto
            h4.mb-3.estilo-text Control
            p.mb-0.text-center Evalúa avances y resultados parciales.
          .tarjeta.color-acento-botones.ajuste--tarjetas-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/tema1/15.png' ).m-auto
            h4.mb-3.estilo-text Cierre
            p.mb-0.text-center Formaliza la finalización y consolida aprendizajes.
    .caja-tema1-3(data-aos="flip-up")
      p.mb-0 En consecuencia, la organización secuencial actúa como un #[b mecanismo de control conceptual], ya que asegura que cada etapa cumpla su función antes de dar paso a la siguiente, preservando la coherencia y la dirección estratégica del proyecto.
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3. Enfoque profesional en la estructuración del proyecto
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/22.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La estructuración del proyecto debe responder a las características del contexto profesional en el cual se desarrolla. No todos los proyectos presentan la misma complejidad ni los mismos requerimientos; por tanto, la organización de sus fases debe ajustarse a las condiciones específicas del entorno laboral.
    p.mb-5 En el ámbito profesional, estructurar un proyecto implica realizar un análisis integral que permita garantizar su viabilidad y coherencia operativa. Esto supone evaluar la pertinencia de la propuesta, reconocer los recursos disponibles, identificar limitaciones, determinar responsabilidades y establecer tiempos realistas. De esta manera, la estructuración trasciende el plano académico y se consolida como una práctica orientada a la toma de #[b decisiones fundamentadas en escenarios reales]. Antes de sistematizar los componentes del enfoque profesional, se sintetizan sus elementos esenciales:
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema1/23.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.ajuste--tarjetas-2
                .row.justify-content-center.mb-3
                  .col-12
                    img(src='@/assets/curso/tema1/24.png').m-auto
                h4.mb-3.estilo-text Pertinencia de la propuesta
                p.mb-0.text-center Determina si el proyecto responde a una necesidad real del entorno.
              .tarjeta.color-acento-botones.ajuste--tarjetas-2
                .row.justify-content-center.mb-3
                  .col-12
                    img(src='@/assets/curso/tema1/25.png').m-auto
                h4.mb-3.estilo-text Recursos disponibles
                p.mb-0.text-center Identifica talento humano, recursos financieros, técnicos y materiales. 
              .tarjeta.color-acento-botones.ajuste--tarjetas-2
                .row.justify-content-center.mb-3
                  .col-12
                    img(src='@/assets/curso/tema1/26.png').m-auto
                h4.mb-3.estilo-text Limitaciones
                p.mb-0.text-center Reconoce restricciones presupuestales, normativas o temporales.
              .tarjeta.color-acento-botones.ajuste--tarjetas-2
                .row.justify-content-center.mb-3
                  .col-12
                    img(src='@/assets/curso/tema1/27.png').m-auto
                h4.mb-3.estilo-text Responsabilidades
                p.mb-0.text-center Asigna funciones claras a cada integrante o área involucrada.
              .tarjeta.color-acento-botones.ajuste--tarjetas-2
                .row.justify-content-center.mb-3
                  .col-12
                    img(src='@/assets/curso/tema1/28.png').m-auto
                h4.mb-3.estilo-text Tiempos realistas
                p.mb-0.text-center Define cronogramas coherentes con la capacidad operativa.
        .caja-tema1-3(data-aos="flip-up")
          p.mb-0 Esta organización permite comprender que la estructuración constituye una herramienta estratégica para la gestión eficiente. Además, el enfoque profesional exige claridad en la identificación de #[b requerimientos indispensables], es decir, aquellas condiciones mínimas necesarias para garantizar el desarrollo adecuado del proyecto y el cumplimiento de su propósito. La precisión en estos requerimientos fortalece la planificación, reduce la incertidumbre y contribuye a la sostenibilidad de las decisiones adoptadas.
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4. Coherencia estructural como garantía del propósito
    p.mb-5 El propósito del proyecto representa la meta final que se desea alcanzar. Sin embargo, dicho propósito solo puede lograrse cuando las fases se encuentran correctamente estructuradas y los requerimientos han sido claramente identificados. La #[b coherencia estructural] asegura que cada componente del proyecto mantenga una relación lógica con los demás y contribuya de manera directa al resultado esperado. Esta coherencia se manifiesta cuando existe alineación entre los elementos fundamentales del proyecto. A continuación, se sintetizan las condiciones que la garantizan:
    .row.align-items-center.mb-5
      .col-xl-4(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/tema1/29.png', alt='' style="max-width: 350px").m-auto
      .col-xl-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.ajuste--tarjetas-sinbordes-2
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/tema1/30.png').m-auto
            h4.mb-3.estilo-text Necesidad y objetivos
            p.mb-0.text-center Los objetivos responden de manera directa a la necesidad identificada.
          .tarjeta.color-acento-botones.ajuste--tarjetas-sinbordes-2
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/tema1/31.png').m-auto
            h4.mb-3.estilo-text Objetivos y actividades
            p.mb-0.text-center Las actividades se diseñan en función del logro de los objetivos.
          .tarjeta.color-acento-botones.ajuste--tarjetas-sinbordes-2
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/tema1/32.png').m-auto
            h4.mb-3.estilo-text Actividades y recursos
            p.mb-0.text-center Los recursos son suficientes y pertinentes para ejecutar las acciones previstas.
          .tarjeta.color-acento-botones.ajuste--tarjetas-sinbordes-2
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/tema1/33.png').m-auto
            h4.mb-3.estilo-text Fases y requerimientos
            p.mb-0.text-center Cada fase identifica con claridad sus condiciones indispensables.
          .tarjeta.color-acento-botones.ajuste--tarjetas-sinbordes-2
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/tema1/34.png').m-auto
            h4.mb-3.estilo-text Ejecución y control
            p.mb-0.text-center El seguimiento permite verificar el cumplimiento del propósito.
    .caja-tema1-3(data-aos="flip-up")
      p.mb-0 Cuando estos elementos mantienen correspondencia lógica, el proyecto avanza de manera ordenada y cada fase contribuye efectivamente al logro del propósito. En consecuencia, la coherencia estructural actúa como un criterio de calidad en la planificación y gestión de proyectos.
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5. Estructuración y logro del resultado
    p.mb-5 Estructurar las fases del proyecto implica comprender cómo se organizan las etapas del ciclo de vida y cuáles son los #[b requerimientos indispensables] en cada una de ellas. Este ejercicio fortalece la capacidad de analizar, organizar y planificar propuestas dentro del contexto profesional, consolidando una visión estratégica del proceso.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/35.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La identificación de los requerimientos en cada fase permite anticipar necesidades, evitar inconsistencias y asegurar que el proyecto cuente con las condiciones necesarias para avanzar de manera progresiva. De esta forma, la estructuración se convierte en un mecanismo que respalda el cumplimiento del propósito planteado desde la formulación inicial. Antes de sintetizar la relación entre estructuración y resultado, se presentan los aportes fundamentales de este proceso:
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema1/36.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.ajuste--tarjetas-2
                .row.justify-content-center.mb-3
                  .col-12
                    img(src='@/assets/curso/tema1/24.png').m-auto
                h4.mb-3.estilo-text Organización del ciclo de vida
                p.mb-0.text-center Facilita una secuencia lógica y progresiva.
              .tarjeta.color-acento-botones.ajuste--tarjetas-2
                .row.justify-content-center.mb-3
                  .col-12
                    img(src='@/assets/curso/tema1/25.png').m-auto
                h4.mb-3.estilo-text Identificación de requerimientos
                p.mb-0.text-center Reduce riesgos e incertidumbre.
              .tarjeta.color-acento-botones.ajuste--tarjetas-2
                .row.justify-content-center.mb-3
                  .col-12
                    img(src='@/assets/curso/tema1/26.png').m-auto
                h4.mb-3.estilo-text Planificación anticipada
                p.mb-0.text-center Mejora la toma de decisiones.
              .tarjeta.color-acento-botones.ajuste--tarjetas-2
                .row.justify-content-center.mb-3
                  .col-12
                    img(src='@/assets/curso/tema1/27.png').m-auto
                h4.mb-3.estilo-text Claridad conceptual
                p.mb-0.text-center Evita ambigüedades y desarticulaciones.
              .tarjeta.color-acento-botones.ajuste--tarjetas-2
                .row.justify-content-center.mb-3
                  .col-12
                    img(src='@/assets/curso/tema1/28.png').m-auto
                h4.mb-3.estilo-text Control sistemático
                p.mb-0.text-center Permite verificar avances y ajustar acciones.
        .caja-tema1-3(data-aos="flip-up")
          p.mb-0 El desarrollo de esta competencia favorece una visión integral del proyecto, entendiendo que cada fase requiere planificación, claridad conceptual y coherencia estructural. En consecuencia, la estructuración no solo ordena el proceso, sino que constituye una garantía para el logro efectivo del resultado esperado.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
