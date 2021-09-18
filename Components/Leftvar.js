import { List, ListItem } from '@material-ui/core';
import React from 'react';
import useStyles_window from '../utils/style';


const Leftvar = () => {
    const classes = useStyles_window();
    return (
        <div>
            <List className="leftvar">
                <ListItem>
                    <a href="#">Dashboard</a>
                </ListItem>
                <ListItem>
                    <a href="#">Ecommerce analyst</a>
                </ListItem>
                <ListItem>
                    <a href="#">Users</a>
                </ListItem>
                <ListItem>
                    <a href="#">Coupons</a>
                </ListItem>
                <ListItem>
                    <a href="#">Settings</a>
                </ListItem>
                <ListItem>
                    <a href="#">Add Media</a>
                </ListItem>
            </List>
        </div>
    );
};

export default Leftvar;