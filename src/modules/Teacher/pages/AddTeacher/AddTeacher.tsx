import { useState } from 'react';
import { Badge, Container, Alert } from 'react-bootstrap';
import './AddTeacher.css';
import actAddTeacher from '../../redux/thunk/actAddTeacher';
import { useDispatch } from 'react-redux';
import { store } from '../../redux/store';
import { actGetTeachers } from '../../redux/teachersSlice';

const AddTeacher = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [img, setImg] = useState('');
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch<typeof store.dispatch>();

    const handleAddTeacher = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the default form submission

        const payload = { name, email, img };
        try {
            await dispatch(actAddTeacher(payload));
            dispatch(actGetTeachers()); // Refetch the list of teachers
            // Reset form fields after successful addition
            setName('');
            setEmail('');
            setImg('');
            setErrors({});
        } catch (error: any) {
            setErrors(error.response.data.errors);
        }
    };

    return (
        <Container>
            <h1 className='text-center mt-5'><Badge>Add</Badge> Teacher</h1>
            <form className='bg-dark' onSubmit={handleAddTeacher}>
                <label className='text-white' htmlFor="name">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' required />
                {errors.name && <Alert variant="danger">{errors.name[0]}</Alert>}
                <label className='text-white' htmlFor="email">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                {errors.email && <Alert variant="danger">{errors.email[0]}</Alert>}
                <label className='text-white' htmlFor="img">Image</label>
                <input type="text" value={img} onChange={(e) => setImg(e.target.value)} placeholder='Enter image URL' />
                {errors.img && <Alert variant="danger">{errors.img[0]}</Alert>}
                <button type="submit">Add Teacher</button>
            </form>
        </Container>
    );
};

export default AddTeacher;
