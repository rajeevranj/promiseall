# promiseall
The program then uses Promise.all to await the resolution of both the createPost and updateLastUserActivityTime promises. This allows both promises to execute concurrently.
Another then method is chained to the deletePost promise. In this then block, an empty array is logged to represent the updated list of posts after deletion.

If any error occurs during the promise chain, the catch method is used to catch the error and log an error message to the console.
 It showcases the use of Promise.all to wait for multiple promises to resolve concurrently, and it demonstrates chaining then methods to perform subsequent operations based on the resolved values.
