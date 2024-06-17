fetch("https://picsum.photos/v2/list")
.then((response: Response) => {
    if(!response.ok){
        console.error("Response not OK!")
    }
    console.log(response.json());
})
.catch((error: Error) => {
    console.log(error);
})
.finally(() => {
    console.log("finished")
})


fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
.then((response: Response) => {
    if(!response.ok){
        console.error("Response not OK!")
    }
    return response.json();
})
.then((response) => {
    response.forEach(comment => {
        console.log(comment.email);
    });
})
.catch((error: Error) => {
    console.error(error);
})


fetch ("https://jsonplaceholder.typicode.com/posts")
.then((response: Response) => {
    if(!response.ok){
        console.error("Response not OK!")
    }
    let allPosts = response.json()
    console.log(allPosts);
    return allPosts;
})
.then((allPosts) => {
    allPosts.sort((a:number, b:number) => b.id - a.id );
    console.log(allPosts[0])
    let postsByNamelength = allPosts.slice();
    return postsByNamelength;
})

.then((postsByNamelength) => {
    postsByNamelength.sort((a, b) => (a.title).length - (b.title).length);
    console.log(postsByNamelength[0]);
    let postsByBodyLength = postsByNamelength.slice();
    return postsByBodyLength
})

.then((postsByBodyLength) => {
    postsByBodyLength.sort((a, b) => (b.body).length - (a.body).length);
    console.log(postsByBodyLength[0]);
})
.catch((error: Error) => {
    console.error(error);
})


let rndImageOutputArea = document.getElementById("rnd-gallery-wrapper");

fetch("https://picsum.photos/v2/list?page=2&limit=10")
.then((response: Response) => {
    if(!response.ok){
        console.error("Response not OK!")
    }
    let tenRndImages = response.json()
    return tenRndImages;
})
.then((tenRndImages) => {
    tenRndImages.forEach(element => {
        let imgFigure = rndImageOutputArea?.appendChild(document.createElement("div"));
        imgFigure.innerHTML = `
        <figure>
	        <img src="${element.download_url}">
	        <figcaption>${element.author}</figcation>
        </figure>
        `;
    });
})
.catch((error: Error) => {
    console.log(error);
})
.finally(() => {
    console.log("finished")
})