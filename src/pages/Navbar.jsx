import { createSignal } from 'solid-js';

function Navbar() {
  const [style, setStyle] = createSignal(`
    @keyframes textShimmer {
      0% {
        background-position: -100% 0;
      }
      100% {
        background-position: 100% 0;
      }
    }
    .animate-text-shimmer {
      background: linear-gradient(to right, #000000 20%, #8B4513 40%, #8B4513 60%, #000000 80%);
      background-size: 200% auto;
      color: #000;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: textShimmer 3s linear infinite;
    }
  `);

  return (
    <>
      <style>{style()}</style>
      <nav class="py-6 border border-softBrown shadow-sm">
        <div class="container mx-auto flex justify-center items-center space-x-16 px-8">
          <ul class="flex space-x-8">
            <li>
              <a
                href="/produkty"
                class="border-b-2 pb-2 transition-all duration-300 text-black hover:text-creamyWhite border-softBrown hover:border-creamyWhite group"
              >
                <span class="group-hover:animate-text-shimmer">Produkty</span>
              </a>
            </li>
            <li>
              <a
                href="/sluzby"
                class="border-b-2 pb-2 transition-all duration-300 text-black hover:text-creamyWhite border-softBrown hover:border-creamyWhite group"
              >
                <span class="group-hover:animate-text-shimmer">Služby</span>
              </a>
            </li>
            <li>
              <a
                href="/kontakt"
                class="border-b-2 pb-2 transition-all duration-300 text-black hover:text-creamyWhite border-softBrown hover:border-creamyWhite group"
              >
                <span class="group-hover:animate-text-shimmer">Kontakt</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;