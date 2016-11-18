var fs = require('fs');

var affectationDirections = { 
	N: { "D" : "E",  "G" : "W" },
	E: { "D" : "S",  "G" : "N" },
	S: { "D" : "W",  "G" : "E" },
	W: { "D" : "N",  "G" : "S" }
};

var m = {
	tondrePelouse : function ()
	  {
	  	return {
	  		xmin: 0,
	  		ymin: 0,
	  		xmax: 0,
	  		ymax: 0,
	  		x : 0,
	  		y : 0,
	  		o : 'N',
	  		chargeFichierPelouse : function(fichier) {
					fs.readFile(fichier, (err, data) => {
						if (err) throw err;
						this.gestionPelouse(data.toString().split("\n"));
			   });
			},
			jeuTests: function(tab)
			{
				this.gestionPelouse(tab);
			},
	  		gestionPelouse: function(tab) {
	  			//console.log("dimension pelouse " + tab[0]);
	  			this.xmax = tab[0].split(' ')[0];
	  			this.ymax = tab[0].split(' ')[1]; 
	  			//console.log("xmax, ymax : " + this.xmax + "," + this.ymax);
	  			// tab = [ 1 2 N , GAGAGAGAA , 3 3 E , AADAADADDA ]
				for (var i = 1; i < tab.length; i=i+2) {
					//console.log(i+" tabTondeuse : " + t[i] + " ==> " + t[i+1] ) ; 
					this.gestionTondeuse(tab[i].split(' '),tab[i+1].split(''));
				}
	  		},
			gestionMouvement: function()
			{
				//console.log("gestion mouvement");
				switch(this.o) {
				    case 'N': 
				    	if (this.y+1 <= this.ymax) {
				    		this.y+=1;
				    	}
				    	break;
				    case 'S':    
				    	if (this.y-1 >= this.ymin) {
				    		this.y-=1;
				    	}
				        break;
				    case 'E':
				    	if (this.x+1 <= this.xmax) {
				    		this.x+=1;
				    	}				        
				        break;
				    case 'W':
				        if (this.x-1 >= this.xmin) {
				    		this.x-=1;
				    	}
				        break;
				    default:
				        break;
				}	

			},
			ordre : function(lettre) {
				switch(lettre) {
				    case 'D':
				    case 'G':    
				    	//console.log("direction initiale : " + this.o);
				        this.o = affectationDirections[this.o][lettre]; 
						//console.log("direction resultat : " + this.o);
				        break;
				    case 'A':
				        this.gestionMouvement();
				        //console.log("position de la tondeuse : " + this.x + " " + this.y);
				        break;
				    default:
				        console.log("Erreur : Instruction inconnue"); 
				        break;
				}	
			},
			gestionTondeuse: function(position, instructions) {
				// je place la tondeuse :  1 2 N 
				this.x = parseInt(position[0]);
				this.y = parseInt(position[1]);
				this.o = position[2];
				//console.log("position initiale : "+this.x + " "+this.y + " "+this.o);
				// elle se deplace : GAGADAGAA
				for (var i = 0; i < instructions.length; i++) {
					this.ordre(instructions[i]);
				}
				console.log(this.x + " "+this.y + " "+this.o);
			}
	  	}
	  		
	  }
};


module.exports = m;
