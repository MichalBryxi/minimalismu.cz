import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
      {
        title: 'Oblečení',
        body: 'Tohle tričko jsem na sobě sice už rok neměl, ale jednou...',
        image: 'https://scontent-ams3-1.xx.fbcdn.net/hphotos-xtp1/t31.0-8/12273601_10207990293546059_9151703523103933532_o.jpg'
      }, {
        title: 'Nářadí',
        body: 'Hele já vim že mít dvoje sikovky je asi blbost, ale přeci je nevyhodim...',
        image: ''
      }, {
        title: 'Věci na sport',
        body: 'Už dlouho si chci koupit nové běžecké kalhoty. Ale vždyť tyhle jsou ještě v pohodě...',
        image: ''
      }, {
        title: 'Kuchyně',
        body: 'Tahle sklenička mě odjakživa jenom štve. Špatný tvar a nevejde se do myčky...',
        image: ''
      }, {
        title: 'Výzdoba',
        body: 'Ten obraz? No ten tu visí odjakživa. Ne, nelíbí se mi. Prostě tu je...',
        image: ''
      }, {
        title: 'Hračky',
        body: 'Ne, děti nemám. Jen mi přišlo škoda to dávat pryč i když jsem to dostal zadarmo...',
        image: ''
      }, {
        title: 'Elektronika',
        body: 'Hele tenhle drát se určitě jednou bude hodit. A tenhle taky. A ten taky...',
        image: ''
      }, {
        title: 'Stavba',
        body: 'K čemu mám ty dlaždičky ve sklepě? No kdyby náhodou nějaká v koupelně upadla. Jo aha, já už mám vlastně novou koupelnu...',
        image: ''
      }, {
        title: 'Hry',
        body: 'Jo tohle jsem nikdy nehrál, ale třeba se někdy někdo staví kdo tu hru má rád...',
        image: ''
      }, {
        title: 'Domácnost',
        body: 'Jo ty stínítka na lustry jsem chtěl dávno vyměnit. Jen nikdy nebyl důvod, dokud tu visela...',
        image: ''
      }, {
        title: 'Koupelna',
        body: 'Jo tu pemzu jsem si kdysi koupil spíš omylem. Já nevim, třeba by se někomu hodila...',
        image: ''
      }, {
        title: 'Drobnosti',
        body: 'Já vlastně ani nevím k čemu to všechno je. Občas se objeví nějaká nová drobnost...',
        image: ''
      }
    ];
  }
});
