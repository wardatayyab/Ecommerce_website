import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Form.css'; 

export default function Form() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const handleclick = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('image', image);

        let result = await axios.post('http://localhost:3200/create', formData, {
            headers: {  // Corrected 'Header' to 'headers'
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(result);
    };

    return (
        <div className="form-container">
            <input type='text' className="form-input" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type='text' className="form-input" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type='text' className="form-input" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type='text' className="form-input" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type='file' className="form-input" onChange={(e) => setImage(e.target.files[0])} />
            <button className="form-button" onClick={handleclick}>
                Submit
            </button>
        </div>
    );
}
