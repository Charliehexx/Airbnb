import { Nunito } from 'next/font/google'

import Navbar from '@/app/components/navbar/Navbar';

import RegisterModal from '@/app/components/modals/RegisterModal';



import ToasterProvider from '@/app/providers/ToasterProvider';

import './globals.css'

import getCurrentUser from './actions/getCurrentUser';
import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';
import SearchModal from './components/modals/SearchModal';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Nunito({ 
  subsets: ['latin'], 
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
      
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}