import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {Form} from 'bootstrap-4-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Edit = () => {
    const [tarefa, setTarefa] = useState()
    const [horas, setHoras] = useState()
    const [idEdit, setIdEdit] = useState()
    const location = useLocation()
    const navigate = useNavigate()

    const id = location?.state?.id
    const api = location?.state?.api

    async function findOneTarefa(){
        if(id != ''){
            try {
              await axios.get(api + `/${id}`).then(
                response => {
                  setTarefa(response.data.tarefa)
                  setHoras(response.data.horas)
                }
              )
            } catch (error) {
              alert(error)
            }
        }
    }

    useEffect(() =>{
        findOneTarefa()
        setIdEdit(id)
    }, [])

    async function handleEditSave(e){
      e.preventDefault()

      try{
        axios.put(api+`/${idEdit}`,{
          id: idEdit,
          tarefa: tarefa,
          horas: horas
        }).then((response) =>{
          alert("Dados atualizados!!")
        })

        navigate('/')

      } catch(e){
      alert("error: "+ e)
    }
  }

  return (
    <div className='container mt-5'>
    <div className='row justify-content-center'>
      <div className='col-7 card ' style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <div className='row justify-content-center'>
          <h3 className='mt-5 p-5' style={{ fontSize: '2.5em', color: 'black', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}> Atualizar Tarefa</h3>
        </div>

        <div className='container'>
          <form onSubmit={handleEditSave}>
            <Form.Group>
              <label>Insira o nome da Tarefa: </label>
              <Form.Input type="text" value={tarefa} onChange={(e)=> setTarefa(e.target.value)}/>
            </Form.Group>

            <Form.Group>
              <label>Insira a quantidade de horas necessárias:</label>
              <Form.Input type="number" value={horas} onChange={(e)=> setHoras(e.target.value)}/>
            </Form.Group>
            <div className='row justify-content-center mb-3'>
              <button type='submit' className='btn col-5 btn-primary mt-5 rounded'>Atualizar</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
  )
}
export default Edit