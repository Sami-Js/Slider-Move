

let btns = document.querySelectorAll('.arrow'),
      img = document.querySelector('.items'),
      span = document.querySelector('span'),
      value, num = 0 , i = 1 ;


      span.innerHTML = '0' + i ;
    
      
      function clicker() {
        value = this.dataset.value ;
        if ( value === 'false' & num > -2050 ){
         num -= 410 ;
         i++;
         set(num , i);
        }
        
        if ( value === 'true' & num < 0 ){
            num += 410 ;
            i-- ;
            set(num , i);   
        }
       } 

       function set(number , counter ) {
        span.innerHTML = '0' + i ;
        img.style.transform = `translateX(${number}px)`;
       }
        



      btns.forEach((e) => e.addEventListener('click' , clicker ) );


       