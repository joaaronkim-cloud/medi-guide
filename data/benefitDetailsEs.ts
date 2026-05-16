/**
 * data/benefitDetailsEs.ts
 *
 * Spanish translations of all quiz result detail panels.
 * Keyed by the same `key` values used in benefitDetails.ts and FindMyBenefitsQuiz.tsx.
 * Import alongside BENEFIT_DETAILS and select by language at render time.
 *
 * Phone numbers are kept in English (they are the same in any language).
 * Sources: DHCS, Covered California, VA.gov, SSA.gov, CDSS — verified May 2026.
 */

import type { BenefitDetail } from "./benefitDetails";

export const BENEFIT_DETAILS_ES: Record<string, BenefitDetail> = {

  // ── Medi-Cal (income-driven) ───────────────────────────────────────────────

  "medi-cal-income": {
    longDescription:
      "Medi-Cal es el programa de seguro médico gratuito de California para personas con bajos ingresos. En 2026, un adulto soltero califica si el ingreso del hogar es de $22,025 al año o menos (138% del nivel federal de pobreza). Los hogares más grandes califican con ingresos más altos — una familia de 4 puede ganar hasta aproximadamente $55,500 y aún calificar. No hay prima mensual, sin deducible para la mayoría de los servicios, y sin costo para solicitar. La cobertura es completa: visitas médicas, atención hospitalaria, salud mental, medicamentos, dental, visión, análisis de laboratorio y atención preventiva. Puedes solicitar cualquier día del año — Medi-Cal no tiene período de inscripción abierta. La mayoría de las solicitudes se procesan en 45 días, pero la Elegibilidad Presuntiva puede darte cobertura temporal el mismo día al visitar una clínica participante.",
    documents: {
      required: [
        "Identificación con foto del gobierno — licencia de conducir, tarjeta de identificación estatal o pasaporte. Si no tienes ninguna, un certificado de nacimiento más un segundo documento (factura de servicios públicos, estado de cuenta bancario) puede sustituirla.",
        "Comprobante de residencia en California — una factura de servicios públicos, contrato de arrendamiento, estado de cuenta bancario, o una carta fechada de un refugio o de alguien con quien vives, con dirección de California.",
        "Número de Seguro Social (SSN) — tu tarjeta de Seguro Social, un W-2 o un talón de pago que muestre tu SSN completo. Si no tienes SSN, aún puedes solicitar; no es obligatorio para todas las categorías de elegibilidad.",
        "Comprobante de ingresos actuales — los últimos dos talones de pago, tu W-2 más reciente, o una carta de tu empleador con tu salario. Si trabajas por cuenta propia, un estado de pérdidas y ganancias o registros bancarios funcionan. Si no tienes ingresos, se acepta una autodeclaración firmada.",
      ],
      helpful: [
        "Documentos de inmigración (tarjeta verde, visa, Documento de Autorización de Empleo) si los tienes y no eres ciudadano/a — agiliza la verificación.",
        "Certificados de nacimiento de cualquier niño en tu hogar por el que estés solicitando.",
        "Cualquier tarjeta de seguro médico existente — Medi-Cal se coordina con otra cobertura.",
      ],
      notes:
        "Puedes comenzar tu solicitud de BenefitsCal sin todos los documentos. Envía lo que tengas y se te dará tiempo para proporcionar el resto. No esperes a solicitar solo porque no tienes todo listo.",
    },
    howToApply: {
      steps: [
        "Ve a BenefitsCal.com y crea una cuenta gratuita, o comienza una solicitud como invitado — no se requiere cuenta para empezar.",
        "Selecciona 'Medi-Cal' cuando se te pregunte para qué programas estás solicitando.",
        "Completa la solicitud en línea (aproximadamente 20–30 minutos). Puedes guardar tu progreso y regresar.",
        "Sube o envía por correo cualquier documento que BenefitsCal solicite después de enviar tu solicitud.",
        "Espera una carta de tu condado con la decisión de elegibilidad — generalmente en un plazo de 45 días.",
        "Una vez aprobado, recibirás una tarjeta de identificación de Medi-Cal e información sobre cómo elegir un plan de atención administrada en tu condado.",
      ],
      phone: "Línea de ayuda de BenefitsCal: 1-877-847-3663 (lunes a viernes)",
      timeframe:
        "Hasta 45 días para una decisión. La cobertura de emergencia o presuntiva puede comenzar el mismo día en un proveedor participante.",
    },
    goodToKnow: [
      "No puedes ser rechazado de Medi-Cal por no tener una dirección permanente. Una dirección de refugio, la dirección de un amigo, o una declaración de que estás en California y tienes intención de quedarte es suficiente.",
      "Medi-Cal es retroactivo — si eres aprobado, tu cobertura puede retroceder al primer día del mes en que solicitaste, por lo que las facturas existentes de ese período pueden estar cubiertas.",
      "Solicitar Medi-Cal NO afecta negativamente tu caso de inmigración para la gran mayoría de los solicitantes. El Medi-Cal de Emergencia y los programas para niños están completamente excluidos de las reglas de 'carga pública'.",
    ],
  },

  // ── Covered California — subsidios disponibles ─────────────────────────────

  "covered-ca-subsidy": {
    longDescription:
      "Covered California es el mercado de seguros médicos de California donde puedes comparar e inscribirte en planes de salud privados de las principales aseguradoras. Si tus ingresos están entre el 138% y el 400% del nivel federal de pobreza ($22,025–$63,840 para un adulto soltero en 2026), probablemente seas elegible para Créditos Fiscales de Primas federales que reducen tu prima mensual. Los subsidios estatales de California también están disponibles para ingresos de hasta el 165% FPL (aproximadamente $26,300 para una persona). Los planes se agrupan en niveles — Bronce, Plata, Oro y Platino — con diferentes compensaciones de prima y gastos de bolsillo. Importante para 2026: los subsidios mejorados del IRA/ARPA que estuvieron vigentes en 2021–2025 han vencido, por lo que las primas son en promedio más altas que en años recientes. Usa la herramienta Compara y Ahorra antes de inscribirte para ver tu costo mensual real estimado con subsidios aplicados.",
    documents: {
      required: [
        "Identificación con foto del gobierno para cada persona que solicita — licencia de conducir, tarjeta de identificación estatal o pasaporte.",
        "Número de Seguro Social para cada miembro del hogar que solicita. Los miembros que no solicitan (por ejemplo, miembros indocumentados del hogar) no necesitan proporcionar un SSN.",
        "Comprobante de residencia en California — factura de servicios públicos, estado de cuenta bancario, contrato de arrendamiento o correspondencia gubernamental con tu nombre y dirección.",
        "Comprobante de ingresos del hogar — tu declaración de impuestos federal más reciente (Formulario 1040) es lo ideal. También son aceptables: W-2 y formularios 1099 recientes, los últimos 2 talones de pago, o una carta de tu empleador. Si trabajas por cuenta propia: registros recientes de ganancias/pérdidas o el Anexo C de tu declaración de impuestos.",
      ],
      helpful: [
        "Información sobre cualquier cobertura médica del empleador que se te ofrezca actualmente — afecta la elegibilidad para subsidios.",
        "Documentos de inmigración para no ciudadanos (tarjeta verde, visa, Documento de Autorización de Empleo) — para confirmar la presencia legal.",
        "Información actual del seguro médico si estás terminando otro plan.",
      ],
      notes:
        "Covered California generalmente verifica los ingresos electrónicamente usando datos del IRS. Los documentos solo se solicitan si hay una discrepancia. Tienes 90 días después de la inscripción para enviar cualquier documento solicitado.",
    },
    howToApply: {
      steps: [
        "Ve a CoveredCA.com y haz clic en 'Solicitar ahora', o llama al 1-800-300-1506 para solicitar por teléfono.",
        "Crea una cuenta de Covered California para guardar tu solicitud.",
        "Ingresa la información de tu hogar y tus ingresos. El sistema calculará automáticamente tus subsidios estimados.",
        "Usa la herramienta Compara y Ahorra para ver los planes y tu prima mensual subsidiada antes de comprometerte.",
        "Selecciona un plan y completa la inscripción. Ten en cuenta tu fecha de vigencia — la cobertura generalmente comienza el primero del mes siguiente.",
        "Paga tu primera prima mensual directamente a la compañía de seguros para activar la cobertura.",
      ],
      phone: "Covered California: 1-800-300-1506 (español disponible). Consejeros de inscripción gratuitos: CoveredCA.com.",
      timeframe:
        "Inscripción abierta: 1 de noviembre – 31 de enero de cada año. Fuera de esa fecha, necesitas un evento de vida calificado para un Período de Inscripción Especial de 60 días. La cobertura comienza el 1° del mes después de la inscripción.",
    },
    goodToKnow: [
      "Si Covered California determina que tus ingresos califican para Medi-Cal, enviará automáticamente tu solicitud a Medi-Cal — no tienes que empezar de nuevo.",
      "Si tus ingresos están entre $20,000 y $22,025 (cerca del límite de Medi-Cal), puede que califiques para Medi-Cal gratuito en lugar de Covered CA. Verifica en BenefitsCal.com — Medi-Cal es $0 de prima.",
      "Los Consejeros de Inscripción Certificados gratuitos (también llamados Navegadores) pueden ayudarte a comparar planes e inscribirte sin costo alguno. Encuéntralos en CoveredCA.com.",
      "Las Reducciones de Participación en Costos (CSR) solo están disponibles en planes Plata — si tus ingresos están entre el 138% y el 250% FPL, elige un plan Plata para obtener deducibles y copagos mucho más bajos.",
    ],
  },

  // ── Covered California — por encima del límite de subsidio ─────────────────

  "covered-ca-cliff": {
    longDescription:
      "Los planes del mercado de Covered California están disponibles para todos los californianos sin importar sus ingresos, pero los Créditos Fiscales de Primas federales terminan al 400% del nivel federal de pobreza — aproximadamente $63,840 al año para un adulto soltero en 2026. Los hogares más grandes califican con ingresos más altos porque el nivel de pobreza escala con el tamaño de la familia (por ejemplo, una familia de 4 puede ganar hasta aproximadamente $131,000 antes de alcanzar el límite del 400% FPL). Por encima de este umbral, pagas la prima completa sin subsidio. Los planes sin subsidio de Covered California aún pueden ser competitivos con los planes del empleador o del mercado individual debido a las protecciones al consumidor de California y la amplitud de la red estatal. Usa la herramienta Compara y Ahorra para evaluar los costos antes de decidir.",
    documents: {
      required: [
        "Identificación con foto del gobierno para cada persona que solicita.",
        "Número de Seguro Social para cada miembro del hogar que solicita.",
        "Comprobante de residencia en California — factura de servicios públicos, estado de cuenta bancario, contrato de arrendamiento o correspondencia gubernamental.",
        "Comprobante de ingresos del hogar — declaración de impuestos (Formulario 1040), W-2 y 1099, o talones de pago recientes. La verificación de ingresos aún se requiere para confirmar la inelegibilidad para subsidios.",
      ],
      helpful: [
        "Información sobre cualquier cobertura de salud patrocinada por el empleador disponible para ti.",
        "Información de la póliza de seguro médico actual si estás cambiando de plan.",
      ],
      notes:
        "Incluso sin subsidios, puedes solicitar a través de Covered California o directamente a través de cualquier aseguradora con licencia en California. Covered California ofrece cobertura garantizada — las aseguradoras no pueden negarte por una condición preexistente.",
    },
    howToApply: {
      steps: [
        "Ve a CoveredCA.com/compara para ver los planes y sus costos completos sin subsidio por condado y edad.",
        "Solicita directamente en CoveredCA.com o llama al 1-800-300-1506 para confirmar tu estado de subsidio antes de inscribirte.",
        "Alternativamente, contacta a un corredor de seguros de salud con licencia — muchos se especializan en planes de Covered California sin costo adicional para ti.",
        "Compara los planes sin subsidio de Covered California con el plan de tu empleador (si está disponible) usando el mismo marco de costo de bolsillo.",
        "Selecciona tu plan y paga la primera prima para activar la cobertura.",
      ],
      phone: "Covered California: 1-800-300-1506. Corredores con licencia gratuitos: CoveredCA.com.",
      timeframe: "Inscripción abierta: 1 de noviembre – 31 de enero. Inscripción especial con evento calificado: 60 días.",
    },
    goodToKnow: [
      "Las familias aún pueden calificar para subsidios con ingresos mucho más altos que un adulto soltero, porque el 400% FPL escala con el tamaño del hogar.",
      "El límite de subsidio es un corte fijo — ganar $1 por encima del 400% FPL elimina todos los subsidios federales. Si tus ingresos fluctúan cerca de este umbral, habla con un consejero de inscripción certificado.",
      "Los niños en hogares que ganan por encima del límite de Medi-Cal para adultos aún pueden calificar para Medi-Cal o CHIP con umbrales mucho más altos. Solicita para los niños por separado en BenefitsCal.com.",
    ],
  },

  // ── Niños y adolescentes ───────────────────────────────────────────────────

  "age-kids": {
    longDescription:
      "California ofrece cobertura de salud completa para niños y adolescentes a través de Medi-Cal y el Programa de Seguro Médico para Niños (CHIP). Los niños califican con niveles de ingresos mucho más altos que los adultos — una familia de 4 personas que gana hasta aproximadamente $78,000 al año puede aún calificar para cobertura gratuita o de bajo costo para sus hijos. La cobertura es completa: visitas de bienestar infantil, vacunas, dental, visión, salud mental, atención especializada y medicamentos. Los niños pueden inscribirse independientemente de su estatus migratorio — el estatus ciudadano o de documentación del niño no importa. Los recién nacidos de padres con Medi-Cal se inscriben automáticamente durante su primer año. Si un niño no califica para Medi-Cal, puede calificar para el Programa de Iniciativa de Salud para Niños del Condado (C-CHIP) en condados seleccionados, o para un plan familiar subsidiado de Covered California.",
    documents: {
      required: [
        "Certificado de nacimiento del niño o comprobante de edad (también se aceptan registros de alta hospitalaria, registros bautismales o registros escolares).",
        "Identificación con foto del padre, madre o tutor.",
        "Comprobante de residencia en California para el hogar — factura de servicios públicos, contrato de arrendamiento, estado de cuenta bancario o correspondencia gubernamental.",
        "Comprobante de ingresos del hogar — los últimos dos talones de pago, W-2 más reciente o carta del empleador. Si trabajas por cuenta propia, un estado de ganancias/pérdidas.",
      ],
      helpful: [
        "Número de Seguro Social del niño si lo tiene (no es obligatorio para niños indocumentados).",
        "Documentos de tutela legal si el solicitante no es el padre o madre del niño (orden judicial, poder notarial).",
        "Cualquier tarjeta de seguro médico existente del niño.",
      ],
      notes:
        "Puedes solicitar para tu hijo sin proporcionar el SSN del niño si no lo tiene. La cobertura no puede negarse por el estatus migratorio del niño.",
    },
    howToApply: {
      steps: [
        "Solicita en línea en BenefitsCal.com — selecciona Medi-Cal e incluye a todos los niños de tu hogar en la solicitud.",
        "O solicita a través de CoveredCA.com — si un niño califica para Medi-Cal, el sistema lo dirigirá automáticamente allí.",
        "O llama al 1-877-847-3663 para solicitar por teléfono.",
        "Una vez aprobado, tu hijo recibirá una tarjeta de identificación de Medi-Cal e información sobre cómo elegir un plan de atención administrada.",
        "Para dental: inscribe a tu hijo con un proveedor de Denti-Cal. Para visión: contacta el plan de atención administrada de tu hijo.",
      ],
      phone: "BenefitsCal: 1-877-847-3663. Covered California: 1-800-300-1506.",
      timeframe:
        "Las solicitudes se procesan en 45 días. Los niños pueden calificar para Elegibilidad Presuntiva inmediata en una clínica participante.",
    },
    goodToKnow: [
      "Los niños inscritos en Medi-Cal reciben automáticamente cobertura dental a través de Denti-Cal — asegúrate de encontrar un dentista de Denti-Cal cerca de ti.",
      "Los jóvenes en el sistema de crianza temporal están cubiertos por Medi-Cal hasta los 26 años, independientemente de sus ingresos u otros factores.",
      "Si tu hijo está inscrito en Medi-Cal, también puedes calificar para los beneficios de comida de CalFresh. Pregunta al respecto cuando solicites.",
    ],
  },

  // ── Jóvenes adultos ────────────────────────────────────────────────────────

  "age-young-adults": {
    longDescription:
      "Los jóvenes adultos de 18 a 29 años tienen varias opciones de cobertura en California según sus ingresos, situación y estatus migratorio. Si tus ingresos son de $22,025 al año o menos (persona sola, 2026), probablemente califiques para Medi-Cal gratuito. Si ganas más, puede haber planes de Covered California con subsidios disponibles. Si eres estudiante, verifica si tu escuela ofrece un plan de salud estudiantil. Si estás en el plan de tus padres y vas a cumplir 26 años, tienes un Período de Inscripción Especial de 60 días en Covered California o Medi-Cal después de salir del plan. Los ex jóvenes de crianza temporal están cubiertos por Medi-Cal hasta los 26 años independientemente de sus ingresos. Los jóvenes adultos indocumentados que no están ya inscritos en Medi-Cal deben tener en cuenta la congelación de inscripciones de enero de 2026.",
    documents: {
      required: [
        "Identificación con foto del gobierno — licencia de conducir, tarjeta de identificación estatal o pasaporte. Si acabas de cumplir 18 años y no tienes una, un certificado de nacimiento más un documento adicional funciona.",
        "Número de Seguro Social — tu tarjeta de Seguro Social, un W-2 o un talón de pago que muestre tu SSN completo.",
        "Comprobante de residencia en California — factura de servicios públicos, contrato de arrendamiento, estado de cuenta bancario, carta de asignación de dormitorio o una carta fechada de alguien con quien vives.",
        "Comprobante de ingresos — talones de pago, W-2, declaración de impuestos, carta del empleador, carta de ayuda financiera (para estudiantes) o una declaración firmada propia si no tienes ingresos.",
      ],
      helpful: [
        "Verificación de inscripción estudiantil o documentos de ayuda financiera si eres estudiante universitario.",
        "Documentación de salida del plan de tus padres (requerida para el Período de Inscripción Especial de Covered CA después de cumplir 26 años).",
        "Documentos de inmigración si no eres ciudadano/a estadounidense.",
      ],
      notes:
        "Si no tienes ingresos o estás entre empleos, aún calificas para Medi-Cal — se acepta una declaración propia firmada de no tener ingresos en BenefitsCal.",
    },
    howToApply: {
      steps: [
        "Verifica tus ingresos primero: $22,025 al año o menos → solicita Medi-Cal en BenefitsCal.com. Por encima de eso → compara planes de Covered California.",
        "Para Medi-Cal: ve a BenefitsCal.com o llama al 1-877-847-3663.",
        "Para Covered California: ve a CoveredCA.com o llama al 1-800-300-1506.",
        "Si eres estudiante: verifica el plan de seguro médico estudiantil de tu escuela y compáralo con los costos de Medi-Cal o Covered CA antes de elegir.",
        "Si sales del plan de tus padres al cumplir 26: actúa dentro de los 60 días de tu cumpleaños — ese es tu Período de Inscripción Especial.",
      ],
      phone: "BenefitsCal: 1-877-847-3663. Covered California: 1-800-300-1506.",
      timeframe:
        "Medi-Cal: hasta 45 días. Covered CA: la cobertura comienza el primero del mes después de la inscripción.",
    },
    goodToKnow: [
      "Los ex jóvenes de crianza temporal califican para Medi-Cal hasta los 26 años sin requisitos de ingresos ni documentación — si esto te aplica, solicita de inmediato.",
      "Los trabajadores de la economía colaborativa, los autónomos y los jóvenes que trabajan por cuenta propia califican para los mismos programas — los ingresos independientes cuentan tanto para Medi-Cal como para Covered CA.",
      "Si estás entre empleos o acabas de graduarte, solicita Medi-Cal de inmediato — puedes cambiar a Covered CA o a cobertura del empleador más adelante sin penalización.",
    ],
  },

  // ── Adultos (30–64) ────────────────────────────────────────────────────────

  "age-adults": {
    longDescription:
      "Los adultos de 30 a 64 años en California tienen la gama más amplia de opciones de cobertura. Medi-Cal es gratuito para quienes ganan hasta $22,025 al año (adulto soltero, 2026); una familia de 4 califica con hasta aproximadamente $55,500. Los planes del mercado de Covered California con Créditos Fiscales de Primas federales están disponibles para ingresos de hasta $63,840 (adulto soltero, 400% FPL). Los adultos que perdieron cobertura del empleador tienen un Período de Inscripción Especial de 60 días en Covered California. Los trabajadores independientes y de la economía colaborativa pueden usar Covered California y deducir las primas. Los adultos con discapacidades pueden calificar para Medi-Cal con ingresos más altos a través de vías específicas de discapacidad. Los adultos indocumentados deben tener en cuenta la congelación de inscripciones de enero de 2026.",
    documents: {
      required: [
        "Identificación con foto del gobierno — licencia de conducir, tarjeta de identificación estatal de California o pasaporte.",
        "Número de Seguro Social — tarjeta, W-2 o talón de pago con SSN completo.",
        "Comprobante de residencia en California — factura de servicios públicos, estado de cuenta bancario, contrato de arrendamiento o correspondencia gubernamental con tu nombre y dirección de California.",
        "Comprobante de ingresos — los últimos dos talones de pago, W-2 o 1099 más reciente o declaración de impuestos. Si trabajas por cuenta propia: estado de ganancias/pérdidas o Anexo C. Si no tienes ingresos: una declaración propia firmada.",
      ],
      helpful: [
        "Documentos de inmigración si no eres ciudadano/a estadounidense.",
        "Carta del empleador si se te ofrece seguro de trabajo (necesario para determinar la elegibilidad para subsidios de Covered CA).",
        "Registros médicos o documentación de discapacidad si crees que calificas a través de una vía de discapacidad.",
      ],
      notes:
        "Puedes solicitar Medi-Cal sin todos los documentos. Comienza en BenefitsCal.com y envía lo que tienes — se te dará tiempo para proporcionar el resto.",
    },
    howToApply: {
      steps: [
        "Si los ingresos son de $22,025 al año o menos: solicita Medi-Cal en BenefitsCal.com.",
        "Si los ingresos están por encima de eso: ve a CoveredCA.com para comparar planes con subsidios.",
        "Si recientemente perdiste un empleo: solicita Medi-Cal primero (los ingresos pueden haber caído por debajo del umbral), o inscríbete en Covered CA dentro de tu Período de Inscripción Especial de 60 días.",
        "Si trabajas por cuenta propia: reporta tu ingreso neto del negocio (después de deducciones) — esto puede ser significativamente menor que los ingresos brutos.",
      ],
      phone: "BenefitsCal: 1-877-847-3663. Covered California: 1-800-300-1506.",
      timeframe: "Medi-Cal: hasta 45 días. Covered CA: el primero del mes después de la inscripción.",
    },
    goodToKnow: [
      "Si se te niega Medi-Cal, tienes derecho a apelar (Audiencia Estatal Justa) dentro de los 90 días. Muchas personas que fueron incorrectamente denegadas ganan en la apelación.",
      "La cobertura dental de Medi-Cal para adultos (Denti-Cal) está disponible para adultos inscritos — incluye exámenes, limpiezas, empastes, extracciones y dentaduras postizas.",
      "Si tú y tu cónyuge tienen diferentes niveles de ingresos, cada uno puede calificar para diferentes programas. Soliciten juntos y el sistema determinará el mejor programa para cada persona.",
    ],
  },

  // ── Adultos mayores (65+) ──────────────────────────────────────────────────

  "age-seniors": {
    longDescription:
      "La mayoría de las personas se vuelven elegibles para Medicare a los 65 años. Medicare es el seguro médico federal administrado por la Administración del Seguro Social (SSA). La Parte A cubre hospitalizaciones (la mayoría no paga prima). La Parte B cubre visitas al médico y atención ambulatoria (prima mensual de $185 en 2026). La Parte D cubre medicamentos recetados (plan separado con su propia prima). Muchos adultos mayores de California también califican para Medi-Cal además de Medicare — esto se llama ser 'dualmente elegible'. Medi-Cal puede pagar las primas, deducibles y copagos de Medicare, haciendo la cobertura efectivamente gratuita. HICAP (Programa de Consejería y Defensa del Seguro de Salud) ofrece consejería gratuita e individual de Medicare a todos los residentes de California.",
    documents: {
      required: [
        "Certificado de nacimiento o comprobante de edad — pasaporte, registro de nacimiento hospitalario o registro religioso de nacimiento. Si naciste fuera de los EE.UU., un certificado de naturalización o tarjeta de residente permanente funciona.",
        "Tarjeta del Seguro Social o comprobante de Número de Seguro Social.",
        "Comprobante de ciudadanía estadounidense o presencia legal — certificado de nacimiento, pasaporte de EE.UU., certificado de naturalización o tarjeta verde.",
        "Si solicitas Programas de Ahorros de Medicare: comprobante de ingresos (carta de concesión del Seguro Social, talones de pago, estados de cuenta bancarios) y comprobante de recursos.",
      ],
      helpful: [
        "Tarjeta de Medicare (si ya tienes la Parte A y estás añadiendo la Parte B).",
        "Información actual del seguro médico del empleador (si tienes cobertura del empleador y deseas retrasar la Parte B sin penalización).",
        "Cualquier información de beneficios del VA si eres veterano/a.",
      ],
      notes:
        "Si ya estás recibiendo beneficios de jubilación del Seguro Social cuando cumples 65 años, te inscribirán automáticamente en las Partes A y B de Medicare — tu tarjeta llegará por correo. Solo necesitas solicitar activamente si NO estás recibiendo el Seguro Social.",
    },
    howToApply: {
      steps: [
        "Para Medicare: solicita en SSA.gov, llama al 1-800-772-1213 o visita tu oficina local del Seguro Social. Solicita durante tu Período de Inscripción Inicial de 7 meses (comienza 3 meses antes de tu cumpleaños número 65).",
        "Para Programas de Ahorros de Medicare y/o Medi-Cal: solicita en BenefitsCal.com o llama al 1-877-847-3663 — estos programas pueden cubrir tus primas de Medicare y participación en costos.",
        "Para consejería gratuita de Medicare: llama a HICAP al 1-800-434-0222 o encuentra un consejero local en aging.ca.gov/HICAP.",
        "Para cobertura de medicamentos (Parte D): inscríbete en un plan de medicamentos de Medicare en Medicare.gov/plan-compare durante tu Período de Inscripción Inicial.",
      ],
      phone: "SSA/Medicare: 1-800-772-1213. HICAP (consejería gratuita): 1-800-434-0222. BenefitsCal: 1-877-847-3663.",
      timeframe:
        "Solicita durante el Período de Inscripción Inicial de 7 meses alrededor de tu cumpleaños número 65. La inscripción tardía puede resultar en penalizaciones permanentes de prima por la Parte B y la Parte D.",
    },
    goodToKnow: [
      "Perder tu Período de Inscripción Inicial de Medicare puede resultar en una penalización permanente añadida a tu prima de la Parte B por el resto de tu vida. No esperes.",
      "Si tienes Medi-Cal y Medicare, Medi-Cal puede pagar tu prima de la Parte B ($185 al mes en 2026) a través de los Programas de Ahorros de Medicare — solicita incluso si crees que ganas demasiado.",
      "Los consejeros de HICAP son gratuitos, imparciales y están disponibles en todos los condados de California. Pueden comparar Medicare Advantage versus Medicare Original para tus necesidades específicas.",
      "La Ayuda Extra / Subsidio de Bajos Ingresos (LIS) para costos de medicamentos es automática si tienes tanto Medi-Cal como Medicare. Los copagos están limitados a $12.65 (medicamentos de marca) y $5.10 (genéricos) en 2026.",
    ],
  },

  // ── Embarazo y nuevos padres ───────────────────────────────────────────────

  "pregnancy": {
    longDescription:
      "California ofrece cobertura específica de embarazo de Medi-Cal con un límite de ingresos mucho más alto que el Medi-Cal estándar para adultos — hasta el 213% del nivel federal de pobreza, o aproximadamente $34,000 al año para una persona en 2026. La cobertura incluye toda la atención prenatal, análisis de laboratorio, ultrasonidos, trabajo de parto y parto, y 12 meses de atención postparto. Está disponible para personas embarazadas independientemente de su estatus migratorio. La Elegibilidad Presuntiva para Personas Embarazadas (PE4PP) permite que un proveedor participante te inscriba en Medi-Cal temporal inmediato en tu primera visita prenatal. WIC proporciona beneficios gratuitos de alimentos, asesoramiento nutricional y apoyo para la lactancia para personas embarazadas y en el postparto, y niños menores de 5 años.",
    documents: {
      required: [
        "Comprobante de embarazo — un resultado positivo de prueba de embarazo, una carta de un médico o partera, un registro de atención prenatal o una confirmación hospitalaria. Si aún no tienes documentación, a menudo se acepta una autodeclaración para iniciar el proceso.",
        "Cualquier forma de identificación con foto — licencia de conducir, tarjeta de identificación estatal, pasaporte o Matrícula Consular. Los requisitos son flexibles para la cobertura de embarazo.",
        "Comprobante de residencia en California — factura de servicios públicos, contrato de arrendamiento, estado de cuenta bancario o una carta firmada de alguien con quien vives.",
        "Comprobante de ingresos — talones de pago, W-2, carta del empleador o una declaración propia firmada. El límite de ingresos para el Medi-Cal de embarazo es más alto que el estándar, por lo que muchas personas de ingresos medios califican.",
      ],
      helpful: [
        "Fecha esperada de parto — ayuda al condado a priorizar y acelerar tu solicitud.",
        "Número de Seguro Social si lo tienes (no se requiere para el Medi-Cal de embarazo — el estatus migratorio no afecta la elegibilidad).",
      ],
      notes:
        "El estatus migratorio NO afecta la elegibilidad para el Medi-Cal de embarazo ni para WIC. No necesitas un SSN para solicitar. Las oficinas del condado están obligadas a procesar las solicitudes de embarazo de manera expedita.",
    },
    howToApply: {
      steps: [
        "Ve a BenefitsCal.com y solicita Medi-Cal — indica que estás embarazada. Esto marca tu solicitud para procesamiento acelerado.",
        "O: Ve a cualquier clínica prenatal participante, consultorio de ginecobstetricia o FQHC y pregunta sobre la Elegibilidad Presuntiva. Un proveedor capacitado puede inscribirte en Medi-Cal temporal el mismo día.",
        "Para WIC: Llama al 1-888-942-9675 o visita tu oficina de WIC del condado. Puedes solicitar en cualquier momento durante el embarazo y hasta 6 meses después del nacimiento.",
        "Una vez aprobado el Medi-Cal completo, selecciona un plan de atención administrada que incluya servicios de ginecobstetricia y atención prenatal.",
        "Después de que nazca tu bebé: reporta el nacimiento a tu plan de Medi-Cal dentro de los 30 días para que el recién nacido se inscriba automáticamente.",
      ],
      phone: "BenefitsCal: 1-877-847-3663. WIC: 1-888-942-9675. Covered California: 1-800-300-1506.",
      timeframe:
        "La Elegibilidad Presuntiva puede comenzar el mismo día en una clínica participante. Aprobación completa de Medi-Cal dentro de 45 días; las solicitudes de embarazo generalmente se priorizan.",
    },
    goodToKnow: [
      "Puedes acceder a WIC independientemente de tu estatus de Medi-Cal o inmigración. WIC proporciona beneficios mensuales de alimentos y apoyo nutricional hasta por 5 años para tu hijo.",
      "El Medi-Cal postparto ahora cubre 12 meses completos después del parto en California — no pierdes la cobertura el día después del nacimiento.",
      "Family PACT proporciona servicios gratuitos de planificación familiar para personas actualmente no embarazadas, incluyendo todas las formas de anticonceptivos, sin costo sin importar los ingresos.",
      "Si das a luz y tus ingresos luego te hacen inelegible para Medi-Cal, tu bebé puede seguir inscrito en Medi-Cal durante el primer año independientemente.",
    ],
  },

  // ── Discapacidad ───────────────────────────────────────────────────────────

  "disability": {
    longDescription:
      "California tiene múltiples programas superpuestos para personas con discapacidades. Medi-Cal puede estar disponible con ingresos más altos a través de vías específicas de discapacidad, incluyendo el Programa para Personas con Discapacidad que Trabajan para personas que trabajan y ganan demasiado para el Medi-Cal estándar. IHSS (Servicios de Apoyo en el Hogar) es un beneficio de Medi-Cal que financia a un cuidador pagado — que puede ser un familiar — para ayudar con tareas diarias como cocinar, limpiar, bañarse, manejo de medicamentos y movilidad. SSI (Ingreso de Seguridad Suplementario) proporciona un pago mensual en efectivo a personas de bajos ingresos con una discapacidad calificada, e inscribe automáticamente a los beneficiarios en Medi-Cal en California. Los Centros Regionales sirven a personas con discapacidades del desarrollo (autismo, síndrome de Down, parálisis cerebral y afecciones similares).",
    documents: {
      required: [
        "Para Medi-Cal: documentos estándar de Medi-Cal — identificación con foto, comprobante de residencia en California, comprobante de ingresos y Número de Seguro Social.",
        "Documentación médica de tu discapacidad — una carta de un médico con licencia, psiquiatra u otro proveedor tratante que describa tu diagnóstico, limitaciones funcionales y necesidad de atención. Esencial para las vías de Medi-Cal específicas de discapacidad y IHSS.",
        "Para IHSS específicamente: formulario SOC 873 (Certificación de Atención Médica) — debe ser completado y firmado por un profesional médico con licencia dentro de los 45 días de tu solicitud de IHSS.",
        "Para SSI: certificado de nacimiento o comprobante de edad, tarjeta del Seguro Social, registros médicos que documenten la discapacidad y registros financieros (ingresos y activos).",
      ],
      helpful: [
        "Registros del historial laboral (para la determinación de discapacidad de SSI).",
        "Todos los registros médicos relacionados con tu condición: notas del médico, resultados de pruebas, registros de hospitalización, notas de terapia.",
        "Comprobante de situación de vivienda (contrato de arrendamiento, estado de cuenta de hipoteca) — relevante para la elegibilidad de atención domiciliaria de IHSS.",
      ],
      notes:
        "Debes estar inscrito en Medi-Cal antes de poder solicitar IHSS. Solicita Medi-Cal primero en BenefitsCal.com, luego contacta tu oficina de IHSS del condado. SSI e IHSS son solicitudes separadas.",
    },
    howToApply: {
      steps: [
        "Paso 1 — Solicita Medi-Cal en BenefitsCal.com. Indica tu discapacidad para que el condado pueda evaluar las vías específicas de discapacidad.",
        "Paso 2 — Para IHSS: una vez que tengas Medi-Cal, contacta tu oficina de IHSS del condado (cdss.ca.gov/IHSS) o llama a los servicios sociales de tu condado y pide iniciar una solicitud de IHSS. Un trabajador social visitará tu hogar para evaluar tus necesidades.",
        "Paso 3 — Para SSI: solicita en SSA.gov, llama al 1-800-772-1213 o visita tu oficina local del Seguro Social. Las aprobaciones de SSI pueden tardar 3–6 meses.",
        "Para servicios del Centro Regional: contacta tu centro regional en dds.ca.gov/rc o llama al DDS al 1-916-654-1897.",
      ],
      phone: "BenefitsCal: 1-877-847-3663. SSA/SSI: 1-800-772-1213. IHSS: 1-916-654-2240. Centros Regionales DDS: 1-916-654-1897.",
      timeframe:
        "Medi-Cal: hasta 45 días. Evaluación de IHSS: 30–45 días después de la solicitud. SSI: 3–6 meses (puede ser más rápido para condiciones graves).",
    },
    goodToKnow: [
      "El cuidador de IHSS puede ser un familiar — incluyendo al cónyuge en algunas situaciones. El familiar es pagado directamente por el estado a la tarifa salarial del condado.",
      "El Programa para Personas con Discapacidad que Trabajan permite mantener Medi-Cal incluso cuando el salario normalmente descalificaría — cobra una pequeña prima mensual basada en los ingresos.",
      "Si se te niega tu solicitud de SSI, apela dentro de los 60 días. La mayoría de las reclamaciones exitosas pasan por al menos una apelación.",
      "Medi-Cal cubre servicios de salud conductual incluyendo terapia, psiquiatría y tratamiento del uso de sustancias — no se necesita una solicitud separada para la salud mental.",
    ],
  },

  // ── Inmigración ────────────────────────────────────────────────────────────

  "immigration": {
    longDescription:
      "El panorama de Medi-Cal en California cambió significativamente el 1 de enero de 2026. Los nuevos adultos indocumentados de 19 años o más que no estaban inscritos en Medi-Cal de alcance completo antes de esa fecha ya no pueden inscribirse en cobertura completa. Sin embargo, aún pueden acceder a Medi-Cal de Emergencia, que cubre atención hospitalaria de emergencia, trabajo de parto y parto, diálisis renal de emergencia y servicios agudos similares. Las personas embarazadas de cualquier estatus migratorio siguen cubiertas completamente. Los niños menores de 19 años siguen completamente cubiertos sin importar su estatus migratorio. Las personas que ya estaban inscritas en Medi-Cal antes del 1 de enero de 2026 pueden mantener su cobertura siempre que renueven a tiempo. En familias de estatus mixto, la presencia del miembro no elegible en el hogar no descalifica a los miembros elegibles.",
    documents: {
      required: [
        "Para Medi-Cal de Emergencia: No se requieren documentos para recibir atención de emergencia en cualquier hospital. Las salas de emergencia no pueden rechazarte por falta de documentación.",
        "Para niños (menores de 19): el certificado de nacimiento del niño o comprobante de edad; comprobante de residencia en California; documentación de ingresos del hogar. No se necesita documentación del estatus migratorio para el niño.",
        "Para personas embarazadas: comprobante de embarazo (cualquier registro prenatal, prueba positiva o carta del médico); residencia en California; información de ingresos. No se requieren documentos de inmigración.",
        "Para hogares de estatus mixto que solicitan para miembros elegibles: documentos estándar de Medi-Cal solo para los miembros elegibles — identificación, residencia, ingresos. Los miembros indocumentados del hogar no necesitan proporcionar ninguna documentación.",
      ],
      helpful: [
        "Cualquier documento de inmigración que tengas (tarjeta verde, visa, Documento de Autorización de Empleo, aprobación de DACA, etc.) — pueden ampliar las opciones de elegibilidad.",
        "Si actualmente estás inscrito en Medi-Cal, tu aviso de renovación y tu ID actual de miembro de Medi-Cal.",
      ],
      notes:
        "Solicitar Medi-Cal para miembros familiares elegibles NO pone en riesgo migratorio a los miembros indocumentados del hogar. El Medi-Cal de Emergencia y los programas para niños y personas embarazadas están excluidos de las reglas de 'carga pública'. Para orientación sobre tu situación específica, contacta una organización de ayuda legal.",
    },
    howToApply: {
      steps: [
        "Para niños y personas embarazadas: solicita en BenefitsCal.com — indica la información del niño o de la persona embarazada; los miembros indocumentados del hogar pueden excluirse de la solicitud.",
        "Para Medi-Cal de Emergencia: ve a cualquier sala de emergencias en California. Los hospitales presentarán Medi-Cal de Emergencia en tu nombre después del tratamiento.",
        "Para personas actualmente inscritas en Medi-Cal: completa tu renovación anual cuando recibas el aviso — no lo ignores. Mantén tu dirección actualizada para recibir la carta de renovación.",
        "Para orientación legal: contacta una organización de ayuda legal como Bay Area Legal Aid, Bet Tzedek o CHIRLA. Llama al 2-1-1 para una referencia local.",
      ],
      phone: "BenefitsCal: 1-877-847-3663 (español disponible). Health Consumer Alliance: 1-888-804-3536. CHIRLA: 1-888-624-4752.",
      timeframe:
        "Atención de emergencia: inmediata. Solicitudes para niños y embarazo: procesamiento estándar de Medi-Cal de 45 días.",
    },
    goodToKnow: [
      "La congelación de inscripciones de enero de 2026 afecta solo a los NUEVOS solicitantes. Cualquier persona ya inscrita antes del 1 de enero de 2026 puede mantener su cobertura.",
      "A partir del 1 de julio de 2026, los beneficios dentales para los adultos indocumentados actualmente inscritos en Medi-Cal pasarán a ser solo de emergencia.",
      "A partir del 1 de julio de 2027, se requerirá una prima de $30 al mes para la cobertura completa para ciertos miembros indocumentados que ya están inscritos.",
      "Si estás renovando tu Medi-Cal existente, renovar a tiempo es fundamental — perder la cobertura y volver a solicitar ya no es una opción bajo las reglas de 2026.",
    ],
  },

  // ── Veteranos ──────────────────────────────────────────────────────────────

  "veteran": {
    longDescription:
      "Los veteranos que sirvieron en el ejército de los EE.UU. pueden ser elegibles para la atención médica del VA independientemente de si tienen una discapacidad relacionada con el servicio. La atención médica del VA cubre atención primaria, atención especializada, servicios de salud mental (incluyendo PTSD y tratamiento del uso de sustancias), medicamentos recetados y atención hospitalaria. A los veteranos se les asigna un Grupo de Prioridad (1–8) según el historial de servicio, la calificación de discapacidad y los ingresos — los Grupos de Prioridad 1–6 generalmente reciben atención sin costo. La atención médica del VA puede funcionar junto con Medi-Cal y Medicare — tener beneficios del VA no te descalifica de otros programas. CalVet proporciona servicios específicos para veteranos de California, incluyendo asistencia financiera, apoyo de vivienda y beneficios educativos.",
    documents: {
      required: [
        "DD-214 (Certificado de Liberación o Baja del Servicio Activo) — el documento más importante. Si lo has perdido, solicita un reemplazo en mil.connect.osd.mil o llama a los Archivos Nacionales al 1-314-801-0800.",
        "Tarjeta del Seguro Social o comprobante de Número de Seguro Social.",
        "Identificación con foto del gobierno — licencia de conducir, tarjeta de identificación estatal o identificación militar.",
        "Información financiera del año anterior — ingresos de todas las fuentes, para determinar tu Grupo de Prioridad y cualquier requisito de copago.",
      ],
      helpful: [
        "Registros médicos que documenten cualquier condición o lesión relacionada con el servicio.",
        "Tarjetas de seguro de cualquier otra cobertura que tengas (Medicare, Medi-Cal, seguro privado) — el VA se coordina con otros pagadores.",
        "Certificado de matrimonio si solicitas beneficios que incluyan dependientes.",
      ],
      notes:
        "Si no tienes tu DD-214, aún puedes iniciar la inscripción. El VA te ayudará a solicitar tus registros. No dejes que la falta de un DD-214 te impida comenzar el proceso.",
    },
    howToApply: {
      steps: [
        "Solicita en línea en VA.gov/health-care/apply — completa el Formulario 10-10EZ del VA. Esto generalmente toma aproximadamente 30 minutos.",
        "O llama al 1-800-827-1000 (lunes a viernes, 8 a.m. – 9 p.m. hora del Este) para solicitar por teléfono.",
        "O visita tu centro médico del VA más cercano o clínica de atención ambulatoria comunitaria (CBOC) y solicita en persona.",
        "Para ayuda específica de California: llama a CalVet al 1-844-CAL-VETS (1-844-225-8387).",
        "Después de solicitar, recibirás una asignación de Grupo de Prioridad e información sobre tu instalación del VA local.",
      ],
      phone: "VA: 1-800-827-1000. CalVet: 1-844-CAL-VETS. Archivos Nacionales (DD-214): 1-314-801-0800.",
      timeframe:
        "La mayoría de las solicitudes se procesan en 1 semana si se proporcionan todos los documentos. Las solicitudes del Grupo de Prioridad 1 (100% relacionado con el servicio) se procesan más rápido.",
    },
    goodToKnow: [
      "Incluso si recibiste una baja con menos de honra, aún puedes calificar para ciertos beneficios del VA — la elegibilidad se determina caso por caso. No asumas que estás descalificado sin verificar.",
      "Los servicios de salud mental del VA están disponibles para todos los veteranos que sirvieron en servicio activo, por hasta 5 años después de la baja, sin costo.",
      "Los veteranos pueden recibir tanto la atención médica del VA COMO Medi-Cal o Medicare — tener uno no afecta tu derecho a los otros.",
      "Los Préstamos para Vivienda de CalVet, la Exención de Cuotas del Colegio de CalVet y otros beneficios de California son separados de la atención médica del VA — pregunta a CalVet sobre la gama completa de beneficios estatales.",
    ],
  },

  // ── Inestabilidad de vivienda ──────────────────────────────────────────────

  "homelessness": {
    longDescription:
      "La ley de California establece que una persona que experimenta falta de vivienda es residente del estado si está presente en California y tiene la intención de permanecer — no necesitas una dirección de hogar para calificar para Medi-Cal. Puedes usar una dirección de refugio, un apartado postal, la dirección de una agencia de servicios sociales, la dirección de un amigo o una autodeclaración de tu situación. La membresía en Medi-Cal abre el acceso a CalAIM (California Avanzando e Innovando Medi-Cal), que proporciona Gestión de Atención Mejorada para personas con necesidades complejas de salud — incluyendo coordinación de atención, asistencia para navegación de vivienda, atención recuperativa después de hospitalización y conexión a recursos comunitarios.",
    documents: {
      required: [
        "Identidad — cualquier forma de identificación funciona: licencia de conducir, tarjeta de identificación estatal, pasaporte, Matrícula Consular, certificado de nacimiento o tarjeta de inscripción tribal. Si no tienes identificación, un trabajador social del condado puede ayudarte a obtener una ID de California de forma gratuita.",
        "Comprobante de residencia en California (requisito mínimo) — una carta firmada de un refugio, programa de vivienda de transición o sin fines de lucro; una carta de alguien con quien te estás quedando; O una autodeclaración escrita de que actualmente estás en California y tienes la intención de quedarte.",
        "Número de Seguro Social si lo tienes — no es obligatorio si no tienes uno.",
        "Comprobante de ingresos — talones de pago, cartas de concesión de beneficios o una autodeclaración firmada de que no tienes ingresos. No hay requisito de probar ingresos si no los tienes.",
      ],
      helpful: [
        "Cualquier registro médico al que puedas acceder — registros hospitalarios anteriores, recetas o una carta de un médico.",
        "Carta de referencia de un refugio, trabajador de extensión o administrador de casos — puede acelerar el proceso de solicitud.",
      ],
      notes:
        "No se te puede negar Medi-Cal porque te falte una dirección permanente. Si un trabajador del condado te dice lo contrario, pide hablar con un supervisor y contacta a la Health Consumer Alliance al 1-888-804-3536.",
    },
    howToApply: {
      steps: [
        "El punto de entrada más fácil es a través de un trabajador de extensión, trabajador de salud comunitario o personal del refugio — pueden ayudarte a solicitar en el sitio.",
        "Solicita en línea en BenefitsCal.com. En el campo de dirección, ingresa la dirección de un refugio, la dirección de un administrador de casos o la dirección de un amigo.",
        "O ve a la oficina del Departamento de Servicios Sociales de tu condado — están obligados a aceptar tu solicitud y ayudarte durante el proceso.",
        "Para ayuda inmediata para localizar servicios y asistentes de inscripción: llama al 2-1-1 o envía tu código postal por mensaje de texto al 898-211.",
        "Una vez inscrito en Medi-Cal, pregunta a tu plan sobre los servicios de Gestión de Atención Mejorada (ECM) — están diseñados específicamente para personas con inestabilidad de vivienda.",
      ],
      phone: "2-1-1 (referidos locales, disponible las 24 horas). BenefitsCal: 1-877-847-3663. Health Consumer Alliance: 1-888-804-3536.",
      timeframe:
        "Procesamiento estándar de Medi-Cal: hasta 45 días. Muchos programas de extensión pueden ayudar a agilizar o acceder a la elegibilidad presuntiva.",
    },
    goodToKnow: [
      "CalAIM proporciona servicios de navegación de vivienda, conexión a refugios y vivienda de transición, y apoyo de recuperación — todo a través de tu plan de atención administrada de Medi-Cal. Pregunta a tu plan sobre estos servicios explícitamente.",
      "La atención recuperativa (también llamada 'respiro médico') te permite recuperarte de una hospitalización en un entorno seguro y supervisado en lugar de regresar a la calle — pregunta al trabajador social del hospital sobre esto antes del alta.",
      "Si recibes Medi-Cal, también puedes calificar para los beneficios de comida de CalFresh — llama a BenefitsCal o visita la oficina de tu condado.",
      "Obtener una tarjeta de identificación estatal de California es gratuito si estás experimentando falta de vivienda — pregunta a un trabajador social o visita tu DMV local con una carta de un refugio.",
    ],
  },

  // ── Salud mental ───────────────────────────────────────────────────────────

  "mental-health": {
    longDescription:
      "La atención de salud mental está cubierta bajo Medi-Cal — no se necesita seguro separado ni solicitud si ya estás inscrito. La salud conductual de Medi-Cal cubre terapia individual y grupal, servicios psiquiátricos, intervención en crisis, tratamiento del uso de sustancias y medicamentos. La Línea de Crisis y Suicidio 988 es gratuita, disponible las 24 horas del día, los 7 días de la semana para cualquier persona, y no requiere seguro, cita ni información de identificación. Para atención de salud mental no urgente sin seguro, los Centros de Salud Comunitarios Calificados Federalmente (FQHC) proporcionan servicios de salud mental en escala móvil según la capacidad de pago. El Departamento de Salud Mental de California financia los departamentos de salud mental del condado en todos los condados — están obligados a atender a personas independientemente del estatus de seguro para situaciones de crisis.",
    documents: {
      required: [
        "Para la Línea de Crisis 988: no se necesita ningún documento. Solo llama o envía un mensaje de texto al 988.",
        "Para los servicios de salud conductual de Medi-Cal: solo necesitas tu inscripción en Medi-Cal. Si aún no tienes Medi-Cal, solicita en BenefitsCal.com.",
        "Para servicios de salud mental del condado: una derivación de tu plan de atención administrada de Medi-Cal, o puedes contactar directamente a tu departamento de salud mental del condado.",
      ],
      helpful: [
        "Cualquier registro previo de salud mental o diagnósticos — ayuda a tu proveedor a comprender tu historial y calificarte para servicios específicos más rápidamente.",
        "Lista de medicamentos si actualmente estás tomando algún medicamento psiquiátrico.",
      ],
      notes:
        "No se te puede exigir que muestres documentos de inmigración para acceder a servicios de salud mental de emergencia ni a la Línea de Crisis 988. La atención de crisis está disponible para todos.",
    },
    howToApply: {
      steps: [
        "Para una crisis de salud mental ahora mismo: llama o envía un mensaje de texto al 988. Disponible las 24 horas en inglés y español.",
        "Para cobertura continua de salud mental de Medi-Cal: inscríbete en Medi-Cal en BenefitsCal.com si aún no lo has hecho, luego contacta tu plan de atención administrada para solicitar un proveedor de salud conductual.",
        "Para servicios de salud mental del condado: busca '[tu condado] salud conductual' para encontrar tu departamento de salud mental del condado.",
        "Para terapia de bajo costo sin seguro: busca FQHCs en findahealthcenter.hrsa.gov, que ofrecen honorarios en escala móvil.",
      ],
      phone: "988 (llamar o enviar mensaje de texto, las 24 horas). BenefitsCal: 1-877-847-3663. NAMI California: 1-800-950-6264.",
      timeframe:
        "988: inmediato. Salud conductual de Medi-Cal: las citas varían por área; algunos planes requieren cita urgente dentro de las 48 horas para necesidades urgentes.",
    },
    goodToKnow: [
      "Medi-Cal cubre los servicios de salud mental sin límite de por vida y sin requisito de probar primero opciones más económicas — tienes derecho a la atención adecuada.",
      "El tratamiento del trastorno por uso de sustancias está cubierto bajo Medi-Cal como una condición médica — sin juicios, sin barreras más allá de la inscripción.",
      "Si tu plan de atención administrada de Medi-Cal niega un servicio de salud mental, tienes derecho a apelar y solicitar una revisión médica independiente.",
      "Los servicios de salud mental basados en la escuela están disponibles en muchos distritos escolares de California sin costo para los estudiantes — pregunta a tu consejero escolar.",
    ],
  },

  // ── Dental y visión ────────────────────────────────────────────────────────

  "dental-vision": {
    longDescription:
      "Medi-Cal incluye cobertura dental para adultos a través de Denti-Cal, que cubre atención preventiva (limpiezas, radiografías), atención restaurativa básica (empastes), cirugía oral (extracciones, incluyendo las muelas del juicio), tratamientos de conducto, dentaduras postizas y servicios dentales de emergencia. Debes encontrar un dentista que acepte Denti-Cal — no todos los dentistas lo hacen. La atención visual bajo Medi-Cal cubre un examen ocular por año y gafas recetadas (un par por año). Los niños con Medi-Cal tienen cobertura dental y visual completa. Nota: los cambios de julio de 2026 a Medi-Cal afectarán la cobertura dental para ciertos inscritos.",
    documents: {
      required: [
        "Inscripción en Medi-Cal — dental y visión están incluidos con tu membresía de Medi-Cal. No se necesita solicitud separada.",
        "Tu tarjeta de identificación de miembro de Medi-Cal — llévala a cada cita dental y visual.",
        "Si aún no estás inscrito en Medi-Cal: identificación con foto, comprobante de residencia en California, Número de Seguro Social y comprobante de ingresos. Solicita en BenefitsCal.com.",
      ],
      helpful: [
        "Cualquier registro dental anterior — radiografías, registros de tratamiento — que tu nuevo proveedor puede solicitar a un dentista anterior.",
        "Cualquier receta de gafas de un examen ocular anterior.",
      ],
      notes:
        "No necesitas una solicitud separada para dental o visión — son parte de Medi-Cal. Tu única acción es encontrar un proveedor que acepte Medi-Cal.",
    },
    howToApply: {
      steps: [
        "Si aún no estás inscrito en Medi-Cal: solicita primero en BenefitsCal.com.",
        "Para dental: encuentra un proveedor de Denti-Cal en smilecalifornia.org o llama al 1-800-322-6384. O pregunta a la sociedad dental de tu condado por dentistas que acepten Medi-Cal.",
        "Para visión: contacta tu plan de atención administrada de Medi-Cal para confirmar la cobertura visual y encontrar un proveedor en red.",
        "Lleva tu tarjeta de identificación de miembro de Medi-Cal a cada cita. Si aún no tienes tu tarjeta, llama a tu plan o a BenefitsCal.",
      ],
      phone: "Denti-Cal: 1-800-322-6384. BenefitsCal: 1-877-847-3663. Tu plan de atención administrada de Medi-Cal (número en tu tarjeta de miembro).",
      timeframe:
        "Inmediato una vez inscrito en Medi-Cal. Permite tiempo para encontrar un proveedor que acepte — en algunos condados, la disponibilidad de proveedores dentales es limitada.",
    },
    goodToKnow: [
      "Denti-Cal tiene escasez de proveedores en muchas áreas rurales y suburbanas. Si no puedes encontrar un proveedor cerca de ti, llama al 1-800-322-6384 y te ayudarán a localizar uno.",
      "La atención dental de emergencia (dolor severo, infección) debe estar cubierta incluso si no puedes encontrar un dentista regular de Denti-Cal — ve a una escuela dental o clínica dental de emergencia.",
      "A partir del 1 de julio de 2026, los beneficios dentales para los adultos indocumentados actualmente inscritos en Medi-Cal cambiarán a solo cobertura de emergencia. Si esto puede aplicarte, busca atención dental antes de esa fecha.",
      "La atención dental de los niños bajo Medi-Cal (hasta los 21 años) es más completa que Denti-Cal para adultos — incluye ortodoncia si es médicamente necesaria.",
    ],
  },

  // ── Costos de medicamentos ─────────────────────────────────────────────────

  "prescription": {
    longDescription:
      "Los costos de los medicamentos recetados pueden reducirse drásticamente o eliminarse a través de varios programas de California. Medi-Cal cubre una amplia lista de medicamentos con poco o ningún copago para los miembros inscritos. Para los beneficiarios de Medicare, la Ayuda Extra (también llamada Subsidio de Bajos Ingresos, o LIS) es un programa federal que reduce los costos de medicamentos de la Parte D — en 2026, los copagos se limitan a $12.65 por medicamento de marca y $5.10 por genéricos. Las personas que tienen tanto Medi-Cal como Medicare se inscriben automáticamente en la Ayuda Extra. Los Programas de Ahorros de Medicare también pueden pagar tu prima de la Parte D en su totalidad. Para personas sin seguro, GoodRx, NeedyMeds y los programas de asistencia al paciente de los fabricantes farmacéuticos pueden proporcionar descuentos significativos en medicamentos específicos.",
    documents: {
      required: [
        "Para la cobertura de medicamentos recetados de Medi-Cal: solo tu tarjeta de identificación de miembro de Medi-Cal. No se requiere solicitud separada.",
        "Para la Ayuda Extra/LIS de Medicare (si solicita por separado de Medi-Cal): Número de Seguro Social, comprobante de ingresos (carta de concesión del Seguro Social, talones de pago, estados de cuenta bancarios) e información sobre recursos financieros. Solicita usando el Formulario SSA i1020.",
        "Para los programas de asistencia al paciente del fabricante: varían según el fabricante — generalmente requieren comprobante de ingresos, comprobante del estatus de seguro y una carta de tu médico recetador.",
      ],
      helpful: [
        "Tu lista de medicamentos actuales — nombres de medicamentos, dosis e información del proveedor recetador.",
        "Información del plan de Medicare Parte D si tienes la Parte D (puede que estés pagando de más si no has verificado si tienes la Ayuda Extra).",
      ],
      notes:
        "Si tienes Medi-Cal Y Medicare, eres dualmente elegible y automáticamente recibes la Ayuda Extra sin solicitud adicional. Los descuentos de GoodRx pueden ser utilizados por cualquier persona independientemente del estatus de seguro.",
    },
    howToApply: {
      steps: [
        "Si estás en Medi-Cal: simplemente presenta tu tarjeta de miembro en cualquier farmacia que acepte Medi-Cal. La mayoría de las principales cadenas de farmacias participan.",
        "Para la Ayuda Extra de Medicare: solicita en SSA.gov, llama al 1-800-772-1213 o visita una oficina del Seguro Social. Los miembros dualmente elegibles se inscriben automáticamente.",
        "Para GoodRx: ve a GoodRx.com o descarga la aplicación, busca tu medicamento, muestra el cupón en la farmacia. No se requiere registro.",
        "Para programas de asistencia del fabricante: busca '[nombre del medicamento] programa de asistencia al paciente' o ve a NeedyMeds.org.",
        "Para HICAP (consejería de Medicare incluyendo la Parte D): llama al 1-800-434-0222 para obtener ayuda gratuita.",
      ],
      phone: "SSA (Ayuda Extra): 1-800-772-1213. HICAP: 1-800-434-0222. BenefitsCal: 1-877-847-3663.",
      timeframe:
        "Medi-Cal: inmediato en la farmacia. Ayuda Extra: 3–6 semanas para la determinación de la SSA. GoodRx: inmediato, sin solicitud.",
    },
    goodToKnow: [
      "Si un medicamento no está en el formulario de tu plan de Medi-Cal, puedes solicitar una excepción médica — tu médico debe documentar que el medicamento excluido es médicamente necesario.",
      "GoodRx a menudo es más barato que tu copago de seguro para medicamentos genéricos. Muestra tanto tu tarjeta de seguro como tu cupón de GoodRx y pregunta al farmacéutico cuál es más barato.",
      "En 2026, Medicare Parte D tiene un máximo de gastos de bolsillo de $2,000 al año — una vez que lo alcanzas, tus medicamentos son gratuitos por el resto del año.",
      "Las farmacias 340B (a menudo en FQHCs y centros de salud comunitarios) ofrecen medicamentos a costos dramáticamente reducidos para pacientes que califican.",
    ],
  },

  // ── Ya en Medi-Cal ─────────────────────────────────────────────────────────

  "current-medi-cal": {
    longDescription:
      "Si ya estás inscrito en Medi-Cal, es posible que te estés perdiendo beneficios suplementarios que están incluidos en tu cobertura sin costo adicional, o que puedes añadir con una solicitud separada simple. El dental de Medi-Cal (Denti-Cal) cubre limpiezas, empastes, extracciones y dentaduras postizas — solo necesitas encontrar un dentista de Denti-Cal. La visión de Medi-Cal cubre un examen ocular anual y un par de gafas recetadas. El transporte médico no urgente está disponible para los miembros que necesiten ayuda para llegar a citas médicas. Si necesitas ayuda con las tareas diarias en casa debido a una discapacidad, puedes calificar para IHSS (Servicios de Apoyo en el Hogar). CalFresh (cupones de alimentos) requiere una solicitud separada, pero muchos miembros de Medi-Cal califican y no han solicitado.",
    documents: {
      required: [
        "Tu tarjeta actual de miembro de Medi-Cal — necesaria para todos los servicios suplementarios.",
        "Para IHSS: inscripción en Medi-Cal (ya la tienes), más un SOC 873 completado (Certificación de Atención Médica) de tu médico y la solicitud de IHSS de tu condado.",
        "Para CalFresh: requiere su propia solicitud en BenefitsCal.com — necesitarás comprobante de identidad, residencia e ingresos.",
      ],
      helpful: [
        "El manual del miembro de tu plan de atención administrada de Medi-Cal — enumera todos los beneficios incluidos en tu plan específico.",
        "Una lista de cualquier necesidad de salud actual — dental, visión, transporte, atención domiciliaria — para que puedas preguntar a tu plan sobre cada una.",
      ],
      notes:
        "Muchos beneficios suplementarios requieren que los solicites activamente. Tu plan de atención administrada de Medi-Cal está obligado a informarte sobre todos los beneficios para los que calificas — llama al número de servicios al miembro en tu tarjeta y pregunta específicamente.",
    },
    howToApply: {
      steps: [
        "Llama al número de servicios al miembro en tu tarjeta de Medi-Cal y pregunta específicamente: '¿A qué beneficios dentales, visuales, de transporte y de atención domiciliaria tengo derecho?'",
        "Para dental: encuentra un proveedor de Denti-Cal en smilecalifornia.org o llama al 1-800-322-6384.",
        "Para IHSS: contacta la oficina de IHSS de tu condado — encuéntrala en cdss.ca.gov/IHSS o llama a los servicios sociales de tu condado.",
        "Para los beneficios de comida de CalFresh: solicita en BenefitsCal.com — selecciona CalFresh. Tener Medi-Cal no te inscribe automáticamente en CalFresh.",
        "Para la Ayuda Extra con los costos de medicamentos de Medicare: si tienes Medicare y Medi-Cal, ya deberías estar inscrito — verifica con tu plan de la Parte D o llama al 1-800-MEDICARE.",
      ],
      phone: "Servicios al miembro: en tu tarjeta de Medi-Cal. Denti-Cal: 1-800-322-6384. IHSS: tu oficina del condado. BenefitsCal: 1-877-847-3663.",
      timeframe:
        "La mayoría de los beneficios suplementarios se activan rápidamente una vez que encuentras un proveedor. Las evaluaciones de IHSS tardan 30–45 días.",
    },
    goodToKnow: [
      "Tu plan de atención administrada de Medi-Cal está legalmente obligado a informarte sobre todos tus beneficios cubiertos. Si sientes que tu plan no te está informando, contacta al Departamento de Atención Médica Administrada al 1-888-466-2219.",
      "CalFresh proporciona un promedio de $200+ al mes en beneficios de alimentos por persona — vale la pena solicitar incluso si crees que ganas demasiado.",
      "Si tienes Medi-Cal, también puedes acceder a atención dental gratuita en clínicas dentales de FQHC, escuelas dentales (a menudo de menor costo y alta calidad) y proveedores que aceptan Denti-Cal.",
    ],
  },

  // ── Pérdida de empleo ──────────────────────────────────────────────────────

  "job-loss": {
    longDescription:
      "Perder el seguro médico del empleador es un Evento de Vida Calificado que te da un Período de Inscripción Especial de 60 días en Covered California — puedes inscribirte en un plan del mercado aunque no sea la temporada de inscripción abierta. El período de 60 días comienza en la fecha en que termina tu cobertura del empleador, no la fecha en que perdiste tu trabajo. Por separado, Medi-Cal está disponible todo el año sin período de inscripción — si tus ingresos han caído significativamente después de perder el empleo, ahora puedes calificar para Medi-Cal gratuito (umbral para adulto soltero: $22,025 al año en 2026). COBRA te permite continuar el plan de tu antiguo empleador por hasta 18 meses, pero pagas la prima completa del grupo, que generalmente es mucho más cara que Medi-Cal o un plan subsidiado de Covered CA. Compara las tres opciones antes de decidir.",
    documents: {
      required: [
        "Comprobante de pérdida de empleo y terminación de cobertura (para el Período de Inscripción Especial de Covered CA): la carta de terminación de beneficios de tu empleador, el aviso de elección de COBRA o el aviso de terminación de beneficios. Debe estar fechado.",
        "Identificación con foto del gobierno.",
        "Número de Seguro Social.",
        "Comprobante de residencia en California — factura de servicios públicos, estado de cuenta bancario, contrato de arrendamiento o correspondencia gubernamental.",
        "Comprobante de ingresos actuales — esto debe reflejar tus ingresos DESPUÉS de perder el empleo. Si estás cobrando desempleo, proporciona tu carta de concesión del EDD. Si no tienes ingresos, se acepta una declaración propia firmada.",
      ],
      helpful: [
        "El aviso de elección de COBRA de tu antiguo empleador — prueba la fecha de pérdida de cobertura para el Período de Inscripción Especial de Covered CA.",
        "Tu W-2 o declaración de impuestos más reciente (para historial de ingresos, aunque los ingresos actuales sean diferentes).",
      ],
      notes:
        "El período de 60 días del Período de Inscripción Especial de Covered CA comienza el día en que termina tu cobertura del empleador — no el día en que te despidieron. Estas pueden ser fechas diferentes. Verifica cuidadosamente la fecha de terminación de tus beneficios.",
    },
    howToApply: {
      steps: [
        "Paso 1 — Verifica si tus ingresos (después de la pérdida de empleo) califican para Medi-Cal gratuito: persona sola en $22,025 al año o menos. Si es así, solicita en BenefitsCal.com — esta es la mejor opción financieramente.",
        "Paso 2 — Si no calificas para Medi-Cal: ve a CoveredCA.com y solicita usando tu Evento de Vida Calificado (pérdida de empleo). Tienes 60 días desde la fecha de terminación de tus beneficios.",
        "Paso 3 — Obtén tu aviso de COBRA de tu antiguo empleador (requerido dentro de los 14 días después de la pérdida de cobertura). Revisa el costo mensual — generalmente es mucho más alto que Medi-Cal o un plan subsidiado de Covered CA.",
        "Paso 4 — Compara: Medi-Cal ($0) vs. Covered CA con subsidio (varía) vs. COBRA (generalmente $400–$800+/mes para una persona).",
        "Paso 5 — Inscríbete en tu opción elegida antes de que se cierre el período de 60 días.",
      ],
      phone: "BenefitsCal: 1-877-847-3663. Covered California: 1-800-300-1506. Consejeros de inscripción gratuitos: CoveredCA.com.",
      timeframe:
        "Actúa dentro de los 60 días de la fecha de terminación de tu cobertura. Medi-Cal no tiene fecha límite. La cobertura del Período de Inscripción Especial de Covered CA generalmente comienza el primero del mes después de la inscripción.",
    },
    goodToKnow: [
      "Puedes cambiar de COBRA a Medi-Cal o Covered CA en cualquier momento — perder o abandonar COBRA es en sí mismo un evento de vida calificado para Covered CA.",
      "Los beneficios de desempleo del EDD cuentan como ingresos para los cálculos de Medi-Cal y Covered CA — repórtalos. Pero los ingresos de desempleo aún pueden dejarte por debajo del umbral de Medi-Cal.",
      "Si estabas en un HMO a través de tu empleador, tu médico de atención primaria puede participar en un plan de Medi-Cal o Covered CA — pregunta antes de asumir que perderás a tu médico.",
      "Si necesitas cobertura de inmediato, pregunta sobre la Elegibilidad Presuntiva en una clínica participante (para Medi-Cal) — puedes obtener cobertura temporal el mismo día.",
    ],
  },

  // ── Cómo solicitar (tarjeta de navegación) ────────────────────────────────

  "how-to-apply": {
    longDescription:
      "El sistema de cobertura de salud de California tiene una política de 'no hay puerta incorrecta' — puedes comenzar tu solicitud a través de cualquier portal (BenefitsCal, Covered California o la oficina de tu condado) y el sistema te ayudará a dirigirte al programa correcto. Medi-Cal está disponible todo el año sin período de inscripción abierta. Covered California requiere inscripción abierta (1 de noviembre – 31 de enero) a menos que tengas un evento de vida calificado. La inscripción de Medicare está vinculada a la ventana de tu cumpleaños número 65. Los Consejeros de Inscripción Certificados gratuitos están disponibles en todos los condados para ayudarte a solicitar sin costo. No necesitas un corredor ni un servicio pagado para inscribirte en ningún programa de cobertura de salud de California.",
    documents: {
      required: [
        "Identificación con foto del gobierno — licencia de conducir, tarjeta de identificación estatal o pasaporte.",
        "Número de Seguro Social — tu tarjeta, un W-2 o un talón de pago que muestre tu SSN completo.",
        "Comprobante de residencia en California — factura de servicios públicos, estado de cuenta bancario, contrato de arrendamiento o correspondencia gubernamental con tu nombre y dirección de California.",
        "Comprobante de ingresos actuales del hogar — los últimos dos talones de pago, W-2, 1099, declaración de impuestos, carta del empleador o declaración propia firmada si no tienes ingresos.",
      ],
      helpful: [
        "Documentos de inmigración si no eres ciudadano/a estadounidense.",
        "Certificados de nacimiento de todos los miembros del hogar por los que estás solicitando.",
        "Cualquier información de seguro médico existente.",
      ],
      notes:
        "Puedes comenzar cualquier solicitud sin tener todos los documentos. Envía lo que tienes y proporciona el resto después. Solicitar sin todos los documentos siempre es mejor que no solicitar en absoluto.",
    },
    howToApply: {
      steps: [
        "Para Medi-Cal: BenefitsCal.com o llama al 1-877-847-3663.",
        "Para Covered California: CoveredCA.com o llama al 1-800-300-1506.",
        "Para Medicare: SSA.gov o llama al 1-800-772-1213.",
        "Para ayuda gratuita en persona: encuentra un consejero de inscripción certificado en CoveredCA.com o llama al 2-1-1 para referencias locales.",
        "Visita MediGuide.health/help para guías paso a paso de cada programa.",
      ],
      phone: "BenefitsCal: 1-877-847-3663. Covered California: 1-800-300-1506. SSA/Medicare: 1-800-772-1213. 2-1-1 (ayuda local).",
      timeframe:
        "Medi-Cal: hasta 45 días. Covered CA: el primero del mes después de la inscripción. Medicare: verifica tu ventana de cumpleaños.",
    },
    goodToKnow: [
      "Los consejeros de inscripción certificados gratuitos pueden comparar todas tus opciones y ayudarte a solicitar — son pagados por el estado, no por ninguna compañía de seguros, por lo que su consejo es imparcial.",
      "2-1-1 te conecta con referencias locales de salud, comida, vivienda y servicios sociales en la mayoría de los condados de California. Disponible las 24 horas por teléfono y chat.",
    ],
  },

  // ── Beneficios ocultos ─────────────────────────────────────────────────────

  "hidden-benefits": {
    longDescription:
      "Medi-Cal y los programas relacionados de California incluyen muchos beneficios que los inscritos a menudo no saben pedir. La atención dental (Denti-Cal) está disponible para todos los miembros adultos de Medi-Cal. La cobertura visual incluye exámenes anuales de la vista y gafas recetadas. El transporte médico no urgente puede llevarte a las citas sin costo si tienes Medi-Cal. IHSS proporciona un cuidador pagado en casa para los miembros con discapacidades. CalFresh (cupones de alimentos de SNAP) es un programa separado para el que muchos miembros de Medi-Cal califican pero no han solicitado. El programa de Ayuda Extra a través de Medicare elimina o reduce drásticamente los costos de medicamentos para los miembros dualmente elegibles. Los trabajadores de salud comunitarios disponibles a través del programa CalAIM de Medi-Cal pueden conectarte con vivienda, comida y servicios sociales. Todos estos beneficios requieren que los solicites activamente — no se activan automáticamente.",
    documents: {
      required: [
        "Para la mayoría de los beneficios suplementarios de Medi-Cal (dental, visual, transporte): solo tu tarjeta de miembro de Medi-Cal. No se necesita solicitud adicional.",
        "Para CalFresh: solicita por separado en BenefitsCal.com — necesitarás tu identificación, comprobante de residencia y documentación de ingresos.",
        "Para IHSS: inscripción en Medi-Cal más una Certificación de Atención Médica completada (SOC 873) de tu médico y la solicitud de IHSS de tu condado.",
      ],
      helpful: [
        "El manual del miembro de tu plan de atención administrada de Medi-Cal — enumera todos los beneficios incluidos.",
        "Tu tarjeta de miembro actual de Medi-Cal y nombre del plan — necesarios para encontrar proveedores en red para dental, visual y transporte.",
      ],
      notes:
        "Llama al número de servicios al miembro en tu tarjeta de Medi-Cal y pregunta específicamente sobre cada beneficio suplementario que deseas — dental, visual, transporte, IHSS y coordinación de atención. Los planes están obligados a informarte sobre lo que calificas.",
    },
    howToApply: {
      steps: [
        "Llama a tu plan de atención administrada de Medi-Cal (número en la tarjeta de miembro) y pregunta sobre dental, visual, transporte y otros beneficios suplementarios.",
        "Para dental: encuentra un proveedor de Denti-Cal en smilecalifornia.org.",
        "Para IHSS: contacta la oficina de IHSS de tu condado — encuéntrala en cdss.ca.gov/IHSS.",
        "Para CalFresh: solicita en BenefitsCal.com.",
        "Para la Ayuda Extra con los costos de medicamentos de Medicare: contacta tu plan de la Parte D o llama al 1-800-MEDICARE.",
        "Visita MediGuide.health/hidden-benefits para la lista completa.",
      ],
      phone: "Servicios al miembro: en tu tarjeta de Medi-Cal. Denti-Cal: 1-800-322-6384. BenefitsCal: 1-877-847-3663. 2-1-1 (referidos locales).",
      timeframe:
        "Dental y visual: inmediato una vez que encuentres un proveedor. IHSS: 30–45 días para la evaluación. CalFresh: hasta 30 días para la decisión.",
    },
    goodToKnow: [
      "CalFresh (cupones de alimentos) proporciona un promedio de $200+ al mes por persona en beneficios de alimentos — vale la pena solicitar incluso si crees que tus ingresos son demasiado altos.",
      "El transporte médico no urgente (NEMT) es un beneficio de Medi-Cal — tu plan organizará un transporte a las citas médicas. Llama al número de servicios al miembro en tu tarjeta para solicitarlo.",
      "Tu plan está legalmente obligado a informarte sobre todos tus beneficios cubiertos. Si sientes que no estás obteniendo la información que necesitas, contacta al Centro de Ayuda del DMHC al 1-888-466-2219.",
    ],
  },
};
