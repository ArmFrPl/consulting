function App() {
  return (
    <div className="App">
      <>
        {/* Header Area wrapper Starts */}
        <header id="header-wrap">
          {/* Navbar Start */}
          <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
            <div className="container">
              {/* Brand and toggle get grouped for better mobile display */}
              <a href="#hero-area" className="nav-link navbar-brand">
                <img src="assets/img/logo.png" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="lni-menu" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                  <li className="nav-item active">
                    <a className="nav-link" href="#hero-area">
                      Главная
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#feature">
                      О Нас
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#team">
                      Команда
                    </a>
                  </li>
                  {/*<li className="nav-item">*/}
                  {/*  <a className="nav-link" href="#services">*/}
                  {/*    Services*/}
                  {/*  </a>*/}
                  {/*</li>*/}
                  <li className="nav-item">
                    <a className="nav-link" href="#pricing">
                      Стоимость
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolios">
                      Партнеры
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonial">
                      Отзывы
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#blog">
                      Блог
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Контакты
                    </a>
                  </li>
                </ul>
                <a className="btn btn-common" href="#contact">
                  Записаться
                </a>
              </div>
            </div>
          </nav>
          {/* Navbar End */}
          {/* Hero Area Start */}
          <div id="hero-area" className="hero-area-bg">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="contents ">
                    <h2 className="head-title wow fadeInUp">
                      КОНСУЛЬТАЦИИ ПО ПОСТУПЛЕНИЮ <br/>ЗА ГРАНИЦУ
                    </h2>
                    <h4 className="head-subtitle wow fadeInUp" data-wow-delay="0.4s">
                      Получите список Университетов, подходящих именно Вам!
                    </h4>
                    <div className="header-button wow fadeInUp" data-wow-delay="0.6s">
                      <a href="#services" className="btn btn-common">
                        ПОЛУЧИТЬ
                      </a>
                    </div>
                  </div>
                  <div
                    className="img-thumb wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <img className="img-fluid" src="assets/img/backpic.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Area End */}
        </header>
        {/* Header Area wrapper End */}
        {/* Counter Section Start */}
        <section id="counter" className="section-padding">
          <div className="overlay" />
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-12 col-md-12 col-xs-12">
                <div className="row">
                  {/* Start counter */}
                  <div className="col-lg-3 col-md-6 col-xs-12">
                    <div className="counter-box wow fadeInUp" data-wow-delay="0.2s">
                      <div className="fact-count">
                        <h3>9567</h3>
                        <p>КОНСУЛЬТАЦИЙ</p>
                      </div>
                    </div>
                  </div>
                  {/* End counter */}
                  {/* Start counter */}
                  <div className="col-lg-3 col-md-6 col-xs-12">
                    <div className="counter-box wow fadeInUp" data-wow-delay="0.4s">
                      <div className="fact-count">
                        <h3>95 %</h3>
                        <p>ПОСТУПЛЕНИЙ</p>
                      </div>
                    </div>
                  </div>
                  {/* End counter */}
                  {/* Start counter */}
                  <div className="col-lg-3 col-md-6 col-xs-12">
                    <div className="counter-box wow fadeInUp" data-wow-delay="0.6s">
                      <div className="fact-count">
                        <h3>593</h3>
                        <p>ПАРТНЕРОВ</p>
                      </div>
                    </div>
                  </div>
                  {/* End counter */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Counter Section End */}
        {/* Feature Section Start */}
        <div id="feature">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="text-wrapper">
                  <div>
                    <h2 className="title-hl wow fadeInLeft" data-wow-delay="0.3s">
                      От желания к поступлению
                    </h2>
                    <p className="mb-4 subtext">
                      Пройдя серию консультаций и тестирование, мы подберем <br/> идеальный университет именно для Вас!
                    </p>
                    <a href="#" className="btn btn-common">
                      Записаться!
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 padding-none feature-bg">
                <div className="feature-thumb">
                  <div
                    className="feature-item wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                  >
                    <div className="icon">
                      1
                    </div>
                    <div className="feature-content">
                      <h3>Личная консультация</h3>
                      <p>
                        Первая профориентационная встреча, на которой мы познакомимся, узнаем ваши сильные стороны и пожелания по поступлению{" "}
                      </p>
                    </div>
                  </div>
                  <div
                    className="feature-item wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="500ms"
                  >
                    <div className="icon">
                      2
                    </div>
                    <div className="feature-content">
                      <h3>Тестирование</h3>
                      <p>
                        Мы проведем для вас индивидуальное тестирование по профильным предметам, чтобы определить текущий уровень подготовки, и что еще необходимо сделать для поступления в желаемый университет{" "}
                      </p>
                    </div>
                  </div>
                  <div
                    className="feature-item wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="700ms"
                  >
                    <div className="icon">
                      3
                    </div>
                    <div className="feature-content">
                      <h3>Результаты</h3>
                      <p>
                        На финальной встрече, мы предоставим вам полный анализ ваших <br/>результатов и short-list из университетов, подходящих вашим интересам <br/>и желаниям, условия поступления и список необходимых документов{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature Section End */}
        {/* Start Video promo Section */}
        <section className="video-promo section-padding">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div
                  className="video-promo-content text-center wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <a
                    href="https://www.youtube.com/watch?v=yP6kdOZHids"
                    className="video-popup"
                  >
                    <i className="lni-film-play" />
                  </a>
                  <h2
                    className="mt-3 wow zoomIn"
                    data-wow-duration="1000ms"
                    data-wow-delay="100ms"
                  >
                    Watch Video
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Video Promo Section */}
        {/* Team Section Start */}
        <section id="team" className="section-padding text-center">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
                Наши преподаватели
              </h2>
              <p>
                Уже помогли 8261 абитуриенту подобрать Университет и успешно поступить
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-3">
                {/* Team Item Starts */}
                <div
                  className="team-item text-center wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <div className="team-img">
                    <img
                      className="img-fluid"
                      src="assets/img/team/team-01.png"
                      alt=""
                    />
                    <div className="team-overlay">
                      <div className="overlay-social-icon text-center">
                        <ul className="social-icons">
                          <li>
                            <a href="#">
                              <i className="lni-facebook-filled" aria-hidden="true" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni-twitter-filled" aria-hidden="true" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="lni-instagram-filled"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="info-text">
                    <h3>
                      <a href="#">Александр Величко</a>
                    </h3>
                    <p>Гвиден консул</p>
                  </div>
                </div>
                {/* Team Item Ends */}
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3">
                {/* Team Item Starts */}
                <div
                  className="team-item text-center wow fadeInRight"
                  data-wow-delay="0.6s"
                >
                  <div className="team-img">
                    <img
                      className="img-fluid"
                      src="assets/img/team/team-02.png"
                      alt=""
                    />
                    <div className="team-overlay">
                      <div className="overlay-social-icon text-center">
                        <ul className="social-icons">
                          <li>
                            <a href="#">
                              <i className="lni-facebook-filled" aria-hidden="true" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni-twitter-filled" aria-hidden="true" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="lni-instagram-filled"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="info-text">
                    <h3>
                      <a href="#">Имя Отчество</a>
                    </h3>
                    <p>Психолог</p>
                  </div>
                </div>
                {/* Team Item Ends */}
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3">
                {/* Team Item Starts */}
                <div
                  className="team-item text-center wow fadeInRight"
                  data-wow-delay="0.9s"
                >
                  <div className="team-img">
                    <img
                      className="img-fluid"
                      src="assets/img/team/team-03.png"
                      alt=""
                    />
                    <div className="team-overlay">
                      <div className="overlay-social-icon text-center">
                        <ul className="social-icons">
                          <li>
                            <a href="#">
                              <i className="lni-facebook-filled" aria-hidden="true" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni-twitter-filled" aria-hidden="true" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="lni-instagram-filled"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="info-text">
                    <h3>
                      <a href="#">Азявчикова Мария</a>
                    </h3>
                    <p>Преподаватель</p>
                  </div>
                </div>
                {/* Team Item Ends */}
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3">
                {/* Team Item Starts */}
                <div
                  className="team-item text-center wow fadeInRight"
                  data-wow-delay="1.2s"
                >
                  <div className="team-img">
                    <img
                      className="img-fluid"
                      src="assets/img/team/team-04.png"
                      alt=""
                    />
                    <div className="team-overlay">
                      <div className="overlay-social-icon text-center">
                        <ul className="social-icons">
                          <li>
                            <a href="#">
                              <i className="lni-facebook-filled" aria-hidden="true" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni-twitter-filled" aria-hidden="true" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="lni-instagram-filled"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="info-text">
                    <h3>
                      <a href="#">Павел Величко</a>
                    </h3>
                    <p>Уборщик</p>
                  </div>
                </div>
                {/* Team Item Ends */}
              </div>
            </div>
          </div>
        </section>
        {/* Team Section End */}
        {/*/!* Services Section Start *!/*/}
        {/*<section id="services" className="section-padding bg-gray">*/}
        {/*  <div className="container">*/}
        {/*    <div className="section-header text-center">*/}
        {/*      <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">*/}
        {/*        Our Services*/}
        {/*      </h2>*/}
        {/*      <p>*/}
        {/*        A desire to help and empower others between community contributors in*/}
        {/*        technology <br /> began to grow in 2020.*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*    <div className="row">*/}
        {/*      /!* Services item *!/*/}
        {/*      <div className="col-md-6 col-lg-4 col-xs-12">*/}
        {/*        <div className="services-item wow fadeInRight" data-wow-delay="0.3s">*/}
        {/*          <div className="icon">*/}
        {/*            <i className="lni-pencil" />*/}
        {/*          </div>*/}
        {/*          <div className="services-content">*/}
        {/*            <h3>*/}
        {/*              <a href="#">Content Writing</a>*/}
        {/*            </h3>*/}
        {/*            <p>*/}
        {/*              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde*/}
        {/*              perspiciatis dicta labore nulla beatae quaerat quia incidunt*/}
        {/*              laborum aspernatur...*/}
        {/*            </p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      /!* Services item *!/*/}
        {/*      <div className="col-md-6 col-lg-4 col-xs-12">*/}
        {/*        <div className="services-item wow fadeInRight" data-wow-delay="0.6s">*/}
        {/*          <div className="icon">*/}
        {/*            <i className="lni-briefcase" />*/}
        {/*          </div>*/}
        {/*          <div className="services-content">*/}
        {/*            <h3>*/}
        {/*              <a href="#">Digital Marketing</a>*/}
        {/*            </h3>*/}
        {/*            <p>*/}
        {/*              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde*/}
        {/*              perspiciatis dicta labore nulla beatae quaerat quia incidunt*/}
        {/*              laborum aspernatur...*/}
        {/*            </p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      /!* Services item *!/*/}
        {/*      <div className="col-md-6 col-lg-4 col-xs-12">*/}
        {/*        <div className="services-item wow fadeInRight" data-wow-delay="0.9s">*/}
        {/*          <div className="icon">*/}
        {/*            <i className="lni-cog" />*/}
        {/*          </div>*/}
        {/*          <div className="services-content">*/}
        {/*            <h3>*/}
        {/*              <a href="#">Web Development</a>*/}
        {/*            </h3>*/}
        {/*            <p>*/}
        {/*              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde*/}
        {/*              perspiciatis dicta labore nulla beatae quaerat quia incidunt*/}
        {/*              laborum aspernatur...*/}
        {/*            </p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      /!* Services item *!/*/}
        {/*      <div className="col-md-6 col-lg-4 col-xs-12">*/}
        {/*        <div className="services-item wow fadeInRight" data-wow-delay="1.2s">*/}
        {/*          <div className="icon">*/}
        {/*            <i className="lni-mobile" />*/}
        {/*          </div>*/}
        {/*          <div className="services-content">*/}
        {/*            <h3>*/}
        {/*              <a href="#">IOS &amp; Android</a>*/}
        {/*            </h3>*/}
        {/*            <p>*/}
        {/*              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde*/}
        {/*              perspiciatis dicta labore nulla beatae quaerat quia incidunt*/}
        {/*              laborum aspernatur...*/}
        {/*            </p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      /!* Services item *!/*/}
        {/*      <div className="col-md-6 col-lg-4 col-xs-12">*/}
        {/*        <div className="services-item wow fadeInRight" data-wow-delay="1.5s">*/}
        {/*          <div className="icon">*/}
        {/*            <i className="lni-layers" />*/}
        {/*          </div>*/}
        {/*          <div className="services-content">*/}
        {/*            <h3>*/}
        {/*              <a href="#">UI/UX Design</a>*/}
        {/*            </h3>*/}
        {/*            <p>*/}
        {/*              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde*/}
        {/*              perspiciatis dicta labore nulla beatae quaerat quia incidunt*/}
        {/*              laborum aspernatur...*/}
        {/*            </p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      /!* Services item *!/*/}
        {/*      <div className="col-md-6 col-lg-4 col-xs-12">*/}
        {/*        <div className="services-item wow fadeInRight" data-wow-delay="1.8s">*/}
        {/*          <div className="icon">*/}
        {/*            <i className="lni-rocket" />*/}
        {/*          </div>*/}
        {/*          <div className="services-content">*/}
        {/*            <h3>*/}
        {/*              <a href="#">Branding &amp; Identity</a>*/}
        {/*            </h3>*/}
        {/*            <p>*/}
        {/*              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde*/}
        {/*              perspiciatis dicta labore nulla beatae quaerat quia incidunt*/}
        {/*              laborum aspernatur...*/}
        {/*            </p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
        {/*/!* Services Section End *!/*/}
        {/* Pricing section Start */}
        <section id="pricing" className="section-padding bg-gray">
          <div className="container">
            <div className="section-header text-center">
              {/*<h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">*/}
              {/*  Стоимость*/}
              {/*</h2>*/}
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-xs-12">
                <div className="table wow fadeInLeft" data-wow-delay="1.2s">
                  <div className="title">
                    <h3>Подбор университета</h3>
                  </div>
                  <div className="pricing-header">
                    <p className="price-value">
                      20 €
                    </p>
                  </div>
                  <ul className="description">
                    <li>Личная консультация с преподавателем</li>
                    <li>Тестирование по профильным предметам</li>
                    <li>Short-list университетов под Ваш запрос</li>
                    <li>Требования к поступающим</li>
                    <li>Список необходимых документов</li>
                  </ul>
                  <button className="btn btn-common">Записаться</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Table Section End */}
        {/*/!* Skills Section Start*!/*/}
        {/*<div className="skill-area section-padding">*/}
        {/*  <div className="container">*/}
        {/*    <div className="row">*/}
        {/*      <div*/}
        {/*        className="col-lg-6 col-md-12 col-xs-12 wow fadeInLeft"*/}
        {/*        data-wow-delay="0.3s"*/}
        {/*      >*/}
        {/*        <img className="img-fluid" src="assets/img/about/img-1.jpg" alt="" />*/}
        {/*      </div>*/}
        {/*      <div*/}
        {/*        className="col-lg-6 col-md-12 col-xs-12 info wow fadeInRight"*/}
        {/*        data-wow-delay="0.3s"*/}
        {/*      >*/}
        {/*        <div className="site-heading">*/}
        {/*          <h2 className="section-title">*/}
        {/*            Our <span>Skill</span>*/}
        {/*          </h2>*/}
        {/*          <p>*/}
        {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus*/}
        {/*            architecto laudantium dolorem, aut aspernatur modi minima alias*/}
        {/*            provident obcaecati! Minima odio porro nemo magnam dolore minus*/}
        {/*            asperiores veniam dolorum est!*/}
        {/*          </p>*/}
        {/*          <p>*/}
        {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,*/}
        {/*            nesciunt possimus quaerat ipsam, corporis architecto aspernatur*/}
        {/*            non aut! Dolorum consectetur placeat excepturi, perspiciatis sunt.*/}
        {/*          </p>*/}
        {/*        </div>*/}
        {/*        <div className="skills-section">*/}
        {/*          /!* Progress Bar Start *!/*/}
        {/*          <div className="progress-box">*/}
        {/*            <h5>*/}
        {/*              Strategy &amp; Analysis <span className="pull-right">88%</span>*/}
        {/*            </h5>*/}
        {/*            <div className="progress" style={{ opacity: 1, left: 0 }}>*/}
        {/*              <div*/}
        {/*                className="progress-bar"*/}
        {/*                role="progressbar"*/}
        {/*                data-width={87}*/}
        {/*                style={{ width: "87%" }}*/}
        {/*              />*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="progress-box">*/}
        {/*            <h5>*/}
        {/*              Eeconomic growth <span className="pull-right">95%</span>*/}
        {/*            </h5>*/}
        {/*            <div className="progress" style={{ opacity: 1, left: 0 }}>*/}
        {/*              <div*/}
        {/*                className="progress-bar"*/}
        {/*                role="progressbar"*/}
        {/*                data-width={96}*/}
        {/*                style={{ width: "96%" }}*/}
        {/*              />*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="progress-box">*/}
        {/*            <h5>*/}
        {/*              Achieves goals <span className="pull-right">70%</span>*/}
        {/*            </h5>*/}
        {/*            <div className="progress" style={{ opacity: 1, left: 0 }}>*/}
        {/*              <div*/}
        {/*                className="progress-bar"*/}
        {/*                role="progressbar"*/}
        {/*                data-width={52}*/}
        {/*                style={{ width: "52%" }}*/}
        {/*              />*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          /!* End Progressbar *!/*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*/!* Skills Section End*!/*/}
        {/* Portfolio Section */}
        <section id="portfolios" className="section-padding">
          {/* Container Starts */}
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
                Университеты партнеры
              </h2>
              <p>
                Мы строим партнерскую сеть по всему миру и предлагаем <br/>нашим клиентам широкий выбор Университетов
              </p>
            </div>
            <div className="row">
              <div className="col-md-12">
                {/* Portfolio Controller/Buttons */}
                <div className="controls text-center">
                  <a
                    className="filter active btn btn-common btn-effect"
                    data-filter="all"
                  >
                    Все
                  </a>
                  <a
                    className="filter btn btn-common btn-effect"
                    data-filter=".us"
                  >
                    США
                  </a>
                  <a
                    className="filter btn btn-common btn-effect"
                    data-filter=".eur"
                  >
                    Европа
                  </a>
                  <a
                    className="filter btn btn-common btn-effect"
                    data-filter=".sng"
                  >
                    СНГ
                  </a>
                </div>
                {/* Portfolio Controller/Buttons Ends*/}
              </div>
            </div>
            {/* Portfolio Recent Projects */}
            <div id="portfolio" className="row">
              <div className="col-lg-4 col-md-6 col-xs-12 mix eur sng">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <img src="assets/img/portfolio/img-1.jpg" alt="" />
                    <div className="single-content">
                      <div className="fancy-table">
                        <div className="table-cell">
                          <div className="zoom-icon">
                            <a
                              className="lightbox"
                              href="assets/img/portfolio/img-1.jpg"
                            >
                              <i className="lni-eye item-icon" />
                            </a>
                          </div>
                          <a href="#">Creative Design</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12 mix us sng">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <img src="assets/img/portfolio/img-2.jpg" alt="" />
                    <div className="single-content">
                      <div className="fancy-table">
                        <div className="table-cell">
                          <div className="zoom-icon">
                            <a
                              className="lightbox"
                              href="assets/img/portfolio/img-2.jpg"
                            >
                              <i className="lni-eye item-icon" />
                            </a>
                          </div>
                          <a href="#">Retina Ready</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12 mix eur">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <img src="assets/img/portfolio/img-3.jpg" alt="" />
                    <div className="single-content">
                      <div className="fancy-table">
                        <div className="table-cell">
                          <div className="zoom-icon">
                            <a
                              className="lightbox"
                              href="assets/img/portfolio/img-3.jpg"
                            >
                              <i className="lni-eye item-icon" />
                            </a>
                          </div>
                          <a href="#">Responsive</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12 mix eur us">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <img src="assets/img/portfolio/img-4.jpg" alt="" />
                    <div className="single-content">
                      <div className="fancy-table">
                        <div className="table-cell">
                          <div className="zoom-icon">
                            <a
                              className="lightbox"
                              href="assets/img/portfolio/img-4.jpg"
                            >
                              <i className="lni-eye item-icon" />
                            </a>
                          </div>
                          <a href="#">Well Documented</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12 mix eur">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <img src="assets/img/portfolio/img-5.jpg" alt="" />
                    <div className="single-content">
                      <div className="fancy-table">
                        <div className="table-cell">
                          <div className="zoom-icon">
                            <a
                              className="lightbox"
                              href="assets/img/portfolio/img-5.jpg"
                            >
                              <i className="lni-eye item-icon" />
                            </a>
                          </div>
                          <a href="#">Customer Support</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12 mix sng us">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <img src="assets/img/portfolio/img-6.jpg" alt="" />
                    <div className="single-content">
                      <div className="fancy-table">
                        <div className="table-cell">
                          <div className="zoom-icon">
                            <a
                              className="lightbox"
                              href="assets/img/portfolio/img-6.jpg"
                            >
                              <i className="lni-eye item-icon" />
                            </a>
                          </div>
                          <a href="#">User Friendly</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Container Ends */}
        </section>
        {/* Portfolio Section Ends */}
        {/* Testimonial Section Start */}
        <section id="testimonial" className="testimonial section-padding">
          <div className="overlay" />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                <div
                  id="testimonials"
                  className="owl-carousel wow fadeInUp"
                  data-wow-delay="1.2s"
                >
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="img-thumb">
                        <img src="assets/img/testimonial/img1.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h2>
                          <a href="#">Grenchen Pearce</a>
                        </h2>
                        <h3>
                          <a href="#">Boston Brothers co.</a>
                        </h3>
                      </div>
                      <div className="content">
                        <p className="description">
                          Holisticly empower leveraged ROI whereas effective
                          web-readiness. Completely enable emerging meta-services with
                          cross-platform web services. Quickly initiate inexpensive
                          total linkage rather than extensible scenarios. Holisticly
                          empower leveraged ROI whereas effective web-readiness.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="img-thumb">
                        <img src="assets/img/testimonial/img2.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h2>
                          <a href="#">Domeni GEsson</a>
                        </h2>
                        <h3>
                          <a href="#">Awesome Technology co.</a>
                        </h3>
                      </div>
                      <div className="content">
                        <p className="description">
                          Holisticly empower leveraged ROI whereas effective
                          web-readiness. Completely enable emerging meta-services with
                          cross-platform web services. Quickly initiate inexpensive
                          total linkage rather than extensible scenarios. Holisticly
                          empower leveraged ROI whereas effective web-readiness.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="img-thumb">
                        <img src="assets/img/testimonial/img3.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h2>
                          <a href="#">Dommini Albert</a>
                        </h2>
                        <h3>
                          <a href="#">Nesnal Design co.</a>
                        </h3>
                      </div>
                      <div className="content">
                        <p className="description">
                          Holisticly empower leveraged ROI whereas effective
                          web-readiness. Completely enable emerging meta-services with
                          cross-platform web services. Quickly initiate inexpensive
                          total linkage rather than extensible scenarios. Holisticly
                          empower leveraged ROI whereas effective web-readiness.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="img-thumb">
                        <img src="assets/img/testimonial/img4.png" alt="" />
                      </div>
                      <div className="info">
                        <h2>
                          <a href="#">Fernanda Anaya</a>
                        </h2>
                        <h3>
                          <a href="#">Developer</a>
                        </h3>
                      </div>
                      <div className="content">
                        <p className="description">
                          Holisticly empower leveraged ROI whereas effective
                          web-readiness. Completely enable emerging meta-services with
                          cross-platform web services. Quickly initiate inexpensive
                          total linkage rather than extensible scenarios. Holisticly
                          empower leveraged ROI whereas effective web-readiness.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="img-thumb">
                        <img src="assets/img/testimonial/img5.png" alt="" />
                      </div>
                      <div className="info">
                        <h2>
                          <a href="#">Jason A.</a>
                        </h2>
                        <h3>
                          <a href="#">Designer</a>
                        </h3>
                      </div>
                      <div className="content">
                        <p className="description">
                          Holisticly empower leveraged ROI whereas effective
                          web-readiness. Completely enable emerging meta-services with
                          cross-platform web services. Quickly initiate inexpensive
                          total linkage rather than extensible scenarios. Holisticly
                          empower leveraged ROI whereas effective web-readiness.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial Section End */}
        {/* Blog Section */}
        <section id="blog" className="section-padding">
          {/* Container Starts */}
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
                Latest blog
              </h2>
              <p>
                A desire to help and empower others between community contributors in
                technology <br /> began to grow in 2020.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 blog-item">
                {/* Blog Item Starts */}
                <div
                  className="blog-item-wrapper wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <div className="blog-item-img">
                    <a href="single-post.html">
                      <img src="assets/img/blog/img1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="blog-item-text">
                    <h3>
                      <a href="single-post.html">Suspendisse dictum non velit</a>
                    </h3>
                    <p>
                      Nunc in mauris a ante rhoncus tristique vitae et nisl. Quisque
                      ullamcorper rutrum lacinia. Integer varius ornare egestas.
                    </p>
                    <a href="single-post.html" className="btn btn-common btn-rm">
                      Read More
                    </a>
                  </div>
                </div>
                {/* Blog Item Wrapper Ends*/}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 blog-item">
                {/* Blog Item Starts */}
                <div className="blog-item-wrapper wow fadeInUp" data-wow-delay="0.6s">
                  <div className="blog-item-img">
                    <a href="single-post.html">
                      <img src="assets/img/blog/img2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="blog-item-text">
                    <h3>
                      <a href="single-post.html">Remarkably Did Increasing</a>
                    </h3>
                    <p>
                      Nunc in mauris a ante rhoncus tristique vitae et nisl. Quisque
                      ullamcorper rutrum lacinia. Integer varius ornare egestas.
                    </p>
                    <a href="single-post.html" className="btn btn-common btn-rm">
                      Read More
                    </a>
                  </div>
                </div>
                {/* Blog Item Wrapper Ends*/}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 blog-item">
                {/* Blog Item Starts */}
                <div
                  className="blog-item-wrapper wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <div className="blog-item-img">
                    <a href="single-post.html">
                      <img src="assets/img/blog/img3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="blog-item-text">
                    <h3>
                      <a href="single-post.html">Changing the topic scope</a>
                    </h3>
                    <p>
                      Nunc in mauris a ante rhoncus tristique vitae et nisl. Quisque
                      ullamcorper rutrum lacinia. Integer varius ornare egestas.
                    </p>
                    <a href="single-post.html" className="btn btn-common btn-rm">
                      Read More
                    </a>
                  </div>
                </div>
                {/* Blog Item Wrapper Ends*/}
              </div>
            </div>
          </div>
        </section>
        {/* blog Section End */}
        {/* Clients Section Start */}
        <div id="clients" className="section-padding bg-gray">
          <div className="container">
            <div className="row text-align-">
              <div
                className="col-lg-3 col-md-3 col-xs-12 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="client-item-wrapper">
                  <img
                    className="img-fluid"
                    src="assets/img/clients/CHSlogo.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="col-lg-3 col-md-3 col-xs-12 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="client-item-wrapper">
                  <img
                    className="img-fluid"
                    src="assets/img/clients/logolind.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="col-lg-3 col-md-3 col-xs-12 wow fadeInUp"
                data-wow-delay="0.9s"
              >
                <div className="client-item-wrapper">
                  <img
                    className="img-fluid"
                    src="assets/img/clients/logo.svg"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="col-lg-3 col-md-3 col-xs-12 wow fadeInUp"
                data-wow-delay="1.2s"
              >
                <div className="client-item-wrapper">
                  <img
                    className="img-fluid"
                    src="assets/img/clients/logoUEK.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Clients Section End */}
        {/* Contact Section Start */}
        <section id="contact" className="section-padding">
          <div className="container">
            <div className="row contact-form-area wow fadeInUp" data-wow-delay="0.4s">
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="contact-block">
                  <form id="contactForm">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Имя"
                            required
                            data-error="Пожалуйста напишите ваше имя"
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            className="form-control"
                            name="email"
                            required
                            data-error="Пожалуйста напишите ваш email"
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Предпологаемая страна поступления"
                            id="msg_subject"
                            className="form-control"
                            required=""
                            data-error="Пожалуйста напишите ваше пожелания"
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Сообщение"
                      rows={5}
                      data-error="Напишите ваше сообщение"
                      required=""
                      defaultValue={""}
                    />
                          <div className="help-block with-errors" />
                        </div>
                        <div className="submit-button">
                          <button
                            className="btn btn-common"
                            id="form-submit"
                            type="submit"
                          >
                            Отправить
                          </button>
                          <div id="msgSubmit" className="h3 text-center hidden" />
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="contact-right-area wow fadeIn">
                  <div className="contact-title">
                    <h1>Для партнерства</h1>
                    <p>
                      Если вы хотите стать нашими партнерами
                    </p>
                  </div>
                  <h2>С нами можно связаться</h2>
                  <div className="contact-right">
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="lni-map-marker" />
                      </div>
                      <p>ADDRESS: 28 Green Tower, New York City, USA</p>
                    </div>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="lni-envelope" />
                      </div>
                      <p>
                        <a href="mailto: guidance_counselor@chschool.eu" target='_blank'>Email: guidance_counselor@chschool.eu</a>
                      </p>
                    </div>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="lni-phone-handset" />
                      </div>
                      <p>
                        <a href="callto: +382 67 452 675">Phone: +382 67 452 675</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section End */}
        {/* Copyright Section Start */}
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-3 col-xs-12">
                <div className="footer-logo">
                  <img src="assets/img/logo.png" alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-xs-12">
                <div className="social-icon text-center">
                  <a className="facebook" href="#">
                    <i className="lni-facebook-filled" />
                  </a>
                  <a className="twitter" href="#">
                    <i className="lni-twitter-filled" />
                  </a>
                  <a className="instagram" href="#">
                    <i className="lni-instagram-filled" />
                  </a>
                  <a className="linkedin" href="#">
                    <i className="lni-linkedin-filled" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 col-xs-12">
                <p className="float-right">
                  {" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright Section End */}
        {/* Go to Top Link */}
        <a href="#" className="back-to-top">
          <i className="lni-arrow-up" />
        </a>
        {/* Preloader */}
        <div id="preloader">
          <div className="loader" id="loader-1" />
        </div>
        {/* End Preloader */}
      </>

    </div>
  );
}

export default App;
