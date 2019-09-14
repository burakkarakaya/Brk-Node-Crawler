# Brk-Node-Crawler

Genel amacı belirlenen sayfada belirtilen alanları toplamak ve obje olarak döndürmek.

```JS
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
};

// Örneğin burada https://binekarac.vw.com.tr/kampanyalar.aspx sayfasına istek yapıp burada ".search-result .pixel-modal" içerisinde belirlenen alanları çekiyoruz. Örneğin title için h5 etiketindeki datayı alıyoruz. title: "h5 etikende artık ne yazıyorsa onun değeri" böyle belirlenen alanları toplayıp obje olarak alabiliyoruz.

```
