import React,{useEffect} from 'react';
import mermaid from "mermaid";

mermaid.initialize({startOnLoad: true,});


const Mermaid = ({ chart }) => {
    useEffect(() => 
        mermaid.contentLoaded(), 
    []);

    return <div className="mermaid" style={{backgroundColor:"#fff"}}>{chart}</div>;
};
export default Mermaid;
