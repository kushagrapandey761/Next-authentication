import { logout } from '@/actions/auth-actions';
import '../globals.css';
export const metadata = {
  title: "Next Auth",
  description: "Nextjs authentication",
};
export default function AuthRootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header id='auth-header'>
          <p>Welcome back!</p>
          <form action={logout}>
            <button>Logout</button>
          </form>
        </header>
        {children}
      </body>
    </html>
  );
}
