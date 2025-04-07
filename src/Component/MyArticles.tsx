import React from 'react'
import { Article } from './ArticlesElements/Article'
import { Newspaper } from 'lucide-react'
import SectionTitle from './Commum/SectionTitle'


export default function MyArticles() {
    return (
        <div>
            <div className='flex items-center space-x-5'>
                <SectionTitle title='Articles' />
                <div className='flex flex-col space-y-2'>
                    <span className='font-montserrat text-4xl text-emerald-800' >Wound Care</span>
                    <span className='font-montserrat text-4xl text-neutral-500'>Healing Insights</span>
                </div>
            </div>
            <Article.Root>
                <Article.Card>
                    <Article.Image path='/Images/article.jpg' />
                    <Article.Content>
                        <Article.Title text='Manual vs. Automático: Qual é a Melhor Técnica para Avaliar Úlceras por Pressão?' />
                        <Article.Action icon={Newspaper} text='Read Me' onClick={() => {
                            const link = document.createElement('a')
                            link.href = 'http://revista.cofen.gov.br/index.php/enfermagem/issue/download/22/2';
                            link.target = '_parent';
                            link.id = 'pdfDownloadLink';
                            link.click();
                        }} />
                    </Article.Content>
                </Article.Card>
                <Article.Card>
                    <Article.Image path='/Images/back.jpg' />
                    <Article.Content>
                        <Article.Title text='Relaxamento e Bem-Estar: Os Benefícios da Massagem Terapêutica' />
                        <Article.Action icon={Newspaper} text='Read Me' onClick={() => {
                            window.open('/Articles/ar1.pdf', '_blank');
                        }} />
                    </Article.Content>
                </Article.Card>
            </Article.Root>
        </div>
    )
}
