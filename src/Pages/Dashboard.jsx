import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Dashboard() {


    const [Users, setUsers] = useState([]);
    useEffect(() => {
        //Lógica para obtener los usuarios de la api cuando cargue el componente
        fetchUsers();
    }, [])


    const fetchUsers = async () => {
        const response = await axios.get('http://localhost:3000/users')//RUTA DE LA API PARA OBTENER USUARIO
        console.log(response.data) //MEtiendo la respuesta(data) al estado 
        setUsers(response.data)
    }


    //_____________FUNCIÓN DE ELIMINAR_______________

    const HandeDelete = async (id) => {

        const response = await axios.delete(`http://localhost:3000/users/${id}`)

        if(response.status = 200 ){
            alert('Se elimino correctamente')
        }

        fetchUsers()

    }


    return (
        <>
            <div className="container mx-20 w-50  p-20">

                <div className="row">

                    <div className="offset-10 col-5 mb-5">

                        <a className="btn btn-success" href='/AddUser'> <i class="fa-solid fa-user" ></i>Nuevo</a>
                    </div>
                </div>
                <div className="offset-2 col-11 mb-5">
                    <div className="card border">
                        <div class="card-header bg-dark">
                            <h1 className="text-white"><strong>Lista de usuarios</strong></h1>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" width="100%">
                                    <thead>
                                        <tr>
                                            <th> Nombre</th>
                                            <th> Contraseña</th>
                                            {/* <th> Fecha de registro </th> */}
                                            <th> Acciones</th>
                                        </tr>

                                    </thead>
                                    <tbody>

                                        {Users.map((users) => (
                                            <tr key={users.PkUser}>
                                                <td>{users.UserName} </td>
                                                <td> {users.Password}  </td>
                                                <td > <a className="btn btn-danger" onClick={() => HandeDelete(users.PkUser)}>  <i class="fa-solid fa-user" ></i>Eliminar</a></td>

                                            </tr>
                                        ))}

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Dashboard
