## Features

- 💸 Add, edit, and delete income or expense entries
- 🔍 Filter the list by transaction type
- 📊 At-a-glance summary of total income, expenses, and balance
- 🌐 Internationalization (English / Azerbaijani) with language persistence
- 💾 LocalStorage-backed mock API built with RTK Query
- 📱 Responsive layout tailored for desktop and mobile

## Tech Stack

- **Framework:** React 19 + Vite
- **Language:** TypeScript
- **Routing:** React Router
- **State Management:** Redux Toolkit + RTK Query
- **UI Library:** Material UI (MUI)
- **Styling:** Custom theme + MUI `sx` styling
- **Internationalization:** i18next + react-i18next
- **Forms & Validation:** Formik + Yup
- **Tooling:** ESLint, TypeScript strict mode

## Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
```

Open the app at the URL shown in your terminal (default: `http://localhost:5173`).

## Project Structure

```
src/
  components/
    Home/          # Home dashboard UI
    shared/        # Reusable components (Header, inputs, buttons, etc.)
  hooks/           # Custom hooks
  i18n/            # i18next configuration
  store/           # Redux store, RTK Query services
  translations/    # en/az translation files
  pages/           # Routed pages
  utils/           # Utility helpers
```

## Internationalization (i18n)

Translations live under `src/translations`.  
Language selection is handled in the header and persisted to `localStorage`, so returning users see their previous choice on load.

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/my-update`
3. Commit changes: `git commit -m "Add my update"`
4. Push and open a pull request

## License

This project is open source under the MIT License. See [`LICENSE`](LICENSE) for details.
