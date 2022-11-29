import React from 'react'
import Navbar from '../components/UniversalItems/Navbar';
import Header from '../Sections/Header';
import ContactsImage from '../Sections/ContactForm';
import ContactForm from '../Sections/ContactFormValidation';
import Footer from '../components/UniversalItems/Footer';

const ContactsView: React.FC = () => {
  return (
    <>
    <Navbar />
    <Header title="Contacts"/>
    <ContactsImage />
    <ContactForm />
    <Footer />
    </>
  )
}

export default ContactsView