/* https://github.com/bda-research/node-crawler */

var Crawler = require('crawler'),
    express = require('express'),
    crawler = function( o, cb ){
        o = o || {};
        var c = new Crawler({
            maxConnections : o['maxConnections'] || 10,
            jQuery: false,
            callback : function( error, res, done ){
                if( error ) 
                    console.log(error);
                else
                    cb( res.body );            
                
                done();
            }
        });
        c.queue( o['uri'].split(',') );
    },
    app = express();
    app.use(express.static('public'))
    app.get('/api', function( req, res ){
        crawler({ uri: req['query']['uri'] }, function( k ){
            res.send( k ); 
        });      
    }); 
    app.listen(3000);


    