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

    nissan: {
        prefix: 'https://www.nissan.com.tr/',
        uri: 'kampanyalar.html',
        el: { items: '.freeEditorial .grid-row', title: '.heading-group h2', dsc: '.heliostext p', date: '', img: { el: '.picture-element  img', attr: 'src' }, lnk: '.cta-list a' }
    },

    mercedes: {
        prefix: 'http://www.mercedes-benz-finansalhizmetler.com/',
        uri: 'kampanyalar',
        el: { items: '.tabInner > div', title: '> a > h2', dsc: '.overlay p', date: '', img: 'img', lnk: '> a' }
    },

    audi: {
        prefix: 'http://www.audi.com.tr/',
        uri: 'tr/web/tr/audi-dunyasi/kampanyalar.html',
        el: { items: '.nm-content li', title: 'a.nm-j-teaser-click-item', dsc: 'p', date: '', img: '.nm-teaser-ed-img img', lnk: '.nm-j-teaser-click-item' }
    },

    hyundai: {
        prefix: 'http://www.hyundai.com/',
        uri: 'tr/tr/Shopping/SpecialOffer/index.html',
        el: { items: '.para_offer', title: '', dsc: '', date: '.date', img: 'img', lnk: 'a' }
    },

    seat: {
        prefix: 'https://www.seat.com.tr/',
        uri: 'firsatlar/kampanyalar.aspx',
        el: { items: '.par.parsys > .parbase.section', title: '.typeLabel', dsc: '', date: '', img: { el: '.cont-img > span span:eq( 0 )', attr: 'data-src' }, lnk: 'a' }
    },

    honda: {
        prefix: 'https://honda.com.tr/',
        uri: 'kampanyalar/',
        el: { items: '.slide', title: '.text', dsc: '', date: '', img: 'img', lnk: '> a' }
    },
    
    kia: {
        prefix: 'https://www.kia.com/',
        uri: 'api/kia_turkey/base/of02/offer.selectOfferList?nationalCode=tr&currentCate=&currentOffer=',
        setJSON: function( obj ){
            var arr = [], data = $.parseJSON( obj['data'] );
            $.each(data['dataInfo'], function( i, k ){
                arr.push({ 
                    title: k['carInfo']['displayName'] || '', 
                    dsc: uty.clearTag( k['contents'] || '' ), 
                    date: k['modDate'] || '', 
                    img: uty.trimText( uty.setURI({ uri: k['carInfo']['imagePath'] || '', prefix: obj['prefix'] }) ), 
                    lnk: uty.trimText( uty.setURI({ uri: 'tr/satis-merkezi/kampanyalar.detail.html?sc.offerSeq=' + ( k['offerSeq'] || '' ), prefix: obj['prefix'] }) )
                });
            }); 

            return arr;
        }
    },

    dacia: {
        prefix: 'https://www.dacia.com.tr/',
        uri: 'kampanyalar.html',
        el: { items: '.freeEditorial .grid-row', title: '.heading-group h2', dsc: '.heliostext p', date: '', img: { el: '.picture-element  span:eq(0)', attr: 'data-src' }, lnk: '.cta-list a' }
    },

    volvo: {
        prefix: 'https://www.volvocars.com/',
        uri: 'tr/hizmetler/volvo-sahipligi/aksesuar-kampanyasi',
        el: { items: '.extf-container', title: '.extf-body > h3, .extf-body > h2', dsc: '.extf-content', date: '', img: { el: 'img', attr: 'srcset', customFunc: function( k ){ return k.replace(/\[/g, '').replace(/\]/g, '').split(',')[0]; } }, lnk: '.link' }
    },

    jeep: {
        prefix: 'http://kampanya.jeep.com.tr/',
        uri: 'kampanyalar/satis',
        el: { items: '.camp-box', title: 'h2', dsc: '.anti-p', date: '', img: 'img', lnk: 'a' }
    },
    
    suzuki: {
        prefix: 'http://otomobil.suzuki.com.tr/',
        uri: 'kampanyalar/',
        el: { items: '.container .row > .box', title: 'div p', dsc: '', date: '', img: 'img', lnk: 'a' }
    }

};


