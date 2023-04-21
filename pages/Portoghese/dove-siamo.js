import Head from 'next/head'


import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from '/components/Paragraph'

import { getDatiArticoli } from '/lib/articoli'


const menu = [
    { title: 'quem nós somos', url: '/Portoghese/chi_siamo' },
    { title: 'Home', url: '/' },
    { title: 'Privacidade', url: '/Portoghese/privacy' },
]

export default function Home({ datiArticoli }) {
    return (

        <Layout>
            <Head>
                <link rel="icon" href="/island.png" />
            </Head>

            <LandingHero
                opacity={0.3}
                title="onde estamos"
                description="Você teve um sonho e gostaria de realizá-lo? E para quem você vai ligar? Os Caça-Sonhos!!!"
                buttonUrl=''
                buttonText=""
                imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dominica-isola-caraibi-foto-1619540583.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
                menu={menu}
           />
            <Paragraph sx={{ textAlign: 'center' }}
                maxWidth='lg'
                title="onde estamos"
                subtitle="Todas as características da nossa magnífica ilha"
                >

            </Paragraph>

        </Layout >
    )
}

export async function getStaticProps() {
    const datiArticoli = getDatiArticoli()
    return {
        props: {
            datiArticoli,
        },
    }
}
