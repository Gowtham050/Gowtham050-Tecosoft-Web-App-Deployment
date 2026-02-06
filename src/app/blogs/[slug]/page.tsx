import BlogDetailsContent from "./blog-details";

interface Props {
    params: {
        slug: string;
    };
}

export default function BlogDetail({ params }: Props) {

    //   if (!blog) {
    //     return notFound();
    //   }

    return (
        <div className="pt-20">
            <BlogDetailsContent params={params} />
        </div>
    );
}
