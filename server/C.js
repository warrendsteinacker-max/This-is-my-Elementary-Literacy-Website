import {readFile} from 'node:fs/promises'
import { join } from 'node:path';

import {fs} from 'fs'
import {path} from 'path'


export const get1 = async(req, res) => {
    const targetp = path.join(process.cwd(), 'vite-project', 'public', 'Teacher Prep Lesson Plan Format.pdf')
    const data1 = await fs.readFile(targetp, utf-8) 
} 