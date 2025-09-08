import TopNav from "./TopNav";
import Markdown from "markdown-to-jsx";

export default function MDX(props) {
    const { text } = props
    const md= `#this is header 1
    ##this is header 2
 
    hello world
    
    `

    return(
       <section className="mdx-container">
        <TopNav {...props}/>
        <article>
            <Markdown>
              {text.trim() || 'Go to the editor to create a new note'}
            </Markdown>
        </article>
       </section>
    )
}