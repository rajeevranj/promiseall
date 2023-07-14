const posts=[{title :"post one"},{title :"post two"}];

function updateLastUserActivityTime (){
    return new Promise((resolve) => {
        setTimeout(() => {
          const lastActivityTime = "2023-07-14T12:00:00";
          resolve(lastActivityTime);
        }, 1000);
      });
}

function createPost(post,callback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false ;
            if(!error){
                resolve(posts);
            }
            else{
                reject("error");
            }
    },1000)
});
    
}
function deletePost(postId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });
  }
Promise.all([createPost(),updateLastUserActivityTime()])
.then(([posts,lastActivityTime]) =>{
    return posts,lastActivityTime;
    return deletePost[posts]
    
})
.catch((error)=>{
    console.log("error");
});