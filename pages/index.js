import Layout from '../components/layout/Layout'
import { Fragment } from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-fetch'

//components
import Users from '../components/Users'

const index = props => {
    return (
        < Fragment >
            <Head>
                <title>Next JS</title>
            </Head>
            <Layout>
                <Users users={props.users} />
            </Layout>
        </Fragment >

    )
}

index.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users?page=2');
    const users = await res.json();
    return { users: users.data }
}

export default index