// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Carpeta de salida de Vite
const distPath = path.join(__dirname, 'dist');

// Servir archivos estáticos
app.use(express.static(distPath));

// Fallback para SPA: redirige todas las rutas a index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});
