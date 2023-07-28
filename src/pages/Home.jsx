import React from "react";
import '../styles/Home.css'

const Home = () => {
  const GetMeal = async () => {
    let res = await fetch(
      "https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata",
      {
        method: "GET",
      }
    );

    let mealData = await res.text();
    console.log(mealData);
  };

  return (
    <div>
      <div className="Hero">
        <h5>👋Hii, I'm Janani </h5>
        <div className="Left">
        
          
          <p className="name">
            <p><p>I’m a Product Designer with a passion for participate in every stage of digital product, from discovery to delivery. Helping to focus the business goals on users.</p></p>
          </p>
          {/* <p className="description">
            <p><p>I’m looking for new opportunities Previously I worked at Multiplica Talent Chile</p></p>
          </p> */}
        </div>
        <div className="r1">
        <div className="right">
        <p>ITo Utilize my background in Information technology to develop
innovative software solutions for a major tech company that will utilize
my talents and provides me with an opportunity for 
professional growth by a challenging position </p>
        </div>
        <div className="Right">
          <p>Janani</p>
         <div className="link">
         <p>jananim@drngpit.ac.in</p>
         </div>
          
        
         <div className="middle">
      
      <img
        src="img.png"
        alt="Logo"
        className={`Logo`}/>
        <div className="num">
          <img src="n.png"></img>
        </div>
        
        
        <div className="middle1">
        <img src="black-framer 1.png" alt=" " className={'logo'}/>
        </div>
        <div className="middle2">
        <img src="e.png" alt=" " className={'user'}/>
        
        </div>
       
    </div>
    </div>
    
    <div className="upper">
    <img src="s.png" alt=" " className={'user'}/>

    </div>

        </div>
      <div className="footer">
  <img src="Thumbnail.png"></img>
  <img src="Thumbnail (5).png"></img>
  <img src="Thumbnail (6).png"></img>
  
</div>

      </div>   
       
    </div>
  );
};
export default Home;
