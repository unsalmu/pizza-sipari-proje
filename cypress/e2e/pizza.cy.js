describe('Sipariş formu testleri', () => {   
    beforeEach(() => {
        cy.visit('http://localhost:5173');
    })
    it('ACIKTIM butonu forma yönlendiriyor', () => {
        cy.get('[data-cy="to-siparis-formu"]').first().click();
        cy.get('[data-cy="siparis-formu"]').should('exist');
    });
    it('Sipariş Ver butonu forma yönlendiriyor', () => {
        cy.get('[data-cy="to-siparis-formu"]').eq(1).click(); // İkinci buton
        cy.get('[data-cy="siparis-formu"]').should('exist');
      });
      it('Üçüncü buton forma yönlendiriyor', () => {
        cy.get('[data-cy="to-siparis-formu"]').eq(2).click(); // Üçüncü buton
        cy.get('[data-cy="siparis-formu"]').should('exist');
      });
      it('Sipariş notu inputuna metin girilebilmeli', () => {
        cy.get('[data-cy="to-siparis-formu"]').first().click();
        cy.get('[data-cy="siparis-notu"]').type('Ekstra acı olsun lütfen!');
        cy.get('[data-cy="siparis-notu"]').should('have.value', 'Ekstra acı olsun lütfen!');
      });
      it('Birden fazla malzeme seçilebilmeli', () => {
        cy.visit('http://localhost:5173');
        cy.get('[data-cy="to-siparis-formu"]').first().click();
        // İlk üç malzemeyi seç
        cy.get('[data-cy="malzeme-checkbox-0"]').check({ force: true });
        cy.get('[data-cy="malzeme-checkbox-1"]').check({ force: true });
        cy.get('[data-cy="malzeme-checkbox-2"]').check({ force: true });
        // Kontrol et
        cy.get('[data-cy="malzeme-checkbox-0"]').should('be.checked');
        cy.get('[data-cy="malzeme-checkbox-1"]').should('be.checked');
        cy.get('[data-cy="malzeme-checkbox-2"]').should('be.checked');
      });
      it('Boyut seçilmeden sipariş ver butonu disabled olmalı', () => {
        cy.get('[data-cy="to-siparis-formu"]').first().click();
        // Boyut seçme! (Yani radiolara hiç dokunma.)
        // Hamur seç
        cy.get('[data-cy="hamur-select"]').select('İnce Hamur');
        // En az 4 malzeme seç
        cy.get('[data-cy="malzeme-checkbox-0"]').check({ force: true });
        cy.get('[data-cy="malzeme-checkbox-1"]').check({ force: true });
        cy.get('[data-cy="malzeme-checkbox-2"]').check({ force: true });
        cy.get('[data-cy="malzeme-checkbox-3"]').check({ force: true });
      
        // Siparişi Ver butonu disabled mı kontrol et
        cy.get('[data-cy="siparis-ver-btn"]').should('be.disabled');
      });
      it('Hamur seçilmeden sipariş ver butonu disabled olmalı', () => {
        cy.get('[data-cy="to-siparis-formu"]').first().click();
        // Hamur seçme! (Yani select inputa dokunma.)
      
        // Boyut seç (ör: orta boy)
        cy.get('[data-cy="boyut-radio-orta"]').check({ force: true });
        // En az 4 malzeme seç
        cy.get('[data-cy="malzeme-checkbox-0"]').check({ force: true });
        cy.get('[data-cy="malzeme-checkbox-1"]').check({ force: true });
        cy.get('[data-cy="malzeme-checkbox-2"]').check({ force: true });
        cy.get('[data-cy="malzeme-checkbox-3"]').check({ force: true });
      
        // Siparişi Ver butonu disabled mı kontrol et
        cy.get('[data-cy="siparis-ver-btn"]').should('be.disabled');
      });
      it('Yalnızca 3 malzeme seçilmişken sipariş ver butonu disabled olmalı', () => {
        cy.get('[data-cy="to-siparis-formu"]').first().click();
      
        // Boyut ve hamur seç
        cy.get('[data-cy="boyut-radio-orta"]').check({ force: true });
        cy.get('[data-cy="hamur-select"]').select('İnce Hamur');
        // Sadece 3 malzeme seç
        cy.get('[data-cy="malzeme-checkbox-0"]').check({ force: true });
        cy.get('[data-cy="malzeme-checkbox-1"]').check({ force: true });
        cy.get('[data-cy="malzeme-checkbox-2"]').check({ force: true });
      
        cy.get('[data-cy="siparis-ver-btn"]').should('be.disabled');
      });
      it('11 malzeme seçilmişken sipariş ver butonu disabled olmalı', () => {
        cy.get('[data-cy="to-siparis-formu"]').first().click();
      
        // Boyut ve hamur seç
        cy.get('[data-cy="boyut-radio-orta"]').check({ force: true });
        cy.get('[data-cy="hamur-select"]').select('İnce Hamur');
        // 11 malzeme seç (0'dan 10'a kadar)
        for (let i = 0; i < 11; i++) {
          cy.get(`[data-cy="malzeme-checkbox-${i}"]`).check({ force: true });
        }
      
        cy.get('[data-cy="siparis-ver-btn"]').should('be.disabled');
      });
      it('9 malzeme, küçük boy ve ince hamur ile form başarılı gönderilebilmeli', () => {
        cy.get('[data-cy="to-siparis-formu"]').first().click();
        cy.get('[data-cy="boyut-radio-kucuk"]').check({ force: true });
        cy.get('[data-cy="hamur-select"]').select('İnce Hamur');
        // 9 malzeme seç
        for (let i = 0; i < 9; i++) {
          cy.get(`[data-cy="malzeme-checkbox-${i}"]`).check({ force: true });
        }
        // Sipariş notu ekle
        cy.get('[data-cy="siparis-notu"]').type('Bol malzemeli olsun.');
        // Formu gönder
        cy.get('[data-cy="siparis-ver-btn"]:visible').should('not.be.disabled').click();
      
        // Başarı mesajı
        cy.contains('TEBRİKLER!').should('be.visible');
        cy.contains('SİPARİŞİNİZ ALINDI!').should('be.visible');
      });
      
      
      
      
      

      
      
});

    