import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2> ALI736-WDS </h2>
        <Link href="/add-customer"> Add Customer </Link>
      </header>

      <div className="main">{children}</div>

      <footer className="footer">
        <a href="#" target="_blank" rel="noreferrer">
          ALI736-WDS
        </a>
        Next.js Course | CRM Project
      </footer>
    </>
  );
}

export default Layout;
