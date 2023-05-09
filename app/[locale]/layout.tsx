import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import localFont from 'next/font/local';
 
const avenirFont = localFont({
  src: [
    {
      path: '../../public/fonts/Avenir-Black.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Avenir-Book.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Avenir-Medium.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
});

export default function LocaleLayout({
  children, 
  params
} : {
  children: React.ReactNode,
  params: { locale: string }
}) {
  const locale = useLocale();
 
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
 
  return (
    <html lang={locale} className={avenirFont.className}>
      <body>{children}</body>
    </html>
  );
}