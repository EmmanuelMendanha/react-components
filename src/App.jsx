import { useState } from "react";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import Hero from "./components/Hero";
import CallToAction from "./components/CallToAction";
import Card from "./components/Card";
import Footer from "./components/Footer";
import myLogo from "./assets/react.svg";

function App() {
  /**
   * Pour mettre à jour le menu,
   * modifiez le tableau ci-dessous
   */
  const [menu, setMenu] = useState([
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Courses",
      link: "/courses",
    },
    {
      name: "Support",
      link: "/support",
      target: "_blank",
      button: true,
    },
  ]);

  /**
   * Pour mettre à jour le logo,
   * modifiez la valeur ci-dessous
   */
  const [logo, setLogo] = useState(myLogo);

  const [hero, setHero] = useState({
    title: 'Bienvenue sur notre site !',
    description: 'Découvrez nos produits et services de qualité supérieure.',
    image: 'https://via.placeholder.com/2000x500'
  });
  const [card, setCard] = useState([
    {
      title: 'Carte 1',
      description: 'Description de la carte 1',
      image: 'https://via.placeholder.com/400x200'
    },
    {
      title: 'Carte 2',
      description: 'Description de la carte 2',
      image: 'https://via.placeholder.com/400x200'
    },
    {
      title: 'Carte 3',
      description: 'Description de la carte 3',
      image: 'https://via.placeholder.com/400x200'
    }
  ]);
  const [cta, setCta] = useState({
    title: 'Ready to get started?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonText: 'Sign up now',
    buttonUrl: '#'
  });

  const [footer, setFooter] = useState({
    title: 'Stay in touch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    links: [
      {
        label: 'Facebook',
        url: 'https://www.facebook.com/'
      },
      {
        label: 'Twitter',
        url: 'https://twitter.com/'
      },
      {
        label: 'Instagram',
        url: 'https://www.instagram.com/'
      }
    ],
    copyright: '© 2023 My Company. All rights reserved.'
  });

  return (
    <>
      <Navigation menu={menu} logo={logo} />
      <SearchBar />
      <Hero hero={hero} />
      <Card card={card} />
      <CallToAction cta={cta} />
      <Footer footer={footer}/>
    </>
  );
}

export default App;