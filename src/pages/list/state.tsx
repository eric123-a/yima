import { useState } from 'react';
import styles from './index.less';

interface prop {
    state: string
}
const select = ['进行中', '新提出', '已完成']
export default function State(prop: prop) {
    const [projectstate, setprojectstate] = useState('')
    switch (prop.state) {
        case 'inprog': {
            setprojectstate(select[0]);
            break
        }
        case 'new': {
            setprojectstate(select[1]);
            break
        }
        case 'finish': {
            setprojectstate(select[2]);
            break
        }
    }
    return (
     
          <text style={projectstate=='inprog'?{color:'#1890FF'}:{}}>{projectstate}</text>
        
    )
}