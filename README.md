# 🌿 Habita – Frontend (React) 🌿

Bienvenido al repositorio del **frontend web de Habita**, una aplicación de bienestar emocional que combina inteligencia artificial 🤖 y voz 🗣️ para acompañarte día a día. Esta interfaz, desarrollada con **React ⚛️**, está diseñada para ser accesible, cálida y funcional, conectando al usuario con herramientas de autocuidado personalizadas 🌱.

------

## 🚀 Descripción del proyecto

Este repositorio contiene el código fuente del frontend en React de **Habita**. Se comunica con una API RESTful y servicios de terceros como **Supabase**, **ElevenLabs** y **Tavus** para ofrecer funcionalidades como:

- ✅ Check-ins emocionales
- 🧘 Rutinas diarias
- 📊 Seguimiento de hábitos

------

## 📦 Tecnologías utilizadas

- ⚛️ React 18+
- 🧭 React Router
- 🧠 Context API
- 🔗 Axios
- 🎨 Tailwind CSS o CSS Modules
- ⚡ Vite o Create React App
- 🛡️ Supabase (autenticación y base de datos)
- 🔔 Firebase (notificaciones push)
- 🧬 Integración futura con Tavus y ElevenLabs

------

## 📁 Estructura del proyecto (Clean Architecture)

El frontend está organizado aplicando los principios de **Clean Architecture** 🧼, manteniendo separación de responsabilidades, escalabilidad y claridad de código.

```
perlCopiarEditarhabita-react-frontend/
├── public/
│   └── index.html                  # 🌐 HTML base
├── src/                            # 💻 Código fuente principal
│   ├── presentation/              # 🎨 Interfaz visual
│   │   ├── components/            # 🧩 Componentes atómicos y moleculares
│   │   ├── layouts/               # 🧱 Estructuras reutilizables (Header, Footer)
│   │   ├── pages/                 # 📄 Vistas principales (Inicio, CheckIn, Hábitos)
│   │   └── App.jsx                # 🧠 Rutas y layout general
│
│   ├── domain/                    # 🧠 Lógica del negocio
│   │   ├── models/                # 🧬 Tipos y estructuras de datos
│   │   └── usecases/             # 📚 Casos de uso (check-in, registro, etc.)
│
│   ├── infrastructure/           # 🌍 Comunicación externa
│   │   ├── api/                   # 🔗 Axios y endpoints
│   │   ├── supabase/              # 🔐 Autenticación y gestión con Supabase
│   │   └── firebase/              # 🔔 Notificaciones push
│
│   ├── shared/                   # 🛠️ Código reutilizable
│   │   ├── constants/            # 📌 Constantes globales
│   │   ├── utils/                # 🧮 Funciones de utilidad
│   │   ├── hooks/                # 🪝 Custom React Hooks
│   │   └── context/              # 🧠 Estado global con Context API
│
├── .gitignore                     # 🚫 Archivos ignorados por Git
├── .prettierrc                    # 🎨 Configuración de estilos con Prettier
├── eslint.config.js               # 🧹 Reglas de linting
├── index.html                     # 🌐 HTML raíz (en public o raíz según config)
├── package.json                   # 📦 Dependencias y scripts
├── package-lock.json              # 📑 Lock de dependencias
├── README.md                      # 📘 Documentación del proyecto
├── tsconfig.json                  # ⚙️ Configuración general de TypeScript
├── tsconfig.app.json              # 🧩 Configuración específica para la app
├── tsconfig.node.json             # 🖥️ Configuración específica para entorno Node
├── vite.config.ts                 # ⚡ Configuración de Vite (bundler)
```

### 🧠 Breve descripción de las capas:

- **presentation/**: Interfaz de usuario. Todo lo que el usuario ve 👀.
- **domain/**: Lógica central del negocio, sin dependencias externas 🧠.
- **infrastructure/**: Comunicación con APIs y servicios externos 🌐.
- **shared/**: Código reutilizable entre todas las capas 🔁.

------

## ⚙️ Instalación y configuración

### 1️⃣ Clonar el repositorio

```
bashCopiarEditargit clone https://github.com/tuusuario/habita-react-frontend.git
cd habita-react-frontend
```

### 2️⃣ Instalar las dependencias

```
nginx


CopiarEditar
npm install
```

### 3️⃣ Configurar las variables de entorno

Crea un archivo `.env` basado en `.env.example`:

```
iniCopiarEditarVITE_API_BASE_URL=https://api.habita.app
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_KEY=your_public_key
```

### 4️⃣ Ejecutar la aplicación

```
arduino


CopiarEditar
npm run dev
```

------

## 🧪 Ejemplos de uso

### 🎙️ Check-in emocional

```
jsxCopiarEditarimport EmotionalCheckIn from './components/EmotionalCheckIn';

function HomePage() {
  return <EmotionalCheckIn userId="12345" />;
}
```

### 📈 Seguimiento de hábitos

```
jsxCopiarEditarimport HabitTracker from './components/HabitTracker';

<HabitTracker habits={["Dormir bien", "Salir al sol", "Cuidar pantallas"]} />
```

### 💬 Frase inspiradora en la UI

```
jsxCopiarEditar<blockquote className="text-center italic text-green-600 mt-4">
  “Hoy es un buen día para empezar de nuevo. No estás solo/a.” 🌱
</blockquote>
```

------

## 🔌 Integración con el backend

El frontend consume servicios RESTful, alojados en Supabase y otros proveedores. Aquí algunos endpoints:

| 🧠 Funcionalidad     | ⚙️ Método | 🌍 Endpoint              |
| ------------------- | -------- | ----------------------- |
| Check-in emocional  | POST     | /api/emotion-checkin    |
| Obtener hábitos     | GET      | /api/habits/:userId     |
| Registrar rutina    | POST     | /api/habits/register    |
| Notificaciones push | POST     | /api/notifications/send |



### 🔧 Ejemplo con Axios

```
jsCopiarEditarimport axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const sendEmotionCheckIn = (data) =>
  api.post('/emotion-checkin', data);
```

------

## 🤝 Contribuciones

¿Quieres ayudar a mejorar este proyecto? 💡

1. Haz un fork del repositorio.
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Realiza tus cambios y haz commit.
4. Haz push a tu rama.
5. Abre un Pull Request 🛠️

------

## 👨‍💻 Desarrolladores principales

Estos son los miembros principales que contribuyeron al desarrollo del frontend de **Habita**, tanto en React como en Flutter:

- 🚀 [**addsdev-campuslands**](https://github.com/addsdev-campuslands) – Desarrollador frontend React y Flutter
- 🎩 [**Santiago Arenas**](https://github.com/Arenas07) – Desarrollador frontend React y Flutter
- 🧠 [**Julián Camilo Villamizar Montañez**](https://github.com/JulianCVM) – Desarrollador frontend React y Flutter
- 🧰 [**Kevin Angarita**](https://github.com/kevincito0987) – Desarrollador frontend React y Flutter

> Construido con compromiso por un equipo que combina tecnología, empatía y bienestar 🌱💻

------

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.
 Puedes usar, modificar y distribuir libremente con la atribución adecuada 📜.

------

## 🌟 Frase inspiradora

**"Con React ⚛️ damos vida a una interfaz que no solo responde al clic, sino también al corazón del usuario 💚."**