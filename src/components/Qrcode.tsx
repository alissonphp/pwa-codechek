import QRcode from "qrcode";
import { useEffect, useRef } from "react";

interface Props {
  text: string
}

export function Qrcode({ text } : Props){

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(()=> {
    const width = window.innerWidth > 500 ? 500 : window.innerWidth
    QRcode.toCanvas(canvasRef.current, text, { width }, error => {
      console.log(error)
    })
  }, [text])

  return(
    <canvas ref={canvasRef} id="qrCodeCanvas"></canvas>
  )
}
