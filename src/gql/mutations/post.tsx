import gql from "graphql-tag";

// Post Mutations
export const CreatePost = gql`
    mutation createPost($media: Upload!, $body: String!) {
        createPost(media: $media, body: $body) {
            id body createdAt
            poster {
                username
                avatar
                displayName
            }
            media {
                path
                isVideo
            }
            likes {
                id createdAt
                liker {
                    username
                    avatar
                    displayName
                }
            }
            likeCount
            dislikes {
                id createdAt
                disliker {
                    username
                    avatar
                    displayName
                }
            }
            dislikeCount
            comments {
                id body createdAt
                commenter {
                    username
                    avatar
                    displayName
                }
            }
            commentCount
        }
    }
`;

export const SpotlightPost = gql`
    mutation spotlightPost($postId: String!) {
        spotlightPost(postId: $postId) {
            id body createdAt
            poster {
                username
                avatar
                displayName
            }
            media {
                path
                isVideo
            }
            likes {
                id createdAt
                liker {
                    username
                    avatar
                    displayName
                }
            }
            likeCount
            dislikes {
                id createdAt
                disliker {
                    username
                    avatar
                    displayName
                }
            }
            dislikeCount
            comments {
                id body createdAt
                commenter {
                    username
                    avatar
                    displayName
                }
            }
            commentCount
            isSpotlight
            spotlightAt
        }
    }
`;


export const LikePost = gql`
    mutation likePost($postId: String!) {
        likePost(postId: $postId) {
            id
            likes {
                id
                liker {
                    username
                    avatar
                    displayName
                }
            }
            likeCount
        }
    }
`;

export const DislikePost = gql`
    mutation dislikePost($postId: String!) {
        dislikePost(postId: $postId) {
            id
            dislikes {
                id
                disliker {
                    username
                    avatar
                    displayName
                }
            }
            dislikeCount
        }
    }
`;

export const DeletePost = gql`
    mutation deletePost($postId: String!) {
        deletePost(postId: $postId)
    }
`;