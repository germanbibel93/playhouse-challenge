# Response

## Part 1

-First I want create the "shape" or a mobile view. I knot that is difficult to

simulate the mobile scroll but I will use onScroll (probably will not working
as expected but I have only 1 hour and I don't want to install a third hook)

- I did it with plain css instead a processor like SASS because I don't have too much time
- I added typescript and improve the folder structure because I really need this and I really believe that is super important have the "bases" well in order to scalate the product
- I research and learn about mux, it's just only a request against the server but I didn't get a change to do it.

## Part 2

Seeing the users feedback and the backlog this are my priorities:

- Fix the mobile view:
  - I will fix it the mobile view of the app, because the layout is part of the bases of the APP so if you continue growing without fix that when you decided to fix it probably you will spend a lot of more time in order to fix the new pages too.
- Unit test:
  - We don't need a full test coverage just complish the DOD(definition of done) which is test all the use cases of all the features, I'm completly desagree with the idea of 100% of coverage because in order to maitain that you needs to do a lot of unneccessary tests.
- Manage the global statement:
  - In order to scalate this app in my opinion we need to "separate" the state and the app, can be with redux, with react hooks like useContext, but this allow us to manage large-scale and high-traffic of information because for example we can paginate on the backend in order to increase the performance. By the other hand we will available to 2 differents things more:
    - The app can manage the information better and in a future when we have more information about each user we can share with him/her more related information and not just only near houses.
    - An action (FLUX PATTERN) is 1 business logic so if you have a full test coverage of your reducer that's mean that you have 100% cover your business logic.
    - All the states are tracailables that's mean that we can add a logger and see what is happening so should be easy to see why the app is crashing

## Wrapping Up

I'm not worry about the idea that the user can't do too much in the app or that we need more gestures because my undestanding it is like an early feedback of an MVP so if we have the "bases" in a good shape, the mobile app can growing faster without problems and we will able to save a lot of develop time.
If the app is with React JS I highly recommend to dockerize it but if is with React-Native, specially with Expo I think is not too much neccesary because Expo can help you to emulate in differents mobiles your application. For me is more importan have some CI/CD in order to deploy the app faster an create test and production env.
