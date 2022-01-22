echo 'Teste rota get'
curl http://localhost:3000/teste 

echo 'Teste rota post'
curl --silent -X POST \
     --data-binary '{"firstValue": 1, "secondValue":5, "thirdValue": 3}' \
     http://localhost:3000/teste 