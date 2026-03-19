<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Cuestionario sobre estructuración de fases y requerimientos del proyecto',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar el ciclo de vida del proyecto, la estructuración de sus fases y la identificación de los requerimientos indispensables en cada una para garantizar el cumplimiento del propósito general.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿En qué fase del proyecto se identifica la necesidad que da origen a la propuesta?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Planificación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Control.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cierre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿En cuál fase se definen objetivos, actividades y recursos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Planificación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cierre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Control.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el propósito principal de la fase de ejecución dentro del proyecto?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Implementar las actividades planificadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Identificar la necesidad inicial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Validar los resultados finales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Formular el alcance del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'Comparar lo planificado con lo ejecutado permite:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Formular el propósito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Delimitar el problema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aplicar control.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Identificar la muestra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿En qué momento se evalúa si el proyecto cumplió con el propósito planteado?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Durante la fase de inicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'En la fase de cierre.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'En la fase de planificación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En la fase de ejecución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de los siguientes es un requerimiento propio de la fase de planificación?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Validación final de resultados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Objetivos claramente definidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Entrega formal del informe.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cierre administrativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'Delimitar el problema permite principalmente:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar la ejecución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Enfocar el proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aplicar indicadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cerrar actividades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Las actividades del proyecto deben estar directamente relacionadas con:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El cronograma.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los objetivos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El cierre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'Una variable cualitativa se caracteriza por:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Expresar cantidades medibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Representar valores numéricos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Indicar tiempos de ejecución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Describir cualidades o categorías.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'La coherencia estructural del proyecto se garantiza cuando:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se eliminan fases innecesarias',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se improvisan actividades',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se identifican requerimientos en cada fase',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se omite el control',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es la finalidad principal de los requerimientos dentro del proyecto?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Garantizar condiciones necesarias para cada fase.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar los objetivos específicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad identificada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la duración del cronograma.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿En qué fase del proyecto se establecen indicadores para medir el avance?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Planificación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ejecución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cierre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La organización secuencial de actividades permite principalmente:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la necesidad del control.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar duplicidad de esfuerzos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la claridad del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fragmentar el propósito general.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué elemento es indispensable para ejercer un control adecuado del proyecto?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Documentación final únicamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminación de actividades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Indicadores previamente definidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Supresión del cronograma.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'La delimitación clara del problema permite principalmente:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ampliar indefinidamente el alcance.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la fase de planificación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Omitir el análisis del contexto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Enfocar el proyecto en la situación prioritaria.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Las actividades del proyecto deben estar directamente relacionadas con:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los objetivos definidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El presupuesto disponible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El cronograma establecido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El informe de cierre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Los requerimientos funcionales se relacionan principalmente con:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las condiciones externas del entorno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La evaluación final del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las actividades y tareas del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La documentación del cierre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: 'El análisis del contexto en la fase de inicio permite:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar actividades inmediatamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cerrar el proyecto anticipadamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad identificada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comprender las condiciones del entorno.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'La aplicación de ajustes durante la fase de control tiene como finalidad:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la documentación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reorientar el proyecto hacia el propósito.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Desarticular la planificación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Omitir la evaluación final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿En qué fase del proyecto se documentan los aprendizajes obtenidos durante su desarrollo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cierre.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Planificación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ejecución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
