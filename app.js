var Crawler = require('crawler'),
    express = require('express'),
    crawler = function( o, cb ){
        o = o || {};
        var c = new Crawler({
            maxConnections : o['maxConnections'] || 10,
            callback : function( error, res, done ){
                if( error ) 
                    console.log(error);
                else
                    cb(res.$);            
                
                done();
            }
        });
        c.queue( o['uri'].split(',') );
    },
    app = express();
    app.use(express.static('public'))
    app.get('/api', function( req, res ){
        crawler({ uri: req['query']['uri'] }, function( $ ){
            res.send( $('html').html() || '' );
        });      
    }); 
    app.listen(3000);


    