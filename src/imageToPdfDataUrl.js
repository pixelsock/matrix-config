/**
 * Converts an image to a data URL suitable for PDF generation
 * @param {HTMLImageElement} imgElement - The image element to convert
 * @param {Function} callback - Callback function with the data URL as parameter
 */
export function convertImageToPdfDataUrl(imgElement, callback) {
  if (!imgElement) {
    console.error('Image element is null or undefined');
    callback(null);
    return;
  }

  // Create a canvas element
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Wait for the image to be fully loaded
  if (!imgElement.complete || !imgElement.naturalHeight) {
    imgElement.onload = function() {
      processImage();
    };
    imgElement.onerror = function() {
      console.error('Error loading image');
      callback(null);
    };
  } else {
    processImage();
  }
  
  function processImage() {
    // Set canvas dimensions to match the image
    canvas.width = imgElement.naturalWidth;
    canvas.height = imgElement.naturalHeight;
    
    // Draw the image on the canvas
    ctx.drawImage(imgElement, 0, 0);
    
    // Convert the canvas to a data URL (JPEG format with quality 0.95)
    try {
      const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
      callback(dataUrl);
    } catch (e) {
      console.error('Error converting image to data URL:', e);
      callback(null);
    }
  }
}