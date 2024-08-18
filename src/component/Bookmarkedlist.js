import React from 'react';
import './BannerSlider.css';
import BookList from './BookList';
const Bookmaredlist =() => {
    var checkboxed = document.getElementById("myCheck");
    
    function myfunctioncheckbox(){
    checkboxed.checked = !checkboxed.checked
    console.log('Item Clicked! isSelected:', checkboxed.checked);
    if (checkboxed.checked === true){
        checkboxed.style.display = 'none';
    }else{
        checkboxed.style.display = 'block';
    }  
   }
    
    return (
        <div className='list'> 
            <div className='headerlist'> 
                จำนวนทั้งหมด 100 รายการ 
               <button className='Edit-Button' id = 'Edit-Button' onClick={myfunctioncheckbox}>
                    แก้ไข
               </button> 
               
            </div>
            <div className = 'ListBook'> 
                <BookList/>
                
            </div>
        </div>
        
        );


};

export default Bookmaredlist;