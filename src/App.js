import React from 'react'

import { Download, Features, Button, SectionWrapper } from './components'
import assets from './assets'


const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing Your NFT Collection Today."
        description="Bug, store, collect NFTs, exchange & earn crypto. Join thousands of people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
    </>
  )
}

export default App
