import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import Layout from './layout';

function Edit(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [editUser, setEditUser] = useState([]);
    const [editable, setEditable] = useState(false);
    useEffect(()=>{
        if (searchParams.get('id') && searchParams.get('id') !== '') {
            if(props.contacts[searchParams.get('id')]) {
                setEditUser({
                    "id": searchParams.get('id'),
                    ...props.contacts[searchParams.get('id')]
                });
                setEditable(true);
            }
        }
    }, [searchParams, props.contacts]);
    return (
        <Layout headerText={`Edit Contact: ${editUser.name || ''}`} headerLink={`/${editUser.id ? '#contact-' + editUser.id : ''}`} headerButton="Cancel" headerType="remove">
            {editable && <Editor contacts={props.contacts} setContacts={props.setContacts} user={editUser}  />}
            {!editable && <div className='invalid'>
                <p>Invalid edit request recieved. Go back and click on Edit corresponding to a Contact to edit it.</p>
                <p><Link to='/'><button className='button adder'>Go back</button></Link></p>
            </div>}
        </Layout>
    );
}
export default Edit;

function Editor(props) {
    const navigate = useNavigate();
    const submitHandle = (event) => {
        event.preventDefault();
        const user = event.target[0].value;
        const name = event.target[1].value;
        const phone = event.target[2].value;
        const email = event.target[3].value;
        const address = event.target[4].value;
        const button = event.target[5];
        button.disabled = true;
        button.innerHTML = 'Updating...';
        props.setContacts((oldList) => {
            const newList = [...oldList];
            newList[user] = {
                "name": name,
                "address": address,
                "phone": phone,
                "email": email,
            };
            return newList;
        });
        navigate(`/#contact-${user}`);
        button.disabled = false;
        button.innerHTML = 'Add Contact';
    };
    return (
        <form action="" method="post" onSubmit={submitHandle} className="addform">
            <div className="formgroup">
                <label htmlFor="id" className="label">User ID</label>
                <input required disabled id="id" type="text" placeholder="001" defaultValue={props.user.id} className="input" />
            </div>
            <div className="formgroup">
                <label htmlFor="name" className="label">Name</label>
                <input required id="name" type="text" placeholder="John Doe" defaultValue={props.user.name} className="input" />
            </div>
            <div className="formgroup">
                <label htmlFor="phone" className="label">Phone</label>
                <input required id="phone" type="number" placeholder="9876543210" defaultValue={props.user.phone} className="input" />
            </div>
            <div className="formgroup">
                <label htmlFor="email" className="label">Email</label>
                <input required id="email" type="email" placeholder="john@doe.com" defaultValue={props.user.email} className="input" />
            </div>
            <div className="formgroup">
                <label htmlFor="address" className="label">Address</label>
                <textarea required id="address" className="input" defaultValue={props.user.address} placeholder='123 Main'></textarea>
            </div>
            <div className="formsubmit">
                <button type="submit" className="button adder">Update Contact</button>
            </div>
        </form>
    );
}