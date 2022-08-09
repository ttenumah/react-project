import React, {useState} from 'react'

import Swal from 'sweetalert2';

import Header from './Header';
import ListEmployee from './ListEmployee';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import { employeesData } from '../../data';

function Dashboard() {
    const [employees, setEmployees] = useState(employeesData);
    const [SelectedEmployee, setSeletedEmployee] = useState(null);
    const [isAdding, setisAdding] = useState(false);
    const [isEditing, setiEditing] = useState(false);
    
    const handleEdit = () => {

    }

    const handleDelete = () => {
        
    }

    return(
        <div className='container'>
            {/*List */}
            {!isAdding && !isEditing && (
                <>
            <Header
            setisAdding={setisAdding}
            />
            <ListEmployee
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            />
            </>
            )
            }
{/*add*/}
         {isAdding&& (
            <Add
            employees={employees}
            setEmployees={setEmployees}
            setisAdding={setisAdding}
            />
            )
            }

{/*Edit*/}
{isEditing && (
            <Edit
            employees={employees}
            setEmployees={setEmployees}
            setiEditing={setiEditing}
            SelectedEmployee={setSeletedEmployee}
            />
            )
            }

        </div>
    )
}

export default Dashboard