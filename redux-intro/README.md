Red Social - README
Descripción del Proyecto
Este proyecto es una red social básica desarrollada con React, donde los usuarios pueden registrarse, iniciar sesión, crear publicaciones, interactuar con otros usuarios, y gestionar su perfil. El diseño está optimizado para una experiencia de usuario fluida y se implementan buenas prácticas de desarrollo como el uso de Redux para la gestión de estado y SASS para los estilos.

Funcionalidades
Registro de usuarios: Permite a los nuevos usuarios crear una cuenta.
Login de usuarios: Los usuarios pueden iniciar sesión y acceder a sus datos.
Visualización de publicaciones: Todos los usuarios pueden ver publicaciones en el feed.
Crear, editar y eliminar publicaciones: Los usuarios logeados pueden gestionar sus propios posts.
Dar/quitar Like: Los usuarios pueden dar y quitar "Me gusta" a las publicaciones.
Buscar: Los usuarios pueden buscar otros perfiles o publicaciones.
Perfil: Visualización y edición del perfil del usuario, junto con sus publicaciones.
Comentarios: Los usuarios pueden comentar en publicaciones.
Estructura del Proyecto
Componentes Principales:
Register: Formulario de registro.
Login: Formulario de inicio de sesión.
Home: Pantalla principal donde se ven todas las publicaciones.
Posts: Lista de publicaciones.
Post: Componente para una publicación individual.
AddPost: Formulario para crear nuevas publicaciones.
PostDetail: Vista de detalle de un post con comentarios.
AddComment: Añadir comentarios a una publicación.
Profile: Visualización del perfil y posts del usuario.
Header y Footer: Componentes comunes para navegación y pie de página.
Rutas
/home: Pantalla principal con el feed.
/login: Pantalla de inicio de sesión.
/register: Registro de usuario.
/profile: Vista de perfil del usuario logeado.
Tecnologías Utilizadas:
React con React Router para la navegación.
Redux para la gestión de estado.
SASS para los estilos.
Git: Control de versiones, con dos ramas principales main y develop.
