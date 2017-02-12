// $(document).ready(function() {


  $.ajax({
    method: "GET",
    url: "http://localhost:3000/posts",
    success: function(posts){
      let postsCollection = "";
      for(let index = 0; index < posts.length; index++) {
        postsCollection += createPost(posts[index]);
      }

      console.log(postsCollection);
      document.querySelector(".posts-container").innerHTML = postsCollection;

      console.log(data);
    },
    error: function (jqXHR, status) {
            // error handler
    }
  });



  function createPost(post) {

    let postHtml = `
    <div class="post">
      <div class="post__thumbnail">
          <img class="post__image" src="${post.thumbnail}" width="112" height="92" alt="post image"/>
      </div>
      <div class="post__right">

        <div class="post__content">
          <span class="post-description">${post.title}</span>
          <span class="post-link"><a href="${post.url}">${post.url}</a></span>
        </div>

        <div class="post__meta">
          <div class="post-action-buttons">
            <button rel="vote-button" class="vote-button">
              <div class="button-container">
                <div class="post-vote-arrow">
                    <svg width="9px" height="9px" viewBox="0 5 9 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon stroke="none" fill="#4A4A4A" fill-rule="evenodd" points="9 14 0 14 4.5 5"></polygon></svg>
                    ${post.votes}
                </div>
              </div>
            </button>
            <a href="" class="comment-button">
                <div class="button-container">
                    <span><svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M10.0124802,16.8320558 C9.21033653,16.0515289 8.72727273,15.044941 8.72727273,13.9462121 C8.72727273,11.4655331 11.1897066,9.45454545 14.2272727,9.45454545 C17.2648389,9.45454545 19.7272727,11.4655331 19.7272727,13.9462121 C19.7272727,16.4268911 17.2648389,18.4378788 14.2272727,18.4378788 C13.4722764,18.4378788 12.752811,18.3136428 12.0978565,18.0888377 C11.026169,18.7087928 8.93104025,19.527919 8.93104025,19.527919 C8.93104025,19.527919 9.63175021,17.8427438 10.0124802,16.8320558 Z" transform="translate(-8 -9)" fill="#4A4A4A" fill-rule="evenodd"></path></svg></span>
                    ${post.comments}
                </div>
            </a>
          </div>
          <div class="association">

              <a class="association__first">
                  <div class="button-container">
                    ${post.tags[0]}
                  </div>
              </a>
              <a href="/" class="association__more">+ ${post.tags.length}</a>
          </div>
        </div>
      </div>
  </div>


    `;

    return postHtml;

  }


// });
