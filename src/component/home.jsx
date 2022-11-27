import { Link } from 'react-router-dom';
import Layout from './layout';

function Home(props) {
    return (
        <Layout headerText="Phone Directory" headerLink="/add" headerButton="Add" headerType="submit">
            <div className="list">
                <div className="item item-head">
                <div className="item-col number">Serial</div>
                <span className="col-line"></span>
                <div className="item-col name">Name</div>
                <span className="col-line"></span>
                <div className="item-col phone">Phone</div>
                <span className="col-line"></span>
                <div className="item-col email">Email</div>
                <span className="col-line"></span>
                <div className="item-col address">Address</div>
                <span className="col-line"></span>
                <div className="item-col action">Action</div>
                </div>
                <div className="viewer">
                {
                    props.contacts.map(function (item, i) {
                    return (
                        <ListItem data={item} key={i} item={i} setContacts={props.setContacts}></ListItem>
                    );
                    })
                }
                </div>
            </div>
        </Layout>
    );
}
export default Home;

function ListItem(props) {
    const deleteHandle = () => {
        props.setContacts((oldList) => {
            const newList = [...oldList];
            newList.splice(props.item, 1);
            return newList;
        });
    };
  return (
    <div key={props.item} className="item">
      <div className="item-col number">{props.item + 1}</div>
      <span className="col-line"></span>
      <div className="item-col name">{props.data.name}</div>
      <span className="col-line"></span>
      <div className="item-col phone">{props.data.phone}</div>
      <span className="col-line"></span>
      <div className="item-col email">{props.data.email}</div>
      <span className="col-line"></span>
      <div className="item-col address">{props.data.address}</div>
      <span className="col-line"></span>
      <div className="item-col action">
        <Link to={`/edit?id=${props.item}`}><button className="button adder" type="button">Edit</button></Link>
        <button className="button remove" type="button" onClick={deleteHandle}>Delete</button>
      </div>
    </div>
  );
}