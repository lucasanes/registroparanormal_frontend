import { useEffect, useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { ImageUploader } from "../ImageUploader"
import { Button, Container, ContainerInput, Img, InputB, LabelContainer } from "./styles"

export function Input({label, type, isDado = false, maxValor = null, setValor, valor, opcional = false, img = false, video = false, ...rest }) {

  const [hover, setHover] = useState(false)
  const [isSenhaVisible, setIsSenhaVisible] = useState(false)
  const [imgIsLoaded, setImgIsLoaded] = useState(false)
  const [key, setKey] = useState(0)

  const handleImageUpload = (url) => {
    setValor(url);
  };

  useEffect(() => {
    
    if (valor != null && valor.toString().length > 0) {
      setHover(true)
    } else {
      if (!hover) {
        setHover(false)
      }  
    }

    if (img) {
      setKey(prev => prev + 1)
      setImgIsLoaded(false)
    }

    if (video) {
      setKey(prev => prev + 1)
    }
    
  }, [valor])

  return (
    <Container>
      
      <LabelContainer img={img.toString()} video={video.toString()} hover={hover.toString()}>
        {label}
      </LabelContainer>

      <ContainerInput>
        <InputB value={valor} type={type == 'password' && isSenhaVisible ? 'text' : type} {...rest}
          onChange={(event) => {
            if (maxValor != null) {
              if (maxValor >= event.target.value) {
                setValor(event.target.value)
              }
            } else {
              setValor(event.target.value)
            }
          }}
          onFocus={() => {
            setHover(true)
          }}
          onBlur={() => {
            if (valor == null || valor.toString().length == 0) {
              setHover(false)
            }
          }}
        />
        {(img || video) && <ImageUploader onImageUpload={handleImageUpload}/>}
      </ContainerInput>
      {type == 'password' &&
      <Button type='button' onClick={() => setIsSenhaVisible(!isSenhaVisible)}>{isSenhaVisible ? <AiOutlineEyeInvisible color="cyan"/> : <AiOutlineEye color="cyan"/>}</Button>} 
      {img && <>
        <Img key={key}>
          <span>Preview: </span> 
          <img onLoad={() => setImgIsLoaded(true)} src={valor} style={{display: imgIsLoaded ? 'block' : 'none'}}/>
        </Img>
      </>}
      {video && <>
        <Img key={key}>
          <span>Preview: </span> 
          <video style={{display: 'block'}} autoPlay loop muted>
            <source src={valor}/>
          </video>
        </Img>
      </>}
    </Container>
  )
}