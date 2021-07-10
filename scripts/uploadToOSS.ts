import OSS from 'ali-oss';
console.log('xx', process.env.ACCESS_KEY_ID);
console.log('yy', process.env.ACCESS_KEY_SECRET);
const ossClient = new OSS({
  bucket: 'aitechlab-site',
  endpoint: 'oss-cn-qingdao.aliyuncs.com',
  // @ts-ignore
  accessKeyId: process.env.ACCESS_KEY_ID,
  // @ts-ignore
  accessKeySecret: process.env.ACCESS_KEY_SECRET,
  timeout: '300s',
});

function uploadToOSS(ossObjectName: string, localPath: string) {
  return new Promise((resolve, reject) => {
    console.log(`[UPLOAD] start to upload ${localPath}.`);
    ossClient
      .put(ossObjectName, localPath)
      .then(() => {
        console.log(`[UPLOAD] ${localPath} upload success.`);
        resolve(0);
      })
      .catch((e: Error) => {
        console.log(`[ERROR] ${localPath} upload failed.`);
        reject(e.message);
      });
  });
}

export default uploadToOSS;