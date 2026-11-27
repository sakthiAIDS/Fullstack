
function About() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-16">

      <div className="mx-auto max-w-5xl text-center">
        <h1 className="mb-6 text-4xl font-bold text-green-700">
          About Our Food Donation System
        </h1>

        <p className="text-lg leading-8 text-gray-600">
          Our mission is to reduce food waste and help needy people.
          We connect food donors with NGOs and local shelters.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">

        <div className="rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-green-700">
            Our Mission
          </h2>
          <p className="text-gray-600">
            To reduce food wastage and distribute surplus food
            to people who need it.
          </p>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-green-700">
            Our Vision
          </h2>
          <p className="text-gray-600">
            To create a world where no edible food goes to waste.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
