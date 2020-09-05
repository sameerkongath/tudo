import React ,{useState} from 'react'
import { ListItem, ListItemText, List, ListItemAvatar, Avatar, Modal} from '@material-ui/core'
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState();
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }
    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
        todo: input
        }, {merge: true})
        setOpen(false)
    }
    return (
        <div>
        <Modal 
        open={open}
        onClose={e => setOpen(false)}>
        <div className={classes.paper}>
            <h1>I am a Model</h1>
            <input placeholder='Type' value={input} onChange={event => setInput(event.target.value)}/>
            <button onClick={e => setOpen(false)}>Update Todo</button>
        </div>
        </Modal>
        <List className="todo__list">
            <ListItemAvatar >

                <Avatar>

                </Avatar>
            </ListItemAvatar>
            <ListItem>
            <button onClick={e => setOpen(true)}>Edit</button>
                <ListItemText primary='{props.todo.todo}' secondary="Time up"/>
            </ListItem>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}></DeleteForeverIcon>
        </List> 
        </div>
    )
}

export default Todo
