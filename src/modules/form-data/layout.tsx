import type { ReactNode } from 'react';
import { Footer } from '../../components/layouts/Footer';
import { Header } from '../../components/layouts/Header';

interface FormDataLayoutProps {
  children: ReactNode;
}

/** App shell for the form-data module: header on top, footer pinned to the bottom. */
export function FormDataLayout({ children }: FormDataLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
