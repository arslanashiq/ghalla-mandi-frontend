import Providers from "@/theme/Providers";

// styles
import "@/app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Ghalla Mandi",
  description: "Ghalla Mandi app to manage your accouts",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
