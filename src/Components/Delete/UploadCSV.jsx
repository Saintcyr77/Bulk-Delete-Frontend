import { useState } from 'react';
import './csvUpload.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const UploadCSV = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
      setSelectedFile(file);
      setError('');
    } else {
      setSelectedFile(null);
      setError('Please upload a valid CSV file.');
    }
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // Add your file upload logic here
      handleOpen(); // Open the confirmation modal
    }
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="file-upload-container">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to proceed?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This will delete all the activities in the CSV file you just uploaded.
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '15px' }}>
            <Button variant="contained" onClick={() => {
              // Add your delete logic here
              handleClose();
            }}>
              Confirm Delete
            </Button>
            <Button variant="outlined" onClick={handleClose} sx={{ ml: 2 }}>
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
      <Typography variant="body1" className="upload-instructions">
        Please only select a CSV file for upload.
      </Typography>
      <div className="file-upload">
        <label htmlFor="file-input" className="upload-label">
          <CloudUploadIcon className="upload-icon" />
          <span className="upload-text">Choose a file</span>
        </label>
        <input id="file-input" type="file" onChange={handleFileChange} />
      </div>
      {error && (
        <Typography variant="body2" color="error" className="error-message">
          {error}
        </Typography>
      )}
      {selectedFile && (
        <div className="file-info">
          <p>File: {selectedFile.name}</p>
          <button className="upload-button" onClick={handleUploadClick}>
            Upload
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadCSV;
