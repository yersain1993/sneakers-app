### **Creating Chirps:**

### ***routes/web.php:***

Este código es un archivo de rutas en un proyecto de Laravel, un framework de PHP. Las rutas en Laravel se utilizan para definir cómo las solicitudes HTTP deben ser manejadas por la aplicación. Vamos a desglosar el código:

### 1. **Importación del Controlador**
```php
use App\Http\Controllers\ChirpController;
```
Aquí se importa el controlador `ChirpController`, que se utilizará para manejar las solicitudes relacionadas con "chirps" (que podrían ser, por ejemplo, publicaciones o mensajes cortos).

### 2. **Definición de Rutas**
```php
Route::view('/', 'welcome');
```
Esta línea define una ruta para la URL raíz (`/`). Cuando un usuario visita la raíz del sitio, se mostrará la vista `welcome`. Esto es típico en aplicaciones Laravel para mostrar una página de bienvenida.

```php
Route::get('chirps', [ChirpController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('chirps');
```
- **`Route::get('chirps', [ChirpController::class, 'index'])`**: Define una ruta GET para la URL `chirps`. Cuando un usuario visita esta URL, se llamará al método `index` del `ChirpController`.
  
- **`->middleware(['auth', 'verified'])`**: Aplica dos middlewares a esta ruta:
  - `auth`: Asegura que el usuario esté autenticado.
  - `verified`: Asegura que el usuario haya verificado su dirección de correo electrónico (si la aplicación tiene verificación de correo electrónico habilitada).

- **`->name('chirps')`**: Asigna un nombre a la ruta, lo que permite referenciarla fácilmente en otras partes de la aplicación, como en vistas o redirecciones.

```php
Route::view('dashboard', 'dashboard')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');
```
- **`Route::view('dashboard', 'dashboard')`**: Define una ruta para la URL `dashboard`. Cuando un usuario visita esta URL, se mostrará la vista `dashboard`.
  
- **`->middleware(['auth', 'verified'])`**: Aplica los mismos middlewares que en la ruta anterior (`auth` y `verified`).

- **`->name('dashboard')`**: Asigna el nombre `dashboard` a esta ruta.

```php
Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');
```
- **`Route::view('profile', 'profile')`**: Define una ruta para la URL `profile`. Cuando un usuario visita esta URL, se mostrará la vista `profile`.
  
- **`->middleware(['auth'])`**: Aplica el middleware `auth`, que asegura que el usuario esté autenticado.

- **`->name('profile')`**: Asigna el nombre `profile` a esta ruta.

### 3. **Inclusión de Rutas de Autenticación**
```php
require __DIR__.'/auth.php';
```
Esta línea incluye un archivo de rutas adicional (`auth.php`) que probablemente contiene las rutas relacionadas con la autenticación, como el inicio de sesión, registro, recuperación de contraseña, etc. Esto es común en aplicaciones Laravel que utilizan el paquete `laravel/ui` o `laravel/breeze` para manejar la autenticación.

### Resumen
- **Ruta raíz (`/`)**: Muestra la vista `welcome`.
- **Ruta `chirps`**: Muestra una lista de "chirps" (manejada por `ChirpController@index`), solo para usuarios autenticados y verificados.
- **Ruta `dashboard`**: Muestra el panel de control, solo para usuarios autenticados y verificados.
- **Ruta `profile`**: Muestra el perfil del usuario, solo para usuarios autenticados.
- **Rutas de autenticación**: Se incluyen desde `auth.php`.

Este archivo de rutas es fundamental para definir cómo los usuarios interactúan con la aplicación y qué acciones pueden realizar según su estado de autenticación y verificación.

### ***app/Http/Controllers/ChirpController.php:***

**Controlador `ChirpController` en Laravel:**  
- **Método `index()`**:  
  - Devuelve la vista `chirps` (para listar "chirps").  
  - Actualmente **no envía datos** a la vista (array vacío `[]`).  
- **Uso**: Ruta `/chirps` muestra la vista, pero necesita lógica adicional para cargar datos (ej: chirps desde la BD).  

**Ejemplo de uso futuro (típico):**  
```php
return view('chirps', [
    'chirps' => Chirp::latest()->get() // Enviar datos a la vista
]);
```

### ***resources/views/chirps.blade.php:***

