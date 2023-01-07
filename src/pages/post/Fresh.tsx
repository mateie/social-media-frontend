import moment from "moment";

import { useQuery } from "@apollo/client";
import { FetchFreshPosts } from "../../gql/queries/post";
import InfiniteScroll from "react-infinite-scroller";

import { Avatar } from "primereact/avatar";
import { Image } from "primereact/image";

const Fresh = () => {
    const { data: { getFreshPosts: posts } = {}, loading, fetchMore } = useQuery(FetchFreshPosts, {
        variables: {
            offset: 3
        }
    });

    if (loading) return <p>Loading...</p>;

    return (<InfiniteScroll
        pageStart={0}
        loadMore={() => fetchMore({
            variables: {
                offset: posts.length
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                    getFreshPosts: [...prev.getFreshPosts, ...fetchMoreResult.getFreshPosts]
                });

            }
        })}
        hasMore={true}
        loader={<div className="loader" key={0}>Loading ...</div>}
    >
        {posts.map((post: any, id: any) => (
            <div className="post" key={id}>
                <div className="post-header">
                    <div className="post-header-left">
                        <Avatar image={post.poster.avatar} shape="circle" />
                        <div className="post-header-left-info">
                            <h3>{post.poster.username}</h3>
                        </div>
                    </div>
                    <div className="post-header-right">
                        <div className="post-header-right-date">
                            {moment(post.createdAt).fromNow()}
                        </div>
                    </div>
                </div>
                <div className="post-content">
                    <div className="post-media">
                        {post.media.isVideo ? (
                            <div className="video-wrapper">
                                <video
                                    src={post.media.path}
                                    controls
                                />
                            </div>
                        ) : (
                            <Image src={post.media.path} alt="" width="250" />
                        )
                        }
                    </div>
                </div>
            </div>
        ))}
    </InfiniteScroll>);
};

export default Fresh;