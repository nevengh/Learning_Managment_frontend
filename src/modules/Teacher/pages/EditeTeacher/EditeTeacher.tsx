import { useAppDispatch, useAppSelector } from "../../redux/Hooks";
import actEditTeacher from "../../redux/thunk/actEditTeacher";
import { useNavigate } from "react-router-dom";
import { Badge, Container, Alert } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EditeTeacher = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [img, setImg] = useState('');
    const [errors, setErrors] = useState({});

    const { id } = useParams();

    const teacher = useAppSelector((state) => state.teachers.records.find((teacher) => teacher.id === parseInt(id)));

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (teacher) {
            setName(teacher.name);
            setEmail(teacher.email);
            setImg(teacher.img);
        }
    }, [teacher]);

    const handleEditTeacher = () => {
        const updatedTeacher = { id: parseInt(id), name, email, img };
        dispatch(actEditTeacher(updatedTeacher))
            .then(() => {
                navigate('/teachers');
            })
            .catch((error) => {
                setErrors(error.response.data.errors);
            });
    };

    return (
        <Container>
            <h1 className='text-center mt-5'><Badge>Edit</Badge> Teacher</h1>
            <form className='bg-dark' method='post'>
                <label className='text-white' htmlFor="name">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' required />
                {errors.name && <Alert variant="danger">{errors.name[0]}</Alert>}
                <label className='text-white' htmlFor="email">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                {errors.email && <Alert variant="danger">{errors.email[0]}</Alert>}
                <label className='text-white' htmlFor="img">Image</label>
                <input type="text" value={img} onChange={(e) => setImg(e.target.value)} placeholder='Enter image URL' />
                {errors.img && <Alert variant="danger">{errors.img[0]}</Alert>}
                <button type="button" onClick={handleEditTeacher}>Edit Teacher</button>
            </form>
        </Container>
    );
};

export default EditeTeacher;
