import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { RichText } from "prismic-dom";
import { createClient } from '../../services/prismic';

import styles from './post.module.scss';

interface PostProps{
    post: {
        slug: string;
        title: string;
        content: string;
        updatedAt: string;
    }
}

interface ServerSideProps extends GetServerSideProps {
    previewData: PreviewData;
    req: NextApiRequest;
    params: {
        slug: string;
    };
}

export default function Post({ post }: PostProps) {
    return (
        <>
            <Head>
                <title>{post.title | Ignews}</title>
            </Head>

            <main className={styles.container}>
                <article className={styles.post}>
                    <h1>{post.title}</h1>
                    <time>{post.updatedAt}</time>
                    <div 
                        className={styles.postContent}
                        dangerouslySetInnerHTML={{ __html: post.content}} 
                    />
                </article>
            </main>
        </>
    );
}


export const getServerSideProps = async ({ previewData, params, req }: ServerSideProps) => {
    const session = await getSession({ req: req })

    if (!session?.activeSubscription) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const { slug } = params
    const client = createClient({ previewData })

    const response = await client.getByUID('posts', slug)

    const post = {
        slug: response.uid,
        title: response.data.title,
        content: RichText.asHtml(response.data.content),
        updated_at: new Date(response.last_publication_date).toLocaleDateString('pt-PT', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
        })
    }

    return {
        props: { post }, // Will be passed to the page component as props
    }
}