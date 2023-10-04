export type Faq = {
  question: string;
  answer: string;
  answerContentList: string[];
  closeAnswer: string;
};

export const faqs: Faq[] = [
  {
    question:
      '  ¿CON QUÉ FINALIDAD TRATARÁ SOY MAMUT LOS DATOS PERSONALES DEL USUARIO Y DURANTE CUÁNTO TIEMPO?',
    answer:
      'Los datos personales recabados serán tratados por Soy Mamut conforme a las siguientes finalidades:',
    answerContentList: [
      ' Gestionar sus solicitudes de contacto con Soy Mamut a través de los canales dispuestos para ello en el Sitio Web de Soy Mamut, Huella Positiva. ',
      'Gestionar las compras efectuadas en el marco del Sitio Web, incluyendo la gestión del pago y la remisión del pedido. ',
      'Gestionar la suscripción a la newsletter, realizada a través del canal dispuesto en el Sitio Web de Soy Mamut, Huella Positiva.',
      'Efectuar análisis sobre la utilización del Sitio Web y comprobar las preferencias y comportamiento de los usuarios. ',
      'Gestionar el envío de comunicaciones comerciales de Soy Mamut y del resto de compañías que forman parte de su mismo grupo, salvo que el usuario indique lo contrario marcando la casilla correspondiente, o muestre su oposición a dicho tratamiento. ',
      'Gestionar el envío de encuestas de satisfacción en base a la compra del producto o servicio de Soy Mamut realizada, mara mejorar día a día la experiencia de nuestros clientes. ',
      'Analizar sus datos a fin de elaborar perfiles de usuario que permitan definir con mayor detalle los productos que puedan resultar de su interés. ',
    ],
    closeAnswer:
      'Los datos se conservarán durante el tiempo necesario para la realización de las finalidades para las que fueron recabados, salvo que el usuario solicite su baja a Soy Mamut, oponiéndose o revocando su consentimiento.',
  },
  {
    question: '¿QUÉ DATOS DEL USUARIO TRATARÁ SOY MAMUT?',
    answer: 'Soy Mamut tratará las siguientes categorías de datos:',
    answerContentList: [
      'Datos identificativos: nombre, apellidos, documento nacional de identidad o número de identidad de extranjero e imagen.',
      'Datos de contacto: domicilio, teléfono fijo, teléfono móvil, dirección de correo electrónico.',
      'Datos de características personales: fecha de nacimiento, edad, sexo, nacionalidad.',
      'Datos bancarios: número de cuenta, titular, mandato SEPA.',
      'Otros datos: datos facilitados por los propios interesados en los campos abiertos de los formularios dispuestos en el Sitio Web.',
      'Datos de navegación.',
    ],
    closeAnswer:
      'En caso de que el usuario facilite datos de terceros, manifiesta contar con el consentimiento de los mismos y se compromete a trasladar al interesado, titular de dichos datos, la información contenida en la Política de Privacidad, eximiendo a Soy Mamut de cualquier responsabilidad en este sentido. No obstante, Soy Mamut podrá llevar a cabo las verificaciones necesarias para constatar este hecho, adoptando las medidas de diligencia debida que correspondan, conforme a la normativa de protección de datos',
  },
  {
    question: '¿CON QUÉ DESTINATARIOS SE COMPARTIRÁN LOS DATOS DEL USUARIO?',
    answer: 'Los datos del usuario podrán ser comunicados a:',
    answerContentList: [
      'Empresas  y Entidades del grupo al que pertenece Soy Mamut, únicamente para fines administrativos internos y/o para las finalidades anteriormente indicadas.',
      'Empresas  y Entidades del grupo al que pertenece Soy Mamut para el envío de comunicaciones comerciales sobre los productos y servicios ofertados por las empresas que lo forman, siempre que el Usuario así lo haya consentido.',
      'Administraciones Públicas y autoridades nacionales y/o europeas competentes, en los casos previstos por la Ley.',
    ],
    closeAnswer:
      'Adicionalmente, los datos podrán ser accesibles por la entidad Soy Mamut Saturn y por proveedores de Soy Mamut, siendo dicho acceso el necesario para el adecuado cumplimiento de las obligaciones legales y/o de las finalidades anteriormente indicadas. Dichos proveedores no tratarán sus datos para finalidades propias que no hayan sido previamente informadas por Soy Mamut. Los destinatarios indicados en el presente apartado pueden encontrarse ubicados dentro o fuera del Espacio Económico Europeo, encontrándose en este último caso debidamente legitimadas las transferencias internacionales de datos.',
  },
];
