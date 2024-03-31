
## SUBIDA DE ARCHIVOS EN BACKEND

1. Instalar en backend:

npm i -D @types/multer

2. Recibir archivo en un controlador nestjs:

```typescript
@Post()
@UseInterceptors(FileInterceptor('file'))
async create(@UploadedFile() file: Express.Multer.File, @Body() author: Author) {
    console.log(file);
    console.log(author);
    if (file) {
        // guardar el archivo y obtener la url
        console.log(file.name);
    }
}
```

3. Configurar el renombrado de archivo y su almacenamiento en carpeta uploads:

app.module.ts en imports:

```typescript
MulterModule.register({
    storage: diskStorage({
    // carpeta destino donde guardar los archivos
    destination: './uploads',
    // Opcional: generar un nombre único para el archivo antes de guardarlo:
    // 1f82d390-d902-4aed-ad23-d543f56f2433.png
    filename: (req, file, callback) => {
        let fileName = uuidv4() + extname(file.originalname);
        callback(null, fileName);
    }
    })
}),
```

Crear carpeta uploads dentro de la carpeta backend.

4. Configurar la app nestjs en main.ts para servir los archivos mediante url:

main.ts:

```typescript
app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
```

5. Pruebas

Subir un archivo desde Angular y probar que aparece en la carpeta uploads

Comprobar que es accesible mediante la url:

http://localhost:3000/uploads/19ad4024-7722-4f73-af83-e6e94439912c.webp

