import './css/Header.css';
import { Card, Menu, MenuItem, MenuButton, Flex, Icon, Button } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

export const Header = props => {
    return(
        <Card
            columnStart={props.columnStart}
            columnEnd={props.columnEnd}
            backgroundColor="var(--amplify-colors-teal-100)"
            width="100%"
            height="100%"
        >
            <Flex direction="row">
                <Button
                    marginRight="auto"
                    variation='header'
                    onClick={(e)=>{
                        e.target.blur()
                        props.toggleNav()
                    }}
                >
                    <Icon
                        pathData="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                    />
                </Button>
                <Menu
                    trigger={
                        <MenuButton
                            variation='primary'
                            borderRadius="100%"
                            width="3em"
                            height="3em"
                            marginLeft="auto"
                        >
                            {props.user.username[0].toUpperCase()}
                        </MenuButton>
                    }
                    menuAlign="end"
                >
                    <MenuItem onClick={()=>Auth.signOut()}>
                        <div>Sign Out</div>
                    </MenuItem>

                </Menu>
            </Flex>
        </Card>
    )
}