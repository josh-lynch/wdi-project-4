import React from 'React';

const DragDrop = ({ onChange, value }) => {

  let fileInput = null;

  const fileReader = new FileReader();
  fileReader.onload = () => onChange({ target: { name: 'image', value: fileReader.result } });

  const handleImage = (e) => {
    e.preventDefault();
    const file = (e.target.files || e.dataTransfer.files)[0];
    fileReader.readAsDataURL(file);
  };

  const style = value ? { backgroundImage: `url(${value})` } : { backgroundImage: 'url(http://via.placeholder.com/200x100)' };

  return (
    <div className="drag-drop">
      <input
        type="file"
        accept="image/*"
        ref={element => fileInput = element}
        onChange={handleImage}
      />
      <div
        className="dropzone"
        style={style}
        onDragOver={e => e.preventDefault()}
        onDrop={handleImage}
        onClick={() => fileInput.click()}
      ></div>
    </div>
  );
};

export default DragDrop;
