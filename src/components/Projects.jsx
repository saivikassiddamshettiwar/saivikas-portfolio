const Projects = () => {
  return (
    <section id="projects" className="py-24 px-8">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-cyan-400 mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-800 p-8 rounded-xl">

            <h3 className="text-2xl font-bold">
              Thyroid Disease Detection
            </h3>

            <p className="text-gray-400 mt-4">
              Machine Learning project using XGBoost to predict
              thyroid disease.
            </p>

          </div>

          <div className="bg-slate-800 p-8 rounded-xl">

            <h3 className="text-2xl font-bold">
              Virtual Music Instrument
            </h3>

            <p className="text-gray-400 mt-4">
              Gesture-controlled musical instrument using
              OpenCV and MediaPipe.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Projects;