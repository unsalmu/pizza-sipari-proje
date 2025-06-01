import React from 'react';

import './MainPage.css'; 
export default function MainPage({ onOrder }) {
    return (
      <div id="wrapper">
        <header className="hero">
          <div className="logo">
            <img src="/assets/iteration-1-images/logo.svg" alt="Teknolojik Yemekler" />
          </div>
          <div className="hero-content">
            <h1 className="special-font">fırsatı kaçırma</h1>
            <h2 className="hero-title">Kod Acıktırır<br />Pizza, Doyurur</h2>
            <button className="cta" onClick={onOrder} data-cy="to-siparis-formu">ACIKTIM</button>
          </div>
        </header>
        <main>
        {/* KATEGORİLER */}
        <div className="categories-section">
          {[
            { icon: '1.svg', label: 'YENİ! Kore' },
            { icon: '2.svg', label: 'Pizza' },
            { icon: '3.svg', label: 'Burger' },
            { icon: '4.svg', label: 'Kızartmalar' },
            { icon: '5.svg', label: 'Fast food' },
            { icon: '6.svg', label: 'Gazlı içecek' }
          ].map((item, i) => (
            <div className="category" key={i}>
              <img src={`/assets/iteration-2-images/icons/${item.icon}`} alt={item.label} className="category-icon" />
              <p className="category-label">{item.label}</p>
            </div>
          ))}
        </div>
        {/* ÖNE ÇIKANLAR */}
        <section className="featured-container">
          <div className="featured-left">
            <article className="card-special">
              <h2>Özel Lezzetus</h2>
              <p>Position: Absolute Acı Burger</p>
              <button className="sipariş-ver" onClick={onOrder} data-cy="to-siparis-formu">Sipariş Ver</button>
            </article>
          </div>
          <div className="featured-right">
            <article className="card-small-ust">
              <div className="card-small-ust-content">
                <h3>Hackatlon <br /> Burger Menü</h3>
                <button className="sipariş-ver" onClick={onOrder} data-cy="to-siparis-formu">Sipariş Ver</button>
              </div>
            </article>
            <article className="card-small-alt">
              <div className="card-small-alt-content">
                <h3><span className="highlight">Çoooook</span> hızlı <br /> npm gibi kurye</h3>
                <button className="btn" type="button" onClick={onOrder} data-cy="to-siparis-formu">Sipariş Ver</button>
              </div>
            </article>
          </div>
        </section>
        {/* POPÜLERLER */}
        <section className="popular-container">
          <h2 className="special-font">en çok paketlenen menüler</h2>
          <h3>Acıktıran Kodlara Doyuran Menüler</h3>
        </section>
        {/* İKONLAR */}
        <section className="icons-list">
          {[
            { icon: '1.svg', label: 'YENİ! Kore' },
            { icon: '2.svg', label: 'Pizza' },
            { icon: '3.svg', label: 'Burger' },
            { icon: '4.svg', label: 'Kızartmalar' },
            { icon: '5.svg', label: 'Fast food' },
            { icon: '6.svg', label: 'Gazlı içecek' }
          ].map((item, i) => (
            <button type="button" className="icon-button" key={i}>
              <img src={`/assets/iteration-2-images/icons/${item.icon}`} alt={item.label} />
              <span className="icon-label">{item.label}</span>
            </button>
          ))}
        </section>
        {/* FİYATLANDIRMA */}
        <section className="pricing-container">
          <div className="pricing-list">
            {[
              { img: 'food-1.png', title: 'Terminal Pizza' },
              { img: 'food-2.png', title: 'Position Absolute Acı Pizza' },
              { img: 'food-3.png', title: 'useEffect Tavuklu Burger' },
            ].map((item, i) => (
              <div className="pricing-card" key={i}>
                <img src={`/assets/iteration-2-images/pictures/${item.img}`} alt={item.title} className="product-image" />
                <h4 className="product-title">{item.title}</h4>
                <div className="product-meta">
                  <div className="meta">
                    <span className="rating">4.9</span>
                    <span className="reviews">(200)</span>
                  </div>
                  <div className="price">85₺</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-top-content">
            <div className="footer-column-contact">
              <img src="/assets/iteration-2-images/footer/logo-footer.svg" alt="Teknolojik Yemekler" />
              <address>
                <p><img src="/assets/iteration-2-images/footer/icons/icon-1.png" alt="Adres" className="contact-icon" />341 Londonderry Road, İstanbul Türkiye</p>
                <p><img src="/assets/iteration-2-images/footer/icons/icon-2.png" alt="Email" className="contact-icon" />aciktim@teknolojikyemekler.com</p>
                <p><img src="/assets/iteration-2-images/footer/icons/icon-3.png" alt="Telefon" className="contact-icon" />+90 216 123 45 67</p>
              </address>
            </div>
            <div className="footer-column-hot-menu">
              <div className="hot-menu-content">
                <h4>Hot Menu</h4>
                <p>Terminal Pizza</p>
                <p>5 Kişilik Hackathlon Pizza</p>
                <p>useEffect Tavuklu Pizza</p>
                <p>Beyaz Console Frosty</p>
                <p>Testler Geçti Mutlu Burger</p>
                <p>Position Absolute Acı Burger</p>
              </div>
            </div>
            <div className="footer-column-instagram">
              <h4>Instagram</h4>
              <div className="instagram-grid">
                {[0,1,2,3,4,5].map(i => (
                  <img src={`/assets/iteration-2-images/footer/insta/li-${i}.png`} alt={`Instagram foto ${i+1}`} key={i}/>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© 2023 Teknolojik Yemekler.</p>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </footer>
    </div>
);
}