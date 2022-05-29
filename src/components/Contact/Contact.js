import React from 'react';
import './Contact.css'
function Contact (){
return <div className="contact">
 
<div class="container">
	<div class="wrapper">
		<div class="form">
			<div class="left-col">
				<img src="https://i.pinimg.com/736x/b2/a4/74/b2a474fa8b0ea15af63c4997075448e9.jpg" alt="Sorry" />
			</div>
			<div class="right-col">
				<h2>Contact US</h2>
			<form>
								<div class="result"></div>
				<div class="form-group">
					<input id="name" type="text" placeholder="Name" />
				</div>
				
				<div class="form-group">
					<input id="email" type="email" placeholder="Email" />
				</div>
				
				<div class="form-group">
					<textarea id="message" type="text" placeholder="Message" />
				</div>
				<button id="submit" type="submit">Send Message</button>
			</form>
			</div>
		</div>
	</div>
</div>

		</div>
}

export default Contact;
