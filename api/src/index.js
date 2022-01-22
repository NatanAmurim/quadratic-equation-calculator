//Imports
const QuadraticEquationService = require('./services/QuadraticEquationService');

//Basic configurations
const http = require('http');
const PORT = 3000;
const HEADER = {'Content-Type':'application/json'};

const routes = 
{    
    'calularEquacao:post': async (request, response)=> 
    {        
        for await(const data of request)
        {
            const quadraticEquation = JSON.parse(data);            
            const equationService = new QuadraticEquationService(quadraticEquation);
            const {valid, result} = equationService.calculate();
           
            if (!valid)            
                 response.writeHead(400, HEADER);                             
             else
                response.writeHead(200, HEADER);

            response.write(JSON.stringify(result));
        }
        
        response.end();
    },
    default: (response)=>
    {
        response.writeHead(404,HEADER)
        response.write('Rota não localizada! :(');
        response.end();
    }
}

const handler = (request, response) => {
    const {url, method} = request;    
    const [nothing,route] = url.split('/');    
    
    const routeWithMethod = `${route}:${method.toLowerCase()}`;    
    
    const chosenRoute = routes[routeWithMethod] || routes.default;    
    return chosenRoute(request,response);
}

http.createServer(handler)
    .listen(PORT, () => console.log(`Servidor rodando meu parceiro! Porta: ${PORT}`));