Este código es un fragmento de una vista en un proyecto de Laravel que utiliza **Livewire** (una biblioteca para construir interfaces dinámicas en Laravel) y **Blade** (el motor de plantillas de Laravel). Vamos a desglosarlo paso a paso:

---

### 1. **Estructura General**
```html
<x-app-layout>
    <!-- Contenido -->
</x-app-layout>
```
- **`<x-app-layout>`**: Este es un componente de Blade que representa el diseño general de la aplicación. 
  - En Laravel, los componentes de Blade permiten reutilizar partes de la interfaz de usuario, como el encabezado, el pie de página, la barra lateral, etc.
  - `x-app-layout` es un componente personalizado que probablemente define la estructura base de la aplicación, como el menú de navegación, el título de la página, etc.

---

### 2. **Contenedor Principal**
```html
<div class="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
    <!-- Contenido -->
</div>
```
- Este `div` actúa como un contenedor para el contenido de la página.
- **Clases de Tailwind CSS**:
  - **`max-w-2xl`**: Establece un ancho máximo de `42rem` (un valor común en Tailwind para limitar el ancho del contenido y mejorar la legibilidad).
  - **`mx-auto`**: Centra el contenedor horizontalmente en la página.
  - **`p-4 sm:p-6 lg:p-8`**: Aplica un relleno (padding) responsivo:
    - `p-4`: Padding de `1rem` (16px) en pantallas pequeñas.
    - `sm:p-6`: Padding de `1.5rem` (24px) en pantallas medianas (`sm` breakpoint).
    - `lg:p-8`: Padding de `2rem` (32px) en pantallas grandes (`lg` breakpoint).

---

### 3. **Componentes de Livewire**
```html
<livewire:chirps.create />
<livewire:chirps.list />
```
- **Livewire** es una biblioteca que permite crear interfaces dinámicas en Laravel sin necesidad de escribir JavaScript directamente. Los componentes de Livewire se comportan como componentes de Vue o React, pero se ejecutan en el servidor.

#### a) **`<livewire:chirps.create />`**
- Este es un componente de Livewire llamado `create` dentro de la carpeta `chirps`.
- Probablemente se utiliza para un formulario o interfaz que permite a los usuarios crear nuevos "chirps" (publicaciones o mensajes cortos).
- Livewire manejará la lógica del formulario, la validación y la interacción con el servidor.

#### b) **`<livewire:chirps.list />`**
- Este es otro componente de Livewire llamado `list` dentro de la carpeta `chirps`.
- Probablemente se utiliza para mostrar una lista de "chirps" existentes.
- Livewire se encargará de cargar los datos desde el servidor, actualizar la lista dinámicamente y manejar interacciones como la paginación o la eliminación de "chirps".

---

### 4. **¿Qué hace esta vista?**
- Esta vista está diseñada para mostrar una página donde los usuarios pueden:
  1. **Crear nuevos "chirps"**: A través del componente `<livewire:chirps.create />`.
  2. **Ver una lista de "chirps" existentes**: A través del componente `<livewire:chirps.list />`.
- Todo esto está envuelto en un diseño base (`<x-app-layout>`) que proporciona la estructura general de la aplicación (como la barra de navegación, el pie de página, etc.).

---

### 5. **¿Cómo funciona Livewire aquí?**
- **Livewire** permite que los componentes `<livewire:chirps.create />` y `<livewire:chirps.list />` sean interactivos sin necesidad de recargar la página.
  - Por ejemplo, si un usuario crea un nuevo "chirp" usando el formulario en `<livewire:chirps.create />`, Livewire puede actualizar automáticamente la lista en `<livewire:chirps.list />` sin recargar la página.
  - Livewire maneja las solicitudes AJAX en segundo plano, actualizando solo las partes necesarias de la interfaz.

---

### 6. **Resumen**
- **`<x-app-layout>`**: Define la estructura base de la página.
- **`<div class="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">`**: Contenedor responsivo para el contenido.
- **`<livewire:chirps.create />`**: Componente para crear nuevos "chirps".
- **`<livewire:chirps.list />`**: Componente para listar "chirps" existentes.

Esta vista es un ejemplo de cómo Laravel, combinado con Livewire y Tailwind CSS, permite crear interfaces dinámicas y responsivas de manera eficiente.

### ***resources/views/livewire/chirps/create.blade.php***

Este código es un **componente Livewire/Volt** en Laravel para crear "chirps" (publicaciones cortas). Aquí está su estructura clave:

