import { readFile } from '@draft-js-plugins/drag-n-drop-upload';

/*
*
* @name: mockUpload
* @desc: Custom file upload function. Simulates a file upload.
* @param {[File], formData} data: consists of an array of files that have been uploaded and a formData object composed of those same files.
* @param {function([{name: string, src: string}])} success - function to mark a successfull file upload, it takes an array of successfully uploaded files.
* @param {function({name: string, src?: string})} failed - function that is called to mark a failure to upload one or more files. Removes the upload placeholders.
* @param {(function(percent:int, file: {name:string, src:string})} progress - function to mark the progress in percentage points. It updates the progress count on each placeholder.
*/
export default function mockUpload(data, success, failed, progress) {
  function doProgress(percent) {
    if (percent === 100) {
      Promise.all(data.files.map(readFile)).then((files) =>
        success(files, { retainSrc: true })
      );
    } else {
      data.files.forEach(file => {
        progress(percent || 1, file);
      });
      setTimeout(doProgress, 10, (percent || 0) + 10);
    }
  }
  doProgress();
}
