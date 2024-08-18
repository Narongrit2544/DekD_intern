import React from 'react';
import './BannerSlider.css';
const BookList =() => {
     
   
    return (
       
        <div className='list'> 
           <section type = 'radio'> 
               <label className='Book-list' id ='Book-list'>
                    <div className='Pic-list'>
                         <img className = 'Pic1'src = 'https://storage.naiin.com/system/application/bookstore/resource/content/3031/2961edd4-cb0c-42.jpg' alt = 'รูปโปสเตอร์นิยาย'/>
                    </div>
                    <div className='info'>
                         <h2 className='title'>เกียร์สีขาวกับกาวน์สีฝุ่น</h2>
                         <p className='author'>คุณลุง</p>
                         <p className='epison'><img className = 'Icon-epison' src="https://img5.pic.in.th/file/secure-sv1/list-icon-1454.png" alt="list-icon-1454.png" border="0" />ตอนที่ 18 </p>
                         <p className='last-time'><img className = 'Icon-save' src="https://img5.pic.in.th/file/secure-sv1/Pngtreeline-icon-save_5784773.png" alt="Pngtreeline-icon-save_5784773.png" border="0" />DateTime</p>
                    </div>
                    <div className='checkBox'>
                         <input type = 'checkbox' className = 'myCheck' id='myCheck' for='Book-list'/>
                    </div>
               </label>
           </section>
        </div>
        
        );


};

export default BookList;