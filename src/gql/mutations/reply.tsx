import gql from "graphql-tag";

export const SubmitReply = gql`
    mutation($postId: String!, $commentId: String!, $body: String!) {
        createReply(postId: $postId, commentId: $commentId, body: $body) {
            id createdAt body
            replier {
                username
                avatar
                displayName
            }
            to {
                username
                avatar
                displayName
            }
        }
    }
`;

export const DeleteReply = gql`
    mutation deleteReply($postId: String!, $commentId: String!, $replyId: String!) {
        deleteReply(postId: $postId, commentId: $commentId, replyId: $replyId) {
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
        }
    }
`;

export const LikeReply = gql`
    mutation likeReply($postId: String!, $commentId: String!, $replyId: String!) {
        likeReply(postId: $postId, commentId: $commentId, replyId: $replyId) {
            id createdAt body
            replier {
                username
                avatar
                displayName
            }
            to {
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
        }
    }
`;

export const DislikeReply = gql`
    mutation dislikeReply($postId: String!, $commentId: String!, $replyId: String!) {
        dislikeReply(postId: $postId, commentId: $commentId, replyId: $replyId) {
            id createdAt body
            replier {
                username
                avatar
            }
            dislikes {
                id
                disliker {
                    username
                    avatar
                }
            }
        }
    }
`;