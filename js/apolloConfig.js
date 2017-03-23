import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
    //uri: 'http://192.168.0.12:3000/graphql' //to test server
    uri: 'http://192.168.0.12:80/c_graphql',
    opts: {method: 'POST'}
});

const apolloClient = new ApolloClient({
    networkInterface,
    // dataIdFromObject: o => `${o.__typename}:${o.id},`,
    // shouldBatch: true,
});

export default apolloClient;