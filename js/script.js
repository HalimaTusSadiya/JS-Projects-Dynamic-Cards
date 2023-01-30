
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => loadData(json));




  function loadData(lodedData){
    const postsContainer=document.getElementById('posts')
    lodedData.map(postData => {
      const post = document.createElement("div")
        post.innerHTML=`
            <h3>${postData.id}</h3>
            <h1> ${postData.title} </h1>
            <p> ${postData.body} </p>`
          post.classList.add('post')
          postsContainer.appendChild(post)
          console.log(post)
    })
  }
