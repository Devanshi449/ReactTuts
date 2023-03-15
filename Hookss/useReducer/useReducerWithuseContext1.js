//what if we want to share state btw componnents-or want to work with global state
//useReducer is used for local state management

/* Suppose we have a app.js 
// then it has A and B and C components, 
// they maintain there own counter which can be maintianed using reducer hook */

/*now in a different application 
components needs to share a common counter
so instead of sharing 3 counters we can implement one commmon counter that is 
accessible by all the three components 
SO WE CAN IMPLEMENT A GLOBAL COUNTER IN APP.js as pass in methods as props to three components

now 
                        app.js
            A           B           C
                        D           E
                                    F
now suppose we want to share the states btw a , d and f
so we are going to maintain count state in app.js and change that state deep down in the component

*/

// I have created 3 cpmponents compA compB compC*****************
//we have to create 6 new files for this so You can watch tut 65
