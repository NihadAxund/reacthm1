import React from 'react'
import { Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SideCompanet() {
    return (
        <div>
      
            <Container style={{width:'100%'}} className='p-5'>
                <h1 style={{ color: 'white',  marginBottom:'25px'}}>Bootstrap SideBar</h1>
            </Container>

            <p className='p-1' style={{ margin:'10px', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Home</p>
            <p className='p-1' style={{ margin:'10px', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>About</p>
           
            <p className='p-1' style={{ margin:'10px', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>FAQ</p>
     
            <p className='p-1' style={{ margin:'10px', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Contact</p>

        </div>
    )
}
