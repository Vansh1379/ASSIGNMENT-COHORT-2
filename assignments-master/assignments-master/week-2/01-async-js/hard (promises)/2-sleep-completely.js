/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 * 
 * 
 * 
 * //                MAIN EXPALNATION
 * Here is a function that halts the JS thread for a given number of milliseconds using a busy wait loop:

```js
function halt(ms) {
  return new Promise(resolve => {
    const start = Date.now();
    while (Date.now() - start < ms) {
      // do nothing - just burn CPU cycles
    }
    resolve(); 
  });
}
```

To explain further:

- It returns a Promise so it works well with async/await syntax
- It takes in a number of milliseconds `ms` to halt for
- It stores the start time with `Date.now()`
- It enters a `while` loop that continuously checks the current time and calculates the elapsed time
- While the elapsed time is less than the `ms` passed in, it does nothing, just wasting CPU cycles in a busy loop
- Once the duration has elapsed, the loop exits and the Promise is resolved

To use it:

```js
await halt(500); // halts for 500ms
console.log('Done waiting!');
```

So this uses a busy wait approach to make the event loop and JS thread halt for the specified number of milliseconds. The thread cannot do anything else during this time.
 * 

//                                   halt expalnation 
Good question! The term "halt" here refers to pausing or stopping execution of the JavaScript thread for some time.

When a JavaScript application is running, there is a main thread that is executing the JS code line by line. This allows it to perform computations, handle events, communicate with other APIs, etc.

The halt() function we defined stops (halts) this main thread from doing anything else while it is in the busy loop, waiting for the time to pass. 

So for example:

```
halt(500);
console.log("Hello");
```

Here, the main JS thread will be halted for 500ms before it can execute the console.log statement.

Another way to phrase it is that the function "blocks" the thread by occupying it with a useless task for some time. During this halt/blocking period, no other JS code can run.

So in summary:

- "Halt" refers to pausing or blocking execution of the main JavaScript thread
- The thread is made busy with a useless loop, preventing other code from running
- This creates a blocking delay/wait effect for a given number of ms

The result is we have programmatically "halted" JavaScript execution for some time before continuing.


 * //                            EASY EXPALNATION 
 * You're right, let me try explaining this in a clearer way! The key to understanding this problem is the JavaScript event loop and call stack.

JavaScript uses a single-threaded model, meaning at any point only one piece of code is actually running. This piece of code that is running is what is on top of the call stack.

For example:
function first() {
  // I am running!  
}

function second() {
  // Now I am running!
}

first();
second();

When first() is called, it gets pushed onto the stack and runs. Then when second() is called, first() finishes, second() gets pushed onto the stack to run.

Now in async code this applies too:

function wait() {
   // I am running!
   // (then something async happens)   
} 

wait();
console.log("Done!");

Even though wait() is async, at the moment it is first called, it runs immediately.

So how does our busy wait halt work?
function halt(ms) {
  while(Date.now() < ms) {
    // Just loop 
  } 
}
When halt is called, it gets pushed onto the stack and starts running a CPU intensive loop. So even though it is just spinning in a loop wasting time, that loop is running on the thread preventing ANY other JavaScript from running until it finishes.

So in essence, we hijack the single call stack with an intensive task that blocks all other JS from running for some time period.

Let me know if this helps explain what is happening a bit better!

//               WHILE LOOP EXPALNATION 
You're right, that while loop is the key to understanding how this works! Let me walk through it step-by-step:

1. Date.now() gives us the current time in milliseconds. So we capture this in start:

```
const start = Date.now();
```

2. Now we enter the while loop. 

3. Inside it, we are calculating: 
Date.now() (current time) - start time

This gives us the number of milliseconds that have elapsed since the start.

4. We compare that to the ms that was passed to the halt function - the total wait time. 

5. While the elapsed time is LESS than the total wait time, we stay inside the loop.

6. Inside the loop, we do nothing - `_// do nothing_` just wastes CPU cycles iterating for no reason.

7. Once Date.now() - start reaches the full ms amount... 
e.g. 500 ms has actually passed, then the loop ends!

In summary:

- Capturing start time 
- Calculating elapsed time
- Comparing to target time
- Looping until elapsed = target

This allows us to busy-wait, halt JavaScript execution for a precise duration before allowing code execution to continue!

Let me know if this helps explain what that while loop is doing on each iteration to achieve the blocking behavior!
 */

function sleep(milliseconds) {
    let p = new Promise((resolve)=>{
        const start = Date.now();
        while(Date.now()-start<milliseconds){

        }
        resolve();
    });
    return p;
}

module.exports = sleep;
