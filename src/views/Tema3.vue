<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Fases del ciclo de vida del proyecto
    p.mb-5 El ciclo de vida del proyecto se compone de fases interrelacionadas que permiten organizar su desarrollo de manera progresiva y coherente. Cada fase cumple una función específica dentro del proceso general y exige la identificación de requerimientos indispensables para garantizar su adecuado avance.
    .caja-tema2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/tema3/1.png', alt='').m-auto
        .col-xl
          p.mb-0 Estructurar las fases implica comprender qué ocurre en cada etapa, cuáles son sus propósitos particulares y qué condiciones deben cumplirse para avanzar hacia la siguiente. Esta organización asegura coherencia entre la necesidad identificada, las acciones desarrolladas y el propósito final del proyecto.
    p.mb-0 Las fases no deben entenderse como compartimentos aislados. Aunque cada una posee características propias, todas se articulan dentro de un proceso continuo que transforma una idea inicial en resultados concretos y verificables.
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1. Fase de inicio
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La fase de inicio constituye el fundamento del proyecto. En esta etapa se reconoce la situación que da origen a la propuesta y se establecen las bases conceptuales que orientarán su desarrollo posterior. Se trata de un momento analítico y reflexivo en el cual se determina si la iniciativa es pertinente, necesaria y viable dentro del contexto profesional.
    p.mb-5 La calidad de la estructuración en esta fase influye directamente en las etapas posteriores. Cuando la necesidad no se identifica con claridad o el propósito carece de precisión, el proyecto puede avanzar sin dirección definida, lo que compromete su coherencia interna. La fase de inicio consolida las bases conceptuales y contextuales que orientan el desarrollo coherente y estructurado del proyecto:
    .row.align-items-center.mb-5
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema3/3.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Identificación de la necesidad").ajuste-cajaAcordion
            p La identificación de la necesidad constituye el punto de partida del proyecto. Toda iniciativa surge como respuesta a una problemática, una oportunidad de mejora o una situación que requiere intervención. Reconocerla implica realizar un análisis preliminar del entorno para determinar qué situación demanda atención. La necesidad debe describirse de manera objetiva, evitando interpretaciones subjetivas o suposiciones sin sustento. 
            p Para ello, pueden considerarse los siguientes elementos:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Situaciones problemáticas recurrentes.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Resultados insatisfactorios en un proceso.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Demandas no atendidas en el entorno laboral.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Oportunidades de optimización.
            p.mb-3 Una necesidad claramente definida permite justificar el proyecto y delimitar su alcance inicial con mayor precisión.
          .row(titulo="Análisis del contexto").ajuste-cajaAcordion
            p El análisis del contexto permite comprender las condiciones del entorno en el cual se desarrollará el proyecto. Este análisis abarca factores organizacionales, sociales, técnicos y económicos que pueden incidir en la ejecución. El contexto determina tanto las posibilidades como las limitaciones del proyecto. Aspectos como la disponibilidad de recursos, la normativa vigente o las características de la población beneficiaria influyen en la estructuración de las fases posteriores.
            p.mb-3 Un análisis contextual riguroso facilita la anticipación de condiciones que podrían afectar el desarrollo y contribuye a la toma de decisiones fundamentadas.
          .row(titulo="Delimitación del problema").ajuste-cajaAcordion
            p Delimitar el problema significa establecer con precisión la situación en la que se pretende intervenir. No es suficiente identificar una necesidad general; es indispensable definir sus características específicas, sus causas y sus efectos.
            p Una delimitación clara evita la expansión descontrolada del proyecto y mantiene el enfoque en la situación prioritaria. Además, facilita la formulación de objetivos coherentes con la problemática identificada. Para fortalecer esta delimitación, es pertinente responder preguntas orientadoras como:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | ¿Qué ocurre?
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | ¿A quién afecta? 
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | ¿En qué contexto se presenta?
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | ¿Qué consecuencias genera?
    .row.align-items-center.mb-0
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="Definición del propósito").ajuste-cajaAcordion
            p El propósito representa la meta general que el proyecto busca alcanzar. Surge como respuesta directa a la necesidad identificada y orienta todas las fases posteriores. Definirlo implica establecer con claridad qué se espera lograr al finalizar el proyecto. Este debe ser coherente con la problemática delimitada y viable dentro del contexto analizado.
            p.mb-3 El propósito funciona como eje articulador. Cada fase del ciclo de vida debe contribuir de manera directa a su cumplimiento.
          .row(titulo="Requerimientos indispensables en la fase de inicio").ajuste-cajaAcordion
            p Para que la fase de inicio se desarrolle de manera adecuada, es necesario garantizar ciertas condiciones mínimas. Estas aseguran que el proyecto avance hacia la fase de planificación con bases sólidas y estructuradas. A continuación, se presentan los requerimientos esenciales de esta etapa:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Información diagnóstica suficiente: fundamentar la identificación de la necesidad.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Claridad conceptual del problema: evitar ambigüedades y fortalecer la coherencia.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Identificación de actores involucrados: reconocer responsables e interesados.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Validación preliminar de la pertinencia: confirmar la viabilidad inicial del proyecto.
            p.mb-3 El cumplimiento de estos requerimientos consolida la base estructural del proyecto y permite avanzar con mayor solidez hacia las siguientes fases del ciclo de vida.
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema3/4.png", alt="" ).m-auto
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2. Fase de planificación
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La fase de planificación constituye el momento en el que el proyecto adquiere una estructura organizada y detallada. Después de haber identificado la necesidad, analizado el contexto y definido el propósito, resulta indispensable establecer cómo se alcanzará dicho propósito. La planificación transforma la intención inicial en un conjunto articulado de acciones, recursos y tiempos que orientan el desarrollo del proyecto.
    p.mb-5 Esta fase cumple una función estratégica dentro del ciclo de vida, ya que reduce la incertidumbre y previene la improvisación. Una planificación adecuada facilita la coordinación de esfuerzos, optimiza la asignación de recursos y permite anticipar posibles dificultades antes de que se presenten durante la ejecución. Asimismo, fortalece la coherencia entre los objetivos planteados y las actividades que se desarrollarán.
    .caja-tema2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/tema3/6.png', alt='').m-auto
        .col-xl
          p.mb-0 Estructurar la fase de planificación implica organizar sus componentes de manera lógica, garantizando una relación directa entre la necesidad identificada y las acciones propuestas para atenderla. No se trata únicamente de elaborar un cronograma, sino de diseñar una ruta de trabajo fundamentada, viable y alineada con el propósito general del proyecto.
    p.mb-5 En esta fase se consolidan decisiones clave que orientarán las etapas posteriores, tales como la definición de actividades, la estimación de recursos, la asignación de responsabilidades y la determinación de tiempos. De esta manera, la planificación se convierte en el puente entre la formulación conceptual del proyecto y su ejecución concreta. La fase de planificación organiza de manera estructurada los elementos que orientan el desarrollo coherente del proyecto:
    .bg--slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Definición de objetivos
                p La definición de objetivos representa uno de los elementos centrales de la planificación. Los objetivos orientan el desarrollo del proyecto y establecen los resultados concretos que se espera alcanzar. En esta etapa se formulan objetivos específicos que permiten cumplir el propósito general definido en la fase de inicio. Estos deben ser claros, precisos y coherentes con la problemática delimitada. Cada objetivo específico debe responder directamente a una necesidad identificada y contribuir al logro del propósito general. La adecuada formulación de objetivos permite:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Organizar las acciones de manera ordenada.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Facilitar la medición de resultados.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Delimitar responsabilidades.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Evitar ambigüedades en la ejecución.
                p.mb-0 Los objetivos mal definidos pueden generar confusión en las fases posteriores y afectar la coherencia estructural del proyecto.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/8.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Determinación del alcance
                p El alcance establece los límites del proyecto. Determina qué aspectos serán incluidos y cuáles quedarán fuera de la intervención. Esta delimitación es fundamental para evitar que el proyecto se expanda de manera descontrolada o que se generen expectativas irreales. Definir el alcance implica precisar:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Qué actividades se desarrollarán.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Qué resultados se esperan obtener.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Cuáles son los límites temporales y geográficos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Qué recursos estarán disponibles.
                p.mb-0 Una determinación clara del alcance permite mantener el enfoque del proyecto y facilita la asignación adecuada de recursos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/9.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Identificación de actividades
                p Las actividades constituyen las acciones concretas que permiten alcanzar los objetivos definidos. En esta etapa se organizan de manera secuencial, estableciendo el orden lógico en el que deberán ejecutarse. La identificación de actividades debe ser detallada y coherente con los objetivos planteados. Cada actividad debe contribuir directamente al cumplimiento de un objetivo específico.
                p Además, la organización secuencial de actividades permite construir un cronograma que facilite el seguimiento posterior del proyecto. La claridad en la identificación de actividades contribuye a:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Asignar responsabilidades.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Estimar tiempos realistas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Determinar recursos necesarios.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Facilitar el control del avance.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/10.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Estimación de recursos
                p Todo proyecto requiere recursos para su desarrollo. En la fase de planificación se identifican y estiman los recursos necesarios, que pueden clasificarse en:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Recursos humanos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Recursos técnicos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Recursos materiales.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Recursos financieros.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Recursos informativos.
                p.mb-0 La estimación adecuada de recursos permite garantizar que el proyecto sea viable. Subestimar los recursos puede generar dificultades durante la ejecución, mientras que sobreestimarlos puede afectar la organización del proyecto. La identificación precisa de recursos constituye un requerimiento indispensable para avanzar hacia la ejecución.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/11.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Identificación de riesgos
                p Todo proyecto está expuesto a situaciones que pueden afectar su desarrollo. La identificación de riesgos en la fase de planificación permite anticipar posibles dificultades y establecer estrategias preventivas. Los riesgos pueden estar relacionados con:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Limitaciones presupuestales.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Falta de recursos humanos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Condiciones externas imprevistas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Cambios en el entorno organizacional.
                p.mb-0 Reconocer estos riesgos no significa detener el proyecto, sino fortalecer su estructuración mediante la previsión y la planificación de alternativas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/12.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Requerimientos indispensables en la fase de planificación
                p Para que la planificación sea coherente y funcional, es necesario contar con ciertos requerimientos básicos:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Objetivos claramente formulados.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Alcance definido y delimitado.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Actividades organizadas secuencialmente.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Recursos identificados y disponibles.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Estimación realista de tiempos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Identificación preliminar de riesgos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Criterios básicos para medir resultados.
                p.mb-0 Estos requerimientos permiten que la fase de ejecución se desarrolle con orden y coherencia. La ausencia de alguno de estos elementos puede generar improvisación y afectar el cumplimiento del propósito general.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/13.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3. Fase de ejecución
    .row.align-items-center.justify-content-center.mb-5
      .col-lg.mb-3.mb-lg-0
        .caja-tema1-2.mb-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/tema3/14.png', alt='').m-auto
            .col-xl
              p.mb-0 La fase de ejecución corresponde al momento en el que el proyecto transita de la planificación a la acción concreta. En esta etapa se desarrollan las actividades previamente organizadas, se emplean los recursos identificados y se materializan las decisiones adoptadas en fases anteriores. La ejecución representa la puesta en marcha del proyecto y la concreción operativa de su estructura.
        p.mb-0 Desde la perspectiva de la estructuración, la ejecución no constituye un proceso improvisado, sino el resultado directo de una formulación clara y de una planificación detallada. La calidad de esta fase depende de la solidez alcanzada en el inicio y de la precisión lograda durante la planificación. Cuando las fases previas han sido estructuradas adecuadamente, la ejecución se desarrolla con mayor coherencia y menor nivel de incertidumbre.
      .col-lg-auto.mb-3.mb-lg-0.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/15.png', alt='').m-auto
    p.mb-5 Ejecutar no significa únicamente realizar actividades, sino desarrollarlas de manera coordinada, organizada y orientada al logro del propósito general del proyecto. Desarrollan las actividades planificadas mediante el uso organizado de recursos y la coordinación de acciones, garantizando coherencia entre la formulación y la materialización del proyecto:
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Implementación de actividades")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema3/16.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Implementación de actividades
            p La implementación de actividades implica llevar a cabo las acciones definidas en el cronograma. Cada actividad debe desarrollarse conforme a los objetivos específicos establecidos en la fase de planificación. La ejecución de actividades debe responder a criterios de orden y coherencia. No se trata simplemente de cumplir tareas, sino de asegurar que cada acción contribuya al cumplimiento del propósito general. Durante esta etapa es fundamental:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Seguir la secuencia establecida.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Respetar los tiempos definidos.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Documentar avances.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Verificar que las actividades se desarrollen conforme a lo planificado.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | La implementación organizada permite que el proyecto avance de manera progresiva y estructurada.
      .py-3.py-md-4(titulo="Uso de recursos")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema3/17.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Uso de recursos
            p En la fase de ejecución se emplean los recursos previamente identificados. Estos pueden ser humanos, técnicos, materiales o financieros. El uso adecuado de los recursos garantiza la organización del proyecto y evita desperdicios o desarticulaciones. La administración responsable de recursos implica:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Asignar funciones claras al equipo de trabajo.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Garantizar disponibilidad de materiales y herramientas.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Controlar el uso del presupuesto.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Optimizar tiempos y esfuerzos.
            p.mb-0 La correcta utilización de recursos constituye un elemento clave para asegurar que el proyecto avance sin interrupciones significativas.
      .py-3.py-md-4(titulo="Coordinación de acciones")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema3/18.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Coordinación de acciones
            p La coordinación representa un elemento estructural esencial en la ejecución. Las actividades no deben desarrollarse de manera aislada, sino de forma articulada. La comunicación entre los responsables y la claridad en las funciones favorecen la coherencia del proceso. Una adecuada coordinación permite:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Evitar duplicidad de esfuerzos.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Resolver dificultades de manera oportuna.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Garantizar coherencia entre actividades.
            p.mb-0 La ejecución requiere liderazgo organizacional que permita integrar las acciones individuales en un proceso colectivo orientado al propósito general.
      .py-3.py-md-4(titulo="Relación entre formulación y ejecución")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema3/19.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Relación entre formulación y ejecución
            p La ejecución es el reflejo de la formulación. Todo lo estructurado en las fases de inicio y planificación se concreta en esta etapa. Si la formulación fue clara y coherente, la ejecución tendrá mayores posibilidades de desarrollarse con orden. Existe una relación directa entre:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | La claridad del propósito y la orientación de las acciones.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | La precisión de los objetivos y la solidez de las actividades.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | La identificación de recursos y la disponibilidad operativa.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | La delimitación del alcance y la estabilidad del proyecto.
            p.mb-0 Cuando la formulación presenta vacíos conceptuales, la ejecución puede enfrentar dificultades como retrasos, desorganización o desviaciones del propósito. Por ello, la ejecución no debe entenderse como una fase independiente, sino como la materialización de una estructura previamente definida.
      .py-3.py-md-4(titulo="Requerimientos indispensables en la fase de ejecución")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema3/20.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Requerimientos indispensables en la fase de ejecución
            p Para que la ejecución se desarrolle adecuadamente, es necesario contar con ciertos requerimientos fundamentales:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Disponibilidad real de los recursos identificados.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Asignación clara de responsabilidades.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Cronograma definido y accesible.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Comunicación efectiva entre los actores involucrados.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Documentación continua del avance.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Supervisión periódica del desarrollo de actividades.
            p.mb-0  Estos requerimientos permiten mantener el orden y la coherencia durante el desarrollo del proyecto.
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4. Fase de control
    p.mb-5 La fase de control constituye el proceso mediante el cual se supervisa y verifica el desarrollo del proyecto. Aunque en la representación del ciclo de vida se ubica después de la ejecución, no debe entenderse como una etapa aislada o posterior, sino como un proceso transversal que acompaña de manera paralela la implementación de las actividades.
    .caja-tema1-3.cambio-color-2.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.col-md-2(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema3/21.svg', alt='' style="width: 85px").m-auto
        .col-xl.col-md-10.espacio___movil_3
          p.mb-0 Controlar un proyecto implica comparar lo planificado con lo ejecutado, identificar desviaciones y aplicar ajustes cuando sea necesario. Esta dinámica garantiza que el proyecto avance conforme a los objetivos establecidos y que los recursos se utilicen de manera eficiente y responsable.
    p.mb-5 Desde la perspectiva de la estructuración, la fase de control refuerza la importancia de haber definido previamente objetivos claros, actividades organizadas y criterios de medición precisos. Sin estos elementos, el seguimiento carecería de fundamento técnico y perdería coherencia metodológica. El control cumple, por tanto, una función reguladora dentro del ciclo de vida, ya que permite mantener la alineación entre propósito, planificación y ejecución.
    .row.align-items-center.mb-5
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema3/22.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Seguimiento del proyecto").ajuste-cajaAcordion
            p El seguimiento consiste en monitorear de manera constante el avance de las actividades. Este proceso permite verificar si las tareas se desarrollan según el cronograma establecido y si los resultados parciales corresponden a lo esperado. El seguimiento puede incluir:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Revisión periódica de avances.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Registro de actividades completadas.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Verificación del uso de recursos.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Comunicación con los responsables.
            p.mb-3 La continuidad en el seguimiento permite detectar dificultades en etapas tempranas y aplicar soluciones oportunas. Un seguimiento adecuado fortalece la coherencia estructural del proyecto, ya que permite mantener alineación entre las fases y el propósito general.
          .row(titulo="Comparación entre lo planificado y lo ejecutado").ajuste-cajaAcordion
            p Uno de los elementos centrales del control es la comparación sistemática entre lo planificado y lo ejecutado. Esta comparación permite determinar si el proyecto avanza conforme a lo previsto o si existen diferencias significativas que requieren atención. La comparación puede centrarse en aspectos como:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Cumplimiento de tiempos.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Uso de recursos presupuestados.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Desarrollo de actividades programadas.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Avance hacia los objetivos específicos.
            p.mb-3 Esta evaluación fortalece la capacidad de análisis y contribuye a mantener la coherencia entre planificación y ejecución.
          .row(titulo="Indicadores básicos").ajuste-cajaAcordion
            p Los indicadores constituyen herramientas que permiten medir el avance del proyecto. Son criterios definidos en la fase de planificación que facilitan la evaluación objetiva del cumplimiento de los objetivos. Un indicador puede estar relacionado con:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Porcentaje de actividades completadas.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Cumplimiento del cronograma.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Nivel de ejecución presupuestal.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Grado de avance hacia resultados específicos.
            p.mb-3 La definición clara de indicadores es un requerimiento indispensable para ejercer control. Sin indicadores previamente establecidos, el seguimiento se basa en apreciaciones subjetivas y pierde precisión.
    .row.align-items-center.mb-0
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="Ajustes y correcciones").ajuste-cajaAcordion
            p Cuando el seguimiento evidencia desviaciones respecto a lo planificado, es necesario aplicar ajustes y correcciones. Estas acciones permiten reorientar el proyecto hacia el cumplimiento del propósito general. Los ajustes pueden incluir:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Reorganización de actividades.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Redistribución de recursos.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Modificación de tiempos.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Revisión de responsabilidades.
            p.mb-3 La aplicación oportuna de ajustes fortalece la capacidad de adaptación del proyecto y evita que pequeñas desviaciones se conviertan en dificultades mayores.
          .row(titulo="Requerimientos indispensables en la fase de control").ajuste-cajaAcordion
            p Para que la fase de control sea consistente, es necesario contar con:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Objetivos claramente definidos.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Actividades organizadas y documentadas.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Indicadores previamente establecidos.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Registros actualizados del avance.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Responsables designados para el seguimiento.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Criterios claros de evaluación.
            p.mb-3 Estos requerimientos garantizan que el control se ejerza con fundamento y coherencia.
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema3/23.png", alt="" ).m-auto
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5. Fase de cierre
    p.mb-5 La fase de cierre corresponde a la etapa final del ciclo de vida del proyecto. En este momento se formaliza la conclusión de las actividades desarrolladas y se realiza una evaluación integral de los resultados obtenidos. El cierre no constituye un simple trámite administrativo, sino un proceso estructurado que permite verificar el cumplimiento del propósito definido desde la fase de inicio.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Esta fase consolida el trabajo realizado en las etapas anteriores y permite determinar si el proyecto respondió de manera efectiva a la necesidad identificada. Asimismo, garantiza que el proceso finalice de forma organizada, evitando actividades inconclusas o responsabilidades sin definir.
    p.mb-5 Desde la perspectiva de la estructuración, el cierre confirma que las fases del proyecto fueron articuladas de manera coherente y que los requerimientos identificados en cada etapa fueron atendidos adecuadamente. Su desarrollo fortalece la responsabilidad profesional y la trazabilidad del proceso, permite: 
    .bg--slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Validación de resultados
                p La validación de resultados implica verificar que los objetivos planteados hayan sido alcanzados. Este proceso requiere comparar los resultados obtenidos con los objetivos específicos y el propósito general definidos en la planificación. La validación puede incluir:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Revisión de evidencias documentales.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Evaluación del cumplimiento de indicadores.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Análisis de productos entregados.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Confirmación de satisfacción de los actores involucrados.
                p.mb-0 Validar los resultados permite determinar si el proyecto cumplió con la solución propuesta para la necesidad inicial.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/25.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Evaluación del cumplimiento del propósito
                p El propósito general del proyecto representa el eje articulador de todas las fases. En el cierre, se analiza si dicho propósito fue alcanzado de manera total o parcial. Esta evaluación implica reflexionar sobre:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | La coherencia entre lo planificado y lo ejecutado.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | La solidez de las actividades desarrolladas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | El impacto generado en el contexto profesional.
                p.mb-0 Evaluar el cumplimiento del propósito fortalece la capacidad de análisis crítico y permite identificar oportunidades de mejora para futuros proyectos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/26.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Documentación de aprendizajes
                p El cierre también incluye la documentación de aprendizajes obtenidos durante el desarrollo del proyecto. Esta documentación constituye un recurso valioso que permite:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Registrar experiencias exitosas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Identificar dificultades enfrentadas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Reconocer estrategias que funcionaron adecuadamente.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Fortalecer procesos futuros.
                p.mb-0 La sistematización de aprendizajes contribuye a la mejora continua y favorece la transferencia de conocimiento dentro del contexto profesional.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/27.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Requerimientos indispensables en la fase de cierre
                p Para que la fase de cierre sea consistente, es necesario contar con:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Objetivos claramente definidos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Actividades organizadas y documentadas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Indicadores previamente establecidos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Registros actualizados del avance.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Responsables designados para el seguimiento.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Criterios claros de evaluación.
                p.mb-0 Estos requerimientos garantizan que el cierre se desarrolle con fundamento y coherencia, asegurando la consolidación de los resultados obtenidos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/28.png', alt='' style="max-width: 500px").m-auto
</template>

<script>
export default {
  name: 'Tema3',
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
