# <ins>Trabajo Práctico Entregable N°1</ins>
### Interfaces de Usuario e Interacción 
### Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas
#### Carli Marlene 
---
### Abstract
Dibujo de figuras geométricas en Canvas HTML y uso de eventos para responder a la interacción del usuario a través de mouse y teclado.

### Trabajo requerido:
- Dibujar figuras de diferente tamaño en posiciones al azar del canvas utilizando
clases y objetos. Las figuras pueden ser círculos, rectángulos, etc.
- Implementar funcionalidad para verificar si un punto se encuentra dentro de una
figura. Usar la posición del mouse como punto a verificar. Agregar los métodos
correspondientes al diseño del ejercicio anterior.
- Implementar la funcionalidad necesaria para mover las figuras dentro del canvas:
    - Mover una figura seleccionada utilizando el mouse (arrastrar) requerido
    - Mover una figura seleccionada utilizando el teclado. Para Bonus.

### Funcionalidades implementadas: 

- **Dibujo de diez figuras de tres tipos**: rectángulos, círculos y elipses.
    - Las figuras se dibujan en posiciones aleatorias del canvas.
    - Los colores de fondo son elegidos de forma aleatoria entre una paleta aleatoria de colores análogos.
- Efecto de **"hover"** sobre las figuras:
    - Al pasar el mouse por encima de las figuras estas cambian de color. Al salir el mouse de las mismas estas vuelven a su color original.
- **Drag & Drop de figuras**:
    - Al presionar y arrastrar una figura esta seguirá el movimiento del mouse.
- **Mover una figura con el teclado**:
    - Al presionar y soltar el mouse sobre una figura esta quedará seleccionada y se podrá mover usando las flechas del teclado.
    - Se implementaron las 4 direcciones y las diagonales, para las cuales *se deben presionar dos teclas a la vez*.
- **Efecto de selección de figuras**:
    - Al seleccionar una figura se dibujará un borde con el fin de resaltar la figura seleccionada. Al perderse la selección el borde desaparece.

### Ejecución 

El trabajo fue desarrollado utilizando el navegador Firefox v112.0 y un servidor web de test en Python.
También fue probado con la extensión LiveServer de VS Code y Chrome como navegador.