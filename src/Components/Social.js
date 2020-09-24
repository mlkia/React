import React from 'react';
import SocialItem from './SocialItem'

function Social(){
    return(
        <div>
            <ul className="list-group">
              <SocialItem 
                media ='Facebook' 
                id ='facebook'
                img ='https://picsum.photos/80' />

              <SocialItem 
                media ='Youtube' 
                id ='youtube'
                img ='https://picsum.photos/81' />

              <SocialItem 
                media ='Instagram' 
                id ='instagram'
                img ='https://picsum.photos/82' />

            </ul>
        </div>
    );
}

export default Social;