import React from "react";

function Testimonial() {
  return (
    <>
      <section className="px-4 z-50">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="mb-6 text-3xl font-bold">Our Users</h3>
          <p className="mb-6 pb-2 text-zinc-500 md:mb-12">
            Discover why Bouncy Notes has become a favorite for so many. Our
            users love the playful, intuitive interface and powerful features
            that make task management both fun and efficient. Here are some of
            their experiences
          </p>
        </div>

        <div className="grid gap-12 text-center md:grid-cols-2">
          {/* <!--First Testimonial--> */}
          <div className="mb-6 md:mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src="https://pagedone.io/asset/uploads/1696229969.png"
                className="w-24 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <p className="my-4 text-xl text-zinc-500">
              "The user interface of this Bouncy Notes is so intuitive, I was
              able to start using it without any guidance."
            </p>
            <p className="italic">- Sarah K.</p>
          </div>

          {/* <!--Second Testimonial--> */}
          <div className="mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src="https://pagedone.io/asset/uploads/1696229994.png"
                className="w-24 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <p className="my-4 text-xl text-zinc-500">
              "Bouncy Notes has transformed the way I manage my tasks. The
              playful interface and effortless clustering make organizing my day
              a breeze. I love how customizable and fun it is to use!"
            </p>
            <p className="italic">- Zain Ali</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
