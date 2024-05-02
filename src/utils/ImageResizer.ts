// Assuming this file is named ImageResizer.ts

/**
 * Resizes an image file to the specified dimensions and quality.
 *
 * @param {File} file The image file to resize.
 * @param {number} maxWidth The maximum width of the resized image.
 * @param {number} maxHeight The maximum height of the resized image.
 * @param {Function} callback The function to call with the resized image Blob.
 * @param {number} quality The quality of the resized image (0 to 1).
 */
export const resizeImage = (
  file: File,
  maxWidth: number,
  maxHeight: number,
  callback: (blob: Blob) => void,
  quality: number = 0.85
): void => {
  if (!file || !file.type.startsWith("image/")) {
    console.error("Provided file is not an image.");
    return;
  }

  const img = new Image();
  const reader = new FileReader();

  reader.onload = (e: ProgressEvent<FileReader>) => {
    if (e.target?.result) {
      img.src = e.target.result as string;
    }
  };

  img.onload = () => {
    let { width, height } = img;

    // Calculate the scaling factor to maintain aspect ratio
    const scalingFactor = Math.min(maxWidth / width, maxHeight / height);
    width *= scalingFactor;
    height *= scalingFactor;

    // Draw the image on a canvas with the new dimensions
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(img, 0, 0, width, height);

    // Convert the canvas to a blob and call the callback with it
    canvas.toBlob(
      (blob) => {
        if (blob) {
          callback(blob);
        }
      },
      "image/jpeg",
      quality
    );
  };

  reader.readAsDataURL(file);
};
