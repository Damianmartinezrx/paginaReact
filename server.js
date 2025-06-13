import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const port = process.env.PORT || 8080;

// Para usar __dirname en ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos generados por vite build
app.use(express.static(path.join(__dirname, 'dist')));

// Para cualquier ruta, enviar index.html para que React maneje el routing SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
