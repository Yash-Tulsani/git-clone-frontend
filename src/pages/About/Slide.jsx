//import companyLogo from '../Images/ther.jpg';
import './s.css'

export default function Slide(){
    var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 5000);
    return(
        
        <>
        <div>
        <div className="slider">
        <div className="slides">
         <input type="radio" name="radio-btn" id="radio1"/>
        <input type="radio" name="radio-btn" id="radio2"/>
        <input type="radio" name="radio-btn" id="radio3"/>
        <input type="radio" name="radio-btn" id="radio4"/>
        <div className="slide first">
        <img src="https://dpjh8al9zd3a4.cloudfront.net/image/h:720,w:1800/186392?s=ec263bc1" alt=""/>
        {/* <img src="https://static.wixstatic.com/media/ffd0eb_7b69ca4cf3fe4076b8f22fbbe218dc4c~mv2.gif" alt=""/> */}
        </div>
        <div className="slide">
        <img src='https://www.worldbank.org/content/dam/photos/768x384/2022/mar/Water-Day_Atal-Bhujal-Yojna-Thumbnail.JPG' alt=""/>
        </div>
        <div className="slide">
          
          <img src="https://www.neoakruthi.com/blog/infographics/rainwater-harvesting-for-irrigation.jpg" alt=""/>
        </div>
        <div className="slide">
          <img src='https://www.holidify.com/blog/wp-content/uploads/2015/11/ecotourism.jpg' alt=""/>
        </div>
        <div class="navigation-auto">
          <div class="auto-btn1"></div>
          <div class="auto-btn2"></div>
          <div class="auto-btn3"></div>
          <div class="auto-btn4"></div>
        </div>
      </div>
      <div class="navigation-manual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
        <label for="radio4" class="manual-btn"></label>
      </div>
    </div>
      </div>
        </>
    )
}

