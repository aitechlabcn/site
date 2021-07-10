import * as path from 'path';
import readdir from 'fs-readdir-recursive';
import uploadToOSS from './uploadToOSS';

const publicPath = path.join(__dirname, '..', 'public');

(async function() {
   const filesPath = await readdir(publicPath);
   await Promise.all(filesPath.map((filePath: string) => {
     return uploadToOSS(filePath, path.join(publicPath, filePath));
   }))
})()