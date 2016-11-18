var tondeuses = require('./lib/tondeuses.js');
var tp= tondeuses.tondrePelouse();
// Avec chargement d'un fichier en entrée
 tp.chargeFichierPelouse('./test.txt');

// Avec un tableau en direct (ici 3 tondeuses )
// tp.jeuTests([ '5 5' , '1 2 N' , 'GAGAGAGAA' , '3 3 E' , 'AADAADADDA' , '1 2 N' , 'GAGAGAGAA' ]);





