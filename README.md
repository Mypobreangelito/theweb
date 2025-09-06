# theweb — Astro Portfolio listo para GitHub Pages

**Repo destino:** https://github.com/mypobreangelito/theweb  
**URL final:** https://mypobreangelito.github.io/theweb/

## Subir (método rápido por navegador)
1) Entra al repo mypobreangelito/theweb → **Add file → Upload files**.
2) Arrastra TODO el contenido de esta carpeta (no el .zip).
3) Commit a la rama **main**.
4) Ve a **Settings → Pages → Source: GitHub Actions**.
5) Abre **Actions** y espera a que termine **Deploy Astro to GitHub Pages**.

## Local (opcional)
```bash
npm i
npm run dev
# build de prueba
npm run build
npm run preview
```

## Dónde editar contenido
- `src/pages/index.astro`, `presentacion.astro`, `proyectos.astro`, `contacto.astro`
- Proyectos: `src/content/projects/*.md`
- CV: reemplaza `public/Luis_Ayala_CV.pdf`
