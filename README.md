# Misión Funeral Guzmán — Sitio web

Landing page estática (HTML/CSS/JS puro, sin frameworks ni build) lista para subir a GitHub y publicar en Vercel.

## 1. Antes de publicar — pendientes que debes completar

Busca `[teléfono de contacto]` en `index.html` y reemplázalo por su número real. También reemplaza el número en los enlaces de WhatsApp (`https://wa.me/5210000000000`) por el número real en formato `52` + 10 dígitos, sin espacios ni signos.

Archivos donde aparecen:
- `index.html` (botón del hero, sección de contacto, footer, botón flotante de WhatsApp)

## 2. Conectar el formulario de contacto

El formulario todavía no envía datos a ningún lado. La forma más rápida y gratuita:

1. Crea una cuenta en [formspree.io](https://formspree.io)
2. Crea un formulario nuevo y copia tu "endpoint" (algo como `https://formspree.io/f/xxxxxxx`)
3. Abre `script.js` y pega esa URL en la línea:
   ```js
   const FORM_ENDPOINT = ''; // <-- pega aquí tu endpoint
   ```

## 3. Subir el proyecto a GitHub

Desde esta carpeta, en tu computadora:

```bash
git init
git add .
git commit -m "Sitio Misión Funeral Guzmán"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/mision-funeral-guzman.git
git push -u origin main
```

(Antes crea el repositorio vacío en github.com → "New repository", sin marcar ningún checkbox de inicialización).

## 4. Publicar en Vercel

1. Entra a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub
2. "Add New..." → "Project"
3. Selecciona el repositorio `mision-funeral-guzman`
4. Framework Preset: **Other** (no necesita build, es HTML estático)
5. Deja Build Command y Output Directory vacíos
6. Clic en "Deploy"

En menos de un minuto tendrás tu sitio en una URL tipo `mision-funeral-guzman.vercel.app`. Cada vez que hagas `git push` a `main`, Vercel actualizará el sitio automáticamente.

## 5. Dominio propio (opcional)

En el proyecto dentro de Vercel → Settings → Domains, puedes conectar un dominio propio (por ejemplo `misionfuneralguzman.com`) si ya lo tienes o quieres comprarlo.

## Estructura del proyecto

```
index.html    → contenido y estructura del sitio
styles.css    → estilos (colores, tipografía, layout)
script.js     → menú móvil, año del footer, envío del formulario
```
