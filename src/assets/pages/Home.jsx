
function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="flex min-h-[500px] items-center justify-center bg-green-700 px-6 text-center">

        <div className="max-w-3xl">

          <h1 className="mb-6 text-5xl font-bold text-white">
            Food Donation System
          </h1>

          <h2 className="mb-5 text-3xl font-semibold text-green-100">
            Share Food, Spread Happiness
          </h2>

          <p className="mb-8 text-lg text-white">
            Don't waste food. Help needy people
          </p>

          <a
            href="/Donate"
            className="rounded-lg bg-white px-8 py-3 font-bold text-green-700 hover:bg-green-100"
          >
            Donate Food
          </a>

        </div>

      </section>

      <section className="px-6 py-16 text-center">

        <h2 className="mb-6 text-3xl font-bold text-green-700">
          Why Food Donation?
        </h2>

        <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
          Our platform connects food donors with NGOs and local
          shelters to distribute surplus food to needy people.
        </p>

      </section>

      <section className="bg-gray-100 px-6 py-16">

        <h2 className="mb-10 text-center text-3xl font-bold text-green-700">
          What We Do
        </h2>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">

          <div className="rounded-xl bg-white p-8 text-center shadow-md">
            <h3 className="mb-4 text-xl font-bold text-green-700">
              Donate Food
            </h3>
            <p className="text-gray-600">
              Share surplus food with people who need it.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 text-center shadow-md">
            <h3 className="mb-4 text-xl font-bold text-green-700">
              Connect NGOs
            </h3>
            <p className="text-gray-600">
              Connect food donors with nearby NGOs.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 text-center shadow-md">
            <h3 className="mb-4 text-xl font-bold text-green-700">
              Help People
            </h3>
            <p className="text-gray-600">
              Help needy people by sharing available food.
            </p>
          </div>

        </div>

      </section>

      <footer className="bg-green-800 p-6 text-center text-white">
        Copyright 2026 Food Donation System
      </footer>

    </div>
  );
}

export default Home;
