import React from 'react';

import './Home.css';
function Home (){
  const myStyle1={
    backgroundImage: 
"url('https://images.pexels.com/photos/5118522/pexels-photo-5118522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
   
};
const myStyle2={
  backgroundImage: 
"url('https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg')",
 
};
const myStyle3={
  backgroundImage: 
"url('https://images.pexels.com/photos/1319829/pexels-photo-1319829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
 
};
const myStyle4={
  backgroundImage: 
"url('https://images.pexels.com/photos/701016/pexels-photo-701016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
 
};
  
    return (
    <div className="Home">
<div>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">

  <div class="carousel-item active">
      <img class="d-block w-100" src="https://images.pexels.com/photos/887828/pexels-photo-887828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Second slide" />
      <div class="carousel-caption d-none d-md-block">
      <h3>Travel With Your Friends</h3>
    <p>With All Camping Facilities</p>
  </div>
    
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.pexels.com/photos/5064662/pexels-photo-5064662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide" />
      <div class="carousel-caption d-none d-md-block">
      <h3>Travel With Your Friends</h3>
    <p>With All Camping Facilities</p>
  </div>   
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.pexels.com/photos/1319829/pexels-photo-1319829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Third slide" />
      <div class="carousel-caption d-none d-md-block">
      <h3>Travel With Your Friends</h3>
    <p>With All Camping Facilities</p>
  </div>
    
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Third slide" />
      <div class="carousel-caption d-none d-md-block">
      <h3>Travel With Your Friends</h3>
    <p>With All Camping Facilities</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.pexels.com/photos/701016/pexels-photo-701016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Third slide" />
      <div class="carousel-caption d-none d-md-block">
      <h3>Travel With Your Friends</h3>
    <p>With All Camping Facilities</p>
  </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</div>

  <div className="container destinations ">
       <div className="row py-5">
               <div className="col text-center">
                 <h2 >Popular Destinations</h2>
               </div>
       </div>
       <div className="row">
         

       <main class="page-content">
  <div class="card">
    <div class="content">
      <h2 class="title">Mountain View</h2>
      <p class="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
      <button class="btn">View Trips</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">To The Beach</h2>
      <p class="copy">Plan your next beach trip with these fabulous destinations</p>
      <button class="btn">View Trips</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">To The Beach</h2>
      <p class="copy">Plan your next beach trip with these fabulous destinations</p>
      <button class="btn">View Trips</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">To The Beach</h2>
      <p class="copy">Plan your next beach trip with these fabulous destinations</p>
      <button class="btn">View Trips</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Desert Destinations</h2>
      <p class="copy">It's the desert you've always dreamed of</p>
      <button class="btn">Book Now</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Explore The Galaxy</h2>
      <p class="copy">Seriously, straight up, just blast off into outer space today</p>
      <button class="btn">Book Now</button>
    </div>
  </div>
</main>
    
       </div>
       </div>
    </div>
    );
}
 
export default Home;
