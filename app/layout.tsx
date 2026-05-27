import "./globals.css";

export const metadata = {
  title: "Asasanta Nexus",
  description: "AI-powered digital infrastructure for Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className="bg-black text-white antialiased">
        {children}
      </body>

    </html>
  );
}