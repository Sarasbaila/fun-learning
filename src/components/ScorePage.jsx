const ScorePage = ({ score, totale }) => {
  let greeting = "";
  let niveau = "";

  if (score >= totale * 0.7) {
    greeting = "félicitations!";
    niveau = "Ninja Sénior";
  } else if (score < totale * 0.7 && score >= totale * 0.5) {
    greeting = "Bon travail!";
    niveau = "Ninja Jonior";
  } else {
    greeting = "C'est pas grave, vous avez bien essayé!";
    niveau = "Ninja débutant";
  }
  return (
    <section>
      <div class="text-center bg-gray-100 text-gray-800 py-20 px-6">
        <h1 class="text-5xl font-bold mt-0 mb-6">{greeting}</h1>
        <h3 class="text-3xl font-bold mb-8">
          Vous avez arriver au niveau {niveau}{" "}
        </h3>
      </div>

      <div
        className="bg-gray-600 py-5 px-6 text-base text-gray-100"
        role="alert"
      >
        Vous avez obtenz :{" "}
        <span class="text-md inline-block py-2 px-3 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded">
          {score}/{totale}
        </span>
      </div>
    </section>
  );
};

export default ScorePage;