---

### **Parte PHP (Lógica del Componente)**
1. **Propiedad `$message`**:
   - Campo de texto validado como `required|string|max:255`.
   - Se inicializa como string vacío.

2. **Método `store()`**:
   - Valida el campo `$message`.
   - Crea un nuevo "chirp" asociado al usuario autenticado (`auth()->user()`).
   - Limpia el campo `$message` después de guardar.
   - Dispara el evento `chirp-created` para notificar a otros componentes (ej. actualizar la lista).

---

### **Parte HTML/Vista (Blade)**
```html
<form wire:submit="store">
    <textarea 
        wire:model="message" 
        placeholder="¿Qué estás pensando?"
        <!-- Clases de Tailwind para estilos -->
    ></textarea>
    <x-input-error :messages="$errors->get('message')" /> <!-- Muestra errores -->
    <x-primary-button>Publicar</x-primary-button>
</form>
```

- **`wire:submit="store"`**: Envía el formulario ejecutando el método `store` de Livewire.
- **`wire:model="message"`**: Vincula el textarea a la propiedad `$message` (**actualización en tiempo real**).
- **`x-input-error`**: Muestra errores de validación si existen.
- **`x-primary-button`**: Botón de envío con estilos predefinidos.

---

### **¿Qué hace el componente?**
1. Permite a usuarios **autenticados** escribir y publicar "chirps".
2. Valida que el mensaje no esté vacío y tenga máximo 255 caracteres.
3. Guarda el mensaje en la base de datos y limpia el formulario automáticamente.
4. Es **reactivo**: No requiere recargar la página (gracias a Livewire).

---

### **Flujo de trabajo**:
1. Usuario escribe un mensaje → Livewire valida en tiempo real.
2. Al enviar → Guarda en BD → Limpia el campo.
3. Evento `chirp-created` → Actualiza otros componentes (ej. lista de chirps).

### ***app/Models/User.php:***

**Modelo `User` en Laravel (para usuarios):**  

### **Características principales:**  
1. **Autenticación**:  
   - Extiende `Authenticatable` (manejo de login, sesiones, etc.).  
   - Usa `Notifiable` (envío de notificaciones por email).  

2. **Seguridad**:  
   - **`$fillable`**: Campos asignables en masa (`name`, `email`, `password`).  
   - **`$hidden`**: Campos ocultos en respuestas JSON (`password`, `remember_token`).  
   - **`casts`**:  
     - `password` se almacena **hasheado** (seguridad).  
     - `email_verified_at` como fecha/hora.  

3. **Relación con "Chirps"**:  
   ```php
   public function chirps(): HasMany
   {
       return $this->hasMany(Chirp::class);
   }
   ```  
   - Un usuario puede tener **muchos "chirps"** (relación 1 a N).  
   - Permite acceder a los chirps del usuario:  
     ```php
     $user->chirps; // Colección de Chirp del usuario
     ```  

### **Uso típico**:  
- Registro/login de usuarios.  
- Creación de chirps asociados al usuario:  
  ```php
  auth()->user()->chirps()->create([...]);
  ```  

**Importante**: Este modelo es clave para la autenticación y gestión de usuarios en la aplicación.

### ***app/Models/Chirp.php:***

**Modelo `Chirp` en Laravel (para publicaciones "chirps"):**  

### **Características clave:**  
1. **Datos**:  
   - **`message`**: Único campo asignable masivamente (`$fillable`).  
   - **Relación con `User`**:  
     ```php
     public function user(): BelongsTo
     {
         return $this->belongsTo(User::class);
     }
     ```  
     - Cada "chirp" pertenece a **un usuario** (relación inversa de `User->chirps()`).  

2. **Evento `ChirpCreated`**:  
   - Se dispara automáticamente al **crear** un chirp:  
     ```php
     protected $dispatchesEvents = [
         'created' => ChirpCreated::class,
     ];
     ```  
   - Usado para notificar en tiempo real (ej: actualizar lista de chirps sin recargar).  

3. **Funcionalidad adicional**:  
   - `use HasFactory`: Permite generar datos de prueba con factories.  

### **Uso típico**:  
```php
// Crear un chirp asociado al usuario autenticado
auth()->user()->chirps()->create(['message' => 'Hola mundo']);

// Acceder al usuario de un chirp
$chirp->user; // Devuelve el modelo User
```  

