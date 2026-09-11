function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Duty After School</h1>

        <p>
          Ketika sebuah sekolah tiba-tiba harus menghadapi ancaman yang tidak
          terduga.
        </p>

        <div className="hero-action">
          <button className="hero-action-primary" type="button">
            <span aria-hidden="true">▶</span>
            Mulai
          </button>
          <button className="hero-action-secondary" type="button">
            Selengkapnya
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
