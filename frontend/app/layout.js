import "./globals.css";
import Header from "@/components/header/header";


export const metadata = {
  title: "Desafio Anfitriões de Aluguel ",
  icons: {
    icon: "/anfitrioes-img.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