**Importante**: Este modelo es central para almacenar publicaciones y su relación con usuarios, además de habilitar interacciones dinámicas mediante eventos.

### ***database/migrations/<timestamp>_create_chirps_table.php:***

**Migración para la tabla `chirps` en Laravel:**

### **Estructura de la tabla:**
1. **`id`**: Clave primaria autoincremental.
2. **`user_id`**:
   - Clave foránea que referencia a `users.id`.
   - **`constrained()`**: Asegura integridad referencial.
   - **`cascadeOnDelete()`**: Elimina automáticamente los chirps de un usuario si este se borra.
3. **`message`**: Almacena el texto del "chirp" (tipo `VARCHAR`).
4. **`timestamps()`**: Campos `created_at` y `updated_at` automáticos.

### **Funcionalidad:**
- **`up()`**: Crea la tabla al ejecutar la migración.
- **`down()`**: Elimina la tabla si se revierte la migración.

**Relación implícita:**  
Cada "chirp" pertenece a un usuario (`user_id`), permitiendo consultas como:  
```php
$chirp->user; // Devuelve el usuario dueño del chirp
$user->chirps; // Lista de chirps del usuario
```

**Uso:**  
- Define la estructura de la base de datos para almacenar los "chirps".
- Garantiza consistencia (ej: no permite chirps sin usuario válido).

  ### ***Showing Chirps:***

  ### ***resources/views/livewire/chirps/list.blade.php:***

  **Componente Livewire/Blade para listar y gestionar "chirps":**

### 🔧 **Lógica (PHP)**
1. **Datos iniciales**:
   - Carga todos los "chirps" con sus usuarios (`getChirps()`), ordenados del más reciente.
   - Usa `$editing` para controlar qué chirp se está editando.

2. **Eventos**:
   - `chirp-created`: Actualiza la lista al crear un nuevo chirp.
   - `chirp-updated`/`chirp-edit-canceled`: Cancela el modo edición.

3. **Acciones**:
   - **Editar**: Activa el formulario de edición (`edit()`).
   - **Eliminar**: Borra el chirp tras confirmación (`delete()`), con autorización (solo dueño puede borrar).

---

### 🎨 **Vista (Blade)**
- **Estructura**:
  - Listado estilo "feed" con divisores entre chirps.
  - Icono de mensaje y detalles de usuario (nombre, fecha/hora).

- **Funcionalidad UI**:
  - **Dropdown menu** (3 puntos) para dueños: Muestra opciones _Editar_/_Borrar_.
  - **Modo edición**: Muestra componente `<livewire:chirps.edit>` al editar.
  - **Indicador de edición**: Muestra "(edited)" si se modificó.

- **Seguridad**:
  - Botones de edición/borrado solo visibles para el dueño (`@if $chirp->user->is(auth()->user())`).

---

### ⚡ **Livewire en acción**
- **Reactividad**: Actualiza lista automáticamente al crear/editar/borrar.
- **Confirmación**: Dialogo de confirmación antes de borrar (`wire:confirm`).
- **Optimización**: `wire:key` identifica cada chirp para renderizado eficiente.

**Ejemplo de flujo**:  
Usuario edita → Livewire muestra formulario → Actualiza → Lista se refresca automáticamente.

### ***Editing Chirps:***

### ***resources/views/livewire/chirps/edit.blade.php:***

**Componente Livewire/Volt para editar un "Chirp":**

### 🔧 **Lógica (PHP)**
1. **Propiedades**:
   - **`$chirp`**: Recibe el modelo `Chirp` a editar.
   - **`$message`**: Campo validado (`required|string|max:255`), inicializado con el mensaje actual del chirp.

2. **Métodos clave**:
   - **`update()`**:
     - **Autoriza** la acción (usando políticas de Laravel).
     - Valida y actualiza el mensaje del chirp.
     - Dispara evento `chirp-updated` para notificar éxito.
   - **`cancel()`**: Dispara `chirp-edit-canceled` para salir del modo edición.

---

### 🎨 **Vista (Blade)**
- **Formulario** (`wire:submit="update"`):  
  - **Textarea**: Vinculado a `$message` en tiempo real (`wire:model`).
  - **Validación**: Muestra errores debajo del textarea (`x-input-error`).
  - **Botones**:  
    - *Guardar*: Envía el formulario.
    - *Cancelar*: Cierra la edición sin guardar (`wire:click.prevent` evita recargar la página).

