import { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { FaUserCircle } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { io } from 'socket.io-client';
import { ButtonDelete } from '../../../../../components/ButtonDelete';
import periciasmap from "../../../../../components/mappers/pericias";
import resistenciasmap from "../../../../../components/mappers/resistencias";
import { useFichas } from "../../../../../hooks/useFichas";
import { api } from "../../../../../services/api";
import { theme } from "../../../../../stitches.config";
import { Barrinha } from "../Barrinha";
import { Body, BottomBody, Button, ButtonPrivate, Card, Container, Deferes, DivDeferes, Grid, Header, LinkButton, LinkIcon, TopBody } from "./styles";

const socket = io(api.defaults.baseURL);

export function CardFichasPersonagem({ data }) {

    const { fichas, setFichas } = useFichas()

    const [buttonActive, setButtonActive] = useState('Status')

    const [pesoA, setPesoA] = useState(0)

    const [pericias, setPericias] = useState([])
    const [defesas, setDefesas] = useState([])
    const [res, setRes] = useState([])

    const [pv, setPv] = useState(data.Status[0].pv)
    const [ps, setPs] = useState(data.Status[0].ps)
    const [pe, setPe] = useState(data.Status[0].pe)

    const [pvMax, setPvMax] = useState(data.Status[0].pvMax)
    const [psMax, setPsMax] = useState(data.Status[0].psMax)
    const [peMax, setPeMax] = useState(data.Status[0].peMax)

    const {id} = useParams()

    const [isPublic, setIsPublic] = useState(data.isPublic)

    useEffect(() => {

      setPesoA(0)

      data.Armas.forEach(element => {
        setPesoA((prev) => prev + element.espaco)
      });

      data.Itens.forEach(element => {
        setPesoA((prev) => prev + element.espaco)
      });

      let varPericias = []

      for (const [key, value] of Object.entries(data.Pericias[0])) {
        if (key != 'fichaId' && key != 'id') {
          if (value != null && value != 0) {
            const novaPericia = { nome: key, valor: value }
            varPericias.push(novaPericia)
          }
        }
      }

      setPericias(varPericias)

      let varDefesas = []
      let varRes = []

      for (const [key, value] of Object.entries(data.Defesas[0])) {
        if (key != 'id' && key != 'fichaId') {
          if (key == 'passiva' || key == 'esquiva' || key == 'bloqueio') {
            if (value != null && value != 0) {
              const novaDefesa = { nome: key, valor: value }
              varDefesas.push(novaDefesa)
            }
          } else {
            if (value != null && value != 0) {
              const novaRes = { nome: key, valor: value }
              varRes.push(novaRes)
            }
          }
        }
      }
      setDefesas(varDefesas)
      setRes(varRes)

      function executeUpdatePvAtual({ newPvAtual }) {
        setPv(newPvAtual)
      }
      socket.on(`status.pvA?${data.id}`, executeUpdatePvAtual);

      function executeUpdatePvMax({ newPvMax }) {
        setPvMax(newPvMax)
      }
      socket.on(`status.pvMax?${data.id}`, executeUpdatePvMax);

      function executeUpdateSanAtual({ newSanAtual }) {
        setPs(newSanAtual)
      }
      socket.on(`status.sanA?${data.id}`, executeUpdateSanAtual);

      function executeUpdateSanMax({ newSanMax }) {
        setPsMax(newSanMax)
      }
      socket.on(`status.sanMax?${data.id}`, executeUpdateSanMax);

      function executeUpdatePeAtual({ newPeAtual }) {
        setPe(newPeAtual)
      }
      socket.on(`status.peA?${data.id}`, executeUpdatePeAtual);

      function executeUpdatePeMax({ newPeMax }) {
        setPeMax(newPeMax)
      }
      socket.on(`status.peMax?${data.id}`, executeUpdatePeMax);

      return () => {
        socket.off(`status.pvA?${data.id}`, executeUpdatePvAtual);
        socket.off(`status.pvMax?${data.id}`, executeUpdatePvMax);
        socket.off(`status.sanA?${data.id}`, executeUpdateSanAtual);
        socket.off(`status.sanMax?${data.id}`, executeUpdateSanMax);
        socket.off(`status.peA?${data.id}`, executeUpdatePeAtual);
        socket.off(`status.peMax?${data.id}`, executeUpdatePeMax);
      }

    }, [])

    async function handleDelete() {

        try {

            await api.put(`/fichas/${data.id}`, {
                sessaoId: null
            })

            await api.delete(`/sessoes/participante/${data.id}`)

            const fichasAtt = fichas.filter(ficha => ficha.id != data.id)

            setFichas(fichasAtt)

        } catch (erro) {
            console.log(erro)
        }

    }

    async function handleEdit() {
        try {
            await api.put(`/fichas/${data.id}`, {
                isPublic: !isPublic,
                sessaoId: id
            })
            setIsPublic(!isPublic)
            toast.success(`Esta ficha agora está ${!isPublic ? 'pública' : 'privada'}.`)
        } catch (e) {console.log(e)}
    }

    return (
        <Container>
            <Header>
                <div>
                    <h1>{data.Principal[0].nome}</h1>
                    <LinkButton to={`/sessao/ficha/${data.id}`}>
                        <IoOpenOutline size={22} color="#1f55c2ff" />
                    </LinkButton>
                </div>
                <div>
                    <LinkIcon to={`/ficha/portrait/${data.id}`} color={'aqua'}>
                        <FaUserCircle size={20} color={theme.colors.cyan} />
                    </LinkIcon>
                    <ButtonPrivate onClick={handleEdit} color={isPublic ? 'green' : 'crimson'}>{isPublic ? <BsEye size={20} color="#13ff72" /> : <BsEyeSlash size={20} color="crimson" />}</ButtonPrivate>
                    <ButtonDelete onClick={handleDelete}/>
                </div>
            </Header>

            <hr />

            <Body>
                <TopBody>

                    <Button onClick={() => setButtonActive('Principal')} active={buttonActive == 'Principal'} >Principal</Button>
                    <Button onClick={() => setButtonActive('Status')} active={buttonActive == 'Status'}>Status</Button>
                    <Button onClick={() => setButtonActive('Dados')} active={buttonActive == 'Dados'} >Dados</Button>
                    <Button onClick={() => setButtonActive('Defesas')} active={buttonActive == 'Defesas'} >Defesas</Button>

                </TopBody>

                <hr />

                <BottomBody>
                    {buttonActive == 'Principal' ? <>

                        <Grid>

                            <Card>
                                <label>Nacionalidade:</label>
                                <span>{data.Principal[0].nacionalidade}</span>
                            </Card>

                            <Card>
                                <label>Idade:</label>
                                <span>{data.Principal[0].idade}</span>
                            </Card>

                            <Card>
                                <label>Origem:</label>
                                <span>{data.Principal[0].origem}</span>
                            </Card>

                            <Card>
                                <label>Deslocamento:</label>
                                <span>{data.Principal[0].deslocamento}</span>
                            </Card>

                            <Card>
                                <label>NEX:</label>
                                <span>{data.Principal[0].nex}</span>
                            </Card>

                            <Card>
                                <label>Classe:</label>
                                <span>{data.Principal[0].classe}</span>
                            </Card>

                            {(data.Principal[0].trilha != 'Nenhuma' || data.Principal[0].patente != 'Nenhuma') && <>

                                <Card>
                                    <label>Trilha:</label>
                                    <span>{data.Principal[0].trilha}</span>
                                </Card>

                                <Card>
                                    <label>Patente:</label>
                                    <span>{data.Principal[0].patente}</span>
                                </Card>

                            </>}

                        </Grid>

                    </>

                    : buttonActive == 'Status' ? <>

                        <Barrinha nome={'PV'} barrinhaId={data.id} color={'red'} number={1} valorA={pv} setValorA={setPv} valorMax={pvMax} setValorMax={setPvMax} />

                        <Barrinha nome={'SAN'} barrinhaId={data.id} color={'aqua'} number={2} valorA={ps} setValorA={setPs} valorMax={psMax} setValorMax={setPsMax} />

                        <Barrinha nome={'PE'} barrinhaId={data.id} color={'yellow'} number={3} valorA={pe} setValorA={setPe} valorMax={peMax} setValorMax={setPeMax} />

                        <h2><b className="b">Peso:</b> {pesoA}/{data.Status[0].peso}</h2>

                    </>

                    : buttonActive == 'Dados' ? <>

                        <h3>Atributos</h3>

                        <DivDeferes>

                            <Deferes><b>AGI</b>: {data.Atributos[0].agi}</Deferes>
                            <Deferes><b>INT</b>: {data.Atributos[0].int}</Deferes>
                            <Deferes><b>VIG</b>: {data.Atributos[0].vig}</Deferes>
                            <Deferes><b>PRE</b>: {data.Atributos[0].pre}</Deferes>
                            <Deferes><b>FOR</b>: {data.Atributos[0].for}</Deferes>

                        </DivDeferes>

                        <h3>Perícias</h3>

                        <DivDeferes>
                            {pericias.map(per => <Deferes key={per.nome}><b>{periciasmap(per.nome)}</b>: {per.valor}</Deferes>)}
                        </DivDeferes>

                    </>

                    : buttonActive == 'Defesas' && <>

                        <h3>Defesas</h3>

                        <DivDeferes>
                            {defesas.map(defesa => <Deferes key={defesa.nome}><b>{defesa.nome}</b>: {defesa.valor}</Deferes>)}
                        </DivDeferes>

                        <h3>Resistências</h3>

                        <DivDeferes>
                            {res.map(resist => <Deferes key={resist.nome}><b>{resistenciasmap(resist.nome)}</b>: {resist.valor}</Deferes>)}
                        </DivDeferes>

                    </>}

                </BottomBody>
            </Body>
        </Container>
    );
}
