import { useNavigate } from 'react-router-dom';
import Layout from './layout';

function Add(props) {
    const navigate = useNavigate();
    const submitHandle = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const phone = event.target[1].value;
        const email = event.target[2].value;
        const address = event.target[3].value;
        const button = event.target[4];
        let user = props.contacts.length;
        button.disabled = true;
        button.innerHTML = 'Updating...';
        props.setContacts((oldList) => {
            return [
                ...oldList,
                {
                    "name": name,
                    "address": address,
                    "phone": phone,
                    "email": email,
                }
            ];
        });
        navigate(`/#contact-${user}`);
        button.disabled = false;
        button.innerHTML = 'Add Contact';
    };
    return (
        <Layout headerText="Add Subscriber" headerLink="/" headerButton="Cancel" headerType="remove">
            <form action="" method="post" onSubmit={submitHandle} className="addform">
                <div className="formgroup">
                    <label htmlFor="name" className="label">Name</label>
                    <input required id="name" type="text" placeholder="John Doe" className="input" />
                </div>
                <div className="formgroup">
                    <label htmlFor="phone" className="label">Phone</label>
                    <input required id="phone" type="number" placeholder="9876543210" className="input" />
                </div>
                <div className="formgroup">
                    <label htmlFor="email" className="label">Email</label>
                    <input required id="email" type="email" placeholder="john@doe.com" className="input" />
                </div>
                <div className="formgroup">
                    <label htmlFor="address" className="label">Address</label>
                    <textarea required id="address" className="input" placeholder='123 Main'></textarea>
                </div>
                <div className="formsubmit">
                    <button type="submit" className="button adder">Add Contact</button>
                </div>
            </form>
        </Layout>
    );
}

export default Add;