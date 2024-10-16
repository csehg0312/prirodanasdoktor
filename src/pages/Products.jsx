import { createSignal, createMemo, For, Show } from 'solid-js';
import products from "../js/products";

function Products() {
  const [searchTerm, setSearchTerm] = createSignal('');
  const [showSearch, setShowSearch] = createSignal(false);

  // Filtering logic with debugging
  const filteredProducts = createMemo(() => {
    const lowercasedTerm = searchTerm().toLowerCase();

    const filtered = products.groups.flatMap(group =>
      (group.products || []).filter(product => {
        const matchesName = product.name && product.name.toLowerCase().includes(lowercasedTerm);
        const matchesShortDesc = product.shortDescription && product.shortDescription.toLowerCase().includes(lowercasedTerm);
        const matchesLongDesc = typeof product.longDescription === 'string' && product.longDescription.toLowerCase().includes(lowercasedTerm);
        const matchesBenefits = product.healthBenefits && product.healthBenefits.some(benefit =>
          benefit.toLowerCase().includes(lowercasedTerm)
        );

        return matchesName || matchesShortDesc || matchesLongDesc || matchesBenefits;
      })
    );

    return filtered;
  });

  return (
    <div class="bg-yellowish min-h-screen p-5">
      <h1 class="text-3xl font-bold text-white text-center mb-6">Produkty</h1>

      {/* Button for showing the search input */}
      <div class="relative mb-6">
        <button
          class="p-2 bg-brightGreen rounded-full shadow-md focus:outline-none"
          onClick={() => setShowSearch(!showSearch())} // Toggle search visibility
        >
          🔍
        </button>

        {/* Conditionally show the search input with a close (X) button */}
        <Show when={showSearch()}>
          <div class="absolute top-0 left-0 w-full p-2 bg-white shadow-lg rounded-md mt-2 flex items-center">
            <button
              class="ml-2 p-2 text-red-500 font-bold focus:outline-none"
              onClick={() => { setShowSearch(false); setSearchTerm(''); }} // Close the search input and clear the search term
            >
              X
            </button>
            <input
              type="text"
              placeholder="Hľadám produkt alebo benefit..."
              value={searchTerm()}
              onInput={(e) => setSearchTerm(e.target.value)}
              class="w-full p-2 border border-brightGreen rounded-md"
            />
          </div>
        </Show>
      </div>

      {/* Only rendering filtered products */}
      <Show
        when={filteredProducts().length > 0}
        fallback={<p class="text-center text-yellowish">No products found matching your search.</p>}
      >
        <ul class="space-y-6">
          <For each={filteredProducts()}>
            {(product) => (
              <li class="bg-softBrown p-4 rounded-md shadow-lg">
                <h4 class="text-lg font-bold text-white mb-2">{product.name}</h4>
                <p class="text-md text-yellowish mb-2">
                  {product.shortDescription ? product.shortDescription : 'No short description available'}
                </p>

                {/* Handling longDescription as an object with sections */}
                <Show when={typeof product.longDescription === 'object'}>
                  <For each={Object.entries(product.longDescription)}>
                    {([section, details]) => (
                      <div class="mb-4">
                        <h5 class="text-md font-semibold text-brightGreen mb-2">{section}:</h5>
                        <ul class="list-disc list-inside pl-5">
                          <For each={details}>
                            {(detail) => <li class="text-yellowish">{detail}</li>}
                          </For>
                        </ul>
                      </div>
                    )}
                  </For>
                </Show>

                <Show when={product.healthBenefits && product.healthBenefits.length > 0}>
                  <h5 class="text-md font-semibold text-brightGreen">Health Benefits:</h5>
                  <ul class="list-disc list-inside pl-5 mb-4">
                    <For each={product.healthBenefits}>
                      {(benefit) => <li class="text-yellowish">{benefit}</li>}
                    </For>
                  </ul>
                </Show>

                <Show when={product.images && product.images.length > 0}>
                  <h5 class="text-md font-semibold text-brightGreen">Images:</h5>
                  <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <For each={product.images}>
                      {(image) => (
                        <li>
                          <img
                            class="w-full h-auto rounded-md shadow-md"
                            src={image}
                            alt={product.name}
                            loading="lazy"
                          />
                        </li>
                      )}
                    </For>
                  </ul>
                </Show>
              </li>
            )}
          </For>
        </ul>
      </Show>
    </div>
  );
};

export default Products;
