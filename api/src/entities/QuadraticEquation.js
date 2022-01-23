class QuadraticEquation
{    
    constructor(valueA, valueB, valueC)
    {        
        this.valueA = valueA;
        this.valueB = valueB;
        this.valueC = valueC;
    }    

    isValid()
    {   
        let notifications = [];     

        if (isNaN(this.valueA) || this.valueA === 0)
            notifications.push('O valor A não é válido ou não foi informado corretamente!');

        if (isNaN(this.valueB))
            notifications.push('O valor B não é válido ou não foi informado corretamente!');

        if (isNaN(this.valueC))
            notifications.push('O valor C não é válido ou não foi informado corretamente!');
        
        return{
            valid: notifications.length === 0,
            result: notifications
        }
    }

    calculateDelta()
    {
        return (this.valueB * this.valueB) - (4 * this.valueA * this.valueC );
    }

    calculateEquation()
    {
        
        const delta = this.calculateDelta();

        if (delta < 0)
            return 'Não há raíz, meu amor :(';
        else if (delta === 0)
        {
            return { x: ( - (this.valueB) - Math.sqrt(delta)) / (2 * this.valueA) };
            
        }
        else            
            return {
                x1: ( -(this.valueB) - Math.sqrt(delta)) / (2 * this.valueA),
                x2: ( -(this.valueB) + Math.sqrt(delta)) / (2 * this.valueA)            
        }
    }
}

module.exports = QuadraticEquation