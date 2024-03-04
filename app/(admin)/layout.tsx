import CmsNavBar from "../components/CmsNavBar";
import Provider from "../utils/Provider";
import "./globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <CmsNavBar />
        </Provider>
        {children}
      </body>
    </html>
  );
}
