import Ember from 'ember';
import ResetScroll from '../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  model () {
    return [
      {
        title: 'Oblečení',
        body: 'Tohle tričko jsem na sobě sice už rok neměl, ale jednou...',
        image: 'https://scontent-fra3-1.xx.fbcdn.net/hphotos-xap1/t31.0-8/12273787_10208047107206365_6044340918461083007_o.jpg'
      }, {
        title: 'Nářadí',
        body: 'Hele já vim že mít dvoje sikovky je asi blbost, ale přeci je nevyhodim...',
        image: 'https://scontent-fra3-1.xx.fbcdn.net/hphotos-xtp1/t31.0-8/12240287_10207974882600795_2639877606702409321_o.jpg'
      }, {
        title: 'Věci na sport',
        body: 'Už dlouho si chci koupit nové běžecké kalhoty. Ale vždyť tyhle jsou ještě v pohodě...',
        image: 'https://scontent-fra3-1.xx.fbcdn.net/hphotos-xpf1/t31.0-8/r270/12291092_10208056637604619_5611565313802981951_o.jpg'
      }, {
        title: 'Kuchyně',
        body: 'Tahle sklenička mě odjakživa jenom štve. Špatný tvar a nevejde se do myčky...',
        image: 'https://scontent-fra3-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/12184076_10207945613149077_4506230889000235154_o.jpg'
      }, {
        title: 'Výzdoba',
        body: 'Ten obraz? No ten tu visí odjakživa. Ne, nelíbí se mi. Prostě tu je...',
        image: 'https://scontent-fra3-1.xx.fbcdn.net/hphotos-xtf1/t31.0-8/r270/12314436_10208064092310982_4829711072581916516_o.jpg'
      }, {
        title: 'Hračky',
        body: 'Ne, děti nemám. Jen mi přišlo škoda to dávat pryč i když jsem to dostal zadarmo...',
        image: 'https://scontent-fra3-1.xx.fbcdn.net/hphotos-xfl1/t31.0-8/12247694_10208038455110068_1536993265540923431_o.jpg'
      }, {
        title: 'Elektronika',
        body: 'Hele tenhle drát se určitě jednou bude hodit. A tenhle taky. A ten taky...',
        image: 'https://scontent-fra3-1.xx.fbcdn.net/hphotos-xfp1/t31.0-8/11051876_10207995538557181_7450476944295840830_o.jpg'
      }, {
        title: 'Stavba',
        body: 'K čemu mám ty dlaždičky ve sklepě? No kdyby náhodou nějaká v koupelně upadla. Jo aha, já už mám vlastně novou koupelnu...',
        image: 'https://scontent-fra3-1.xx.fbcdn.net/hphotos-xfp1/t31.0-8/12308198_10208067253190002_3084749033439429293_o.jpg'
      }, {
        title: 'Hry',
        body: 'Jo tohle jsem nikdy nehrál, ale třeba se někdy někdo staví kdo tu hru má rád...',
        image: 'https://scontent-fra3-1.xx.fbcdn.net/hphotos-xpl1/t31.0-8/12304016_10208038455070067_5937146274224826097_o.jpg'
      }, {
        title: 'Domácnost',
        body: 'Jo ty stínítka na lustry jsem chtěl dávno vyměnit. Jen nikdy nebyl důvod, dokud tu visela...',
        image: 'https://scontent-fra3-1.xx.fbcdn.net/hphotos-xtp1/t31.0-8/12310022_10208064095231055_5034412916023063747_o.jpg'
      }, {
        title: 'Koupelna',
        body: 'Jo tu pemzu jsem si kdysi koupil spíš omylem. Já nevim, třeba by se někomu hodila...',
        image: 'https://scontent-fra3-1.xx.fbcdn.net/hphotos-xlt1/t31.0-8/12309672_10208056633004504_2050984510388498797_o.jpg'
      }, {
        title: 'Drobnosti',
        body: 'Já vlastně ani nevím k čemu to všechno je. Občas se objeví nějaká nová drobnost...',
        image: 'https://scontent-fra3-1.xx.fbcdn.net/hphotos-xtp1/t31.0-8/12265960_10208040409358923_5411524682531487304_o.jpg'
      }
    ];
  }
});
