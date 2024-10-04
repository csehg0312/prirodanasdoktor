import { createSignal, createMemo, For } from "solid-js";
import products from "../js/products";
import pentagram_produkt from "../assets/images/pentagram_produkt.png";

function Products() {
  const [searchTerm, setSearchTerm] = createSignal("");

  const filteredProducts = createMemo(() => {
    const term = searchTerm().toLowerCase();
    return products.groups.map(group => ({
      ...group,
      products: group.products.filter(product => 
        product.name.toLowerCase().includes(term) ||
        product.healthBenefits.some(benefit => benefit.toLowerCase().includes(term))
      )
    })).filter(group => group.products.length > 0);
  });

  return (
    <div class="bg-creamyWhite min-h-screen p-5">
      <h1 class="text-3xl font-bold text-brightGreen text-center mb-6">Produkty</h1>
      
      {/* Search input */}
      <div class="mb-6">
        <input
          type="text"
          placeholder="Hľadám produkt alebo benefit..."
          value={searchTerm()}
          onInput={(e) => setSearchTerm(e.target.value)}
          class="w-full p-2 border border-brightGreen rounded-md"
        />
      </div>

      {filteredProducts().length > 0 ? (
        <For each={filteredProducts()}>
          {(group) => (
            <section class="mb-12">
              <div class="bg-pastellBlue p-6 rounded-lg shadow-lg">
                <h2 class="text-2xl font-semibold text-softBrown mb-2">{group.name}</h2>
                <p class="text-lg text-yellowish mb-4">{group.description}</p>
                <img
                  class="w-full h-auto max-w-sm mx-auto mb-6"
                  src={pentagram_produkt}
                  alt={group.name}
                />
                <h3 class="text-xl font-bold text-softBrown mb-4">Products:</h3>
                <ul class="space-y-6">
                  <For each={group.products}>
                    {(product) => (
                      <li class="bg-creamyWhite p-4 border-l-4 border-brightGreen rounded-md">
                        <h4 class="text-lg font-bold text-white mb-2">{product.name}</h4>
                        <p class="text-md text-yellowish mb-2">{product.shortDescription}</p>
                        <p class="text-sm text-softBrown mb-4">{product.longDescription}</p>
                        <h5 class="text-md font-semibold text-brightGreen">Health Benefits:</h5>
                        <ul class="list-disc list-inside pl-5 mb-4">
                          <For each={product.healthBenefits}>
                            {(benefit) => <li class="text-yellowish">{benefit}</li>}
                          </For>
                        </ul>
                        <h5 class="text-md font-semibold text-brightGreen">Images:</h5>
                        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          <For each={product.images}>
                            {(image) => (
                              <li>
                                <img
                                  class="w-full h-auto rounded-md shadow-md"
                                  src={image}
                                  alt={product.name}
                                />
                              </li>
                            )}
                          </For>
                        </ul>
                      </li>
                    )}
                  </For>
                </ul>
              </div>
            </section>
          )}
        </For>
      ) : (
        <p class="text-center text-yellowish">No products found matching your search.</p>
      )}
    </div>
  );
}

export default Products;