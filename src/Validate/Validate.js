import React from 'react';

const Validate = (props) =>{ 

   let Validation ="Text too long";
   if(props.inputlength <= 5){
      Validation = "Text too short";
   }

   return(
       <div>
          {
             Validation
          }
      </div>
   );
};

export default Validate;