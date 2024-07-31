import "./globals.css";

export const metadata = {
  title: "LaughLab",
  description: "Get ready to laugh with our joke generator!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