---

### 🔒 **Seguridad y Flujo**
- **Autorización**: Solo el dueño del chirp puede editarlo (vía política `update`).
- **Eventos**:  
  - `chirp-updated`: Actualiza la lista de chirps en tiempo real.
  - `chirp-edit-canceled`: Vuelve a mostrar el chirp sin cambios.

---

**Ejemplo de uso**:  
1. Usuario hace clic en "Editar" → Se muestra este componente con el mensaje actual.
2. Edita el texto → Livewire valida en tiempo real.
3. Al guardar → Actualiza BD y cierra el formulario.  
4. Al cancelar → Vuelve al modo de visualización.

### ***app/Policies/ChirpPolicy.php:***

**Política de Autorización `ChirpPolicy` en Laravel:**  
Controla qué acciones puede realizar un usuario sobre los "chirps". Aquí los puntos clave:

### 🔒 **Reglas definidas:**
1. **Actualizar (`update`)**:
   - **Solo el dueño del chirp** puede editarlo:
     ```php
     return $chirp->user()->is($user);
     ```

2. **Eliminar (`delete`)**:
   - Reutiliza la lógica de `update()` → Si puede editar, puede borrar:
     ```php
     return $this->update($user, $chirp);
     ```

3. **Crear (`create`), Ver lista (`viewAny`), Ver uno (`view`), Restaurar/Forzar Eliminación**:
   - **Denegados para todos** (`return false`).

---

### 🛠 **Uso en la aplicación:**
- **Ejemplo en controladores/componentes**:
  ```php
  $this->authorize('update', $chirp); // Verifica si el usuario puede editar
  ```
  - Si no es dueño, Laravel lanza una excepción `403 Forbidden`.

---

### ⚠️ **Notas importantes:**
- **Creación de chirps**: La política actual **bloquea** la creación (`create` retorna `false`).  
  - Si tu aplicación permite crear chirps, debes modificar este método:
    ```php
    public function create(User $user): bool
    {
        return true; // O lógica personalizada (ej: solo usuarios verificados)
    }
    ```

- **Visualización de chirps**: Con `viewAny` y `view` en `false`, los usuarios **no pueden ver chirps**.  
  - Si la lista/chirps son públicos, cambia a `true` o agrega lógica.

---

**¿Por qué es útil?**  
- Centraliza la lógica de permisos.  
- Evita repetir validaciones en múltiples partes del código.  
- Integración limpia con middlewares y componentes de Laravel.

### ***Deleting Chirps:***

Ver en :
  - resources/views/livewire/chirps/list.blade.php
  - app/Policies/ChirpPolicy.php

### ***Notifications & Events:***

### ***app/Notifications/NewChirp.php:***

**Notificación `NewChirp` en Laravel (para enviar emails):**  

### **Funcionalidad**:  
Notifica por **correo electrónico** cuando se crea un nuevo "chirp".  

---

### **Partes clave**:  
1. **Recibe un `Chirp`**:  
   - El constructor guarda el chirp relacionado (`public Chirp $chirp`).

2. **Envía por correo**:  
   - **`via()`**: Define que se envía solo por email (`['mail']`).  
   - **`toMail()`**: Construye el contenido del correo:  
     - **Asunto y saludo**: "New Chirp from {nombre del autor}".  
     - **Mensaje**: Muestra los primeros 50 caracteres del chirp (`Str::limit`).  
     - **Botón**: Enlace a la página principal (`/`).  

3. **En cola (Queueable)**:  
   - Usa el trait `Queueable` para procesar el envío en segundo plano (mejora rendimiento).  

---

### **Ejemplo de correo generado**:  
```
Asunto: New Chirp from Juan Pérez  
------------------------------------  
New Chirp from Juan Pérez  
Hola! Esto es un chirp de ejemplo...  
[Ver en Chirper]  
Gracias por usar nuestra aplicación.  
```

---

### **Uso típico**:  
```php
// En algún lugar de tu código (ej: al crear un chirp)
$user->notify(new NewChirp($chirp));
```

---

### **Personalización**:  
- **Agregar más canales**: Modificar `via()` para incluir `database`, `sms`, etc.  
- **Contenido del email**: Editar `toMail()` (ej: agregar más líneas, estilos CSS).  
- **Cola**: Implementar `ShouldQueue` si se requiere procesamiento asíncrono.  

