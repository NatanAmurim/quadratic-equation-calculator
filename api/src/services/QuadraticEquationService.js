const QuadraticEquation = require('../entities/QuadraticEquation')

class QuadraticEquationService
{
    constructor({ valueA,valueB,valueC })
    {   
    
      this._quadraticEquation = new QuadraticEquation(valueA, valueB, valueC);
    }

    calculate()
    {       
        const validation =  this._quadraticEquation.isValid();
        
        if (!validation.valid)
            return { 
                valid: false,
                result: validation.result
            }
        else    
            return {
                valid: true,
                result: this._quadraticEquation.calculateEquation()
            }
    }
}
module.exports = QuadraticEquationService

