import React, { Component } from 'react';



class Comments extends Component {
  render() {
   let anchor = '#'
   let imagealt = 'image'
   let publicUrl = process.env.PUBLIC_URL+'/'
    return (
    	<div className="blog-comment">
      <div className="section-title style-small">
        <h3>Comments</h3>
      </div>
      <div className="media">
        <a href="#">
          <img src={publicUrl+"assets/img/blog/comment1.png"} alt="comment" />
        </a>
        <div className="media-body">
          <h5><a href="#">Muhammad Abdullah</a></h5>
          <div className="date">21 April 2023</div>
          <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur</p>
          <a href="#">REPLY</a>
        </div>
      </div>
      <div className="media nesting">
        <a href="#">
          <img src={publicUrl+"assets/img/blog/comment2.png"} alt="comment" />
        </a>
        <div className="media-body">
          <h5><a href="#">Abdul Waris</a></h5>
          <div className="date">1 Feb 2022</div>
          <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur</p>
          <a href="#">REPLY</a>
        </div>
      </div>
      <div className="media">
        <a href="#">
          <img src={publicUrl+"assets/img/blog/comment3.png"} alt="comment" />
        </a>
        <div className="media-body">
          <h5><a href="#">Muhammad Haroon</a></h5>
          <div className="date">15 Dec 2019</div>
          <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur</p>
          <a href="#">REPLY</a>
        </div>
      </div>
    </div> 
    )
  }
}

export default Comments;
