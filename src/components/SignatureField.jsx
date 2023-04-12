import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignatureField = ({ onChange }) => {
  const canvasRef = useRef();

  const handleCanvasClear = () => {
    canvasRef.current.clear();
    // onChange(null);
  };

  const handleCanvasChange = () => {
    const canvas = canvasRef.current.getTrimmedCanvas();
    const dataURL = canvas.toDataURL();

    console.log("====================================");
    console.log(dataURL);
    console.log("====================================");
    // onChange(dataURL);
  };

  return (
    <div className="border-2">
      <SignatureCanvas
        backgroundColor="gray"
        ref={canvasRef}
        canvasProps={{ width: "600", height: 200 }}
        onEnd={handleCanvasChange}
      />
      <button onClick={handleCanvasClear}>Clear</button>
    </div>
  );
};

export default SignatureField;
