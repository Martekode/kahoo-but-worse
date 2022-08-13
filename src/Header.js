import './Header.css';
import React, {useEffect , useState} from 'react';

    
function Header() {
    const [title, setTitle] = useState("Quiz");
    const [isClicked , setIsClicked] = useState(false);
    useEffect(() => {
        console.log("Title changed to: " +  title);
    }, [title]);
    
    return (
        <div className={"header"}>
           <h1>{title}</h1>
           <button className={"headerButton"} onClick={()=>{
                 if (!isClicked){
                    setTitle("This is now a Kahoot");
                    setIsClicked(true);
                }else{
                    setTitle("Quiz!");
                    setIsClicked(false);
                }
            }
           }>change state</button>
        </div>
    );
}

export default Header;