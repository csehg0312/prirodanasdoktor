function Footer() {
    return(

        <footer class="text-gray-500 w-full px-4 py-16">
        <div class="max-w-6xl mx-auto">
          <section class="mb-8">
            <h3 class="text-xl font-semibold mb-4"><a href="/kontakt">Kontakt</a></h3>
            <p class="text-sm text-gray-700">
              Som tu, aby som vám pomohol na vašej ceste k lepšiemu zdraviu. Neváhajte ma kontaktovať pre viac informácií alebo osobné stretnutie cez <a class='border border-pastellBlue' href="mailto:annikocsehova@gmail.com">email</a>.
            </p>
          </section>
          <section class="text-center">
            <p>&copy; {new Date().getFullYear()} Anna. All rights reserved.</p>
          </section>
        </div>
      </footer>
        
    );
}

export default Footer;