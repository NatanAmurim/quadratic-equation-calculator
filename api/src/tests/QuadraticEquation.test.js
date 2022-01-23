const QuadraticEquation = require('../entities/QuadraticEquation');

test('Deve retornar verdadeiro, pois todos os valores são válidos.', () =>{    
    let equation =  new QuadraticEquation(1,2,3);
    const {valid} = equation.isValid();            
    expect(valid).toBe(true);
});

test('Deve retornar falso, pois todos os valores são inválidos.', () =>{    
    let equation =  new QuadraticEquation('a',-4,2);
    const {valid} = equation.isValid(); 
        
    expect(valid).toBe(false);
});

test('O valor de delta deve ser 0.', () =>{    
    let equation =  new QuadraticEquation(4,-4,1);
    const result = equation.calculateDelta();                
    expect(result).toBe(0);
});

test('Deve retornar um único x e seu valor deve ser 0.5', () =>{    
    let equation =  new QuadraticEquation(4,-4,1);
    const result = equation.calculateEquation(); 
                
    expect(result.x === 0.5).toBe(true);
});

test('Deve retornar x1 e x2, sendo x1 = -22 e x2 = 17', () =>{    
    let equation =  new QuadraticEquation(1,5,-374);
    const result = equation.calculateEquation(); 
        
    expect(result.x1 === -22 && result.x2 === 17).toBe(true);
});

test('Deve retornar mensagem informando que não há raíz', () =>{    
    let equation =  new QuadraticEquation(4,-4,2);;
    const result = equation.calculateEquation(); 
        
    expect(result).toContain('Não há raíz');
});


