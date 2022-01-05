import styles from '~/styles/global.css'

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function RegularStylesheets() {
  return (
    <div>
      <h1>Regular Stylesheets</h1>
    </div>
  );
}
