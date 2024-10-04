import { createEffect, onMount, createSignal } from 'solid-js';
import seo from '../aboutme.js';
import Navbar from './Navbar.jsx';
import icon from '../assets/images/icon.jpg';
import Footer from '../components/Footer.jsx';

function HomePage() {
  const [showScrollButton, setShowScrollButton] = createSignal(false);

  onMount(() => {
    document.title = seo.title;

    // Add scroll event listener to window
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  createEffect(() => {
    document.title = seo.title;
  });

  // Function to handle scroll and toggle button visibility
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Function to scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div class="bg-yellowish">
      <main class="flex flex-col">
        <Navbar/>
      <section class="w-full flex flex-col h-full px-4 py-32">
        <div class="max-w-6xl mx-auto">
          <img src={icon} width="256vw" height="256vh" class='rounded-full' />
        </div>
        <div class="max-w-6xl mx-auto">
          <h2 class="text-2xl font-semibold mb-16">Vitajte na mojej stránke!</h2>
        </div>
      </section>

        <section class="w-full flex flex-col h-full bg-pastellBlue px-4 py-32">
          <div class="max-w-6xl mx-auto">
            <h3 class="text-xl font-semibold mb-4">O mne</h3>
            <p class="text-sm text-gray-700">
              Som vášnivý prívrženec tradičnej čínskej medicíny a ajurvédy. Moja práca je zameraná na pomoc ľuďom prostredníctvom prírodných liečebných metód, ktoré podporujú fyzickú, duševnú a emocionálnu rovnováhu. Verím, že príroda nám ponúka všetky potrebné nástroje pre naše zdravie.
            </p>
          </div>
        </section>

        <section class="w-full bg-vreamyWhite px-4 py-32 h-full">
          <div class="max-w-6xl mx-auto">
            <h3 class="text-xl font-semibold mb-4">Služby</h3>
            <p class="text-sm text-gray-700">
              Ponúkam individuálne prispôsobené liečebné terapie, využívajúc starodávne techniky čínskej medicíny a ajurvédy. Moje služby sú navrhnuté tak, aby riešili rôzne zdravotné problémy, od posilnenia imunity až po chronické ochorenia.
            </p>
          </div>
        </section>

        <section class="w-full bg-softBrown px-4 py-32">
          <div class="max-w-6xl mx-auto">
            <h3 class="text-xl font-semibold mb-4">Produkty</h3>
            <p class="text-sm text-gray-700">
              Na mojej stránke nájdete aj vysoko kvalitné produkty od spoločností Energy a Essens. Tieto výrobky sú vytvorené na podporu zdravia a rovnováhy, a ich účinnosť je overená dlhoročnými skúsenosťami.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      {showScrollButton() && (
        <button
          class="fixed bottom-8 right-8 p-3 bg-brightGreen text-white rounded-full shadow-lg hover:bg-pastellBlue"
          onClick={scrollToTop}
        >
          ↑ Hore
        </button>
      )}
    </div>
  );
}

export default HomePage;