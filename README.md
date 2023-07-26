# Contador_app

## Sebastian Corcino 2020-0895

Aplicacion de pruebas usando React Native para el curso de aplicaciones moviles 2023

Entregas por medio de Pull Requests - Crear un README_TU_NOMBRE.md en caso de agregar teoria - En codigo solo modifica el original con tu version.

## Test

- [ ] Test #0: Fix errors in the initial project  
       = [ ] Test #1: Setup the environment and run the app in your phone - send printscreen for whatsapp add your name to the msg
- [ ] Test #2: Create a issue for a new feature or bug that you understand the app need it
- [ ] Test #3: Documenta que representa cada uno de los archivos en esta app - investigacion
- [ ] Test #4: Identifica los custom hooks usados en este app

## Investigar en la etapa 1

- **Cambios en el State**:
  En cuanto a los cambios en el estado, inicialmente se utiliza mediante el hook "useState". Para modificar una propiedad del estado, en los componentes de clase se emplea la función "setState", En este ejemplo, utilizamos "setContador" para alterar el valor del estado.

- **Contador**: El componente Contador permite aumentar o disminuir su valor según los botones presionados. Al emplear el método "setState", el componente se actualizará automáticamente para reflejar el nuevo valor del estado del contador.

- **Re-utilización de componentes**: La re-utilizacion de componentes se basa en definir componentes que puedan ser utilizados en diferentes lugares de la App.

- **Pantallas**: En una aplicación, las pantallas son representadas mediante componentes que engloban tanto la lógica como la interfaz de usuario de una página o sección específica. Estos componentes de pantalla pueden ser reutilizados y combinados para construir la estructura general del programa.

- **Componentes personalizados**: Los componentes personalizados son aquellos que continen una parte especifica de la App. Estos componentes pueden ser reutilizados y combinados para construir la estructura de la interfaz de usuario. En esta App el componente personalizado se llamado "Fab".

- **Stylesheet**: El StyleSheet en React-Native es una forma de aplicar estilos a una aplicación. La función principal de StyleSheet en React Native se enfoca en estilizar y estructurar los componentes en una aplicación.

- **Envío de argumentos a componentes**: En React Native, el envío de argumentos o datos a componentes se realiza mediante el uso de props, que es una abreviatura de "propiedades". Las props son un mecanismo fundamental para pasar información desde un componente padre hacia un componente hijo.

- **Tipando props**: Tipar las props en React Native es una buena práctica que mejora la calidad del código, previene errores y facilita el trabajo en equipo al proporcionar una mejor documentación y comprensión del código. 

### Componentes como:

- **View**: El componente View es uno de los componentes fundamentales para la creación de interfaces de usuario. Es similar al elemento div en HTML, pero en lugar de ser un elemento visual, es un contenedor que permite agrupar y posicionar otros componentes para crear la estructura y el diseño de la interfaz.

- **Text**: El componente Text es utilizado para mostrar texto en la interfaz de usuario. Puedes utilizar el componente Text para mostrar texto estático, o también puedes combinarlo con variables o props para mostrar contenido dinámico en tu aplicación.

- **TouchableOpacity**: El componente TouchableOpacity es un componente táctil que se utiliza para envolver otros componentes y hacerlos interactivos. El uso más común de TouchableOpacity es para implementar botones y elementos interactivos en la interfaz de usuario. Al tocar el componente, se activa la acción asociada a ese elemento.

- **TouchableNativeFeedback**: TouchableNativeFeedback es una opción ideal para crear botones y elementos interactivos en aplicaciones de React Native dirigidas a dispositivos Android, proporcionando una experiencia táctil más nativa y familiar para los usuarios de esta plataforma.

- **TouchableWithoutFeedback**: TouchableWithoutFeedback es otra opción para hacer que los elementos sean táctiles e interactivos, similar a TouchableOpacity y TouchableNativeFeedback. Sin embargo, a diferencia de los otros dos componentes, TouchableWithoutFeedback no muestra ningún efecto visual de retroalimentación cuando se toca el elemento. 

El objetivo propiamente, es adentrarnos en nuestras primeras experiencias con React Native para crear una aplicación simple que nos de la noción de cómo trabajar en este framework, pero a la vez, dejarnos con la intriga de todo lo que estamos a punto de aprender :)

## Resumen Atomic Design

Es una metodología de diseño que busca organizar los componentes de una aplicación móvil de manera jerárquica y modular. Siguiendo la analogía de la química, se compone de:

- **Atoms**: Los elementos más pequeños y reutilizables.

- **Molecules**: Atomos agrupados juntos para formar una nueva molecula.

- **Organims**: Moleculas unidas para crear una parte de la interfaz

- **Templates**: La estructura del contenido

- **Pages**: Las interfaces construidas a base de los templates.

Al adoptar el diseño atómico en React Native, los equipos de desarrollo pueden trabajar de manera más eficiente y colaborativa, ya que cada componente se construye y prueba por separado antes de combinarse en estructuras más complejas. Esto conduce a un desarrollo más rápido y una interfaz de usuario más consistente y robusta.

