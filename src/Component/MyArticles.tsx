import React, { useEffect, useRef } from 'react'
import { Article } from './ArticlesElements/Article'
import { Newspaper } from 'lucide-react'
import SectionTitle from './Commum/SectionTitle'
import gsap from 'gsap'

export default function MyArticles() {
    const headRef = useRef(null)
    const articleRef = useRef(null)

    useEffect(() => {
        const head = headRef.current
        const articles = articleRef.current
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: head, // ou pode criar uma `sectionRef` como container
                start: "top 50%", // inicia com 40% visível
                toggleActions: "play none none none",
            },
            defaults: {
                duration: 1,
                ease: "power1.inOut",
            }
        })

        tl.fromTo(head,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0 }
        ).fromTo(articles,
            { opacity: 0, scale: 0.7 },
            { opacity: 1, scale: 1 }
        )
    }, [])

    return (
        <div>
            <div ref={headRef} className='flex items-center space-x-5'>
                <SectionTitle title='Articles' />
                <div className='flex flex-col space-y-2'>
                    <span className='font-montserrat text-4xl text-emerald-800' >Wound Care</span>
                    <span className='font-montserrat text-4xl text-neutral-500'>Healing Insights</span>
                </div>
            </div>
            <div ref={articleRef}>
                <Article.Root >
                    <Article.Card>
                        <Article.Image path='/Images/article.jpg' />
                        <Article.Content>
                            <Article.Title text='Manual vs. Automático: Qual é a Melhor Técnica para Avaliar Úlceras por Pressão?' />
                            <Article.Action icon={Newspaper} text='Read Me' onClick={() => {
                                window.open('/Articles/ar1.pdf', '_blank');
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
        </div>
    )
}
