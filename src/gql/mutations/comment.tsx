import gql from "graphql-tag";

// Comment Mutations
export const SubmitComment = gql`
    mutation($postId: String!, $body: String!) {
        createComment(postId: $postId, body: $body) {
            id createdAt body
            commenter {
                username
                avatar
                displayName
            }
        }
    }
`;

export const DeleteComment = gql`
    mutation deleteComment($postId: String!, $commentId: String!) {
        deleteComment(postId: $postId, commentId: $commentId) {
            id
            comments {
                id createdAt body
                commenter {
                    username
                    avatar
                    displayName
                }
                replies {
                    id
                    createdAt
                    body
                    replier {
                        username
                        avatar
                        displayName
                    }
                }
            }
            commentCount
        }
    }
`;

export const LikeComment = gql`
    mutation likeComment($postId: String!, $commentId: String!) {
        likeComment(postId: $postId, commentId: $commentId) {
            id createdAt body
            commenter {
                username
                avatar
                displayName
            }
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

export const DislikeComment = gql`
    mutation dislikeComment($postId: String!, $commentId: String!) {
        dislikeComment(postId: $postId, commentId: $commentId) {
            id createdAt body
            commenter {
                username
                avatar
                displayName
            }
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