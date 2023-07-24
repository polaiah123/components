import { GoArrowDown, GoBell, GoCloudDownload, GoDatabase, GoFileDirectory } from 'react-icons/go';
import React from 'react';
import Button from '../components/Button';

function ButtonPage() {

const handleClick = () => {
    console.log ('click here')
}

  return (
    <div>
        <div>
            <Button
             primary
             outline
              rounded 
              className="mb-5"
              onClick={handleClick}
              > <GoBell/> click here !!</Button>
        </div>
        <div>
            <Button success outline className="mb-5" > < GoFileDirectory/>success</Button>
        </div>
        <div>
            <Button secondary rounded outline className="mb-5" > <GoCloudDownload />see more</Button>
        </div>
        <div>
            <Button  outline rounded className="mb-5" ><GoDatabase/> deals</Button>
        </div>
        <div>
            <Button danger rounded outline > <GoArrowDown/> Hide Adds</Button>
        </div> 
    </div>
  )
}

export default ButtonPage;