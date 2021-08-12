import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    // uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2',
    uri: 'http://47.88.0.206:8000/subgraphs/name/davekaj/anbswap',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    // uri: 'https://api.thegraph.com/index-node/graphql',
    uri: 'https://api.thegraph.com/index-node/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap',
    // uri: 'http://47.88.0.206:8000/subgraphs/name/davekaj/anbswap',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const stakingClient = new ApolloClient({
  link: new HttpLink({
    // uri: 'https://api.thegraph.com/subgraphs/name/way2rach/talisman',
    uri: 'https://api.thegraph.com/subgraphs/name/way2rach/talisman',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    // uri: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
    uri: 'http://47.88.0.206:8000/subgraphs/name/blocklytics/bsc-blocks',
  }),
  cache: new InMemoryCache(),
})
