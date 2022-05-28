import { GetStaticPaths, GetStaticProps, NextApiRequest, PreviewData } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { RichText } from 'prismic-dom';
import { useEffect } from "react";
import { createClient } from '../../../services/prismic';

import styles from '../post.module.scss';

interface PostPreviewProps{
    post: {
        slug: string;
        title: string;
        content: string;
        updatedAt: string;
    }
}

interface StaticProps extends GetStaticProps {
    previewData: PreviewData;
    params: {
        slug: string;
    };
}

export default function PostPreview({ post }: PostPreviewProps) {
    const {data: session} = useSession()
    const router = useRouter()

    useEffect(() => {
        if(session?.activeSubscription) {
            router.push(`/posts/${post.slug}`)
        }
    }, [session])


    return (
        <>
            <Head>
                <title>{post.title} | Ignews</title>
            </Head>

            <main className={styles.container}>
                <article className={styles.post}>
                    <h1>{post.title}</h1>
                    <time>{post.updatedAt}</time>
                    <div 
                        className={`${styles.postContent} ${styles.previewContent}`}
                        dangerouslySetInnerHTML={{ __html: post.content}} 
                    />

                    <div className={styles.continueReading}>
                        Wanna continue reading?
                        <Link href="/">
                            <a href="">Subscribe now 🤗</a>
                        </Link>
                    </div>
                </article>
            </main>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ previewData, params }: StaticProps) => {

    const { slug } = params
    const client = createClient({ previewData })

    const response = await client.getByUID('posts', slug)
    const PrismicDOM = require('prismic-dom')

    const post = {
        slug: response.uid,
        title: response.data.slices[0].primary.title[0].text,
        content: PrismicDOM.RichText.asHtml(response.data.slices[0].primary.content.splice(0, 3)),//response.data.slices[0].primary.content.find((content: any) => content.type === 'paragraph')?.text ?? '',
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
        })
    }

    return {
        props: { post }, // Will be passed to the page component as props
        revalidate: 60 * 30, // 30 minutes
    }
}