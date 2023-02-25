import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const myStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Home = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [user, setUser] = useState([]);
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUser(data), setLoading(false));
    }

    const modalFetch = () => {
        return fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then((response) => response.json())
            .then((data) => setDetail(data))
    }

    useEffect(() => {
        fetchData();
    }, [])



    useEffect(() => {
        modalFetch()
    }, [])

    return (
        <>
            {loading ? <div style={myStyle}>Loading...</div> :
                <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }} >
                    {user && user.map((data) => (
                        <Card sx={{ width: 275, textAlign: "start" }} key={data.id}>
                            <CardContent>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Name: {data.name}
                                </Typography>
                                <Typography variant="body2">
                                    Username: {data.username}
                                </Typography>
                                <Typography variant="body2">
                                    Email: {data.email}
                                </Typography>
                                <Typography variant="body2">
                                    Company: {data.company.name}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={handleOpen} >Detail</Button>
                            </CardActions>
                        </Card>

                    ))}
                </div>
            }




            <div>
                {detail && detail.map((t) => {
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        key={t.id}
                    >
                        <Box sx={myStyle}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>

                })}

            </div>

        </>
    )
}

export default Home