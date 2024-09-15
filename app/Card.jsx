import useState from 'react';
import { GetPrompts } from './input.jsx';
import styles from './page.module.css'
import { LikeButton, DislikeButton } from './button.jsx';
export default function Card({ title }) {
    // const [input, setInput] = useState([])
    // const prompts = GetPrompts();
    return (
        <>
        <div>
          <h1 className={styles.title}>{title}</h1>
          THIS IS A CARD
        </div>
        {/* image */}
        <div style={{width: 502, height: 650, position: 'relative'}}>
        </div>
        <div>
          <LikeButton />
          <DislikeButton />
        </div>
        </>
    );
}