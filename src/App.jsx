import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import AddContact from './component/add';
import EditContact from './component/edit';
import HomeContact from './component/home';

import list from './list.json';

function App() {

  const [contacts, setContacts] = useState(list);
  return (
    <Router>
      <Routes>
        <Route path="/edit" element={<EditContact contacts={contacts} setContacts={setContacts} />}></Route>
        <Route path="/add" element={<AddContact contacts={contacts} setContacts={setContacts} />}></Route>
        <Route path="/" element={<HomeContact contacts={contacts} setContacts={setContacts} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;