**Importante**: Esta notificación es útil para mantener a los usuarios informados de nuevas publicaciones en tiempo real.

### ***app/Events/ChirpCreated.php:***

**Explicación del Evento `ChirpCreated` en Laravel:**

Este evento se dispara cuando se crea un nuevo "chirp" y está diseñado para **notificar en tiempo real** a los usuarios. Aquí su estructura clave:

### 1. **Propósito**:
   - **Notificar** a los clientes (ej: navegadores) que un nuevo chirp ha sido creado.
   - Habilitar actualizaciones en tiempo real (sin recargar la página).

### 2. **Características**:
   - **Recibe el chirp creado**:
     ```php
     public function __construct(public Chirp $chirp)
     ```
     - Permite acceder al chirp en listeners o canales de transmisión.

   - **Canales de transmisión**:
     ```php
     public function broadcastOn(): array
     {
         return [new PrivateChannel('channel-name')];
     }
     ```
     - **`PrivateChannel`**: Canal privado (solo usuarios autenticados pueden escuchar).
     - **`'channel-name'`**: Nombre del canal (debe personalizarse, ej: `chirps.{user_id}`).

### 3. **Uso típico**:
   - **Disparar el evento** al crear un chirp:
     ```php
     event(new ChirpCreated($chirp));
     ```
   - **Escuchar en el frontend** (ej: con Laravel Echo):
     ```javascript
     Echo.private('channel-name')
         .listen('ChirpCreated', (data) => {
             console.log('Nuevo chirp:', data.chirp);
         });
     ```

### 4. **🚨 Ajustes necesarios**:
   - **Implementar `ShouldBroadcast`**:
     ```php
     class ChirpCreated implements ShouldBroadcast
     ```
     - Sin esto, el evento no se transmitirá.
   - **Renombrar el canal** a algo relevante (ej: `chirps`).

### 5. **Ejemplo de flujo**:
   1. Usuario crea un chirp → Se dispara `ChirpCreated`.
   2. Laravel transmite el evento al canal `channel-name`.
   3. Frontend recibe el evento y actualiza la lista de chirps.

**Importante**:  
- Los canales privados requieren **autenticación** para suscribirse.
- Para usar broadcasting, configurar un driver como Pusher, Redis o WebSockets.

### ***app/Listeners/SendChirpCreatedNotifications.php:***

**Listener `SendChirpCreatedNotifications` en Laravel:**  
Este código se encarga de **notificar a todos los usuarios** (excepto al autor) cuando se crea un nuevo "chirp". Aquí su funcionamiento clave:

### 🔄 **Flujo de acción**
1. **Evento**: Se dispara cuando un `Chirp` es creado (`ChirpCreated`).
2. **Listener**: Captura el evento y ejecuta `handle()`.
3. **Notificaciones**:
   - Envía una notificación `NewChirp` (correo electrónico) a **todos los usuarios excepto al creador** del chirp.

---

### 📝 **Partes clave del código**
```php
User::whereNot('id', $event->chirp->user_id)->cursor() 
```
- **`whereNot('id', ...)`**: Excluye al usuario autor del chirp.
- **`cursor()`**: Método eficiente para iterar sobre grandes cantidades de usuarios (evita carga en memoria).

```php
$user->notify(new NewChirp($event->chirp));
```
- Usa la notificación `NewChirp` (definida previamente) para informar del nuevo chirpo.

```php
implements ShouldQueue
```
- **Procesamiento en cola**: Las notificaciones se envían en segundo plano (mejora el rendimiento).

---

### ⚠️ **Consideraciones importantes**
- **Escalabilidad**: Si hay miles de usuarios, enviar un correo a todos puede ser lento/costoso.  
  - **Solución típica**: Notificar solo a seguidores del autor o usuarios con preferencias activas.
- **Uso de `cursor()`**: Recomendado para evitar el error `Allowed memory size exhausted` en grandes datasets.

---

### **Ejemplo de uso**
- Cuando un usuario publica un chirpo:
  ```php
  event(new ChirpCreated($chirp)); // Dispara el evento
  ```
- **Resultado**: Todos los usuarios (excepto el autor) reciben un correo con el nuevo chirpo.

**Nota**: Este listener es útil para aplicaciones tipo "red social" donde se quiere notificar actividad en tiempo real.
