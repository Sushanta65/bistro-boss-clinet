
const Cover = ({coverImg, title}) => {
  return (
    <div>
      <div
        className="hero h-[700px]"
        style={{
          backgroundImage:
            `url(${coverImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="w-3/5 border px-40 py-10">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
