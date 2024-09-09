# Coding Standards

## 1. File and Component Naming

-   **Files:** Use kebab-case for file names (e.g., `header-component.js`).
-   **Components:** Use PascalCase for React components (e.g., `HeaderComponent`).

## 2. Tailwind CSS Usage

-   **Utility-First:** Use Tailwind’s utility classes directly in JSX. Avoid custom CSS unless necessary.
-   **Responsive Design:** Utilize Tailwind's responsive utilities (`sm:`, `md:`, `lg:`) for a mobile-first approach.
-   **Minimal Customization:** Limit customizations in `tailwind.config.js`. Stick to defaults unless a project-wide change is needed.

## 3. JavaScript and JSX

-   **Variables:** Use camelCase for variable and function names (e.g., `fetchUserData`, `isLoggedIn`).
-   **Component Logic:** Keep components focused on a single responsibility. Avoid embedding complex logic; delegate it to helper functions or custom hooks.

## 4. File Structure

-   **Pages:** Store page components in the `/pages` directory. Use subdirectories for related pages (e.g., `/pages/home/hero-section.js`).
-   **Components:** Place reusable components in `/components` with descriptive, single-purpose names (e.g., `/components/FeatureCard.js`).

## 5. Performance Optimization

-   **Image Optimization:** Use Next.js’ `<Image>` component for handling images efficiently.
-   **Use Image Standard:** Convert any image where necessary to `webp`. Use `svg` for logos.

## 6. Version Control

-   **Branching:** Use concise, descriptive branch names (e.g., `feature/header`, `fix/login-bug`).
-   **Commit Messages:** Keep them short and descriptive (e.g., `Add header component`, `Fix login bug`).
-   **Review:** Perform pair reviews on individual code before merging to the `dev` branch, which is then tested and finally merged to the `main` branch.

## 7. Documentation

-   **Essential Only:** Document the project setup, key decisions, and any custom configurations. Keep it minimal and to the point.

## 8. Formatting

-   **Prettier:** Run the following command to prettify your code `npx prettier . --write`.

## Locales

-   The locales files are managed under _locales/_
