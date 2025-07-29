# Trouve ton Artisan 🛠️


## 📁 Structure du projet

```
trouve-ton-artisan/
├── backend/               # API Express (Node.js + Sequelize)
├── frontend/              # Frontend React (Vite + Bootstrap)
├── sql/                   # Scripts SQL
│   ├── insert.sql         # Données d'exemple à insérer
│   └── schema.sql         # Schéma de la base de données
├── .gitignore
├── .gitattributes
```
## Présentation du site

Page d'accueil du site avec toujours les meilleurs artisans du site
![Page d'accueil (desktop)](optimized_images/screenshot_1.png)

Site entièrement optimisé pour PC/mobile
![Page d'accueil (mobile)](optimized_images/screenshot_2.png)

Un listing complet et entièrement paramètrable de la recherche des artisans du site
![Listing des artisans](optimized_images/screenshot_3.png)

Fiche artisan pour chaque artisan /artisans/(id de l'artisan)
![Fiche artisan](optimized_images/screenshot_4.png)

Dashboard Admin fonctionnel /admin
![Dashboard admin](optimized_images/screenshot_5.png)



## ⚙️ Backend

Le backend repose sur :
- **Node.js + Express**
- **Sequelize** pour l'ORM
- **MySQL** comme base de données

Routes principales :
- `GET /api/artisans` : liste des artisans
- `GET /api/artisan/:id` : détail d’un artisan
- `GET /api/categories` : liste des catégories
- `GET /api/specialites` : liste des spécialités

La configuration de la BDD est dans `.env`. Exemple :
```
DB_HOST=localhost
DB_NAME=trouve
DB_USER=root
DB_PASSWORD=Admin
FRONT_URL=http://localhost:5173
```

Lancement :
```bash
cd backend
npm install
npm run dev
```

## 💻 Frontend

Réalisé en :
- **React.js**
- **Vite**
- **React Router**
- **Bootstrap 5**

Pages disponibles :
- Accueil
- Liste des artisans (filtrable)
- Fiche artisan
- Contact (Formspree)
- Mentions légales, Accessibilité, Cookies (en construction)
- Dashboard admin

Lancement :
```bash
cd frontend
npm install
npm run dev
```

## 🛢️ Base de données

- Le fichier `schema.sql` contient la création des tables.
- Le fichier `insert.sql` contient les jeux de données.

Import recommandé :
```bash
mysql -u root -p trouve < sql/schema.sql
mysql -u root -p trouve < sql/insert.sql
```

## ✅ Fonctionnalités clés

- 🎨 Interface utilisateur fluide et responsive
- 📚 Routing frontend (React Router)
- 🔒 Sécurité minimale avec Helmet & CORS
- 🔍 Filtres dynamiques
- 📬 Formulaire de contact (Formspree)
- 🗃️ Architecture claire et modulaire
