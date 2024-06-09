import React from "react";

function Testimonial() {
  return (
    <>
      <section class="px-4 z-50">
        <div class="mx-auto max-w-3xl text-center">
          <h3 class="mb-6 text-3xl font-bold">Testimonials</h3>
          <p class="mb-6 pb-2 text-zinc-500 md:mb-12">
            Discover why Bouncy Notes has become a favorite for so many. Our
            users love the playful, intuitive interface and powerful features
            that make task management both fun and efficient. Here are some of
            their experiences
          </p>
        </div>

        <div class="grid gap-12 text-center md:grid-cols-2">
          {/* <!--First Testimonial--> */}
          <div class="mb-6 md:mb-0">
            <div class="mb-6 flex justify-center">
              <img
                src="https://pagedone.io/asset/uploads/1696229969.png"
                class="w-24 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <p class="my-4 text-xl text-zinc-500">
              "The user interface of this Bouncy Notes is so intuitive, I was
              able to start using it without any guidance."
            </p>
            <p class="italic">- Sarah D.</p>
          </div>

          {/* <!--Second Testimonial--> */}
          <div class="mb-0">
            <div class="mb-6 flex justify-center">
              <img
                src="https://pagedone.io/asset/uploads/1696229994.png"
                class="w-24 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <p class="my-4 text-xl text-zinc-500">
              "Bouncy Notes has transformed the way I manage my tasks. The
              playful interface and effortless clustering make organizing my day
              a breeze. I love how customizable and fun it is to use!"
            </p>
            <p class="italic">- Zain Ali</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
