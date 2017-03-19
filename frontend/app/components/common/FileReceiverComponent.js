import React from 'react';
import { Receiver } from 'react-file-uploader';
 
 class FileReceiverComponent extends React.Component{

  function onDragEnter(e) {
    this.setState({ isReceiverOpen: true });
  }
  function onDragOver(e) {
    // your codes here
  }
  function onDragLeave(e) {
      this.setState({ isReceiverOpen: false });
  }
  function onFileDrop(e, files) {
      // check if the files are drop on the targeted DOM
      const node = ReactDOM.findDOMNode(this.refs.uploadPanel);
      if (e.target !== node) {
          return;
      }
      
      files.forEach(file => {
          // check file size
          if (file.size > 1000 * 1000) {
              file.error = 'file size exceeded 1MB';
          }
      })
      
      // put files into state/stores by setState/action
      this.setState({
          files: this.state.files.concat(files),
      });
    }

  render(){
    return(
        <Receiver
          customClass={STRING_OR_ARRAY}
          style=''
          isOpen='true'
          onDragEnter={FUNCTION}
          onDragOver={FUNCTION}
          onDragLeave={FUNCTION}
          onFileDrop={FUNCTION}
        >
            <div>
              visual layer of the receiver (drag & drop panel)
            </div>
        </Receiver>
      )
    }
}

export default FileReceiverComponent