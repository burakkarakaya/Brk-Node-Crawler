var CONFIG = {

    vw: {
        prefix: 'https://binekarac.vw.com.tr/',
        uri: 'kampanyalar.aspx',
        el: { items: '.search-result .pixel-modal', title: 'h5', dsc: '.col-lg-12 p', date: '.date', img: '.img-responsive', lnk: 'self' }
    },

    renault: {
        prefix: 'https://www.renault.com.tr/',
        uri: 'kampanyalar.html',
        el: { items: '.freeEditorial .grid-row', title: '.heading-group span', dsc: '.heliostext p', date: '', img: { el: '.picture-element  span:eq(0)', attr: 'data-src' }, lnk: '.cta-list a' }
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

var CONFIGPRICE = {
    vw: {
        prefix: 'https://binekarac.vw.com.tr/',
        uri: '2017-tum-modeller-fiyat-listesi.aspx',
        el: { items: '.table tr', title: 'td.col1, td.col2', price1: '[data-title="FİYAT"]', price2: '[data-title="FİYAT TL"]' }
    },
    hyundai: {
        prefix: 'http://www.hyundai.com/',
        uri: 'tr/tr/Shopping/Pricelist/index.html',
        el: { items: 'table tr', title: 'td:eq(0), td:eq(1)', price1: 'td:eq(2)', price2: 'td:eq(3)' }
    },
    citroen: {
        prefix: 'http://lokal.citroen.com.tr/',
        uri: 'FiyatListesi/citroen',
        el: { items: '.modelRowValues', title: '> span:eq(0), > span:eq(1), > span:eq(2), > span:eq(3)', price1: '> span:eq(5)', price2: '> span:eq(6)' }
    },
    mitsubishi: {
        "prefix": "https://www.mitsubishi-motors.com.tr/",
        "uri": "fiyatlar",
        "el": {
          "items": ".table_p .table-price-list",
          "title": ".text-price span",
          "price1": "> td:eq(1) td:eq(1)",
          "price2": "> td:eq(1) td:eq(2)"
        }
      },

      suzuki: {
        "prefix": "http://otomobil.suzuki.com.tr/",
        "uri": "fiyat-listesi-2017.aspx",
        "el": { "items": "#table_fiyat_listesi tr", "title": "> td:eq(0), > td:eq(1), > td:eq(2), > td:eq(3), > td:eq(4)", "price1": "> td:eq(5)" }
    },
    
    alfaRomeo: {
        "prefix": "https://tofas.dpcmsys.com/",
        "uri": "TofasPriceList/ALFAROMEO_FiyatListesi_2017.Html?opncl_performance=true&opncl_advertising=true",
        "el": { "items": "table:eq(0) tr", "title": "> td:eq(0), > td:eq(1)", "price1": "> td:eq(2)", "price2": "> td:eq(3)" }
    },
    mini: {
        "prefix": "https://www.borusanotomotiv.com/",
        "uri": "mini/stage2/fiyatListesi/FiyatListesi.aspx",
        "el": { "items": ".priceTable .pRow", "title": "> div:eq(0), > div:eq(1), > div:eq(2), > div:eq(3), > div:eq(4), > div:eq(5)", "price1": "> div:eq(7)" }
    },
    
    
    ds: {
        "prefix": "http://lokal.citroen.com.tr/",
        "uri": "FiyatListesi/ds?_ga=1.206574234.869682584.1457694803",
        "el": { "items": ".modeldetail .modelRowValues", "title": "> :eq(0), > :eq(1), > :eq(2), > :eq(3)", "price1": "> :eq(5)" }
    },
    
    kia: {
        "prefix": "https://www.kia.com/",
        "uri": "tr/satis-merkezi/fiyat-listesi.html",
        "el": { "items": ".pricelist table tr", "title": "> :eq(0), > :eq(1), > :eq(2)", "price1": "> :eq(3)", "price2": "> :eq(5)" }
    },
    
    hyundai: {
        "prefix": "http://www.hyundai.com/",
        "uri": "tr/tr/Shopping/Pricelist/index.html",
        "el": { "items": ".advice table tbody tr", "title": "> :eq(0)", "price1": "> :eq(2)", "price2": "> :eq(3)" }
    },
    
    subaru: {
        "prefix": "http://www.subaru.com.tr/",
        "uri": "Fiyat-Listesi",
        "el": { "items": ".price-box table tbody tr:not('.modeltitletoptable')", "title": "> :eq(0)", "price1": "> :eq(1)" }
    },

    jeep: {
        "prefix": "https://tofas.dpcmsys.com/",
        "uri": "TofasPriceList/JEEP_FiyatListesi_2018.Html?opncl_performance=true&opncl_advertising=true",
        "el": { "items": "table tbody tr", "title": "> :eq(0), > :eq(1), > :eq(2)", "price1": "> :eq(3)", "price2": "> :eq(4)" }
    },

    jaguar: {
        "prefix": "http://www.jaguar-turkiye.com/",
        "uri": "jaguar-range/fiyat-listesi/index.html",
        "el": { "items": ".tableAreaFiyat tbody tr:not('.firstChild')", "title": "> :eq(0), > :eq(1), > :eq(2), > :eq(3)", "price1": ".fiyatColm span:eq(1)" }
    },

    landrover: {
        "prefix": "http://www.landrover.com.tr/",
        "uri": "fiyat-listesi.aspx",
        "el": { "items": ".tableAreaFiyat tbody tr:not('.firstChild')", "title": "> :eq(0), > :eq(1), > :eq(2), > :eq(3)", "price1": ".fiyatColm span:eq(1)" }
    },

    bmw: {
        "prefix": "https://www.borusanotomotiv.com/",
        "uri": "bmw/stage2/fiyat-listesi/static-fiyat-listesi-v2.aspx?utm_source=${urlParameter.utm_source}&utm_medium=${urlParameter.utm_medium}&utm_campaign=${urlParameter.utm_campaign}&seri=${urlParameter.seri}",
        "el": { "items": ".SeriesDetail .Series .DetailTable", "title": "> :eq(1) p, > :eq(2), > :eq(3), > :eq(4), > :eq(5), > :eq(6)", "price1": "> :eq(8)" }
    },

    ssangyong: {
        "prefix": "http://www.ssangyong.com.tr/",
        "uri": "tr/fiyat-listesi",
        "el": { "items": ".teknik-table tbody tr", "title": "> :eq(0)", "price1": "> :eq(1)", "price2": "> :eq(2)" }
    },

    honda: {
        "prefix": "https://honda.com.tr/",
        "uri": "otomobil-fiyat-listesi",
        "func": function( k ){
            var htm = $('<div>' + k + '</div>').find('.tab-content tbody tr [rowspan]').remove().end().get(0).outerHTML;
            return htm;
        },
        "el": { "items": ".tab-content tbody tr", "title": "> :eq(0), > :eq(1), > :eq(2), > :eq(3), > :eq(4)", "price1": "> :eq(5)" }
    },

    peugeot: {
        "prefix": "http://kampanya.peugeot.com.tr/",
        "uri": "fiyat-listesi/index2018.html",
        "el": { "items": "#priceListTable tr:not('.first-line'):not(':eq(0)')", "title": "> :eq(0)", "price1": "> :eq(1)" }
    },

    skoda: {
        "prefix": "http://www.skoda.com.tr/",
        "uri": "fiyat-listesi/fiyat-listesi",
        "func": function( k ){

            var htm = $('<div>' + k + '</div>')
                        .find('.mobile-sticky-table')
                        .each(function(){
                            var ths = $( this ), span = ths.find('[rowspan]');
                                ths
                                .find('tr')
                                .each(function(){
                                    var ths = $( this );
                                    if( ths.find('[rowspan]').length == 0 )
                                        ths.prepend( span.clone() );
                                });
                        })
                        .end()
                        .get(0)
                        .outerHTML;
            return htm;
        },
        "el": { "items": ".mobile-sticky-table tbody tr", "title": "> :eq(0), > :eq(1)", "price1": "> :eq(3)", "price2": "> :eq(2)"  }
    }
};




