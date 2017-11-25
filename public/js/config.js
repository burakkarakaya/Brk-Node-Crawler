/* https://github.com/bda-research/node-crawler */
var CONFIG = {

    vw: {
        prefix: 'https://binekarac.vw.com.tr/',
        uri: 'kampanyalar.aspx',
        el: { items: '.search-result .pixel-modal', title: 'h5', dsc: '.col-lg-12 p', date: '.date', img: '.img-responsive', lnk: 'self' }
    },

    renault: {
        prefix: 'https://www.renault.com.tr/',
        uri: 'kampanyalar.html',
        el: { items: '.freeEditorial .grid-row', title: '.heading-group span', dsc: '.heliostext p', date: '', img: '.picture-element img', lnk: '.cta-list a' }
    },

    ford: {
        prefix: 'http://www.ford.com.tr/',
        uri: 'kampanyalar',
        func: function( k ){
            return k.replace(/Detaylı bilgi için tıklayın!/g, '');
        },
        el: { items: '.content-block', title: 'h3', dsc: 'p', date: '', img: 'img', lnk: 'p a:last-child' }
    },

    fiat: {
        prefix: 'https://otomobil.fiat.com.tr/',
        uri: 'kampanyalar',
        el: { items: '.promo-panel-results > div', title: 'h2', dsc: '.editorial-text', date: '', img: { el: '.editorial-box img', attr: 'data-minwidth990px' }, lnk: '.editorial-box a' }
    },

    opel: {
        prefix: 'http://www.opel.com.tr/',
        uri: 'teklifler-hizmetler/index.html',
        el: { items: '.mds-area-pf3 > div', title: 'h3.tt', dsc: '.ts_ln_1_text > div', date: '', img: 'img', lnk: 'a:last-child' }
    },

    toyota: {
        prefix: 'https://www.toyota.com.tr/',
        uri: 'current-offers/index.json',
        el: { items: '.filterable-wrapper .responsive-item', title: '.promo-headlines h4', dsc: '.expansion-inner p', date: '', img: { el: '.row img', attr: 'data-lazyload-desktop' }, lnk: '.list-group-item > a' }
    },

    bmw: {
        prefix: 'https://www.bmw.com.tr/',
        uri: 'tr/ssl/kampanyalar.html',
        el: { items: '.basecomponent.preconfiguration', title: 'h2', dsc: 'h4', date: '', img: { el: 'img', attr: 'data-interchange', customFunc: function( k ){ return k.replace(/\[/g, '').replace(/\]/g, '').split(',')[0]; } }, lnk: 'a' }
    },
    peugeot: {
        prefix: 'http://www.peugeot.com.tr/',
        uri: 'satis-kampanyalari.html',
        el: { items: '.body section', title: 'h2', dsc: 'p, ul li', date: '', img: { el: 'img', attr: 'data-src' }, lnk: 'a' }
    },
    mercedes: {
        prefix: 'http://www.mercedes-benz-finansalhizmetler.com/',
        uri: 'kampanyalar',
        el: { items: '.tabInner > div', title: '> a > h2', dsc: '.overlay p', date: '', img: 'img', lnk: '> a' }
    }

    
};


