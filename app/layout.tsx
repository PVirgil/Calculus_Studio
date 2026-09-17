import "./globals.css"; import "katex/dist/katex.min.css";
export const metadata={title:"Calculus Studio",description:"Calculus solver, grapher, notebook and reference"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
