# Contador_app

## Jatnna Reinoso 2020-0710

Aplicacion de pruebas usando React Native para el curso de aplicaciones moviles 2023


Entregas por medio de Pull Requests - Crear un README_TU_NOMBRE.md en caso de agregar teoria - En codigo solo modifica el original con tu version. 

## Test 
- [ ] Test #0: Fix errors in the initial project    
= [ ] Test #1: Setup the environment and run the app in your phone - send printscreen for whatsapp add your name to the msg
- [ ] Test #2: Create a issue for a new feature or bug that you understand the app need it   
- [ ] Test #3: Documenta que representa cada uno de los archivos en esta app - investigacion
- [ ] Test #4: Identifica los custom hooks usados en este app


## Investigar en la etapa 1



- Cambios en el State: Se declara el estado inicial en el constructor o utilizando el hook “useState”. Para cambiar el valor de una propiedad en el estado, se utiliza la función “setState” en los componentes de clase o la función proporcionado por el hook “useState” en los componentes funcionales. En este caso, utilizamos setContador para cambiar el valor del estado.


- Contador: El componente Contador incrementa o decrementa según los botones que se presionen. Mediante el método “setState”, se actualizará automáticamente el componente para reflejar el nuevo valor del estado contador. En este caso, se inicializa en 10, y varía con el método “setContador”.

- Re-utilización de componentes: Consiste en escribir componentes que puedan ser utilizados en diferentes partes de una aplicación. En este caso, se reutiliza el componente Fab, al utilizarlo para aumentar y decrementar el contador.

- Pantallas: Las pantallas se representan mediante componentes que contienen la lógica y la interfaz de usuario de una página o sección específica de una aplicación. Estos componentes de pantalla se pueden reutilizar y combinar para construir la estructura general de la aplicación. En este caso, tenemos 2 pantallas, “ContadorScreen” y “HolaMundoScreen”.

- Componentes personalizados: Los componentes personalizados encapsulan la lógica y la interfaz de usuario de una parte específica de la aplicación. Se pueden reutilizar y combinar para construir la estructura de la interfaz de usuario. En este caso, tenemos a nuestro componente perosnalizado “Fab”.

- Stylesheet: Permiten aplicar estilos a los componentes, controlando su apariencia, diseño y comportamiento. En este caso, le aplicamos estilos a nuestro componente Fab.

- Envío de argumentos a componentes: Se puede enviar argumentos o datos a los componentes mediante el uso de props. Son un mecanismo para pasar datos de un componente padre a un componente hijo.

- Tipando props: Se tipan las props de los componentes para tener un mejor control sobre los tipos de datos que se esperan en cada prop. En este caso, nuestro componente Fab tiene tipado de props, que son title, position onPress.

- Componentes como:

- View: Se refiere a la parte de la interfaz de usuario que se muestra al usuario final.

- Text: Sirve para mostrar texto en la interfaz de usuario. Lo podemos ver en el componente Fab y en los screens.

- TouchableOpacity: Se utiliza para lograr un efecto de opacidad al tocar un elemento. Por lo que, al presionar un botón en nuestro componente Fab, se vuelve opaco.

- TouchableNativeFeedback: Se utiliza para proporcionar interacción táctil en dispositivos Android. Permite agregar efectos de respuesta táctil a elementos de la interfaz de usuario, como botones o componentes interactivos.

- TouchableWithoutFeedback: Se utiliza para capturar interacciones táctiles sin agregar ningún efecto visual o de respuesta táctil al componente.

El objetivo propiamente, es adentrarnos en nuestras primeras experiencias con React Native para crear una aplicación simple que nos de la noción de cómo trabajar en este framework, pero a la vez, dejarnos con la intriga de todo lo que estamos a punto de aprender :)