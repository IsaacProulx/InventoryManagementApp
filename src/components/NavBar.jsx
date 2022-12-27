import './css/NavBar.css';
import { View, Flex, Card, Link, Menu, MenuItem } from '@aws-amplify/ui-react';
import { useState} from 'react';

export const NavBar = props => {
    return(
        <Card
            backgroundColor="var(--amplify-colors-teal-100)"
            columnStart={props.columnStart}
            columnEnd={props.columnEnd}
            display={props.active?"":"none"}
        >
            <Link
                color="var(--amplify-colors-teal-40)"
            >
                Purchases
            </Link>
        </Card>
    )
}