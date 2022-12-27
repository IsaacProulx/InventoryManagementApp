import './App.css';
import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator, Grid, Card, ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { config as amplifyConfig } from './config/amplify-config.js';
import { useState, useEffect } from 'react';
import {default as PurchasePage } from './pages/Purchases.js';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import theme from 'src/themes/teal';

Amplify.configure(amplifyConfig)

const GetAllItemsButton = props => {
  const handleClick = async() => {
    fetch("https://on394wqi1c.execute-api.us-east-1.amazonaws.com/Prod/",{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Authorization": `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
      }
    }).then(res=>{
      res.json().then(res=>props.addQuery("GetAllItems",res))
    }).catch(err=>{
      console.error(err)
    })
  }
  return (
    <button
      className='button'
      onClick={handleClick}
      style={{
        margin:2.5
      }}
    >
      Get All Items
    </button>
  )
}

const Query = props => {
  return (
    <>
      <p
        style={{
          padding:0,
          margin:0
        }}
      >
        {props.query["req"]}: {props.query["res"]}
      </p>
    </>
  )
}

const QueriesPanel = props => {
  return (
    <div
      style={{
        borderRadius: 3,
        width:"95vw",
        height:"70vh",
        overflow:"auto",
        backgroundColor:"rgba(111,112,113,1)",
        marginTop:20
      }}
    >
      {props.queries.map((query,key)=>(
        <Query query={query} key={key} />
      ))}
    </div>
  )
}

const PAGES = {
  purchases:0
}

const PageDisplay = props => {
  switch(props.page){
    case PAGES.purchases:return(
      <div id="page">
        <PurchasePage />
      </div>
    )

    default:return(
      <div>
        <h1>Error: Invalid Page. <sub>(Try Refreshing)</sub></h1>
      </div>
    )
  }
  
}

function App({user}) {
  const [queries, setQueries] = useState([])
  const [page, setPage] = useState(PAGES.purchases)
  const [navActive, setNavActive] = useState(false);

  const addQuery = (req,res) => {
    setQueries([...queries,{req:JSON.stringify(req),res:JSON.stringify(res)}])
  }

  const toggleNav = () => {
    setNavActive(!navActive);
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid
          height="100vh"
          templateColumns="1fr 6fr"
          templateRows="1fr 12fr"
          columnGap="0.2rem"
          rowGap="0.2rem"
          backgroundColor="var(--amplify-colors-teal-80)"
        >
          <Header
            columnStart={1}
            columnEnd={-1}
            user={user}
            toggleNav={toggleNav}
          />
          <NavBar
            active={navActive}
            columnStart={1}
            columnEnd={2}
          />
          <Card
            columnStart={navActive?2:1}
            columnEnd={-1}
            backgroundColor="var(--amplify-colors-teal-60)"
          >
            <PageDisplay
              page={page}
            />
          </Card>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default withAuthenticator(App);
