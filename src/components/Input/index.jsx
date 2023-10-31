import { useEffect, useRef, useState } from "react"
import { Button, Container, ContainerInput, Img, InputB, LabelContainer} from "./styles"
import {AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export function Input({label, type, isDado = false, maxValor = null, setValor, valor, opcional = false, img = false, ...rest }) {

  const [hover, setHover] = useState(false)
  const [isSenhaVisible, setIsSenhaVisible] = useState(false)
  const [imgIsLoaded, setImgIsLoaded] = useState(false)
  const [key, setKey] = useState(0)

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
    
  }, [valor])

  return (
    <Container>
      
      <LabelContainer img={img.toString()} hover={hover.toString()}>
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
      </ContainerInput>
      {type == 'password' &&
      <Button type='button' onClick={() => setIsSenhaVisible(!isSenhaVisible)}>{isSenhaVisible ? <AiOutlineEyeInvisible color="cyan"/> : <AiOutlineEye color="cyan"/>}</Button>} 
      {img && <>
        <Img key={key}>
          <span>Preview: </span> 
          <img onLoad={() => setImgIsLoaded(true)} src={valor} style={{display: imgIsLoaded ? 'block' : 'none'}}/>
        </Img>
      </>}
    </Container>
  )
}