// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Start of my code

// Create a factory for pAequor
const pAequorFactory = (specimenNum , dna) => {
  return { 
    _specimenNum : specimenNum ,
    _dna: dna, 

    // Getter function for dna property
    get dna () {
      return this._dna;
    },

    // Getter function for specimenNum property
    get specimenNum () {
      return this._specimenNum;
    },

    // Method to mutate dna
    mutate() {
      this._dna =  dna.split(''); // Split dna string so we can alter each base/character
      
      // Iterate through complete sequence of dna
      for (let i = 0; i < this._dna.length; i++) {
        // Check if current base is 'A'
        if (this._dna[i] === 'A') {
          // Generate random number to define which new base will replace our current base
          let randBase = Math.floor(Math.random() * 4);
          switch(randBase) {
            case 0:
              this._dna[i] = 'T';
              break;
            case 1:
              this._dna[i] = 'C';
              break;
            case 2:
              this._dna[i] = 'G';
              break;
            // Since there is a chance of no mutation, I have included this
            default:  // this will happen every time the random number is 3
              break;
          }
          // Check if current base is 'T'
        } else if (this._dna[i] === 'T') {
          // Generate random number to define which new base will replace our current base
          let randBase = Math.floor(Math.random() * 4);
          switch(randBase) {
            case 0:
              this._dna[i] = 'A';
              break;
            case 1:
              this._dna[i] = 'C';
              break;
            case 2:
              this._dna[i] = 'G';
              break;
            default:  // this will happen every time the random number is 3
              break;
          }
          // Check if current base is 'C'
        }  else if (this._dna[i] === 'C') {
          // Generate random number to define which new base will replace our current base
          let randBase = Math.floor(Math.random() * 4);
          switch(randBase) {
            case 0:
              this._dna[i] = 'T';
              break;
            case 1:
              this._dna[i] = 'A';
              break;
            case 2:
              this._dna[i] = 'G';
              break;
            default:  // this will happen every time the random number is 3
              break;
          }
          // Check if current base is 'G'
        } else if (this._dna[i] === 'G') {
          // Generate random number to define which new base will replace our current base
          let randBase = Math.floor(Math.random() * 4);
          switch(randBase) {
            case 0:
              this._dna[i] = 'T';
              break;
            case 1:
              this._dna[i] = 'C';
              break;
            case 2:
              this._dna[i] = 'A';
              break;
            default:  // this will happen every time the random number is 3
              break;
          }
        } else {
          console.log('Could not find base.')
        }
      }
      this._dna = this._dna.join('');   // after we have mutated the array, we join it back to create a string again
    },

    
    // Method to compare two dnas
    compareDNA (obj) {

      let curDNA = this._dna.split(''); // Split dna string so we can iterate through it
    
      let mutDNA = obj.dna.split(''); // Split dna string so we can iterate through it
    
      // Get the total length of the dna sequence to use it in our for loop
      let numBases = curPAequor.dna.length;
      // Create a counter for all identical bases 
      let identicalBases = 0;
      // Iterate through each set of bases and compare them
      for (let i = 0; i < numBases; i++) {
        // Increae the counter it both match
        if (curDNA[i] === mutDNA[i]) {
          identicalBases++;
        }
      }
      // Calculate % of identical bases
      percIdentical = Math.floor(identicalBases / numBases * 100)
      console.log(`specimen #${this._specimenNum} and specimen #${obj._specimenNum} have ${percIdentical}% DNA in common`);
    },

    // Method to calculate likelihood of survival
    willLikelySurvive () {
      let numBases = this._dna.length;
      let curDNA = this._dna.split('');
      
      // Create a counter for all 'C' and 'G' bases 
      let cgCounter = 0;
      // Iterate through each base and increase counter if base is either 'C' or 'G'
      for (let i = 0; i < numBases; i++) {
        if (curDNA[i] === 'C' || curDNA[i] === 'G' ) {
          cgCounter++;
        }
      }
      // Short feedback how many 'C' and 'G' bases were counted
      console.log(`Counted ${cgCounter} C's and G's`);

      // Return true if there are equal or more than 60% 'C' and 'G' bases in the sequnce
      if (cgCounter / numBases >= 0.6) {
        return true;
      } else {
        return false;
      }
    }
  }
};



// Instantiate factory
const curPAequor = pAequorFactory(1, 'AAAAAAAAAAAAAAA');

// Create first mutation
const mutPAequor = pAequorFactory(2, 'AAAAAAAAAAAAAAA');
mutPAequor.mutate();

// Call compareDNA method
curPAequor.compareDNA(mutPAequor);

// Call willLikelySurvive method
console.log(mutPAequor.willLikelySurvive());

// Create array of 30 mutate instances
const mutArr = []
for (let i = 0; i < 30; i++){
  let newInstance = pAequorFactory(i, 'AAAAAAAAAAAAAAA');
  newInstance.mutate();
  mutArr.push(newInstance);
}

// Check final array
console.log(mutArr);
