# Cart App FrontEnd

##### Description
The app gives users the ability to view products and add to their carts, they also have the ability choose a discount upon creation of that product. Once the product is in the cart users can add or subtract quantities of each product and the discount will be reflected immediately upon quantity change .
The Downside to this application is that since a state management framework like redux it wasnt possible because of time to have data in one object for each components.Another is that since no routing framework was used if you click on certain event when the resource hasn't loaded fully you get an error.


##### How to use
```
yarn install
```

```
yarn start
```

##### Test

```
yarn run cypress:open
```


## Technologies Used
- Typescript for type checking
- Antd is a UI library 
- Eslint
- Yulp

## Requirements

- [x] The CEO is a big fan of buy-one-get-one-free offers and green tea. He wants us to add a rule to do this.
- [x] The COO, though, likes low prices and wants people buying strawberries to get a price discount for bulk purchases. If you buy 3 or more strawberries, the price should drop to 4.50€.
- [x] The VP of Engineering is a coffee addict. If you buy 3 or more coffees, the price of all coffees should drop to 2/3 of the original price.
