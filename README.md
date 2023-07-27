#Nathaly Esther Rodriguez Polanco 2019-1174

# Contador_app

Aplicacion de pruebas usando React Native para el curso de aplicaciones moviles 2023


Entregas por medio de Pull Requests - Crear un README_TU_NOMBRE.md en caso de agregar teoria - En codigo solo modifica el original con tu version. 

## Test 
- [ ] Test #0: Fix errors in the initial project    
= [ ] Test #1: Setup the environment and run the app in your phone - send printscreen for whatsapp add your name to the msg
- [ ] Test #2: Create a issue for a new feature or bug that you understand the app need it   
- [ ] Test #3: Documenta que representa cada uno de los archivos en esta app - investigacion
- [ ] Test #4: Identifica los custom hooks usados en este app


## Investigar en la etapa 1



- Cambios en el State
  El state en React Native representa la fuente única de verdad para los datos de la aplicación que pueden cambiar con el tiempo. Cuando el estado cambia, React Native se encarga de actualizar automáticamente los componentes relacionados en la interfaz de usuario.

- Contador
  El contador es un ejemplo clásico para comenzar a trabajar con el estado en React Native. Puedes crear una aplicación simple con un botón que incremente o decremente un valor cuando se presiona.

- Re-utilización de componentes
  React Native fomenta la reutilización de componentes para evitar la duplicación de código y mantener la consistencia en la interfaz de usuario. Es posible crear componentes personalizados que se puedan utilizar en diferentes partes de la aplicación.

- Pantallas
  En React Native, cada pantalla de la aplicación suele ser un componente independiente. La navegación entre pantallas es un aspecto importante que debe abordarse para crear aplicaciones de varias páginas.

- Componentes personalizados
  Además de los componentes incorporados como View, Text, etc., puedes crear tus propios componentes personalizados para satisfacer las necesidades específicas de tu aplicación.

- Stylesheet
  El estilo en React Native se maneja utilizando la API de Stylesheet, que es similar a CSS pero con algunas diferencias. Es importante aprender cómo aplicar estilos a los componentes para diseñar una interfaz atractiva y coherente.

- Envío de argumentos a componentes
  A menudo, es necesario enviar datos o argumentos a componentes personalizados para personalizar su comportamiento. Aprenderás cómo pasar props (propiedades) a los componentes y utilizarlos en su lógica.

- Tipando props
  React Native está basado en JavaScript, pero es posible agregar tipado estático utilizando TypeScript o PropTypes. Esto ayuda a mejorar la integridad y claridad del código, especialmente en proyectos más grandes.

- Componentes como:

- View
  Es similar a un contenedor div en HTML. Se utiliza para envolver otros componentes y estructurar la interfaz de usuario. También se utiliza para aplicar estilos y diseños a través de la propiedad style.
- Text
  Se utiliza para mostrar texto en la interfaz de usuario. Puedes usarlo para mostrar títulos, párrafos, botones de texto y más. Al igual que con View, también puedes aplicar estilos a través de la propiedad style.

- TouchableOpacity
  Es una envoltura que te permite hacer que otros componentes sean "tocables" (responder al tacto). Cuando un usuario toca el componente, se puede proporcionar retroalimentación visual (como un cambio de opacidad) y se puede activar una función de manejo del evento onPress.

- TouchableNativeFeedback
  Es similar a TouchableOpacity, pero está diseñado específicamente para dispositivos Android y proporciona una respuesta táctil más nativa a través de las capacidades del sistema operativo. Es comúnmente utilizado para obtener un efecto de onda al presionar en dispositivos Android.

- TouchableWithoutFeedback
  Es similar a TouchableOpacity, pero no proporciona ningún efecto de retroalimentación visual. Es útil cuando necesitas que un componente sea tocable, pero no deseas que muestre un cambio visual al presionarlo.

El objetivo propiamente, es adentrarnos en nuestras primeras experiencias con React Native para crear una aplicación simple que nos de la noción de cómo trabajar en este framework, pero a la vez, dejarnos con la intriga de todo lo que estamos a punto de aprender :)