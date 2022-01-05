import styles from '~/styles/global.css'

export function links() {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans:wght@400;700&display=swap" },
    { rel: "stylesheet", href: styles },
  ];
}

export default function RegularStylesheets() {
  return (
    <div>
      <h1>Regular Stylesheets</h1>
    </div>
  );
}
