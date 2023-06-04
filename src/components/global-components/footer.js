import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

	componentDidMount() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return (
			<footer className="footer-area">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<a href="index.html"><img src={publicUrl + "assets/img/logo.png"} alt="img" style={{width : "12vw"}}/></a>
							</div>
							<div className="col-md-8 text-md-right mt-3 mt-md-0">
								<ul className="social-area">
									<li><a href="https://www.facebook.com/profile.php?id=100013884962584"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
									<li><a href="https://www.linkedin.com/in/muhammad-abdullah-cs-enthusiast/"><i className="fab fa-linkedin" aria-hidden="true" /></a></li>
									<li><a href="https://github.com/Programmer-4-life"><i className="fab fa-github" aria-hidden="true" /></a></li>
									<li><a href="https://mabdullah-65ae7.web.app/"><i className="fa fa-globe" aria-hidden="true" /></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-middle bg-black">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<div className="widget widget_about">
									<h4 className="widget-title">Company</h4>
									<div className="details">
										<p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur et adipisicing  eiusmod tempor incididunt labore</p>
										<p><i className="fas fa-map-marker-alt" /> Street 16 Malir Cantonment, Karachi</p>
										<p><i className="fas fa-phone-volume" /> +(92) 334 1106810</p>
										<p><i className="fas fa-envelope" /> 201617abdullah@gmail.com</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="widget widget_newsfeed">
									<h4 className="widget-title">News Feed</h4>
									<ul className="go-top">
										<li><Link to="/blog"><i className="far fa-user" />By Admin</Link><span><i className="far fa-calendar-alt" />Marce 9 , 2021</span></li>
										<li><Link to="/blog"><i className="far fa-user" />By Admin</Link><span><i className="far fa-calendar-alt" />Marce 9 , 2020</span></li>
										<li><Link to="/blog"><i className="far fa-user" />By Admin</Link><span><i className="far fa-calendar-alt" />Marce 11 , 2020</span></li>
										<li><Link to="/blog"><i className="far fa-user" />By Admin</Link><span><i className="far fa-calendar-alt" />Januray 9 , 2020</span></li>
										<li><Link to="/blog"><i className="far fa-user" />By Admin</Link><span><i className="far fa-calendar-alt" />Marce 9 , 2020</span></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-4 col-md-9">
								<div className="widget widget_subscribe mb-4">
									<h4 className="widget-title">Newslatter</h4>
									<div className="details">
										<p>Lorem ipsum dolor sit amet,</p>
										<div className="footer-subscribe-inner">
											<input type="text" placeholder="Your Mail" />
											<a className="btn btn-base" href="#">Subscribe</a>
										</div>
									</div>
								</div>
								<div className="widget widget-tags pt-2 go-top">
									<h5 className="widget-title mb-3">House Tags</h5>
									<div className="tagcloud mt-0">
										<Link to="/blog">Creative</Link>
										<Link to="/blog">Development</Link>
										<Link to="/blog">Beach</Link>
										<Link to="/blog">Villa</Link>
										<Link to="/blog">Clean</Link>
										<Link to="/blog">Seo</Link>
										<Link to="/blog">Appertment</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom bg-black">
					<div className="container">
						<div className="row">
							<div className="col-md-7 align-self-center">
								<p>©2023, Copy Right By Abdullah. All Rights Reserved</p>
							</div>
							<div className="col-md-5 text-md-right go-top">
								<ul>
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/about">About</Link>
									</li>
									<li>
										<Link to="/blog">Blog</Link>
									</li>
									<li>
										<Link to="/contact">Contact</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>

		)
	}
}


export default Footer_v1