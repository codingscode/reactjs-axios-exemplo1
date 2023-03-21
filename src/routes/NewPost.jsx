
import blogFetch from '../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NewPost.css'


const NewPost = () => {
   const navigate = useNavigate()
   
   const [title, setTitle] = useState()
   const [body, setBody] = useState()
   
   const createPost = () => {
   
   }

   return (
      <div className='new-post' >
         <h2>Inserir novo Post:</h2>
         <form onSubmit={() => createPost()} >
            <div className='form-control' >
               <label htmlFor='title' >Título</label>
               <input type='text' id='title' name='title' placeholder='Digite o título' />
            </div>
            <div className='form-control' >
               <label htmlFor='body' >Conteúdo:</label>
               <textarea id='body' name='title' placeholder='Digite o conteúdo' />
            </div>
            <input type='submit' value='criar Post' className='btn' />
         </form>
      </div>
   ) 
}

export default NewPost
