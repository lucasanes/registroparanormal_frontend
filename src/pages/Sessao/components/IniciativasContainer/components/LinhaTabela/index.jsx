import { Container, TD1, TD2, TD3, TD4, TD5, TD6, ButtonIcon } from './styles';
import { BiTrashAlt } from "react-icons/bi"
import { HiOutlineBarsArrowDown, HiOutlineBarsArrowUp } from "react-icons/hi2"
import { useEffect, useState } from 'react';
import { api } from '../../../../../../services/api';

export function LinhaTabela({ data, iniciativas, atualizar, setPrecisaSalvar }) {

  async function handleDelete() {

    try {

      const iniciativasAtualizadas = iniciativas.filter(iniciativa => iniciativa.id != data.id)

      for (let i = data.posicao - 1; i < iniciativasAtualizadas.length; i++) {
        iniciativasAtualizadas[i].posicao = iniciativasAtualizadas[i].posicao - 1
      }

      atualizar(iniciativasAtualizadas)

      for (let i = data.posicao - 1; i < iniciativasAtualizadas.length; i++) {
        await api.put(`/sessoes/iniciativa/${iniciativasAtualizadas[i].id}`, {
          posicao: (iniciativasAtualizadas[i].posicao - 1),
        });
      }

      await api.delete(`/sessoes/iniciativa/${data.id}`);

    } catch (error) {
      console.log(error);
    }

  }

  async function handleEditTop() {

    if (data.posicao != 1) {

      try {

        function changePosition(arr, from, to) {
          arr.splice(to, 0, arr.splice(from, 1)[0]);
          return arr;
        };

        iniciativas[data.posicao - 2].posicao = data.posicao
        iniciativas[data.posicao - 1].posicao = data.posicao - 1
        const iniciativasAtualizadas = changePosition(iniciativas, data.posicao, data.posicao - 1)

        const iniciativasA = iniciativasAtualizadas.map(iniciativa => iniciativa)

        atualizar(iniciativasA)
        setPrecisaSalvar()

      } catch (error) {
        console.log(error)
      }

    }

  }

  async function handleEditBottom() {

    if (data.posicao != iniciativas.length) {

      try {

        function changePosition(arr, from, to) {
          arr.splice(to, 0, arr.splice(from, 1)[0]);
          return arr;
        };

        iniciativas[data.posicao].posicao = data.posicao
        iniciativas[data.posicao - 1].posicao = data.posicao + 1
        const iniciativasAtualizadas = changePosition(iniciativas, data.posicao - 2, data.posicao - 1)

        const iniciativasA = iniciativasAtualizadas.map(iniciativa => iniciativa)

        atualizar(iniciativasA)
        setPrecisaSalvar()

      } catch (error) {
        console.log(error)
      }

    }

  }

  return (
    <Container>
      <TD1><ButtonIcon color={'aqua'}><HiOutlineBarsArrowUp color='#03d9ffff' size={20} onClick={handleEditTop} /></ButtonIcon></TD1>
      <TD2>{data.posicao}</TD2>
      <TD3><input type={'text'} defaultValue={data.nome} maxLength={22} onChange={(e) => {
        data.nome = e.target.value
        setPrecisaSalvar()
      }} /></TD3>
      <TD4><input type={'number'} defaultValue={data.iniciativa} onChange={(e) => {
        data.iniciativa = e.target.value
        setPrecisaSalvar()
      }} /></TD4>
      <TD5><input type={'number'} defaultValue={data.dano} onChange={(e) => {
        data.dano = e.target.value
        setPrecisaSalvar()
      }}/></TD5>

      <TD6>
        <ButtonIcon color={'aqua'}><HiOutlineBarsArrowDown color='#03d9ffff' size={20} onClick={handleEditBottom} /></ButtonIcon>
        <ButtonIcon color={'red'}><BiTrashAlt onClick={handleDelete} size={20} color='#ae0808ff' /></ButtonIcon>
      </TD6>
    </Container>
  );
}