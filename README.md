# **NodeJS Challenge**

The application has two public route as we'll see below.

## 1st public route:

In this route we can see all seneakers in stock, was implemented :



## 2do public route:

For this case, the route if the client have special pricing for certain brands, the route will 
return the special price for the given client and brand. If the client doesn't have a especial 
price the brand, the route always return the base price. The code is below.

```
const Product = require('../models/Product');
const User = require('../models/User');
const catchError = require('../utils/catchError');


const getOne = catchError(async(req,res) => {
    const { userId, productName } = req.params;
    const user = await User.findOne({id: +userId});
    if(!user) return res.status(404).json({message: 'User not found'});
    const product = await Product.findOne({nombre: productName});
    if(!product) return res.status(404).json({message: 'Product not found'});
    const price = user.get('metadata')?.precios_especiales
            .find(item => item.nombre_producto === productName);
   
    if(!price) return res.json({price: product.get('precio_base')})

    return res.json({price: price.precio_especial_personal});
});


module.exports = {
    getOne,
}
```
Where we get the the parameters from the the dynamic route wuth
`const { userId, productName } = req.params` de-structuring, then 
we define a const `const user = await User.findOne({id: +userId})` 
that will store the `userId` found but if this user not found 
this line `if(!user) return res.status(404).json({message: 'User not found'})` 
in the API return a message ***User not found***.

For the next case a constant was defined 
`const product = await Product.findOne({nombre: productName})` to store the product
and if this product doesn't exist in the collection the API will return with 
`if(!product) return res.status(404).json({message: 'Product not found'})` the message
***Product not found***

When in the params the `UserId` and `produc` was found we get the price with
`const price = user.get('metadata')?.precios_especiales.find(item => item.nombre_producto === productName);`
and the API return `precio_especial_personal` throught the last line
`return res.json({price: price.precio_especial_personal})`, but if this is not the case
the line `if(!price) return res.json({price: product.get('precio_base')})` return the 
***base price***.



