import Head from 'next/head';
import Link from 'next/link';
import { createClient } from '../../services/prismic';
import styles from './styles.module.scss';
import { RichText } from 'prismic-dom';

type Post = {
    slug: string;
    title: string;
    excerpt: string;
    updatedAt: string;
}

interface PostsProps {
    posts: Post[]
}

export default function Posts({ posts }: PostsProps){
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    { posts.map(post => (
                        <Link href={`/posts/${post.slug}`}>
                            <a key={post.slug}>
                                <time>{post.updatedAt}</time>
                                <strong>{post.title}</strong>
                                <p>{post.excerpt}</p>
                            </a>
                        </Link>
                    ))}
                </div>
            </main>
        </>
    );
}

export async function getServerSideProps({ previewData }) {
    const client = createClient({ previewData })

    const response = await client.getAllByType('posts', {
        pageSize: 100,
    })
    
    const posts = response?.map((post: any) => {
        return {
            slug: post.uid,
            title: post.data.slices[0].primary.title[0].text,
            excerpt: post.data.slices[0].primary.content.find((content: any) => content.type === 'paragraph')?.text ?? '',
            updated_at: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
            })
        }
    });
    
    return {
        props: { posts }, // Will be passed to the page component as props
    }
}