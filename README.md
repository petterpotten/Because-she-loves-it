# 🖤 Because She Loves It

Una plantilla interactiva de página web con estética Ghibli para crear mensajes personalizados especiales. Incluye una pizarra de corcho con fotos arrastrables, música de fondo, personajes animados y tu playlist de Spotify favorita.

![Preview](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

> **📱 Nota importante:** Esta rama (`mainResponsive`) está optimizada para **dispositivos móviles**. Si necesitas la versión para escritorio/web, cambia a la rama [`main`](../../tree/main).

## ✨ Características

- 🎵 Música de fondo automática (Merry-Go-Round of Life)
- 📸 Pizarra de corcho interactiva con 8 fotos arrastrables
- 🎨 Animaciones estilo Studio Ghibli (Kiki y Haku volando)
- 🌟 Fondo animado con estrellas
- 🎧 Reproductor de Spotify integrado
- 💌 Mensaje personalizable
- 📱 Optimizada para dispositivos móviles (versión web/escritorio en rama `main`)

## 🚀 Cómo usar esta plantilla

### 1. **Personaliza tu mensaje**

Abre el archivo `script.js` y modifica el mensaje en la variable `mensaje`:

```javascript
const mensaje = `🖤 Tu título aquí 🖤

Escribe tu mensaje personalizado aquí.
Puedes usar múltiples líneas
y expresar lo que desees.

— Tu nombre
PS. Tus notas adicionales aquí <3`;
```

### 2. **Agrega tus fotos**

1. Ve a la carpeta `assets/img/`
2. Reemplaza las imágenes `Jess0.jfif` hasta `Jess7.jfif` con tus propias fotos
3. Asegúrate de nombrarlas exactamente igual: `Jess0.jfif`, `Jess1.jfif`, `Jess2.jfif`, etc.
4. Formato recomendado: `.jfif`, `.jpg` o `.png` (si usas otro formato, actualiza las extensiones en `index.html`)

### 3. **Cambia la playlist de Spotify**

1. Ve a Spotify y abre la playlist que deseas compartir
2. Haz clic en los tres puntos (**···**) → **Compartir** → **Insertar playlist**
3. Copia el código iframe que te proporciona Spotify
4. Abre `index.html` y reemplaza el iframe existente (busca la sección con `spotify.com/embed`)

```html
<!-- Reemplaza este iframe con el tuyo -->
<iframe data-testid="embed-iframe" 
    style="border-radius:12px; opacity: 0.7; filter: blur(0.3px) brightness(0.9);"  
    src="TU_URL_DE_SPOTIFY_AQUÍ" 
    width="100%" 
    height="352" 
    frameBorder="0" 
    allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy">
</iframe>
```

### 4. **Opcional: Cambia la música de fondo**

Si deseas usar otra canción de fondo:

1. Coloca tu archivo de audio en `assets/sounds/`
2. Abre `index.html` y actualiza la línea:

```html
<audio id="bg-music" src="assets/sounds/TU_CANCION.mp3" preload="auto" loop></audio>
```

### 5. **Opcional: Personaliza las imágenes de Ghibli**

Puedes reemplazar los personajes animados:
- `assets/video/kiki8bits.gif` - Kiki volando
- `assets/img/haku_chihiro.png` - Haku volando
- `assets/img/ourhands_ghibli.png` - Imagen del marco central

## 📂 Estructura del proyecto

```
Because-she-loves-it/
├── index.html          # Página principal
├── style.css           # Estilos y animaciones
├── script.js           # Lógica e interactividad
├── README.md           # Este archivo
└── assets/
    ├── img/
    │   ├── Jess0.jfif a Jess7.jfif  # Tus 8 fotos
    │   ├── haku_chihiro.png          # Personaje Haku
    │   └── ourhands_ghibli.png       # Imagen del marco
    ├── sounds/
    │   └── Merry-Go-Round of Life.mpeg  # Música de fondo
    └── video/
        └── kiki8bits.gif             # Kiki animada
```

## 🎮 Funcionalidades interactivas

- **Click en cualquier parte**: Activa la música de fondo
- **Arrastra las fotos**: Las fotos en la pizarra se pueden mover y acomodar
- **Animaciones automáticas**: Kiki y Haku vuelan por la pantalla
- **Estrellas de fondo**: Animación continua de estrellas

## 🌐 Despliegue

Puedes desplegar esta plantilla fácilmente en:

- **GitHub Pages**: Sube el repositorio y activa GitHub Pages en la configuración
- **Netlify**: Arrastra la carpeta del proyecto a [netlify.com/drop](https://app.netlify.com/drop)
- **Vercel**: Conecta tu repositorio de GitHub a Vercel
- O simplemente abre `index.html` en tu navegador local

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3 (Animaciones y Grid)
- JavaScript Vanilla
- Spotify Web Playback

## 📝 Notas importantes

- El formato de las imágenes puede ser `.jfif`, `.jpg` o `.png`, pero asegúrate de que las extensiones en `index.html` coincidan con tus archivos
- La música se reproduce automáticamente después del primer click (requerido por navegadores modernos)
- Las fotos mantienen su posición al arrastrarlas dentro de la pizarra

## 👤 Autor

**by.petterpotten**

Si usas esta plantilla, me encantaría verlo! Etiquétame en tus redes:

- GitHub: [@petterpotten](https://github.com/petterpotten)
- Instagram: [@by.petterpotten](https://www.instagram.com/by.petterpotten/)
- Facebook: [bypetterpotten](https://www.facebook.com/bypetterpotten/)
- Repositorio original: [Because-she-loves-it](https://github.com/petterpotten/Because-she-loves-it)

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo, modificarlo y compartirlo. Solo te pido que:
- Menciones al autor original
- Compartas tus creaciones (¡me encantaría verlas!)

## 💝 Créditos

- Música: "Merry-Go-Round of Life" - Joe Hisaishi (Howl's Moving Castle OST)
- Inspiración visual: Studio Ghibli
- Personajes: Kiki's Delivery Service & Spirited Away

---

**Hecho con 🖤 para crear momentos especiales**

Si te gustó esta plantilla, dale una ⭐ al repositorio!
