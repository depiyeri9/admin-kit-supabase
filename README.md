# Admin Kit Supabase

Reusable admin dashboard components for managing Supabase projects with a shared schema structure. Includes routing, access control, and customizable UI & terminology.

---

## ✨ Features

- 🔐 Auth-protected admin interface (email/password)
- 🔁 Connects to shared Supabase schema via `project_id`
- 🧩 Modular: add only the admin if needed
- 🎨 Configurable UI via Tailwind tokens
- 💬 Flexible terminology per project (e.g. "Products" → "Merchandise")

---

## 📦 Installation

```bash
npm install "https://github.com/depiyeri9/admin-kit-supabase/tarball/x.x.x",
# or
yarn add "https://github.com/depiyeri9/admin-kit-supabase/tarball/x.x.x",
```

---

## 🧠 Assumptions

This admin-kit expects:

- Supabase database with a structure similar to the provided schema (projects, products, articles, gallery_items, testimonials)
- Supabase RLS & auth properly set up
- Project using Tailwind CSS & React (with `shadcn/ui`)
- Images/Assets passed as URL strings (no file picker)
- Each project knows its own `project_id` (from `.env`)

---

## ⚙️ Configuration

Create a config file (`adminConfig.ts`) like this:

```ts
import type { AdminConfig } from "admin-kit-supabase";

export const adminConfig: AdminConfig = {
  projectId: "your-project-id-here",
  supabaseUrl: "https://your-id.supabase.co",
  supabaseKey: "SUPABASE_PUBLISHABLE_KEY",
  terminology: {
    products: "Merchandise",
    testimonials: "Post-It Wall",
    galleryItems: "Photo Booth",
    articles: "Journal",
  },
  tailwindTheme: {
    colors: {
      primary: "#ff5722",
      background: "#fefefe",
    },
    fontFamily: {
      heading: ["'Poppins'", "sans-serif"],
      body: ["'Inter'", "sans-serif"],
    },
  },
};
```

---

## 🚀 Usage

Wrap your app with the admin context:

```tsx
// src/App.tsx
import { AdminKit } from "admin-kit-supabase";
import { adminConfig } from "./adminConfig";

export default function App() {
  return (
    <AdminKit config={adminConfig}>
      <Route path="/" element={<Index />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/locations" element={<Locations />} />
      {/* your other routes */}
    </AdminKit>
  );
}
```

---

## 🧪 Development

Install dependencies and start dev server:

```bash
npm install
npm run start
```

To build the package:

```bash
npm run build
```

---

## 📄 License

MIT
